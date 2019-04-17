<template>
    <div id="admin">
        <nav-bar-admin></nav-bar-admin>
        <section class="myTabs">
            <b-tabs expanded v-model="activeTab" class="is-primaryAdmin">
                <b-tab-item icon="gamepad-variant" label="Games">
                </b-tab-item>

                <b-tab-item icon="map-marker" label="Series">
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

    export default {
        name: "Admin",
        components: {BTabItem, BTabs, navBarAdmin},
        data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        }
    }
</script>

<style scoped lang="scss">

    .myTabs{
        margin-top: 50px;
    }
</style>