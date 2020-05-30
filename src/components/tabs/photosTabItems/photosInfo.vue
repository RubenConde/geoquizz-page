<template>
   <div class="modal-card">
      <header class="modal-card-head is-small">
         <p class="modal-card-title">Photo information</p>
      </header>
      <section class="modal-card-body">
         <b-field label="Image">
            <figure class="image">
               <img :alt="photoChanged.description" :src="photoChanged.url" />
            </figure>
         </b-field>
         <b-field label="Description">
            <b-input type="textarea" v-model="photoChanged.description"></b-input>
         </b-field>
         <b-field label="Series">
            <b-select expanded v-model="photoChanged.idSeries">
               <option :key="aSeries.series.id" :value="aSeries.series.id" v-for="aSeries in series">
                  {{ aSeries.series.city }}
               </option>
            </b-select>
         </b-field>
         <b-field>
            <gmap-autocomplete @place_changed="setPlace" class="input is-small"> </gmap-autocomplete>
         </b-field>
         <b-field>
            <gmap-map
               :center="{ lat: photoChanged.latitude, lng: photoChanged.longitude }"
               :options="mapOptions"
               :zoom="15"
               class="map"
            >
               <GmapMarker
                  :draggable="true"
                  :position="{
                     lat: photoChanged.latitude,
                     lng: photoChanged.longitude,
                  }"
                  @dragend="changeMarkerPosition"
               />
            </gmap-map>
         </b-field>
         <b-field>
            <b-button
               @click="confirmCustomDelete"
               class="is-pulled-right"
               icon-right="delete"
               type="is-danger"
            >
               Delete
            </b-button>
         </b-field>
      </section>
      <footer class="modal-card-foot">
         <b-button @click="$parent.close()" size="is-small" type="is-danger">Cancel</b-button>
         <b-button @click="modifPhoto" size="is-small" type="is-success">Save changes</b-button>
      </footer>
   </div>
</template>

<script>
import BButton from 'buefy/src/components/button/Button';
import BField from 'buefy/src/components/field/Field';
import BIcon from 'buefy/src/components/icon/Icon';
import BTooltip from 'buefy/src/components/tooltip/Tooltip';
import BInput from 'buefy/src/components/input/Input';
import BSelect from 'buefy/src/components/select/Select';
import { DialogProgrammatic as Dialog } from 'buefy';

export default {
   name: 'photosInfo',
   components: { BSelect, BInput, BTooltip, BIcon, BField, BButton },
   props: ['selectedPhoto'],
   data() {
      return {
         mapOptions: {
            controlSize: 20,
            draggable: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
         },
         photoChanged: {},
         selectedSeries: null,
      };
   },
   watch: {
      selectedSeries(newSeries) {
         this.photoChanged.idSeries = newSeries.id;
      },
   },
   mounted() {
      this.photoChanged = this.selectedPhoto;
   },
   methods: {
      setPlace(place) {
         let placePos = place.geometry.location.toJSON();
         this.photoChanged.latitude = placePos.lat;
         this.photoChanged.longitude = placePos.lng;
      },
      changeMarkerPosition(e) {
         let newPos = e.latLng.toJSON();
         this.photoChanged.latitude = newPos.lat;
         this.photoChanged.longitude = newPos.lng;
      },
      async modifPhoto() {
         let photoUpdated = {
            id: this.photoChanged.id,
            description: this.photoChanged.description,
            latitude: this.photoChanged.latitude,
            longitude: this.photoChanged.longitude,
            idSeries: this.photoChanged.idSeries,
         };
         await this.$store.dispatch('UPDATE_PHOTO', photoUpdated).then(async (response) => {
            if (response.success) {
               await this.getInfo();
               this.showSuccess(response.message);
            } else this.showError(response.message);
         });
      },
      confirmCustomDelete() {
         Dialog.confirm({
            title: 'Deleting photo',
            message: 'Are you sure you want to <b>delete</b> this photo? This action cannot be undone.',
            confirmText: 'Delete photo',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => this.delPhoto(),
         });
      },
      async delPhoto() {
         await this.$store.dispatch('DELETE_PHOTO', this.selectedPhoto.id).then(async () => {
            await this.getInfo();
            this.showSuccess('Photo deleted successfully');
            this.$parent.close();
         });
      },
   },
};
</script>

<style scoped>
.map {
   width: 100%;
   height: 300px;
}
</style>
