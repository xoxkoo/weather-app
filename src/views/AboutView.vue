<template>
  <AppHeader></AppHeader>
  <div class="container about">
    <p>Api from: <a class="link" href="https://openweathermap.org">OpenWeatherMap</a></p>
    <p><img src="../assets/img/location-2969395.png" alt="location" class="icon"> icon from: <a href="https://iconscout.com/3d/location-3543264" class="link">iconscout</a></p>
    <p><img src="../assets/img/location-pin.png" alt="location" class="icon"> icon from: <a href="https://iconscout.com/3d/location-3543018" class="link">iconscout</a></p>
  </div>
  <footer>
    <p>designed by me. &copy; <a href="adur.glitch.me" class="link">xoxo</a></p>
  </footer>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
    components: { AppHeader }
}
</script>

<style lang="sass">
@import '@/assets/sass/variables'
.container.about
  text-align: left

  & .icon
    margin-right: .5em
    width: 27px

  & p
    font-size: 1.1rem
    color: $c_dark
    display: flex
    align-items: center

  & .link
    padding-left: .5em

footer
  font-size: 1.1rem
  text-align: center
  position: absolute
  bottom: 1em
  left: 50%
  transform: translateX(-50%)

</style>