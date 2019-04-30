<template>

    <div class="modal-card">
        <header class="modal-card-head is-small">
            <p class="modal-card-title">Difficulty information</p>
            <b-tooltip :label="'This place has ' + selectedDiff.games.length + ' game(s)'" position="is-left">
                <b-icon icon="gamepad-variant"></b-icon>
            </b-tooltip>
        </header>
        <section class="modal-card-body">
            <b-field label="Name">
                <b-input v-model="diffChanged.name"></b-input>
            </b-field>
            <b-field label="Number of photos">
                <b-input type="number" v-model="diffChanged.numberOfPhotos"></b-input>
            </b-field>
            <b-field label="Maximum distance">
                <b-input type="number" v-model="diffChanged.distance"></b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <b-button @click="$parent.close()" size="is-small" type="is-danger">Cancel</b-button>
            <b-button @click="modifDiff" size="is-small" type="is-success">Save changes</b-button>
        </footer>
    </div>

</template>

<script>
    import BButton from "buefy/src/components/button/Button";
    import BField from "buefy/src/components/field/Field";
    import BIcon from "buefy/src/components/icon/Icon";
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    import BInput from "buefy/src/components/input/Input";

    export default {
        name: "difficultiesInfo",
        components: {BInput, BTooltip, BIcon, BField, BButton},
        props: ['selectedDiff'],
        data() {
            return {
                diffChanged: {}
            }
        },
        mounted() {
            this.diffChanged = this.selectedDiff;
        },
        methods: {
            async modifDiff() {
                let diffUpdated = {
                    name: this.diffChanged.name,
                    numberOfPhotos: this.diffChanged.numberOfPhotos,
                    distance: this.diffChanged.distance,
                    id: this.diffChanged.id,
                };
                await this.$store.dispatch('UPDATE_DIFFICULTY', diffUpdated)
                    .then(async response => {
                        if (response.success) {
                            await this.getInfo();
                            this.showSuccess(response.message);
                        } else
                            this.showError(response.message)
                    })
            }
        }
    }
</script>

<style scoped>
</style>