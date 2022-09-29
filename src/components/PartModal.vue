<template>
    <div class="modal">
        <div class="forecast-group">
            <ForecastItem v-for="index in 4" :key="index"></ForecastItem>
        </div>
        <SearchForm @form-submited="onFormSubmit($event)"></SearchForm>
    </div>
</template>

<script>
import ForecastItem from './ForecastItem.vue'
import SearchForm from './SearchForm.vue'

export default {
    name: "PartModal",
    data() {
        return {
            searchResult: []
        }
    },
    methods: {
        onFormSubmit: function(data) {
            this.$emit('change-data', data)
        }
    },
    components: { ForecastItem, SearchForm }
}
</script>

<style lang="sass">
@import "@/assets/sass/_variables.sass"
.modal
    // position: absolute
    // bottom: 0
    padding: 1.5em
    width: 100%
    height: 100%
    background: #fff
    border-radius: 2em

.forecast-group
    display: flex
    justify-content: space-between

.searchResults-group
    opacity: 0
    transform: translateY(20px)
    position: absolute
    bottom: 6.9em
    width: calc( 100% - 3em )
    background: #fff
    padding: .5em .55em
    border-radius: 15px
    box-shadow: $shadow
    z-index: 0
    transition: .3s
    &.active
        z-index: 10 
        transform: translateY(0)
        opacity: 1

.search-item
    width: 100%
    margin: auto
    background: #fff
    padding: .7em 2em
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px
    border-radius: 11px
    margin: .5em 0
    // background: lighten($c_dark, 50)
    // background: $c_bg
    transition: .3s

    &:hover
        background: lighten($c_bg, 20)

</style>