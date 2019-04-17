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
        }
    },
    computed:{
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