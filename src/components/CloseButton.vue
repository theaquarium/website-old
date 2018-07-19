<template>
  <router-link tag="div" :to="{ name: 'Home' }" class="x"></router-link>
</template>

<script>
export default {
  name: 'CloseButton',
};
</script>

<style scoped>
/* http://jsfiddle.net/elin/67sw12rL/ */
.x {
  --color: rgba(0,0,0,0.4);
  --hover-color: rgba(0,0,0,0.7);
  --transition: 0.25s;

  display: block;
  position: absolute;
  right: var(--section-padding);
  top: var(--section-padding);
  width: var(--button-size);
  height: var(--button-size);

  cursor: pointer;
}

.x:hover {
  --color: rgba(0,0,0,0.7);
}

.x:before {
  content: "";
  position: absolute;
  display: block;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: var(--button-size);
  height: 0;
  border-top: var(--button-thickness) solid var(--color);
  transform: rotate(45deg);
  transform-origin: center;

  transition: var(--transition);
}

.x:after {
  content: "";
  position: absolute;
  display: block;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: var(--button-size);
  height: 0;
  border-top: var(--button-thickness) solid var(--color);
  transform: rotate(-45deg);
  transform-origin: center;

  transition: var(--transition);
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .x {
    --button-size: 3vmax;
    --button-thickness: 2px;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .x {
    --button-size: 3vmax;
    --button-thickness: 2px;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .x {
    --button-size: 1.5vmax;
    --button-thickness: 2px;
  }
}
</style>
