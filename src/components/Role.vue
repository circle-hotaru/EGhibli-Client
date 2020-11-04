<template>
  <div class="container-fluid">
    <div class="row">
      <div class="imgbox col-md-2" style="cursor: pointer">
        <img
          v-lazy="role.portrait"
          :key="role.portrait"
          class="img-thumbnail"
          alt="Responsive image"
        />
      </div>
      <div class="col-md-8" style="cursor: pointer">
        <div class="card-link link">
          <div class="name mt-3 mb-2">{{ role.name }}</div>
          <div class="description">简介:{{ role.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Role",
  props: {
    role: Object,
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

.name {
  font-family: 黑体;
  font-size: 24px;
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