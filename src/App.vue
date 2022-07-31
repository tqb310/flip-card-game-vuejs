<script>
import { ref } from "vue";
import Beginning from "./views/Beginning/index.vue";
import GamePanel from "./views/GamePanel/index.vue";
import Result from "./views/Result/index.vue";

export default {
  setup() {
    const mode = ref("start");
    const cardNumber = ref(0);
    function enterGame(number) {
      mode.value = "playing";
      cardNumber.value = number;
    }

    return { mode, cardNumber, enterGame };
  },
  components: { Beginning, GamePanel, Result },
};
</script>

<template>
  <game-panel
    v-if="mode === 'playing'"
    @exit-game="mode = 'start'"
    @done-game="mode = 'result'"
    :cardNumber="cardNumber"
  />
  <beginning v-else-if="mode === 'start'" @enter-game="enterGame" />
  <result v-else @start-again="mode = 'start'" />
</template>

<style scoped lang="scss">
@use "./assets/styles/" as *;
</style>
