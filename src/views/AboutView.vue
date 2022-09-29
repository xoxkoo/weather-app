<template>
  <AppHeader></AppHeader>
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

footer
  font-size: 1.1rem
  text-align: center
  position: absolute
  bottom: 1em
  left: 50%
  transform: translateX(-50%)

</style>