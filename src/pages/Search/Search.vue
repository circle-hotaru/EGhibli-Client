<template>
  <div class="container-fluid">
    <div class="mt-5">电影搜索</div>
    <div class="row mt-5">
      <div class="mt-2">
        <i class="iconfont icon-sousuo col-md-9"></i>
      </div>
      <input
        placeholder="输入电影名来搜索"
        type="text"
        class="form-control col-md-10"
        v-model.trim="title"
        @keyup.enter="search"
      />
      <button class="btn btn-primary btn-block ml-2 col-md-1" @click="search">搜索</button>
    </div>
    <div v-show="!init">
      <ul class="mt-5" v-show="searchFilm.length > 0">
        <li v-for="(film, index) in searchFilm" :key="index" class="list-unstyled mb-5">
          <Film :film="film"></Film>
        </li>
      </ul>
      <div v-show="searchFilm.length === 0" class="container mt-5">
        <div class="row">
          <div style="font-family: 等线" v-show="!init">暂时没有您要搜索的电影~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Film from "../../components/Film";

export default {
  name: "Search",
  mounted() {
    this.$store.state.films;
  },
  data() {
    return {
      init: true,
      title: ""
    };
  },
  components: {
    Film
  },
  computed: {
    ...mapState(["films"]),
    searchFilm() {
      if (this.title) {
        return this.films.filter(film => {
          let content = film.title;
          let keyword = this.title;
          return content.indexOf(keyword) != -1;
        });
      } else {
        return this.films;
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
</style>
