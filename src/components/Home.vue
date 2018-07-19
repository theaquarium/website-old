<template>
  <div id="home">
    <about/>
    <div class="section-grid">
      <section-box name="Projects" background-img="url(/static/projects.png)"
      link-name="Projects"/>
      <section-box name="Contact Me"
      background-img="linear-gradient(to bottom right, #9198e5, #1285ea)"
      link-name="Contact" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.section-grid {
  --grid-item-height: 20vmin;
  --grid-gutter: 2.5vw;
  --grid-margin-top: 3.5vmin;

  width: 100%;

  margin-top: var(--grid-margin-top);

  display: grid;
  grid-auto-rows: var(--grid-item-height);
  place-content: center;
  grid-gap: var(--grid-gutter) var(--grid-gutter);
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .section-grid {
    --grid-item-width: 90vw;

    grid-template-columns: repeat(1, var(--grid-item-width));
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .section-grid {
    --grid-item-width: 40vw;

    grid-template-columns: repeat(2, var(--grid-item-width));
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .section-grid {
    --grid-item-width: 40vw;

    grid-template-columns: repeat(2, var(--grid-item-width));
  }
}
</style>

