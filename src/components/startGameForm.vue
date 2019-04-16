<template>
    <div class="card is-rounded">
        <div class="card-content">
            <div class="content">
                <div class="columns is-multiline">
                    <div class="column is-full">
                        <b-field label="START PLAYING">
                            <b-input icon="account" placeholder="Your name" rounded v-model="newGame.player"></b-input>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field>
                            <b-select expanded icon="signal-cellular-3" placeholder="Difficulty"
                                      v-model="newGame.idDifficulty">
                                <option :key="option.difficulty.id" :value="option.difficulty.id"
                                        v-for="option in difficulties">
                                    {{ option.difficulty.name }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field>
                            <b-select expanded icon="map-marker" placeholder="Place" v-model="newGame.idSeries">
                                <option :key="option.series.id" :value="option.series.id" v-for="option in series">
                                    {{ option.series.city }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column is-full">
                        <!--                        <b-button @click="animateCSS('.hero-body','zoomOut')" type="is-myOrange">PLAY!</b-button>-->
                        <b-button @click="createGame(newGame)" type="is-myOrange">PLAY!</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BField from "buefy/src/components/field/Field";

    export default {
        name: "startGameForm",
        components: {BField},
        data() {
            return {
                newGame: {
                    player: '',
                    idSeries: null,
                    idDifficulty: null
                }
            }
        },
        methods: {
            animateCSS(element, animationName, callback) {
                const node = document.querySelector(element);
                node.classList.add('animated', animationName);
            },
        },
    }
</script>

<style scoped>

</style>