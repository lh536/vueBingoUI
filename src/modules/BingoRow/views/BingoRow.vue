<template>
    <div class="flex justify-between items-center w-full gap-0.5 md:gap-0">
        <bingo-ball v-for="letterNumber in arrLetterNumber" :ball="letterNumber"
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

</style>
