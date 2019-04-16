import {mapState} from "vuex";

export default {
    methods: {
        getPhotos(queryParams) {
            this.$store.dispatch('GET_PHOTOS', queryParams)
        },
        createPhoto(newPhoto) {
            this.$store.dispatch('CREATE_PHOTO', newPhoto)
        },
        updatePhoto(dataPhoto) {
            this.$store.dispatch('UPDATE_PHOTO', dataPhoto)
        },
        deletePhoto(idPhoto) {
            this.$tore.dispatch('DELETE_PHOTO', idPhoto)
        }
    },
    computed: {
        ...mapState({
            photos: state => state.photos.photos
        })
    }
}