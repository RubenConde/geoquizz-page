<template>
  <div class="columns is-multiline">
    <div class="column is-full">
      <photos-creation></photos-creation>
    </div>
    <div class="column is-full">
      <photos-table></photos-table>
    </div>
  </div>
</template>

<script>
import PhotosCreation from "./photosTabItems/photosCreation";
import PhotosTable from "./photosTabItems/photosTable";

export default {
  name: "photosTab",
  components: { PhotosTable, PhotosCreation }
};
</script>

<style scoped></style>
