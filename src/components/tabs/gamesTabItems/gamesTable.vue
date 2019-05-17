<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">List of games</p>
      <a
        @click="showCard = !showCard"
        aria-label="more options"
        class="card-header-icon"
      >
        <b-icon :icon="showCard ? 'chevron-up' : 'chevron-down'"></b-icon>
      </a>
    </header>
    <div class="card-content" v-if="showCard">
      <b-field group-multiline grouped>
        <b-select :disabled="!isPaginated" size="is-small" v-model="perPage">
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
          <option value="20">20 per page</option>
        </b-select>
        <div class="control is-flex">
          <b-switch size="is-small" v-model="isPaginated">Paginated</b-switch>
        </div>
        <div class="control is-flex">
          <b-switch
            class="is-hidden-tablet"
            size="is-small"
            v-model="hasMobileCards"
            >Mobile cards</b-switch
          >
        </div>
      </b-field>
      <b-table
        :data="games"
        :mobile-cards="hasMobileCards"
        :paginated="isPaginated"
        :per-page="perPage"
        :show-detail-icon="false"
        aria-current-label="Current page"
        aria-next-label="Next page"
        aria-page-label="Page"
        aria-previous-label="Previous page"
        detailed
        hoverable
        narrowed
        ref="table"
        sortable
        striped
      >
        <template slot-scope="props">
          <b-table-column field="game.player" label="Player" sortable>
            {{ props.row.game.player }}
          </b-table-column>
          <b-table-column field="game.score" label="Score" numeric sortable>
            {{ props.row.game.score }}
          </b-table-column>
          <b-table-column
            centered
            field="game.status"
            label="Status"
            numeric
            sortable
          >
            {{ props.row.game.status === 1 ? "Started" : "Finalized" }}
          </b-table-column>
          <b-table-column
            centered
            field="game.status"
            label="Started"
            numeric
            sortable
          >
            {{ new Date(props.row.game.created_at).toLocaleString() }}
          </b-table-column>
          <b-table-column
            centered
            field="game.status"
            label="Finalized"
            numeric
            sortable
          >
            {{
              props.row.game.updated_at === props.row.game.created_at
                ? "-"
                : new Date(props.row.game.updated_at).toLocaleString()
            }}
          </b-table-column>
        </template>
        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon icon="emoticon-sad" size="is-large"> </b-icon>
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
import BTable from "buefy/src/components/table/Table";
import BTableColumn from "buefy/src/components/table/TableColumn";
import BIcon from "buefy/src/components/icon/Icon";
import BSwitch from "buefy/src/components/switch/Switch";
import BField from "buefy/src/components/field/Field";
import BSelect from "buefy/src/components/select/Select";

export default {
  name: "gamesTable",
  components: { BSelect, BField, BSwitch, BIcon, BTableColumn, BTable },
  data() {
    return {
      perPage: 5,
      isPaginated: true,
      hasMobileCards: true,
      showCard: true
    };
  }
};
</script>

<style scoped></style>
