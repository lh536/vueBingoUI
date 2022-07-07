<template>
    <div class="bg-red-500">
        <bingo-ball />
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue";
export default {
    name: 'BingoRow',
    components: {
        BingoBall: defineAsyncComponent(() => import("@/modules/BingoRow/components/BingoBall.vue")),
    },
    setup() {

    }
}

</script>


<style scopped>

</style>
