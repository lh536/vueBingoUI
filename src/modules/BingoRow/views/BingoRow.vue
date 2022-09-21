<script setup>
import BingoBall from "@/modules/BingoRow/components/BingoBall.vue";

const props = defineProps ({
    arrLetterNumber: {
            type: Array,
            required: true
        }
})

</script>


<template>
    <div class="flex justify-between items-center w-full gap-0.5 md:gap-0">
        <bingo-ball v-for="letterNumber in arrLetterNumber" :key="letterNumber" :ball="letterNumber"
        :class="{
            'roseBBallSelected': letterNumber === 'B',
            'roseBNumber': letterNumber <= 15,
            'skyIBallSelected': letterNumber === 'I',
            'skyINumber': letterNumber >= 16 && letterNumber <= 30,
            'amberNBallSelected': letterNumber === 'N',
            'amberNNumber': letterNumber >= 31 && letterNumber <= 45,
            'emeraldGBallSelected': letterNumber === 'G',
            'emeraldGNumber': letterNumber >= 46 && letterNumber <= 60,
            'violetOBallSelected': letterNumber === 'O',
            'violetONumber': letterNumber >= 61 && letterNumber <= 75,
        }"/>
    </div>
</template>


<style scoped>

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
