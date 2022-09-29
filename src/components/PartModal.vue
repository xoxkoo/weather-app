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


</style>