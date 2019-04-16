import {mapState} from "vuex";

export default {
    methods: {
        getDifficulties(queryParams) {
            this.$store.dispatch('GET_DIFFICULTIES', queryParams)
        },
        createDifficulty(newDifficulty) {
            this.$store.dispatch('CREATE_DIFFICULTY', newDifficulty)
        },
        updateDifficulty(dataDifficulty) {
            this.$store.dispatch('UPDATE_DIFFICULTY', dataDifficulty)
        },
        deleteDifficulty(idDifficulty) {
            this.$tore.dispatch('DELETE_DIFFICULTY', idDifficulty)
        }
    },
    computed: {
        ...mapState({
            difficulties: state => state.difficulties.difficulties,
        })
    }

}