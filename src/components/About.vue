<template>
  <div id="about">
    <div class="about-image">
      <img src="../assets/profilepic.jpg" draggable="false">
    </div>
    <div class="divider"></div>
    <div class="about-text">
      <p>
        Peter Vashevko is pretty cool. He even has his own website.
      </p>
      <p>
        Sometimes, he writes code that actually does something, so he puts it on Github.
        You can check it out in the Projects section below.
      </p>
      <p>
        Later, he will write a longer bio, but that is not today.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
#about {
  --about-padding: 2.5vmin;

  width: 100%;

  min-height: var(--about-section-min-height);
  height: fit-content;

  border-bottom: 1px solid rgba(0,0,0,0.1);

  display: flex;
}

.about-image {
  flex: 1;

  position: relative;

  padding: var(--about-padding);

  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  border-radius: 100%;
  width: var(--about-image-size);
  height: var(--about-image-size);

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.about-text {
  flex: 2;
  padding: var(--about-padding);
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  #about {
    --about-section-min-height: 60vmin;
    --about-image-size: 40vmin;

    flex-direction: column;
  }

  .about-image {
    padding: var(--about-padding);
  }

  .about-text {
    max-width: 90vw;
    margin: 0 auto;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  #about {
    --about-section-min-height: 60vmin;
    --about-image-size: 25vmin;

    flex-direction: column;
  }

  .about-text {
    max-width: 82.5vw;
    margin: 0 auto;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  #about {
    --about-section-min-height: 47.5vmin;
    --about-image-size: 25vmin;

    flex-direction: row;
  }
}
</style>
