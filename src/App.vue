<template>
  <div id="app">
    <title-bar/>
    <main>
      <router-view/>
    </main>
    <footer-bar/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  --section-padding: 1.2vmax;

  margin: 0;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  font-family: 'Inter UI', Arial, sans-serif;
  font-size: calc(12px + 0.75vmin);

  background: #f4f4f4;
}

#app {
  height: fit-content;
  min-height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;

  position: relative;
}

.divider {
  width: 80%;
  height: 1px;

  background: rgba(0,0,0,0.1);

  position: relative;
  left: 0; right: 0; top: 0; bottom: 0;
  margin: auto;
}

h1 {
  font-size: calc(10px + 3vmin);
  margin: 0;
}

h2 {
  font-size: calc(12px + 2vmin);
  margin: 0;
}

h3 {
  font-size: calc(12px + 1vmin);
  margin: 0;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .divider {
    display: block;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .divider {
    display: block;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .divider {
    display: none;
  }
}
</style>
