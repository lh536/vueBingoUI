<template>
    <div class="">
        <div class="grid place-items-center min-h-screen landscape:hidden text-center text-2xl">
            <div>
                <p>This application was designed to viewed on landscape mode.</p>
                <p>Please rotate your device.</p>
                <p>Sorry for the inconvenience</p>
            </div>
            <div>
                <p>Esta aplicación fue diseñada para ser vista en modo apaisado.</p>
                <p>Por favor rote su dispositivo</p>
                <p>Discúlpe por el inconveniente</p>
            </div>
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


<style>

.roseBBallSelected {
    @apply bg-rose-500 border-rose-300 text-rose-200 font-semibold;
}

.roseBNumber {
    @apply lg:hover:bg-rose-500 border-rose-300 font-semibold lg:hover:text-rose-200;
}
.skyIBallSelected {
    @apply bg-sky-500 border-sky-300 text-sky-200 font-semibold;
}

.skyINumber {
    @apply lg:hover:bg-sky-500 border-sky-300 font-semibold lg:hover:text-sky-200;
}
.amberNBallSelected {
    @apply bg-amber-500 border-amber-300 text-amber-200 font-semibold;
}

.amberNNumber {
    @apply lg:hover:bg-amber-500 border-amber-300 font-semibold lg:hover:text-amber-200;
}
.emeraldGBallSelected {
    @apply bg-emerald-500 border-emerald-300 text-emerald-200 font-semibold;
}

.emeraldGNumber {
    @apply lg:hover:bg-emerald-500 border-emerald-300 font-semibold lg:hover:text-emerald-200;
}
.violetOBallSelected {
    @apply bg-violet-500 border-violet-300 text-violet-200 font-semibold;
}

.violetONumber {
    @apply lg:hover:bg-violet-500 border-violet-300 font-semibold lg:hover:text-violet-200;
}

</style>
