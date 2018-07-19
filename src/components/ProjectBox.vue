<template>
    <div class="project-item">
      <h3>{{ name }}</h3>
      <div class="desc">{{ desc }}</div>
      <div class="buttons">
        <a v-if="mediumLink" :href="mediumLink"><i class="fab fa-medium-m"></i></a>
        <a v-if="githubLink" :href="githubLink"><i class="fab fa-github"></i></a>
        <a v-if="webLink" :href="webLink"><i class="fas fa-link"></i></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Section',
  props: ['name', 'desc', 'mediumLink', 'githubLink', 'webLink'],
};
</script>

<style scoped>
.project-item {
  border: 1px solid rgba(0,0,0,0.1);
  padding: 2.5vmin;

  border-radius: 1vmin;

  position: relative;
}

.desc {
  color: #666666;
}

.buttons {
  position: absolute;
  bottom: 2.5vmin;
  left: 2.5vmin;
  right: 2.5vmin;

  display: flex;
  justify-content: flex-end;

  font-size: var(--button-size);
}

i {
  color: rgba(0,0,0,0.5);

  transition: color 0.25s;

  margin-left: var(--button-spacing);
}

i:hover {
  color: rgba(0,0,0,0.8);
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .buttons {
    --button-size: calc(12px + 3vmin);
    --button-spacing: 2.5vmin;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .buttons {
    --button-size: calc(12px + 2vmin);
    --button-spacing: 1.5vmin;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .buttons {
    --button-size: calc(12px + 1vmin);
    --button-spacing: 1.5vmin;
  }
}
</style>
