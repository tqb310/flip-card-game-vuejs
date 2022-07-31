<template>
  <div class="game-panel">
    <!-- <button @click="$emit('exitGame')">Exit</button> -->
    <ul
      class="game-panel__main"
      :style="{ gridTemplateColumns: `repeat(${Math.sqrt(cardNumber)}, 1fr)` }"
    >
      <li
        class="game-panel__item"
        :style="{ width: `65px` }"
        v-for="(el, index) in new Array(cardNumber)"
        :key="index"
      >
        <img :src="handledCards[index]" alt="title" />
      </li>
    </ul>
  </div>
</template>

<script>
import images from "../../assets/images/index";
import pokeball from "../../assets/images/pokeball.png";
const map = {
  16: "135px",
  32: "75px",
  64: "75px",
  100: "75px",
};
export default {
  props: {
    cardNumber: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    let handledCards = images.slice(0, props.cardNumber / 2);
    handledCards = handledCards.concat(handledCards);
    handledCards.sort(() => Math.random() - Math.random());
    return { handledCards };
  },
  // emits: ["exitGame"],
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/" as *;
.game-panel {
  &__main {
    display: grid;
    gap: 2.5rem;
    .game-panel__item {
      background-color: $light;
      text-align: center;
      padding: 1rem;
      border-radius: 8px;
    }
  }
}
</style>