<template>
  <div id="game">
    <nav-bar />
    <b-loading
      :active.sync="isPaused"
      :can-cancel="true"
      @close="isPaused = !isPaused"
      class="myLoading"
    >
      <figure @click="isPaused = !isPaused" class="image">
        <a>
          <img alt="Pause" src="../assets/img/pause.svg" />
        </a>
      </figure>
    </b-loading>
    <b-loading
      :active.sync="isSaving"
      @close="isSaving = !isSaving"
      class="myLoading"
    >
      <figure @click="isPaused = !isPaused" class="image">
        <a>
          <img alt="Pause" src="../assets/img/saving.svg" />
        </a>
      </figure>
    </b-loading>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-mobile is-multiline is-vcentered">
            <div class="column is-full"></div>
            <div class="column is-full">
              <div class="columns is-mobile is-vcentered">
                <div class="column">
                  <b-taglist :attached="!isMobile">
                    <b-tag
                      class="animated zoomIn has-text-weight-bold"
                      size="is-large"
                      type="is-primary"
                    >
                      <p id="name">
                        {{ lsGame.player }}
                      </p>
                    </b-tag>
                    <b-tag
                      class="animated zoomIn has-text-weight-light"
                      size="is-large"
                      type="is-warning"
                    >
                      <p id="points">{{ lsGame.score }} pts.</p>
                    </b-tag>
                  </b-taglist>
                </div>
                <div class="column ">
                  <b-button
                    @click="isPaused = !isPaused"
                    class="is-pulled-right animated zoomIn"
                    icon-pack="fas"
                    icon-right="pause"
                    id="pause"
                    type="is-info"
                    v-if="showPause"
                  >
                    Pause game
                  </b-button>
                  <b-button
                    @click="goNext"
                    class="is-pulled-right next"
                    icon-pack="fas"
                    icon-right="angle-double-right"
                    id="next"
                    type="is-success"
                    v-show="showNext"
                  >
                    Next picture
                  </b-button>
                </div>
              </div>
            </div>
            <div class="column is-full">
              <progress
                :max="lsGame.steps"
                :title="lsGame.stepsDone + '/' + lsGame.steps + ' pictures'"
                :value="lsGame.stepsDone"
                class="progress is-primary animated zoomInUp"
              ></progress>
            </div>
            <div class="column is-full">
              <div class="columns">
                <div class="column is-half animated bounceInDown">
                  <gmap-map
                    :center="{
                      lat: lsGame.initialPosition.lat,
                      lng: lsGame.initialPosition.lng
                    }"
                    :options="mapOptions"
                    :zoom="lsGame.initialPosition.zoom"
                    @click="getResult"
                    class="map"
                  >
                    <GmapMarker
                      :draggable="false"
                      :icon="{ url: marker.iconUrl }"
                      :key="index"
                      :position="{
                        lat: marker.latitude,
                        lng: marker.longitude
                      }"
                      v-for="(marker, index) in markers"
                    />
                  </gmap-map>
                </div>
                <div
                  class="column is-half animated bounceInUp has-text-centered-mobile game"
                >
                  <figure>
                    <img
                      :alt="gamePhoto.photo.description"
                      :src="gamePhoto.photo.url"
                    />
                  </figure>
                  <h1 class="subtitle is-7" style="color:white">
                    Hint: {{ gamePhoto.photo.description }}
                  </h1>
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
import NavBar from "../components/navBar";
import BIcon from "buefy/src/components/icon/Icon";
import BButton from "buefy/src/components/button/Button";
import BLoading from "buefy/src/components/loading/Loading";
import BTaglist from "buefy/src/components/tag/Taglist";
import BTag from "buefy/src/components/tag/Tag";

