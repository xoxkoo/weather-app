<template>
  <AppHeader></AppHeader>
  <div class="container">
    <img class="illustration" src="@/assets/img/illustration2.svg" alt="illustration">
    <h1>Discover the weather in your city.</h1>
    <p>Get to know current weather and forecast</p>
    <router-link to="/weather">
      <button class="btn btn-lg">Get Started</button>
    </router-link>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
    components: { AppHeader }
}
</script>

<style lang="sass">
  @import '@/assets/sass/_variables.sass'
  .illustration 
    margin-top: 1em
    width: 80%

  .container
    padding: 1em 2em
    text-align: center

    & .btn
      margin-top: 2em

    & p
      color: transparentize($c_dark, .2)
      letter-spacing: 0.5px

    & h1
      margin-top: 2em
      font-size: 1.8rem
    
</style>