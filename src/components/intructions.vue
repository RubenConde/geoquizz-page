<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Welcome!</p>
      <a class="card-header-icon">
        <b-icon icon="format-list-bulleted"></b-icon>
      </a>
    </header>
    <div class="card-content">
      <h1 class="title is-5">What is GeoQuizz?</h1>
      <h1 class="subtitle is-6">
        A fun game where you have to position a picture on the map of your city
        without making mistakes and faster than the others!
      </h1>
      <hr />
      <h1 class="title is-5">Rules:</h1>
      <div class="content">
        <ul>
          <li>Find the location of the photo on the map</li>
          <li>Click on the position</li>
          <li>Zoom in if you need to</li>
          <li>The closer to the correct position, the more points!</li>
          <li>The faster you are, the more points!</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BSelect from "buefy/src/components/select/Select";
import BField from "buefy/src/components/field/Field";
import BTable from "buefy/src/components/table/Table";
import BTableColumn from "buefy/src/components/table/TableColumn";
import BIcon from "buefy/src/components/icon/Icon";

export default {
  name: "instructions",
  components: { BIcon, BTableColumn, BTable, BField, BSelect },
  data() {
    return {
      showCard: true,
      hasMobileCards: false
    };
  }
};
</script>

<style scoped></style>
