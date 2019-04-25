<template>
    <div class="columns is-multiline">
        <div class="column is-full">
            <photos-creation></photos-creation>
        </div>
    </div>
</template>

<script>

    import PhotosCreation from "./photosTabItems/photosCreation";

    export default {
        name: "photosTab",
        components: {PhotosCreation},
    }
</script>

<style scoped>

</style>