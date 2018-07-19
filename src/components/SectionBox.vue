<template>
    <router-link class="grid-item" tag="div" :to="{ name: linkName }"
    :style="{ 'background-image': backgroundImg }" >
      <h2>{{ name }}</h2>
    </router-link>
</template>

<script>
export default {
  name: 'Section',
  props: ['name', 'backgroundImg', 'linkName'],
};
</script>

<style scoped>
.grid-item {
  border: 1px solid rgba(0,0,0,0.1);
  padding: 2.5vmin;

  cursor: pointer;

  background-size: cover;
  background-repeat: no-repeat;

  color: #FFFFFF;
}

h2 {
  position: absolute;
}
</style>
