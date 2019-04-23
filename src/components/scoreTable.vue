<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title"> Top 10 </p>
            <a @click="showCard = !showCard" aria-label="more options" class="card-header-icon">
                <b-icon :icon="showCard ? 'chevron-up' : 'chevron-down'"></b-icon>
            </a>
        </header>
        <div class="card-content" v-if="showCard">
            <b-table :data="games" :mobile-cards="hasMobileCards" :paginated="isPaginated" :per-page="10"
                     :show-detail-icon="false" aria-current-label="Current page" aria-next-label="Next page"
                     aria-page-label="Page" aria-previous-label="Previous page" default-sort="game.score"
                     default-sort-direction="desc" detailed hoverable narrowed sortable striped>
                <template slot-scope="props">
                    <b-table-column field="game.player" label="Player" sortable>
                        {{ props.row.game.player }}
                    </b-table-column>
                    <b-table-column field="game.score" label="Score" numeric sortable>
                        {{ props.row.game.score }}
                    </b-table-column>
                </template>
                <template slot="empty">
                    <section class="section">
                        <div class="content has-text-grey has-text-centered">
                            <p>
                                <b-icon
                                        icon="emoticon-sad"
                                        size="is-large">
                                </b-icon>
                            </p>
                            <p>Nothing here.</p>
                        </div>
                    </section>
                </template>
                <template slot="footer">
                    <div class="has-text-right">
                        <p class="is-size-7">Powered by the GéoQuizz API</p>
                    </div>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    import BSelect from "buefy/src/components/select/Select";
    import BField from "buefy/src/components/field/Field";
    import BTable from "buefy/src/components/table/Table";
    import BTableColumn from "buefy/src/components/table/TableColumn";
    import BIcon from "buefy/src/components/icon/Icon";

    export default {
        name: "scoreTable",
        components: {BIcon, BTableColumn, BTable, BField, BSelect},
        data() {
            return {
                showCard: true,
                hasMobileCards: false,
                isPaginated: true,
                perPage: 10
            }
        }
    }
</script>

<style scoped>

</style>