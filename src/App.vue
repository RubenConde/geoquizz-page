<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view/>
    </div>
</template>
<script>
    // @ is an alias to /src
    import NavBar from '@/components/navBar.vue'

    export default {
        name: 'app',
        components: {
            NavBar
        },
        mounted() {
            this.getSeries();
            this.getDifficulties();
        }
    }
</script>
<style lang="scss">
    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    // Set your colors
    $primary: #8C0E03;
    $primary-invert: findColorInvert($primary);
    $info: #86A6A6;
    $info-invert: findColorInvert($info);
    $success: #618C03;
    $success-invert: findColorInvert($success);
    $warning: #F2B705;
    $warning-invert: findColorInvert($warning);
    $danger: #D92B04;
    $danger-invert: findColorInvert($danger);
    $myOrange: #D97904;
    $myOrange-invert: findColorInvert($myOrange);

    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
            "primary": ($primary, $primary-invert),
            "info": ($info, $info-invert),
            "success": ($success, $success-invert),
            "warning": ($warning, $warning-invert),
            "danger": ($danger, $danger-invert),
            "myOrange": ($myOrange, $myOrange-invert)
    );

    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;

    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";

    .logoText {
        font-family: 'Pacifico', cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }

    #home, #about {
        margin: 0;
        padding: 0;
        background: url('./assets/img/homewallpaper.jpg') repeat 0 0;
        -webkit-animation: 10s linear 0s normal none infinite animate;
        -moz-animation: 10s linear 0s normal none infinite animate;
        -ms-animation: 10s linear 0s normal none infinite animate;
        -o-animation: 10s linear 0s normal none infinite animate;
        animation: 10s linear 0s normal none infinite animate;

    }

    @-webkit-keyframes animate {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 500px 0;
        }
    }

    @-moz-keyframes animate {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 500px 0;
        }
    }

    @-ms-keyframes animate {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 500px 0;
        }
    }

    @-o-keyframes animate {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 500px 0;
        }
    }

    @keyframes animate {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 500px 0;
        }
    }
</style>
