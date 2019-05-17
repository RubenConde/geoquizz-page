<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Create a series</p>
      <a
        @click="showCard = !showCard"
        aria-label="more options"
        class="card-header-icon"
      >
        <b-icon :icon="showCard ? 'chevron-up' : 'chevron-down'"></b-icon>
      </a>
    </header>
    <section class="card-content" v-if="showCard">
      <div class="columns is-multiline">
        <div class="column is-full">
          <gmap-autocomplete
            :value="newSeries.city"
            @place_changed="setPlace"
            class="input is-small"
          >
          </gmap-autocomplete>
        </div>
        <div class="column is-full">
          <gmap-map
            :center="{ lat: newSeries.latitude, lng: newSeries.longitude }"
            :options="mapOptions"
            :zoom="newSeries.zoom"
            @zoom_changed="changeZoomLevel"
            class="map"
          >
            <GmapMarker
              :draggable="true"
              :position="{ lat: newSeries.latitude, lng: newSeries.longitude }"
              @dragend="changeMarkerPosition"
            />
          </gmap-map>
        </div>
        <b-button @click="createNewSeries" size="is-small" type="is-success"
          >Create</b-button
        >
      </div>
    </section>
  </div>
</template>

<script>
import BButton from "buefy/src/components/button/Button";
import BField from "buefy/src/components/field/Field";
import BIcon from "buefy/src/components/icon/Icon";
import BTooltip from "buefy/src/components/tooltip/Tooltip";

export default {
  name: "seriesCreation",
  components: { BTooltip, BIcon, BField, BButton },
  data() {
    return {
      showCard: true,
      mapOptions: {
        controlSize: 20,
        draggable: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      },
      newSeries: {
        latitude: 48.692054,
        longitude: -1.553621000000021,
        zoom: 15
      }
    };
  },
  methods: {
    setPlace(place) {
      let placePos = place.geometry.location.toJSON();
      this.newSeries.city = place.formatted_address;
      this.newSeries.latitude = placePos.lat;
      this.newSeries.longitude = placePos.lng;
    },
    changeMarkerPosition(e) {
      let newPos = e.latLng.toJSON();
      this.newSeries.latitude = newPos.lat;
      this.newSeries.longitude = newPos.lng;
    },
    changeZoomLevel(e) {
      this.newSeries.zoom = e;
    },
    async createNewSeries() {
      let newSeriesDefault = {
        latitude: 48.692054,
        longitude: -1.553621000000021,
        zoom: 15
      };
      await this.$store
        .dispatch("CREATE_SERIES", this.newSeries)
        .then(async response => {
          if (response.success) {
            await this.getInfo();
            this.newSeries = newSeriesDefault;
            this.showSuccess(response.message);
          } else this.showError(response.message);
        });
    }
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
}
</style>
