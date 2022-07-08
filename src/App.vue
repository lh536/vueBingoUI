<template>
    <div class="">
        <div class="grid place-items-center min-h-screen landscape:hidden text-center text-2xl">
            <div>
                <p>This application was designed to viewed on landscape mode.</p>
                <p>Please rotate your device.</p>
                <p>Sorry for the inconvenience</p>
            </div>
            <dvi>
                <p>Esta aplicación fue diseñada para ser vista en modo apaisado.</p>
                <p>Por favor rote su dispositivo</p>
                <p>Discúlpe por el inconveniente</p>
            </dvi>
        </div>
        <div class="portrait:hidden">
            <home-view />
        </div>
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
