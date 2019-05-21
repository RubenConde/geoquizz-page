<template>
  <nav
    aria-label="main navigation"
    class="navbar is-primary is-fixed-top"
    role="navigation"
  >
    <div class="navbar-brand ">
      <router-link class="navbar-item" to="/">
        <h1 class="logoText">GéoQuizz</h1>
      </router-link>

      <a
        :class="{ 'is-active': showNav }"
        @click="showNav = !showNav"
        aria-expanded="false"
        aria-label="menu"
        class="navbar-burger burger"
        role="button"
      >
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
            <a
              class="navbar-item"
              @click="isCardModalActive = !isCardModalActive"
            >
              <strong>Top 10!</strong>
            </a>
            <a class="navbar-item" @click="isInstructions = !isInstructions">
              Instructions
            </a>
            <hr class="navbar-divider" />
            <a
              href="https://rubenconde.github.io/geoquizzAPI/"
              class="navbar-item"
            >
              API
            </a>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isCardModalActive" :width="500">
      <score-table></score-table>
    </b-modal>
    <b-modal :active.sync="isInstructions" :width="500">
      <instructions></instructions>
    </b-modal>
  </nav>
</template>

<script>
import ScoreTable from "./scoreTable";
import BModal from "buefy/src/components/modal/Modal";
import Instructions from "./intructions";
export default {
  name: "navBar",
  components: { Instructions, BModal, ScoreTable },
  data() {
    return {
      showNav: false,
      isCardModalActive: false,
      isInstructions: false
    };
  },
  mounted() {
    if (!localStorage.getItem("instructions")) {
      this.isInstructions = true;
      localStorage.setItem("instructions", true);
    }
  }
};
</script>

<style scoped></style>
