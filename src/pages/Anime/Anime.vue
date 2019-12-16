<template>
  <div id="anime">
    <img src="../../../public/images/logo.png" />
    <div class="container">
      <div v-for="item in movie" class="card">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description.substring(0,300)+' ...' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Anime",
  data() {
    return {
      movie: null
    };
  },
  mounted() {
    this.axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(response => (this.movie = response.data));
  }
};
</script>

<style scoped>
</style>