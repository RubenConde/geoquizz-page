<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'app',
        mounted() {
            this.getInfo();
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

    $primaryAdmin: #3C8DBC;
    $primaryAdmin-invert: findColorInvert($primaryAdmin);
    $infoAdmin: #00C0EF;
    $infoAdmin-invert: findColorInvert($infoAdmin);
    $successAdmin: #00A65A;
    $successAdmin-invert: findColorInvert($successAdmin);
    $warningAdmin: #F39C12;
    $warningAdmin-invert: findColorInvert($warningAdmin);
    $dangerAdmin: #D94A38;
    $dangerAdmin-invert: findColorInvert($dangerAdmin);

    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
            "primary": ($primary, $primary-invert),
            "info": ($info, $info-invert),
            "success": ($success, $success-invert),
            "warning": ($warning, $warning-invert),
            "danger": ($danger, $danger-invert),
            "myOrange": ($myOrange, $myOrange-invert),
            "primaryAdmin": ($primaryAdmin, $primaryAdmin-invert),
            "infoAdmin": ($infoAdmin, $infoAdmin-invert),
            "successAdmin": ($successAdmin, $successAdmin-invert),
            "warningAdmin": ($warningAdmin, $warningAdmin-invert),
            "dangerAdmin": ($dangerAdmin, $dangerAdmin-invert),
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
