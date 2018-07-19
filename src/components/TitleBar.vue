<template>
  <header id="title-bar">
    <div class="title" @click="scrollToTop">Peter Vashevko</div>
  </header>
</template>

<script>
export default {
  name: 'TitleBar',
  methods: {
    scrollToTop() {
      this.$router.push({ name: 'Home' });
      window.scroll(0, 0);
    },
  },
};
</script>

<style scoped>
#title-bar {
  --title-bar-font-color: rgba(0,0,0,0.8);

  width: 100%;

  border-bottom: 1px solid rgba(0,0,0,0.1);

  background-color: #f7f7f7;

  position: sticky;
  top: 0;

  z-index: 9999;

  flex-shrink: 0;
}

.title {
  height: fit-content;
  width: fit-content;

  font-size: calc(10px + 3vmin);
  font-weight: 700;
  color: var(--title-bar-font-color);

  cursor: pointer;

  margin: 1vmin auto;

  text-align: center;
}
</style>
