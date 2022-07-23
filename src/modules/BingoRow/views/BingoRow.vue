<template>
    <div class="flex justify-between items-center w-full gap-0.5 md:gap-0">
        <bingo-ball v-for="letterNumber in arrLetterNumber" :ball="letterNumber"
        :class="{
            'roseBLetter': letterNumber === 'B',
            'roseBNumber': letterNumber <= 15,
            'skyILetter': letterNumber === 'I',
            'skyINumber': letterNumber >= 16 && letterNumber <= 30,
            'amberNLetter': letterNumber === 'N',
            'amberNNumber': letterNumber >= 31 && letterNumber <= 45,
            'emeraldGLetter': letterNumber === 'G',
            'emeraldGNumber': letterNumber >= 46 && letterNumber <= 60,
            'violetOLetter': letterNumber === 'O',
            'violetONumber': letterNumber >= 61 && letterNumber <= 75,
        }"/>
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue";
export default {
    name: 'BingoRow',
    components: {
        BingoBall: defineAsyncComponent(() => import("@/modules/BingoRow/components/BingoBall.vue")),
    },
    props: {
        arrLetterNumber: {
            type: Array,
            required: true
        }
    },
    setup() {

    }
}

</script>


<style>
.roseBLetter {
    @apply bg-rose-500 border-rose-300 text-rose-200 font-semibold;
}

.roseBNumber {
    @apply hover:bg-rose-500 border-rose-300 font-semibold hover:text-rose-200;
}
.skyILetter {
    @apply bg-sky-500 border-sky-300 text-sky-200 font-semibold;
}

.skyINumber {
    @apply hover:bg-sky-500 border-sky-300 font-semibold hover:text-sky-200;
}
.amberNLetter {
    @apply bg-amber-500 border-amber-300 text-amber-200 font-semibold;
}

.amberNNumber {
    @apply hover:bg-amber-500 border-amber-300 font-semibold hover:text-amber-200;
}
.emeraldGLetter {
    @apply bg-emerald-500 border-emerald-300 text-emerald-200 font-semibold;
}

.emeraldGNumber {
    @apply hover:bg-emerald-500 border-emerald-300 font-semibold hover:text-emerald-200;
}
.violetOLetter {
    @apply bg-violet-500 border-violet-300 text-violet-200 font-semibold;
}

.violetONumber {
    @apply hover:bg-violet-500 border-violet-300 font-semibold hover:text-violet-200;
}

</style>
