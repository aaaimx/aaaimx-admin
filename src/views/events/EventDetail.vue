<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/certificates/new">
        <b-button icon-left="pencil-plus" type="is-success">
          New certificate
        </b-button>
      </router-link>
    </hero-bar>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>
    <section class="section is-main-section">
      <!-- <notification class="is-info">
        <div>
          <span><b>Edit event.</b> Data will be updated</span>
        </div>
      </notification> -->
      <tiles>
        <card-component
          title="Event details"
          icon="calendar"
          class="tile is-child"
          has-button-slot
        >
          <action-button
            slot="button"
            icon="calendar-edit"
            :label="isEdit ? 'Detail' : 'Edit'"
            @button-click="isEdit = !isEdit"
          />
          <EventForm v-if="event.id && isEdit" :event="event" />
          <EventPreview v-else-if="event.title" :event="event" />
        </card-component>
      </tiles>
      <ParticipantsTable v-if="event.id" :event="event" />
      <CertTable v-if="event.id" :event="event.id" />
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import ParticipantsTable from '@/views/participants/Table'
import CertTable from '@/views/certificates/Table'
import EventPreview from './EventPreview'
import EventForm from './EventForm'
import { fetch } from '@/api/events'
export default {
  name: 'EventDetail',
  components: {
    Tiles,
    HeroBar,
    TitleBar,
    EventPreview,
    EventForm,
    ParticipantsTable,
    CertTable
  },
  props: {
    id: {
      default: null
    }
  },
  data () {
    return {
      isEdit: false,
      isLoading: false,
      isModalActive: false,
      event: this.getClearFormObject(),
      createdReadable: null
    }
  },
  computed: {
    titleStack () {
      let lastCrumb = ''

      if (this.event) {
        lastCrumb = '#' + this.event.id
      } else {
        lastCrumb = 'New event'
      }
      return ['Admin', 'Events', lastCrumb]
    },
    heroTitle () {
      if (this.id) {
        return this.event.title
      } else {
        return 'Create event'
      }
    },
    heroRouterLinkTo () {
      if (this.id) {
        return { name: 'event.new' }
      } else {
        return '/'
      }
    },
    heroRouterLinkLabel () {
      if (this.id) {
        return 'New event'
      } else {
        return 'Dashboard'
      }
    },
    formCardTitle () {
      if (this.id) {
        return 'Edit event'
      } else {
        return 'New event'
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getClearFormObject () {
      return {}
    },
    getData () {
      if (this.id) {
        this.isLoading = true
        fetch(this.id)
          .then(item => {
            this.event = item
            this.isLoading = false
          })
          .catch(e => {
            this.isLoading = false
            this.$buefy.toast.open({
              message: `Error: ${e}`,
              type: 'is-danger',
              queue: false
            })
          })
      }
    }
  }
}
</script>
