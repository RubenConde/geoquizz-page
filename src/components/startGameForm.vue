<template>
   <div class="card is-rounded">
      <div class="card-content">
         <div class="content">
            <form @submit.prevent="createGame">
               <b-field label="START PLAYING">
                  <b-input required icon="account" placeholder="Your name" v-model="newGame.player"></b-input>
               </b-field>
               <b-field>
                  <b-select
                     expanded
                     required
                     icon="signal-cellular-3"
                     placeholder="Difficulty"
                     v-model="newGame.idDifficulty"
                  >
                     <option
                        :key="option.difficulty.id"
                        :value="option.difficulty.id"
                        v-for="option in difficulties"
                     >
                        {{ option.difficulty.name }}
                     </option>
                  </b-select>
               </b-field>
               <b-field>
                  <b-select
                     expanded
                     required
                     icon="map-marker"
                     placeholder="Place"
                     v-model="newGame.idSeries"
                  >
                     <option :key="option.series.id" :value="option.series.id" v-for="option in series">
                        {{ option.series.city }}
                     </option>
                  </b-select>
               </b-field>
               <b-button :disabled="isCreating" :loading="isCreating" native-type="submit" type="is-myOrange"
                  >PLAY!</b-button
               >
            </form>
         </div>
      </div>
   </div>
</template>

<script>
import BField from 'buefy/src/components/field/Field';
import BSelect from 'buefy/src/components/select/Select';
import BButton from 'buefy/src/components/button/Button';
import BIcon from 'buefy/src/components/icon/Icon';
import BInput from 'buefy/src/components/input/Input';

export default {
   name: 'startGameForm',
   components: { BInput, BIcon, BButton, BSelect, BField },
   data() {
      return {
         newGame: {
            player: null,
            idSeries: null,
            idDifficulty: null,
         },
         isCreating: false,
      };
   },
   methods: {
      buildActualGame(newGame) {
         let photos = this.PHOTOS_BY_SERIES(newGame.idSeries);
         let series = this.SERIES_BY_ID(newGame.idSeries);
         let difficulty = this.DIFFICULTY_BY_ID(newGame.idDifficulty);
         return {
            ...newGame,
            steps: difficulty[0].difficulty.numberOfPhotos,
            distance: difficulty[0].difficulty.distance,
            stepsDone: 0,
            photos: photos,
            initialPosition: {
               lat: series[0].series.latitude,
               lng: series[0].series.longitude,
               zoom: series[0].series.zoom,
            },
         };
      },
      async createGame() {
         this.isCreating = true;
         this.$store.dispatch('CREATE_GAME', this.newGame).then(async (resp) => {
            let self = this;
            if (resp.success === true) {
               let actualGame = await this.buildActualGame(resp.data);
               this.$store.commit('SET_ACTUAL_GAME', actualGame);
               this.animateCSS('.hero-body', 'bounceOut', '', function() {
                  self.isCreating = false;
                  self.$router.push({ name: 'game' });
               });
            } else {
               this.isCreating = false;
               this.showError(resp.message);
            }
         });
      },
   },
};
</script>

<style scoped></style>
