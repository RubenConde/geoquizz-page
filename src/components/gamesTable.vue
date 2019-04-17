<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title"> List of games </p>
            <a aria-label="more options" class="card-header-icon" href="#">
                <b-icon icon="format-list-bulleted"></b-icon>
            </a>
        </header>
        <div class="card-content">
            <b-field group-multiline grouped>
                <b-select :disabled="!isPaginated" v-model="perPage">
                    <option value="5">5 per page</option>
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                </b-select>
                <div class="control is-flex">
                    <b-switch v-model="isPaginated">Paginated</b-switch>
                </div>
            </b-field>
            <b-table :data="games" :paginated="isPaginated" :per-page="perPage" sortable>
                <template slot-scope="props">
                    <b-table-column field="game.id" label="ID" numeric sortable>
                        {{ props.row.game.id }}
                    </b-table-column>
                    <b-table-column field="game.player" label="Player" sortable>
                        {{ props.row.game.player }}
                    </b-table-column>
                    <b-table-column field="game.score" label="Score" numeric sortable>
                        {{ props.row.game.score }}
                    </b-table-column>
                    <b-table-column centered field="game.created_at" label="Started" sortable>
                        {{ new Date(props.row.game.created_at).toLocaleDateString() }}
                    </b-table-column>
                    <b-table-column centered field="game.updated_at" label="Finalized" sortable>
                        {{ new Date(props.row.game.updated_at).toLocaleDateString() }}
                    </b-table-column>
                    <b-table-column centered field="game.status" label="Status" numeric sortable>
                        {{ props.row.game.status === 1 ? 'Started' : 'Finalized' }}
                    </b-table-column>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    import BTable from "buefy/src/components/table/Table";
    import BTableColumn from "buefy/src/components/table/TableColumn";
    import BIcon from "buefy/src/components/icon/Icon";
    import BSwitch from "buefy/src/components/switch/Switch";
    import BField from "buefy/src/components/field/Field";
    import BSelect from "buefy/src/components/select/Select";

    export default {
        name: "gamesTable",
        components: {BSelect, BField, BSwitch, BIcon, BTableColumn, BTable},
        data() {
            return {
                perPage: 5,
                isPaginated: true
            }
        }
    }
</script>

<style scoped>

</style>