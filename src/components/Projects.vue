<template>
  <div id="projects">
    <h1>Projects</h1>
    <close/>

    <div class="project-grid" v-if="projects.length > 0">
      <project-box
      v-for="(project, index) in projects"
      :key="index"
      :name="project.name" :desc="project.desc"
      :web-link="project.webLink"
      :github-link="project.githubLink"
      :medium-link="project.mediumLink" />
    </div>

    <h2 class="no-projects" v-else>
      No Projects Yet. Check Back Later.
    </h2>
  </div>
</template>

<script>
import projectArray from '../projects';

export default {
  name: 'Projects',
  computed: {
    projects() {
      const computedProjectArray = [];
      projectArray.forEach((project) => {
        if (!project.name.startsWith('{exclude}')) {
          computedProjectArray.push(project);
        }
      });
      return computedProjectArray;
    },
  },
};
</script>

<style scoped>
#projects {
  padding: var(--section-padding);
}

.project-grid {
  --grid-gutter: 2.5vw;

  width: 100%;
  height: fit-content;

  display: grid;
  grid-auto-rows: var(--grid-item-height);
  place-content: center;
  grid-gap: var(--grid-gutter) var(--grid-gutter);

  margin-top: 3vh;
}

.no-projects {
  margin-top: 2.5vh;

  color: #666666;

  text-align: center;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .project-grid {
    --grid-item-width: 90vw;
    --grid-item-height: 30vmin;

    grid-template-columns: repeat(1, var(--grid-item-width));
  }
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .project-grid {
    --grid-item-width: 40vw;
    --grid-item-height: 35vmin;

    grid-template-columns: repeat(2, var(--grid-item-width));
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .project-grid {
    --grid-item-width: 40vw;
    --grid-item-height: 20vmin;

    grid-template-columns: repeat(2, var(--grid-item-width));
  }
}
</style>

