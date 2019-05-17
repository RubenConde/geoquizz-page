import { mapGetters, mapState } from "vuex";

export default {
  // mixins: [series, photos, difficulties, users, games],
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      isMobile: false
    };
  },
  methods: {
    animateCSS(element, animationName, speed, callback) {
      const node = document.querySelector(element);
      speed !== ""
        ? node.classList.add("animated", animationName, speed)
        : node.classList.add("animated", animationName);

      function handleAnimationEnd() {
        speed !== ""
          ? node.classList.remove("animated", animationName, speed)
          : node.classList.remove("animated", animationName);
        node.removeEventListener("animationend", handleAnimationEnd);
        if (typeof callback === "function") callback();
      }

      node.addEventListener("animationend", handleAnimationEnd);
    },
    showError(message) {
      this.$toast.open({
        message: message,
        type: "is-danger",
        position: "is-bottom"
      });
    },
    showSuccess(message) {
      this.$toast.open({
        message: message,
        type: "is-success",
        position: "is-bottom"
      });
    },
    getInfo() {
      this.$store.commit("SET_TOKEN", this.token);
      this.$store.dispatch("GET_SERIES", { fields: "*", limit: 1000000 });
      this.$store.dispatch("GET_DIFFICULTIES", { fields: "*", limit: 1000000 });
      this.$store.dispatch("GET_BESTS", {
        fields: "*",
        limit: 10,
        sort: "score",
        order: "desc",
        filter: "status:=:0"
      });
      this.$store.dispatch("GET_GAMES", {
        fields: "*",
        limit: 1000000,
        sort: "created_at",
        order: "desc"
      });
      this.$store.dispatch("GET_PHOTOS", { fields: "*", limit: 1000000 });
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      this.isMobile = this.window.width < 768;
    }
  },
  computed: {
    ...mapState({
      difficulties: state => state.difficulties.difficulties,
      difficulty: state => state.difficulties.difficulty,
      actualGame: state => state.games.actualGame,
      games: state => state.games.games,
      bests: state => state.games.bests,
      game: state => state.games.game,
      photos: state => state.photos.photos,
      photo: state => state.photos.photo,
      series: state => state.series.series,
      aSeries: state => state.series.aSeries,
      user: state => state.users.user,
      token: state => state.users.token
    }),
    ...mapGetters(["PHOTOS_BY_SERIES", "SERIES_BY_ID", "DIFFICULTY_BY_ID"])
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
};