export default {
  name: "Game",
  components: { BTag, BTaglist, BLoading, BButton, BIcon, NavBar },
  data: () => ({
    lsGame: JSON.parse(localStorage.getItem("actualGame")),
    imgIndex: 0,
    gamePhoto: {},
    markers: [],
    mapOptions: {
      controlSize: 20,
      clickableIcons: false,
      draggable: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }]
        }
      ]
    },
    isPaused: false,
    isSaving: false,
    showPause: true,
    showNext: false
  }),
  created() {
    if (localStorage.getItem("actualGame") !== null) {
      if (this.lsGame.photos.length !== 0) {
        this.imgIndex = Math.floor(Math.random() * this.lsGame.photos.length);
        this.gamePhoto = this.lsGame.photos[this.imgIndex];
      }
    } else {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    goNext() {
      if (this.lsGame.stepsDone < this.lsGame.steps) {
        this.markers = [];
        const self = this;
        this.animateCSS("#next", "zoomOut", "faster", function() {
          self.showNext = false;
        });
        const efOut = this.isMobile ? "fadeOutLeft" : "fadeOutDown";
        this.animateCSS(".game", efOut, "", function() {
          self.imgIndex = Math.floor(Math.random() * self.lsGame.photos.length);
          self.gamePhoto = self.lsGame.photos[self.imgIndex];
          self.showPause = true;
          const efIn = self.isMobile ? "fadeInRight" : "fadeInDown";
          self.animateCSS(".game", efIn, "", function() {});
        });
      } else {
        this.$dialog.confirm({
          title: "Game finished!!",
          message:
            "Congratulations!<br/> You finished the game with <b>" +
            this.lsGame.score +
            " points.</b> <br/> Do you want to be part of the score board?",
          confirmText: "Yes",
          cancelText: "No",
          type: "is-success",
          hasIcon: true,
          onCancel: async () => {
            const self = this;
            this.isSaving = true;
            await this.$store.dispatch("UPDATE_GAME", {
              id: this.lsGame.id,
              score: this.lsGame.score,
              status: 2
            });
            this.isSaving = false;
            localStorage.removeItem("actualGame");
            this.animateCSS(".hero-body", "bounceOut", "", function() {
              self.$router.push({ name: "home" });
            });
          },
          onConfirm: async () => {
            const self = this;
            this.isSaving = true;
            await this.$store.dispatch("UPDATE_GAME", {
              id: this.lsGame.id,
              score: this.lsGame.score,
              status: 0
            });
            this.isSaving = false;
            localStorage.removeItem("actualGame");
            this.animateCSS(".hero-body", "bounceOut", "", function() {
              self.$router.push({ name: "home" });
            });
          }
        });
      }
    },
    computeScore() {
      let distance = this.getDistance(this.markers[0], this.markers[1]);
      this.scoreAct = 0;

      if (distance < this.lsGame.distance) {
        // si la distance est inférieure à la distance du level
        this.scoreAct += 5;
      } else if (distance < 2 * this.lsGame.distance) {
        // si la distance est inférieure  2 * la distance du level
        this.scoreAct += 3;
      } else if (distance < 3 * this.lsGame.distance) {
        // si la distance est inférieure  3 * la distance du level
        this.scoreAct += 1;
      }

      this.lsGame.score += this.scoreAct;
    },
    getDistance(p1, p2) {
      const rad = function(x) {
        return (x * Math.PI) / 180;
      };
      const R = 6378137; // Earth’s mean radius in meter
      const dLat = rad(p2.latitude - p1.latitude);
      const dLong = rad(p2.longitude - p1.longitude);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.latitude)) *
          Math.cos(rad(p2.latitude)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // returns the distance in meter
    },
    async getResult(cursorPos) {
      if (this.markers.length < 2) {
        const self = this;
        this.animateCSS("#points", "rubberBand", "", function() {});
        this.animateCSS("#next", "zoomIn", "faster", function() {});
        this.animateCSS("#pause", "zoomOut", "faster", function() {
          self.showPause = false;
          self.showNext = true;
        });
        this.markers.push({
          iconUrl:
            "https://res.cloudinary.com/dxskfxwwo/image/upload/v1558022641/icons/maps-and-flags-red_wwamyi.png",
          latitude: cursorPos.latLng.lat(),
          longitude: cursorPos.latLng.lng()
        });
        this.markers.push({
          iconUrl:
            "https://res.cloudinary.com/dxskfxwwo/image/upload/v1558022499/icons/maps-and-flags-yellow_dxthrd.png",
          latitude: this.gamePhoto.photo.latitude,
          longitude: this.gamePhoto.photo.longitude
        });
        this.computeScore();
        this.lsGame.photos.splice(this.imgIndex, 1);
        this.lsGame.stepsDone++;
        this.$store.commit("SET_ACTUAL_GAME", this.lsGame);
        this.lsGame = this.actualGame;
      }
    }
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 350px;
}

.myLoading {
  background-color: rgba(255, 255, 255, 0.8);
}

progress {
  max-height: 5px;
}

@media only screen and (min-width: 1024px) {
  img {
    min-height: 350px;
  }
}

img {
  max-height: 350px;
}

.game {
  min-height: 396px;
}

#name {
  overflow: hidden;
  max-width: 100px;
}
</style>
