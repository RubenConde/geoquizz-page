<template>
   <div id="app">
      <router-view />
   </div>
</template>
<script>
export default {
   name: 'app',
   mounted() {
      this.getInfo();
   },
};
</script>
<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #8c0e03;
$primary-invert: findColorInvert($primary);
$info: #86a6a6;
$info-invert: findColorInvert($info);
$success: #618c03;
$success-invert: findColorInvert($success);
$warning: #f2b705;
$warning-invert: findColorInvert($warning);
$danger: #d92b04;
$danger-invert: findColorInvert($danger);
$myOrange: #d97904;
$myOrange-invert: findColorInvert($myOrange);

$primaryAdmin: #3c8dbc;
$primaryAdmin-invert: findColorInvert($primaryAdmin);
$infoAdmin: #00c0ef;
$infoAdmin-invert: findColorInvert($infoAdmin);
$successAdmin: #00a65a;
$successAdmin-invert: findColorInvert($successAdmin);
$warningAdmin: #f39c12;
$warningAdmin-invert: findColorInvert($warningAdmin);
$dangerAdmin: #d94a38;
$dangerAdmin-invert: findColorInvert($dangerAdmin);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
   'primary': (
      $primary,
      $primary-invert,
   ),
   'info': (
      $info,
      $info-invert,
   ),
   'success': (
      $success,
      $success-invert,
   ),
   'warning': (
      $warning,
      $warning-invert,
   ),
   'danger': (
      $danger,
      $danger-invert,
   ),
   'myOrange': (
      $myOrange,
      $myOrange-invert,
   ),
   'primaryAdmin': (
      $primaryAdmin,
      $primaryAdmin-invert,
   ),
   'infoAdmin': (
      $infoAdmin,
      $infoAdmin-invert,
   ),
   'successAdmin': (
      $successAdmin,
      $successAdmin-invert,
   ),
   'warningAdmin': (
      $warningAdmin,
      $warningAdmin-invert,
   ),
   'dangerAdmin': (
      $dangerAdmin,
      $dangerAdmin-invert,
   ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

.logoText {
   font-family: 'Pacifico', cursive;
   font-size: 1.5rem;
   font-weight: lighter;
}

#home,
#about,
#game {
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
