<template>
  <div class="container">
    <div class="title mt-5">电影浏览</div>
    <ul class="mt-5">
      <li
        v-for="(film, index) in films"
        :key="index"
        class="list-unstyled mb-5"
      >
        <el-card shadow="hover">
          <Film :film="film" :index="index"></Film>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import Film from "../../components/Film";
import { mapState } from "vuex";

export default {
  name: "Films",
  mounted() {
    this.$store.dispatch("Films/getAllFilm");
  },
  computed: {
    ...mapState({
      films: (state) => state.Films.films,
    }),
  },

  components: {
    Film,
  },
};
</script>

<style scoped>
.title {
  font-family: Calibri;
  font: 72px bold;
  color: #6ab446;
}
</style>