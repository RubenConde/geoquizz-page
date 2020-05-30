<template>
   <nav aria-label="main navigation" class="navbar is-primary is-fixed-top" role="navigation">
      <div class="navbar-brand">
         <router-link class="navbar-item" to="/">
            <h1 class="logoText">GéoQuizz</h1>
            <small>&nbsp;admin</small>
         </router-link>
         <div class="navbar-item toTheRight">
            <b-button @click="logout" icon-right="logout" title="Logout" type="is-dangerAdmin"></b-button>
         </div>
      </div>
   </nav>
</template>

<script>
import BButton from 'buefy/src/components/button/Button';

export default {
   name: 'navBarAdmin',
   components: { BButton },
   data() {
      return {
         showNav: false,
      };
   },
   methods: {
      logout() {
         this.$store.dispatch('LOGOUT').then(async (resp) => {
            if (resp.success) {
               this.showSuccess(resp.message);
               await this.$store.dispatch('DELETE_TOKEN');
               this.$router.push('/login');
            } else this.showError(resp.message());
         });
      },
   },
};
</script>

<style scoped>
.toTheRight {
   margin-left: auto;
}

.navbar-brand {
   width: 100%;
}
</style>
