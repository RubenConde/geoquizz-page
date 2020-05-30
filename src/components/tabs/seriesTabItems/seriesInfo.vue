<template>
   <div class="modal-card">
      <header class="modal-card-head is-small">
         <p class="modal-card-title">Series information</p>
         <b-tooltip
            :label="'This place has ' + selectedSeries.photos.length + ' photo(s)'"
            position="is-left"
         >
            <b-icon icon="image-multiple"></b-icon>
         </b-tooltip>
         <b-tooltip :label="'This place has ' + selectedSeries.games.length + ' game(s)'" position="is-left">
            <b-icon icon="gamepad-variant"></b-icon>
         </b-tooltip>
      </header>
      <section class="modal-card-body">
         <b-field>
            <gmap-autocomplete :value="seriesChanged.city" @place_changed="setPlace" class="input is-small">
            </gmap-autocomplete>
         </b-field>
         <b-field>
            <gmap-map
               :center="{
                  lat: seriesChanged.latitude,
                  lng: seriesChanged.longitude,
               }"
               :options="mapOptions"
               :zoom="seriesChanged.zoom"
               @zoom_changed="changeZoomLevel"
               class="map"
            >
               <GmapMarker
                  :draggable="true"
                  :position="{
                     lat: seriesChanged.latitude,
                     lng: seriesChanged.longitude,
                  }"
                  @dragend="changeMarkerPosition"
               /> </gmap-map
         ></b-field>
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
         <b-button @click="modifSeries" size="is-small" type="is-success">Save changes</b-button>
      </footer>
   </div>
</template>

<script>
import BButton from 'buefy/src/components/button/Button';
import BField from 'buefy/src/components/field/Field';
import BIcon from 'buefy/src/components/icon/Icon';
import BTooltip from 'buefy/src/components/tooltip/Tooltip';
import { DialogProgrammatic as Dialog } from 'buefy';

export default {
   name: 'seriesInfo',
   components: { BTooltip, BIcon, BField, BButton },
   props: ['selectedSeries'],
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
         seriesChanged: {},
      };
   },
   mounted() {
      this.seriesChanged = this.selectedSeries;
   },
   methods: {
      setPlace(place) {
         let placePos = place.geometry.location.toJSON();
         this.seriesChanged.city = place.formatted_address;
         this.seriesChanged.latitude = placePos.lat;
         this.seriesChanged.longitude = placePos.lng;
      },
      changeMarkerPosition(e) {
         let newPos = e.latLng.toJSON();
         this.seriesChanged.latitude = newPos.lat;
         this.seriesChanged.longitude = newPos.lng;
      },
      changeZoomLevel(e) {
         this.seriesChanged.zoom = e;
      },
      confirmCustomDelete() {
         Dialog.confirm({
            title: 'Deleting series',
            message: 'Are you sure you want to <b>delete</b> this series? This action cannot be undone.',
            confirmText: 'Delete series',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => this.delSeries(),
         });
      },
      async delSeries() {
         await this.$store.dispatch('DELETE_SERIES', this.selectedSeries.id).then(async () => {
            await this.getInfo();
            this.showSuccess('Series deleted successfully');
            this.$parent.close();
         });
      },
      async modifSeries() {
         let seriesUpdated = {
            id: this.seriesChanged.id,
            city: this.seriesChanged.city,
            latitude: this.seriesChanged.latitude,
            longitude: this.seriesChanged.longitude,
            zoom: this.seriesChanged.zoom,
         };
         await this.$store.dispatch('UPDATE_SERIES', seriesUpdated).then(async (response) => {
            if (response.success) {
               await this.getInfo();
               this.showSuccess(response.message);
            } else this.showError(response.message);
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
