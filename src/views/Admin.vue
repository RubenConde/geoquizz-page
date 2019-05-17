<template>
  <div id="admin">
    <nav-bar-admin></nav-bar-admin>
    <section class="myTabs">
      <b-tabs expanded v-model="activeTab" class="is-primaryAdmin">
        <b-tab-item icon="gamepad-variant" label="Games">
          <games-tab></games-tab>
        </b-tab-item>

        <b-tab-item icon="map-marker" label="Series">
          <series-tab></series-tab>
        </b-tab-item>

        <b-tab-item icon="signal-cellular-3" label="Difficulties">
          <difficulties-tab></difficulties-tab>
        </b-tab-item>

        <b-tab-item icon="image-multiple" label="Photos">
          <photos-tab></photos-tab>
        </b-tab-item>

        <!--                <b-tab-item icon="account-multiple" label="Users">-->
        <!--                </b-tab-item>-->
      </b-tabs>
    </section>
  </div>
</template>

<script>
import BTabs from "buefy/src/components/tabs/Tabs";
import BTabItem from "buefy/src/components/tabs/TabItem";
import navBarAdmin from "../components/navBarAdmin";
import GamesTab from "../components/tabs/gamesTab";
import SeriesTab from "../components/tabs/seriesTab";
import DifficultiesTab from "../components/tabs/difficultiesTab";
import PhotosTab from "../components/tabs/photosTab";

export default {
  name: "Admin",
  components: {
    PhotosTab,
    DifficultiesTab,
    SeriesTab,
    GamesTab,
    BTabItem,
    BTabs,
    navBarAdmin
  },
  data() {
    return {
      activeTab: 0,
      showBooks: false
    };
  },
  mounted() {
    this.getInfo();
  }
};
</script>

<style scoped lang="scss">
.myTabs {
  margin-top: 60px;
}
</style>
