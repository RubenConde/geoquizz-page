<template>
   <div class="card">
      <header class="card-header">
         <p class="card-header-title">Create a difficulty</p>
         <a @click="showCard = !showCard" aria-label="more options" class="card-header-icon">
            <b-icon :icon="showCard ? 'chevron-up' : 'chevron-down'"></b-icon>
         </a>
      </header>
      <section class="card-content" v-if="showCard">
         <b-field label="Name">
            <b-input v-model="newDiff.name"></b-input>
         </b-field>
         <b-field label="Number of photos">
            <b-input type="number" v-model="newDiff.numberOfPhotos"></b-input>
         </b-field>
         <b-field label="Maximum distance (meters)">
            <b-input type="number" v-model="newDiff.distance"></b-input>
         </b-field>
         <b-button @click="createNewDiff" size="is-small" type="is-success">Create</b-button>
      </section>
   </div>
</template>

<script>
import BButton from 'buefy/src/components/button/Button';
import BField from 'buefy/src/components/field/Field';
import BIcon from 'buefy/src/components/icon/Icon';
import BTooltip from 'buefy/src/components/tooltip/Tooltip';

export default {
   name: 'difficultiesCreation',
   components: { BTooltip, BIcon, BField, BButton },
   data() {
      return {
         showCard: true,
         newDiff: {},
      };
   },
   methods: {
      async createNewDiff() {
         await this.$store.dispatch('CREATE_DIFFICULTY', this.newDiff).then(async (response) => {
            if (response.success) {
               await this.getInfo();
               this.newDiff = {};
               this.showSuccess(response.message);
            } else this.showError(response.message);
         });
      },
   },
};
</script>

<style scoped></style>
