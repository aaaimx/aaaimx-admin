<template>
  <div>
    <div class="error-page-icon">
      <b-icon icon="power-plug" custom-size="default" />
    </div>
    <div class="error-page-caption">
      <h1>404 Page Not Found</h1>
    </div>
    <div class="error-page-action">
      <div class="buttons is-centered">
        <button type="button" @click="emitGoBack" class="button is-black">
          Go Back
        </button>
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorContent',
  props: {
    icon: {
      type: String,
      default: 'power-plug'
    },
    title: {
      type: String,
      default: 'Error'
    }
  },
  methods: {
    emitGoBack () {
      this.$emit('go-back')
    }
  }
}
</script>
