import {mapState} from "vuex";

export default {
    methods: {
        getUser() {
            this.$store.dispatch('GET_USER');
        },
        register(infoUser) {
            this.$store.dispatch('REGISTER', infoUser)
        },
        login(infoUser) {
            this.$store.dispatch('LOGIN', infoUser)
        },
        logout() {
            this.$store.dispatch('LOGOUT')
        }
    },
    computed: {
        ...mapState({
            user: state => state.users.user,
            token: state => state.users.token,
        })
    }
}