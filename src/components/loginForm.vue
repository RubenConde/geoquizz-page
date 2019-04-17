<template>
    <div class="card is-rounded has-text-centered" id="loginForm">
        <div class="card-content">
            <div class="content">
                <router-link to="/">
                    <figure class="image is-128x128">
                        <img alt="Logo" src="../assets/img/world.png">
                    </figure>
                </router-link>
                <form @submit.prevent="login">
                    <b-field>
                        <b-input icon="email" placeholder="Email" type="email" v-model="userLogin.email"></b-input>
                    </b-field>
                    <b-field type="is-info">
                        <b-input icon="textbox-password" password-reveal placeholder="Password" type="password"
                                 v-model="userLogin.password"></b-input>
                    </b-field>
                    <b-button native-type="submit" type="is-info">Login</b-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import BField from "buefy/src/components/field/Field";
    import BButton from "buefy/src/components/button/Button";

    export default {
        name: "LoginForm",
        components: {BButton, BField},
        data() {
            return {
                userLogin: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('LOGIN', this.userLogin)
                    .then(resp => {
                        if (resp.success) {
                            this.$store.dispatch('GET_USER');
                            this.showSuccess(resp.message);
                            this.$router.push({name: 'admin'})
                        } else {
                            this.showError(resp.message)
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    .image {
        margin: auto;
    }
</style>