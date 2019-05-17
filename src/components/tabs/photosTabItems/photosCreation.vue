<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Create a photo</p>
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
        <div class="column is-one-third">
          <b-field label="Description">
            <b-input type="textarea" v-model="newPhoto.description"></b-input>
          </b-field>
          <b-field>
            <b-select
              expanded
              icon="map-marker"
              placeholder="Series"
              size="is-small"
              v-model="newPhoto.idSeries"
            >
              <option
                :key="option.series.id"
                :value="option.series.id"
                v-for="option in series"
              >
                {{ option.series.city }}
              </option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-one-third">
          <a @click="deleteNewPhoto">
            <b-icon
              class="is-pulled-right"
              icon="delete"
              v-if="newPhoto.url !== null && newPhoto.url !== undefined"
            ></b-icon>
          </a>
          <b-field class="has-text-centered">
            <b-upload
              :loading="imageLoading"
              accept="image/png, image/jpeg"
              class="my"
              drag-drop
              type="is-info"
              v-model="filePhoto"
            >
              <section class="section my">
                <div
                  class="content has-text-centered"
                  v-if="newPhoto.url === null || newPhoto.url === undefined"
                >
                  <p>
                    <b-icon icon="upload" size="is-large"></b-icon>
                  </p>
                  <p>Drop the image here or click to upload</p>
                </div>
                <div class="content has-text-centered" v-else>
                  <figure class="image">
                    <img :src="newPhoto.url" alt="newImage" />
                  </figure>
                </div>
              </section>
            </b-upload>
          </b-field>
        </div>
        <div class="column is-one-third">
          <gmap-autocomplete
            :value="mapSearch"
            @place_changed="setPlace"
            class="input is-small"
          >
          </gmap-autocomplete>
          <gmap-map
            :center="{ lat: newPhoto.latitude, lng: newPhoto.longitude }"
            :options="mapOptions"
            :zoom="10"
            class="map"
          >
            <GmapMarker
              :draggable="true"
              :position="{ lat: newPhoto.latitude, lng: newPhoto.longitude }"
              @dragend="changeMarkerPosition"
            />
          </gmap-map>
        </div>
        <b-button @click="createNewPhoto" size="is-small" type="is-success"
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
import BUpload from "buefy/src/components/upload/Upload";
import BSelect from "buefy/src/components/select/Select";

export default {
  name: "photosCreation",
  components: { BSelect, BUpload, BTooltip, BIcon, BField, BButton },
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
      filePhoto: null,
      imageLoading: false,
      newPhoto: {
        latitude: 48.692054,
        longitude: -1.553621000000021,
        description: "",
        url: null,
        idSeries: null
      },
      uploadInfo: {},
      mapSearch: ""
    };
  },
  watch: {
    async filePhoto(newFile, oldFile) {
      if (newFile !== null) {
        this.imageLoading = true;
        let upload = await this.$store.dispatch("UPLOAD_PHOTO", newFile);
        this.imageLoading = false;
        this.uploadInfo = upload;
        this.newPhoto.url = upload.secure_url;
      }
    }
  },
  methods: {
    setPlace(place) {
      let placePos = place.geometry.location.toJSON();
      this.newPhoto.latitude = placePos.lat;
      this.newPhoto.longitude = placePos.lng;
    },
    changeMarkerPosition(e) {
      let newPos = e.latLng.toJSON();
      this.newPhoto.latitude = newPos.lat;
      this.newPhoto.longitude = newPos.lng;
    },
    async deleteNewPhoto() {
      this.newPhoto.url = null;
    },
    async createNewPhoto() {
      let newPhotoDefault = {
        latitude: 48.692054,
        longitude: -1.553621000000021,
        description: "",
        url: null,
        idSeries: null
      };
      await this.$store
        .dispatch("CREATE_PHOTO", this.newPhoto)
        .then(async response => {
          if (response.success) {
            this.newPhoto = newPhotoDefault;
            await this.getInfo();
            this.filePhoto = null;
            this.mapSearch = "";
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
  height: 180px;
}

.my {
  max-height: 200px;
  padding: 0.09% 0;
}

img {
  width: auto;
  max-height: 170px;
}
</style>
