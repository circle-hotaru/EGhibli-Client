<template>
  <div class="container">
    <div class="title mt-5">电影搜索</div>
    <div class="row mt-5">
      <input
        placeholder="输入电影名或人物名来搜索"
        type="text"
        class="form-control col-md-10"
        v-model.trim="filter"
        @keyup.enter="search"
      />
      <button class="btn btn-success btn-block ml-2 col-md-1" @click="search">
        搜索
      </button>
    </div>
    <div v-show="!init">
      <ul class="mt-5" v-show="films.length > 0">
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
      <ul class="mt-5" v-show="roles.length > 0">
        <li
          v-for="(role, index) in roles"
          :key="index"
          class="list-unstyled mb-5"
        >
          <el-card shadow="hover">
            <Role :role="role" :index="index"></Role>
          </el-card>
        </li>
      </ul>
      <div
        v-show="films.length === 0 && roles.length === 0"
        class="container mt-5"
      >
        <div class="row">
          <div style="font-family: 等线" v-show="!init">
            暂时没有您要搜索的电影或人物~
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Film from "../../components/Film";
import Role from "../../components/Role";

export default {
  name: "Search",
  mounted() {
    this.filter = "";
    this.$store.dispatch("Films/searchFilm", this.filter);
    this.$store.dispatch("Roles/searchRole", this.filter);
    this.init = true;
  },
  data() {
    return {
      init: true,
      filter: "",
    };
  },
  components: {
    Film,
    Role,
  },
  computed: {
    ...mapState({
      films: (state) => state.Films.filteredFilms,
      roles: (state) => state.Roles.filteredRoles,
    }),
  },
  methods: {
    search() {
      this.$store.dispatch("Films/searchFilm", this.filter);
      this.$store.dispatch("Roles/searchRole", this.filter);
      this.init = false;
    },
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
