<template>
  <div class="container">
    <div class="title mt-4">电影浏览</div>
    <ul class="mt-5">
      <li v-for="(film, index) in films" :key="index" class="list-unstyled mb-5">
        <Film :film="film"></Film>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Film from "../../components/Film";

export default {
  name: "Films",
  computed: {
    ...mapState(["films"])
  },
  mounted() {
    this.$store.state.films;
  },
  components: {
    Film
  }
};
</script>

<style scoped>
.title {
  font-family: Calibri;
  font: 72px bold;
  color: #6ab446;
}
</style>