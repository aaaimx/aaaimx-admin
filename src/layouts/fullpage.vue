<template>
  <section
    class="section hero is-fullheight is-error-section login-container"
    style="background: url('https://www.aaaimx.org/img/sections-background/hero.jpg')
    no-repeat 50% fixed;
  background-size: cover;"
  >
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <div class="logo"></div>
    </div>
  </section>
</template>

<script>
import fullpageMixin from '@/mixins/fullpage'
export default {
  name: 'FullPage',
  mixins: [fullpageMixin]
}
</script>
