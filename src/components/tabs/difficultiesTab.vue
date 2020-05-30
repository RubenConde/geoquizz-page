<template>
   <div class="columns is-multiline">
      <div class="column is-half">
         <difficulties-creation></difficulties-creation>
      </div>
      <div class="column is-full">
         <difficulties-table></difficulties-table>
      </div>
   </div>
</template>

<script>
import DifficultiesTable from './difficultiesTabItems/difficultiesTable';
import DifficultiesCreation from './difficultiesTabItems/difficultiesCreation';
export default {
   name: 'difficultiesTab',
   components: { DifficultiesCreation, DifficultiesTable },
};
</script>

<style scoped></style>
