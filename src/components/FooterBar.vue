<template>
  <footer id="footer-bar">
    <div>
      Copyright (c) 2018 Peter Vashevko
      <br>
      See code and license for this site on <a href="https://github.com/theaquarium/website">Github</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TitleBar',
};
</script>

<style scoped>
#footer-bar {
  height: var(--footer-bar-height);

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid rgba(0,0,0,0.1);

  margin-top: 5vh;

  padding: 1.5vh;

  background: #e0e0e0;

  flex-shrink: 0;

  font-size: calc(8px + 1vmin);

  text-align: center;
}

a {
  color: #666666;
}

a:active {
  color: #333333;
}
</style>
