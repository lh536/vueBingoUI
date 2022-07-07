<template>
    <div class="bg-red-500">
        <home-view />
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue";
export default {
    name: 'App',
    components: {
        HomeView: defineAsyncComponent(() => import("@/views/HomeView.vue")),
    },
    setup() {

    }
}

</script>


<style scopped>

</style>
