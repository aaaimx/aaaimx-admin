<template>
  <form @submit.prevent="submit">
    <b-field horizontal label="Title" message="Event name">
      <b-input
        type="textarea"
        placeholder="e.g. SINABIA 2019"
        name="title"
        v-model="form.title"
        required
      />
    </b-field>
    <b-field horizontal label="Place" message="Event location">
      <b-select v-model="form.place" placeholder="Select location" expanded>
        <option v-for="type in places" :key="type.value" :value="type.value">{{
          type.label
        }}</option>
      </b-select>
    </b-field>
    <b-field horizontal label="Type" message="Event type">
      <b-select v-model="form.type" placeholder="Select a type" expanded>
        <option v-for="type in types" :key="type.value" :value="type.value">{{
          type.label
        }}</option>
      </b-select>
    </b-field>

    <b-field horizontal label="Division" message="Division event">
      <b-select v-model="form.division" placeholder="Select division" expanded>
        <option
          v-for="item in $store.state.divisions"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></option>
      </b-select>
    </b-field>
    <b-field
      label="Quorum"
      message="Max participants"
      horizontal
      v-if="!form.open_to_public"
    >
      <b-input
        name="max"
        min="0"
        max="100"
        type="number"
        v-model="form.corum"
      />
    </b-field>
    <b-field horizontal>
      <b-checkbox type="is-link" v-model="form.open_to_public" class="is-thin">
        Open to the public
      </b-checkbox>
    </b-field>
    <b-field horizontal label="Date start" message="Event start">
      <b-datetimepicker
        v-model="date_start"
        placeholder="Select a datetime..."
        icon="calendar-today"
        :locale="locale"
        :timepicker="{ hourFormat }"
      >
      </b-datetimepicker>
    </b-field>
    <b-field horizontal label="Date end" message="Event end">
      <b-datetimepicker
        v-model="date_end"
        placeholder="Select a datetime..."
        icon="calendar-today"
        :locale="locale"
        :timepicker="{ hourFormat }"
      >
      </b-datetimepicker>
    </b-field>

    <b-field label="Hours" message="Total hours (CC)" horizontal>
      <b-input
        name="max"
        min="0"
        max="100"
        type="number"
        v-model="form.hours"
      />
    </b-field>
    <b-field horizontal>
      <b-checkbox type="is-link" v-model="form.is_draft" class="is-thin">
        Draft Event
      </b-checkbox>
    </b-field>
    <b-field label="Description">
      <b-input :rows="10" v-model="form.description" type="textarea"></b-input>
    </b-field>
    <b-field v-if="event">
      <b-button type="is-primary" :loading="isLoading" native-type="submit"
        >Save changes</b-button
      >
    </b-field>
  </form>
</template>

<script>
import { create, update } from '@/api/events'
import constants from '@/data_sources/constants.json'

const defaultForm = {
  title: '',
  corum: 0,
  hours: 0,
  is_draft: true,
  open_to_public: false,
  date_start: null,
  date_end: null,
  description: '',
  type: '',
  place: '',
  flyer: '',
  division: null
}
export default {
  name: 'EventForm',
  props: ['event'],
  data () {
    return {
      form: {},
      types: constants.event_types,
      places: constants.places,
      isLoading: false,
      hourFormat: undefined, // Browser locale
      locale: undefined, // Browser locale
      date_start: null,
      date_end: null
    }
  },
  created () {
    if (this.event) {
      this.date_start = new Date(this.event.date_start)
      this.date_end = new Date(this.event.date_end)
    }
    this.form = this.event || defaultForm
  },
  methods: {
    async submit () {
      this.isLoading = true
      try {
        this.form.date_start = this.date_start
        this.form.date_end = this.date_end
        if (this.form.open_to_public) this.form.corum = 0
        if (this.event) {
          await update(this.event.id, this.form)
          this.$buefy.snackbar.open({
            message: 'Event updated',
            queue: false
          })
        } else {
          const data = await create(this.form)
          this.$buefy.snackbar.open({
            message: 'Event created',
            queue: false
          })
          this.form = defaultForm
          this.$router.push('/events/' + data.id)
        }
      } catch (error) {
        console.log(error)
        this.$buefy.toast.open({
          message: 'Something went wrong :(... Try again!',
          type: 'is-danger',
          queue: false
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
