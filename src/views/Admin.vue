<template>
    <div id="admin">
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
                this.$store.dispatch('GET_USER')
                    .then(resp => {
                        console.log(resp)
                    })
            }
        }
    }
</script>

<style scoped>

</style>