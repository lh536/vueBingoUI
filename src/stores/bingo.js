import { defineStore } from "pinia";

export const useBingoStore = defineStore ({
    id: 'bingo',
    state: () => ({
        gameplay: []

    }),
    getters: {},
    actions: {
        addBall(ball) {
            if (this.gameplay.includes(ball)) {
                return
            } else {
                this.gameplay.push(ball)

            }
            console.log(this.gameplay);
        }
    }
})
