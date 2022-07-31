<template>
  <div class="beginning">
    <h1 class="beginning__title">POKE MEMORIES</h1>
    <p class="beginning__instructions">Select mode to start game</p>
    <ul class="beginning__modes">
      <li @click="enterGame(16)" class="beginning__modes-item">
        <p>4 x 4</p>
        <p>Easy</p>
      </li>
      <li @click="enterGame(36)" class="beginning__modes-item">
        <p>6 x 6</p>
        <p>Medium</p>
      </li>
      <li @click="enterGame(64)" class="beginning__modes-item">
        <p>8 x 8</p>
        <p>Hard</p>
      </li>
      <li @click="enterGame(100)" class="beginning__modes-item">
        <p>10 x 10</p>
        <p>Super Hard</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup(props, ctx) {
    function enterGame(number) {
      ctx.emit("enterGame", number);
    }
    return { enterGame };
  },
};
</script>

<style scoped lang="scss">
@use "../../assets/styles/" as *;
.beginning {
  text-align: center;
  &__title {
    font-size: 5rem;
    padding-bottom: 1rem;
  }
  &__instructions {
    font-size: 2.5rem;
  }
  &__modes {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    width: 500px;
    gap: 3rem;
    &-item {
      border: 1px solid $light;
      border-radius: 8px;
      width: 25%;
      padding: 2.5rem 0;
      user-select: none;
      cursor: pointer;
      transition: all 0.3s ease;
      p:first-child {
        font-size: 2.5rem;
        margin-bottom: 5px;
      }
      &:hover {
        box-shadow: 0 0 10px $light inset;
      }
    }
  }
}
</style>