<template>
    <div class="">
        <bingo-board />
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue";
export default {
    name: 'HomeView',
    components: {
        BingoBoard: defineAsyncComponent(() => import("@/modules/BingoBoard/views/BingoBoard.vue")),
    },
    setup() {

    }
}

</script>


<style scoped>

</style>
