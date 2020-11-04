<template>
  <div class="container-fluid">
    <div class="row">
      <div class="imgbox col-md-2" style="cursor: pointer">
        <img
          v-lazy="film.poster"
          :key="film.poster"
          class="img-thumbnail"
          alt="Responsive image"
        />
      </div>
      <div class="col-md-8" style="cursor: pointer">
        <div class="card-link link">
          <div class="title mt-3 mb-2">{{ film.title }}</div>
          <div class="director mb-1">作者:{{ film.director }}</div>
          <div class="description">简介:{{ film.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Film",
  props: {
    film: Object,
    index: Number,
  },
};
</script>

<style scoped>
.imgbox {
  font-size: 0;
  width: 200px;
  height: 200px;
  text-align: center;
}
.imgbox img {
  max-height: 100%;
  max-width: 100%;
  vertical-align: middle;
}

.title {
  font-family: 黑体;
  font-size: 24px;
}

.director {
  font-family: 仿宋;
  font-size: 15px;
}

.description {
  font-family: 等线;
  font-size: 12px;
  text-align: justify;
  opacity: 0.6;
}

.link:hover {
  color: steelblue;
}
</style>