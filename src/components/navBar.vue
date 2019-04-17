<template>
    <nav aria-label="main navigation" class="navbar is-primary is-fixed-top" role="navigation">
        <div class="navbar-brand ">
            <router-link class="navbar-item" to="/">
                <h1 class="logoText">GéoQuizz</h1>
            </router-link>

            <a :class="{ 'is-active': showNav }" @click="showNav = !showNav" aria-expanded="false" aria-label="menu"
               class="navbar-burger burger" role="button">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div :class="{ 'is-active': showNav }" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable ">
                    <a class="navbar-link is-hidden-touch"> More </a>
                    <div class="navbar-dropdown is-right">
                        <router-link class="navbar-item" to="/about">About</router-link>
                        <a class="navbar-item"> <strong>Top 10!</strong> </a>
                        <a class="navbar-item"> Instructions </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item"> API </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {
                showNav: false
            }
        }
    }
</script>

<style scoped>

</style>