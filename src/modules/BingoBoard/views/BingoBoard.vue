<template>
<span class="text-red-500 font-semibold sm:hidden">XS</span>
<span class="text-red-500 font-semibold hidden sm:block md:hidden">SM</span>
<span class="text-red-500 font-semibold hidden md:block lg:hidden">MD</span>
<span class="text-red-500 font-semibold hidden lg:block xl:hidden">LG</span>
<span class="text-red-500 font-semibold hidden xl:block 2xl:hidden">XL</span>
<span class="text-red-500 font-semibold hidden 2xl:block">2XL</span>
    <div class="grid grid-rows-1 justify-items-center gap-2 w-full px-1 text-neutral-800">
        <bingo-row :arrLetterNumber="['B', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15']" />
        <bingo-row :arrLetterNumber="['I', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']" />
        <bingo-row :arrLetterNumber="['N', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']" />
        <bingo-row :arrLetterNumber="['G', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60']" />
        <bingo-row :arrLetterNumber="['O', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75']" />
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
