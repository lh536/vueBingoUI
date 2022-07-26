<template>
    <button @click="isSelectedBall = !isSelectedBall" class="ball"
            :class="isSelectedBall ? {
                'roseBBallSelected': ball <= 15,
                'skyIBallSelected': ball >= 16 && ball <= 30,
                'amberNBallSelected': ball >= 31 && ball <= 45,
                'emeraldGBallSelected': ball >= 46 && ball <= 60,
                'violetOBallSelected': ball >= 61 && ball <= 75,
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
        const isSelectedBall = ref(false)

        return { isSelectedBall }

    }
}

</script>


<style scoped>
.ball {
    @apply w-9 h-9 md:w-11 md:h-11 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 border md:border-2 xl:border-4 flex justify-center items-start md:items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl tabular-nums rounded-full;
}

</style>
