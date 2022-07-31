<script>
import { ref } from "vue";
import Beginning from "./views/Beginning/index.vue";
import GamePanel from "./views/GamePanel/index.vue";

export default {
  setup() {
    const isPlaying = ref(false);
    const cardNumber = ref(0);
    function enterGame(number) {
      isPlaying.value = true;
      cardNumber.value = number;
    }
    return { isPlaying, cardNumber, enterGame };
  },
  components: { Beginning, GamePanel },
};
</script>

<template>
  <game-panel
    v-if="isPlaying"
    @exit-game="isPlaying = false"
    :cardNumber="cardNumber"
  />
  <beginning v-else @enter-game="enterGame" />
</template>

<style scoped lang="scss">
@use "./assets/styles/" as *;
</style>
