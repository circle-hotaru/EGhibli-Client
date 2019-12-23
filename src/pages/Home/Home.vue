<template>
  <div class="container-fluid py-5 home">
    <div class="row justify-content-center py-5">
      <div class="text-center col-md-12">
        <div class="title">E-Ghibli</div>
        <div class="subtitle mb-5">一个沉浸交互式新风格吉卜力平台</div>
        <div class="text">你所想要的 都是我们所努力的</div>
      </div>
      <div class="mt-4">
        <button class="btn btn-success" @click="$router.push('/films')">立即开始探索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.title {
  font-family: Calibri;
  font: 72px bold;
  color: white;
}

.subtitle {
  font-size: 16px;
  font-family: 等线;
  color: white;
}

.text {
  font-size: 20px;
  color: white;
}
.home {
  height: 600px;
  background: url("../../../public/images/home.jpg");
  background-size: cover;
}
</style>
