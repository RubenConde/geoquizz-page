<template>
    <div id="about">
        <nav-bar></nav-bar>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered animated zoomIn fast">
                    <div class="columns is-vcentered">
                        <div class="column is-one-third is-offset-one-third is-full-mobile">
                            <figure class="image is-128x128">
                                <img src="../assets/img/world.png">
                            </figure>
                            <p class="is-text">
                                Made with
                                <b-icon icon="heart" size="is-small" type="is-danger"></b-icon>
                                by
                            </p>
                            <p class="is-text">
                                <a href="https://rubencondemag.info">
                                    <strong>Rubén Conde</strong>
                                </a>
                            </p>
                            <p class="is-text">
                                using
                                <a href="https://buefy.org">
                                    <strong>Buefy </strong>
                                </a>
                                &
                                <a href="https://vuejs.org">
                                    <strong> Vue.js</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-foot">
                <div class="is-pulled-right">
                    <router-link class="card-footer-item is-size-7" to="/login">admin login</router-link>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import NavBar from "../components/navBar";

    export default {
        components: {NavBar}
    }
</script>
<style scoped>
    .image {
        margin: auto;
    }

    .is-text {
        color: white;
    }
</style>
