<template>
  <div>
    <aside-updates-item
      v-for="item in items"
      :key="item.id"
      :status="item.status"
      :icon="item.icon"
      :ago="item.ago"
    >
      <p>{{ item.text }}</p>
    </aside-updates-item>
  </div>
</template>

<script>
import axios from 'axios'
import AsideUpdatesItem from './AsideUpdatesItem'

export default {
  name: 'AsideUpdates',
  components: { AsideUpdatesItem },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios
        .get('/data-sources/updates.json')
        .then(r => {
          this.items = r.data.data
          this.$emit('data-updated')

          this.$store.commit('basic', {
            key: 'hasUpdates',
            value: true
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
