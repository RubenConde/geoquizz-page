<template>
    <games-table></games-table>
</template>

<script>
    import GamesTable from "./gamesTable";
    import ScoreTable from "./scoreTable";

    export default {
        name: "gamesTab",
        components: {ScoreTable, GamesTable}
    }
</script>

<style scoped>

</style>