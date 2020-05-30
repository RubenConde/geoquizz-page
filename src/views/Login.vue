<template>
   <section class="hero is-info is-fullheight" id="login">
      <div class="hero-body">
         <div class="container">
            <div class="columns">
               <div class="column is-one-third is-offset-one-third is-full-mobile">
                  <login-form></login-form>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import loginForm from '../components/loginForm';

export default {
   name: 'Login',
   components: {
      loginForm,
   },
};
</script>

<style scoped></style>
