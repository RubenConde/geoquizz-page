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
                </b-tab-item>

                <b-tab-item icon="image-multiple" label="Photos">
                </b-tab-item>

                <b-tab-item icon="account-multiple" label="Users">
                </b-tab-item>
            </b-tabs>
        </section>
    </div>
</template>

<script>
    import BTabs from "buefy/src/components/tabs/Tabs";
    import BTabItem from "buefy/src/components/tabs/TabItem";
    import navBarAdmin from '../components/navBarAdmin'
    import GamesTab from "../components/gamesTab";
    import SeriesTab from "../components/seriesTab";

    export default {
        name: "Admin",
        components: {SeriesTab, GamesTab, BTabItem, BTabs, navBarAdmin},
        data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        },
        mounted() {
            this.getInfo();
        }
    }
</script>

<style scoped lang="scss">

    .myTabs{
        margin-top: 50px;
    }
</style>