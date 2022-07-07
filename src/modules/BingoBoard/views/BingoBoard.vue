<template>
    <div class="bg-red-500">
        <bingo-row />
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue";
export default {
    name: 'BingoBoard',
    components: {
        BingoRow: defineAsyncComponent(() => import("@/modules/BingoRow/views/BingoRow.vue")),
    },
    setup() {

    }
}

</script>


<style scopped>

</style>
