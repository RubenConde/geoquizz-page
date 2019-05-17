<template>
  <div id="home">
    <nav-bar></nav-bar>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-multiline is-vcentered">
            <div
              class="column is-4 is-offset-1 is-8-mobile is-offset-2-mobile animated bounceInDown"
            >
              <figure class="image">
                <img alt="Logo" src="../assets/img/world.png" />
              </figure>
            </div>
            <div class="column is-offset-1 animated bounceInUp">
              <h1 class="title" style="color: #ffffff;">
                DO YOU KNOW WHERE YOU ARE?!
              </h1>
              <h2 class="subtitle" style="color: #ffffff;">
                Write your name, choose the place and difficulty and PLAY!
              </h2>
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <start-game-form></start-game-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navBar from "../components/navBar";
import startGameForm from "../components/startGameForm";

export default {
  name: "home",
  components: {
    startGameForm,
    navBar
  },
  mounted() {
    if (localStorage.getItem("actualGame")) {
      this.$dialog.confirm({
        title: "Game started!!",
        message:
          "You have already a game started, would you like to continue it?",
        confirmText: "Continue",
        type: "is-info",
        hasIcon: true,
        onCancel: () => {
          localStorage.removeItem("actualGame");
        },
        onConfirm: () => {
          const self = this;
          this.animateCSS(".hero-body", "zoomOut", "", function() {
            self.$router.push({ name: "game" });
          });
        }
      });
    }
  }
};
</script>

<style scoped></style>
