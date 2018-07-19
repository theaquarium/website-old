<template>
  <div id="contact">
    <h1>Contact Me</h1>
    <close/>
    <div class="info">
      <h2>Email</h2>
        <a href="mailto:theaquariumest@gmail.com">theaquariumest@gmail.com</a>
      <br><br>
      <h2>Twitter</h2>
        <a href="https://twitter.com/_theaquarium_">@_theaquarium_</a>
      <br><br>
      <h2>Github</h2>
        <a href="https://github.com/theaquarium">theaquarium</a>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
#contact {
  padding: var(--section-padding);
}

.info {
  width: fit-content;
  height: fit-content;

  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  margin: auto;
}

a {
  color: rgba(0,0,0,0.6);

  transition: color 0.25s;
}

a:hover {
  color: rgba(0,0,0,0.8);
}


</style>
