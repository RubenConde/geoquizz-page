<template>
   <div class="columns is-multiline">
      <div class="column is-half">
         <series-creation></series-creation>
      </div>
      <div class="column is-full">
         <series-table></series-table>
      </div>
   </div>
</template>

<script>
import SeriesTable from './seriesTabItems/seriesTable';
import SeriesCreation from './seriesTabItems/seriesCreation';

export default {
   name: 'seriesTab',
   components: { SeriesCreation, SeriesTable },
};
</script>

<style scoped></style>
