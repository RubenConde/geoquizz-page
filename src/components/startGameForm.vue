<template>
    <div class="card is-rounded">
        <div class="card-content">
            <div class="content">
                <form @submit.prevent="createGame">
                    <b-field label="START PLAYING">
                        <b-input icon="account" placeholder="Your name" v-model="newGame.player"></b-input>
                    </b-field>
                    <b-field>
                        <b-select expanded icon="signal-cellular-3" placeholder="Difficulty"
                                  v-model="newGame.idDifficulty">
                            <option :key="option.difficulty.id" :value="option.difficulty.id"
                                    v-for="option in difficulties">
                                {{ option.difficulty.name }}
                            </option>
                        </b-select>
                    </b-field>
                    <b-field>
                        <b-select expanded icon="map-marker" placeholder="Place" v-model="newGame.idSeries">
                            <option :key="option.series.id" :value="option.series.id" v-for="option in series">
                                {{ option.series.city }}
                            </option>
                        </b-select>
                    </b-field>
                    <b-button native-type="submit" type="is-myOrange">PLAY!</b-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import BField from "buefy/src/components/field/Field";
    import BSelect from "buefy/src/components/select/Select";
    import BButton from "buefy/src/components/button/Button";

    export default {
        name: "startGameForm",
        components: {BButton, BSelect, BField},
        data() {
            return {
                newGame: {
                    player: null,
                    idSeries: null,
                    idDifficulty: null
                }
            }
        },
        methods: {
            createGame() {
                this.$store.dispatch('CREATE_GAME', this.newGame).then(resp => {
                    let self = this;
                    if (resp.success) {
                        this.showSuccess(resp.message);
                        this.animateCSS('.hero-body', 'zoomOut', function () {
                            self.$router.push({name: 'about'})
                        });
                    } else {
                        this.showError(resp.message);
                    }
                })
            },
        },
    }
</script>

<style scoped>

</style>