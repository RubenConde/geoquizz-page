import {mapState} from "vuex";

export default {
    methods: {
        getSeries(queryParams) {
            this.$store.dispatch('GET_SERIES', queryParams)
        },
        createSeries(newSeries) {
            this.$store.dispatch('CREATE_SERIES', newSeries)
        },
        updateSeries(dataSeries) {
            this.$store.dispatch('UPDATE_SERIES', dataSeries)
        },
        deleteSeries(idSeries) {
            this.$tore.dispatch('DELETE_SERIES', idSeries)
        }
    },
    computed: {
        ...mapState({
            series: state => state.series.series,
        })
    }
}