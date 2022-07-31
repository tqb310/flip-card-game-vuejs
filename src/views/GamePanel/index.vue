<template>
  <div class="game-panel">
    <div class="game-panel__control">
      <button @click="$emit('exitGame')">Exit</button>
    </div>
    <ul
      class="game-panel__main"
      :style="{ gridTemplateColumns: `repeat(${Math.sqrt(cardNumber)}, 1fr)` }"
    >
      <li
        v-for="(el, index) in reactiveCards"
        :class="['game-panel__item', { rotate: el.isFlipped }]"
        :style="{ width: mapSize[cardNumber].w, height: mapSize[cardNumber].h }"
        @click="flipCard(index, el.path)"
        :key="index"
      >
        <div class="front">
          <img :src="pokeball" alt="title" :style="{ width: '60%' }" />
        </div>
        <div class="back">
          <img :src="el.path" alt="title" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import images from "../../assets/images/index";
import pokeball from "../../assets/images/pokeball.png";
import { reactive, ref } from "vue";

const mapSize = {
  16: { w: "135px", h: "150px" },
  36: { w: "95px", h: "100px" },
  64: { w: "65px", h: "70px" },
  100: { w: "50px", h: "55px" },
};
export default {
  props: {
    cardNumber: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    let startTime = Date.now();
    let mappedCards = images.slice(0, props.cardNumber / 2);
    mappedCards = mappedCards.map((path, index) => ({
      path,
      isFlipped: false,
    }));
    const handledCards = [...mappedCards];
    mappedCards.forEach((item) => handledCards.push({ ...item }));
    handledCards.sort(() => Math.random() - Math.random());

    const reactiveCards = reactive(handledCards);
    const flippedCardNumbers = ref(0);
    const isFlipping = ref(false);
    const coupleOfIdenticalCard = reactive({
      first: { index: -1, value: "" },
    });

    function flipCard(index, value) {
      if (isFlipping.value) return;

      reactiveCards[index].isFlipped = true;

      if (coupleOfIdenticalCard.first.index === -1) {
        coupleOfIdenticalCard.first = { index, value };
      } else {
        isFlipping.value = true;

        setTimeout(() => {
          if (coupleOfIdenticalCard.first.value !== value) {
            reactiveCards[coupleOfIdenticalCard.first.index].isFlipped = false;
            reactiveCards[index].isFlipped = false;
          } else {
            if (flippedCardNumbers.value + 2 >= props.cardNumber)
              ctx.emit("doneGame", (Date.now() - startTime).toString());
            else flippedCardNumbers.value = flippedCardNumbers.value + 2;
          }
          isFlipping.value = false;
          coupleOfIdenticalCard.first = { index: -1, value: "" };
        }, 1000);
      }
    }
    return { reactiveCards, mapSize, pokeball, flipCard };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/" as *;
.game-panel {
  &__main {
    display: grid;
    gap: 2rem;
    .game-panel__item {
      position: relative;
      perspective: 400px;
      transform-style: preserve-3d;
      &.rotate {
        .front {
          transform: rotateY(-180deg);
        }
        .back {
          transform: rotateY(0deg);
        }
      }
      .front,
      .back {
        position: absolute;
        background-color: $light;
        border-radius: 8px;
        height: 100%;
        transition: transform 0.7s ease-out;
        backface-visibility: hidden;
      }
      .front {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .back {
        transform: rotateY(180deg);
        padding: 1rem;
      }
    }
  }
  &__control {
    position: fixed;
    left: 30px;
    top: 30px;
    button {
      padding: 1rem 2rem;
      font-family: $font;
      font-size: 2rem;
    }
  }
}
</style>