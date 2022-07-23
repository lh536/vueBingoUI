<template>
    <button @click="toSelectBall" class="ball"
            :class="selectedBall ? {
                'roseBLetter': ball <= 15,
                'skyILetter': ball >= 16 && ball <= 30,
                'amberNLetter': ball >= 31 && ball <= 45,
                'emeraldGLetter': ball >= 46 && ball <= 60,
                'violetOLetter': ball >= 61 && ball <= 75,
            } : 'bg-black'" >{{ball}}</button>
</template>


<script>
import { ref } from "vue";
export default {
    name: 'BingoBall',
    props: {
        ball: {
            type: String,
            required: true
        },
    },

    setup() {
        const selectedBall = ref(false)

        const toSelectBall = () => {
            console.log(selectedBall.value)
            selectedBall.value = !selectedBall.value
        }

        return { selectedBall, toSelectBall }

    }
}

</script>


<style scopped>
.ball {
    @apply w-9 h-9 md:w-11 md:h-11 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 border md:border-2 xl:border-4 flex justify-center items-start md:items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl tabular-nums rounded-full;
}

</style>
