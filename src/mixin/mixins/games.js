import {mapState} from "vuex";

export default {
    methods: {
        getGames(queryParams) {
            this.$store.dispatch('GET_GAMES', queryParams)
        },
        createGame(newGame) {
            this.$store.dispatch('CREATE_GAME', newGame)
                .then(response=>{console.log(response)})
        },
        modifGame(dataGame) {
            this.$store.dispatch('MODIF_GAME', dataGame)
        },
        updateGame() {
            let dataGame = {
                id: this.actualGame.id,
                score: this.actualGame.score,
                status: this.actualGame.status
            };
            this.$store.dispatch('UPDATE_GAME', dataGame)
        },
        deleteGame(idGame) {
            this.$tore.dispatch('DELETE_GAME', idGame)
        }
    },
    computed: {
        ...mapState({
            actualGame: state => state.games.actualGame,
            games: state => state.games.games
        })
    }

}