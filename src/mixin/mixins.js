import {mapState} from "vuex";

export default {
    // mixins: [series, photos, difficulties, users, games],
    methods: {
        animateCSS(element, animationName, callback) {
            const node = document.querySelector(element);
            node.classList.add('animated', animationName);

            function handleAnimationEnd() {
                node.classList.remove('animated', animationName);
                node.removeEventListener('animationend', handleAnimationEnd);

                if (typeof callback === 'function') callback()
            }

            node.addEventListener('animationend', handleAnimationEnd)
        },
        showError(message) {
            this.$toast.open({
                message: message,
                type: 'is-danger',
                position: 'is-bottom'
            })
        },
        showSuccess(message) {
            this.$toast.open({
                message: message,
                type: 'is-success',
                position: 'is-bottom'
            })
        },
        getInfo(){
            this.$store.commit('SET_TOKEN', this.token);
            this.$store.dispatch('GET_SERIES', {fields: '*', limit: 1000});
            this.$store.dispatch('GET_DIFFICULTIES', {fields: '*', limit: 1000});
            this.$store.dispatch('GET_GAMES', {fields: '*', limit: 1000});
            this.$store.dispatch('GET_PHOTOS', {fields: '*', limit: 1000});
        }
    },
    computed: {
        ...mapState({
            difficulties: state => state.difficulties.difficulties,
            actualGame: state => state.games.actualGame,
            games: state => state.games.games,
            photos: state => state.photos.photos,
            series: state => state.series.series,
            user: state => state.users.user,
            token: state => state.users.token,
        })
    }
}