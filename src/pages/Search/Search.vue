<template>
  <div class="container">
    <div class="title mt-4">电影搜索</div>
    <div class="row mt-4">
      <input
        placeholder="输入电影名或人物名来搜索"
        type="text"
        class="form-control col-md-10"
        v-model.trim="keywords"
        @keyup.enter="search"
      />
      <button class="btn btn-success ml-2 col-md-1" @click="search">搜索</button>
    </div>
    <div v-show="!init">
      <ul class="mt-5" v-show="searchFilm.length > 0">
        <li v-for="(film, index) in searchFilm" :key="index" class="list-unstyled mb-5">
          <Film :film="film"></Film>
        </li>
      </ul>
      <ul class="mt-5" v-show="searchRole.length > 0">
        <li v-for="(role, index) in searchRole" :key="index" class="list-unstyled mb-5">
          <Role :role="role"></Role>
        </li>
      </ul>
      <div v-show="searchRole.length === 0" class="container mt-5">
        <div class="row">
          <div style="font-family: 等线" v-show="!init">暂时没有您要搜索的电影或人物~</div>
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
    this.$store.state.films;
    this.$store.state.roles;
  },
  data() {
    return {
      init: true,
      keywords: ""
    };
  },
  components: {
    Film,
    Role
  },
  computed: {
    ...mapState(["films", "roles"]),
    searchFilm() {
      if (this.keywords) {
        return this.films.filter(film => {
          let content = film.title;
          let keyword = this.keywords;
          return content.indexOf(keyword) != -1;
        });
      } else {
        return this.films;
      }
    },
    searchRole() {
      if (this.keywords) {
        return this.roles.filter(role => {
          let content = role.name;
          let keyword = this.keywords;
          return content.indexOf(keyword) != -1;
        });
      } else {
        return this.roles;
      }
    }
  },
  methods: {
    search() {
      this.init = false;
    }
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
