<template>
    <div id="admin">
        {{user}}
        <b-button @click="getUserLogged"></b-button>
    </div>
</template>

<script>
    import BButton from "buefy/src/components/button/Button";

    export default {
        name: "Admin",
        components: {BButton},
        methods: {
            getUserLogged() {
                this.$store.dispatch('LOGOUT')
                    .then(resp => {
                        if(resp.success) this.$router.push({name:'login'})
                    })
            }
        }
    }
</script>

<style scoped>

</style>