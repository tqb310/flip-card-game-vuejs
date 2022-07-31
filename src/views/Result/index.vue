<template>
  <div class="result">
    <div class="result__title">
      <img :src="Congrat" alt="congrat" />
      <h1>Congratulations</h1>
      <img :src="Congrat" alt="congrat" />
    </div>
    <p>Time: {{ convertTimeToText(time) }}</p>
    <button @click="$emit('startAgain')">Start Again</button>
  </div>
</template>

<script>
import Congrat from "../../assets/images/confetti.png";
import convertTimeToText from "../../utils/convertTimeToText";
export default {
  props: {
    time: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return { Congrat, convertTimeToText };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/" as *;
.result {
  text-align: center;
  &__title {
    display: flex;
    align-items: center;
    gap: 10px;
    h1 {
      font-size: 5rem;
    }
  }
  p {
    font-size: 2.5rem;
    margin-top: 20px;
  }
  button {
    padding: 1rem 2rem;
    background-color: transparent;
    border: 1px solid $light;
    border-radius: 8px;
    font-family: $font;
    color: $light;
    font-size: 1.8rem;
    margin-top: 15px;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 0 5px $light inset;
    }
  }
}
</style>