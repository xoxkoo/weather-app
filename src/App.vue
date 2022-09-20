<template>
<AppHeader></AppHeader>
<div class="main-content">
    <img src="./assets/img/27.png" alt="" class="current-weather-img">
    <h1 class="weather-info">{{capitalize(weatherInfo)}}</h1>
    <InfoGroup></InfoGroup>
</div>
<PartModal></PartModal> 

</template>

<script>
import AppHeader from "@/components/Header.vue"
import PartModal from "@/components/PartModal.vue"
import InfoGroup from "./components/InfoGroup.vue"

export default {
  name: 'App',
  data() {
    return {
      weatherInfo: 'sunny'
    }
  },
  methods: {
    capitalize: (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    } 
  },
  components: {
    AppHeader,
    PartModal,
    InfoGroup
}
}
</script>

<style lang="sass">
  @import '@/assets/sass/base.sass'
  .current-weather-img
    width: auto
    height: 17vh
    margin-left: 50%
    transform: translateX(-50%)

  .weather-info
    font-size: 2.5rem
    text-align: center
    font-weight: 600
</style>
