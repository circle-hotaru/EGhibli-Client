<template>
  <div class="container-fluid py-5 about">
    <div class="row justify-content-center py-5">
      <div class="text-center col-md-12">
        <div class="title">欢迎来到吉卜力世界！</div>
        <div
          class="text px-5 mt-3"
        >吉卜力工作室（スタジオジブリ，Studio Ghibli），是一家日本的动画工作室。其动画作品以高质量著称，其细腻又富有生气、充满想象力的作品在全世界获得极高的评价。吉卜力工作室现今位于日本东京都近郊的小金井市，占地1000多㎡，当前约有300多名员工。工作室标识为其代表作品角色《龙猫》来设计的。吉卜力工作室的作品主要由宫崎骏、高畑勋负责创作，铃木敏夫担任营销。作曲家久石让亦为许多吉卜力工作室的作品制作过电影音乐。该工作室的影像作品由迪士尼公司发行。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about {
  height: 600px;
  background: url("../../../public/images/about.jpg");
  background-size: cover;
}
.title {
  font-family: Calibri;
  font: 72px bold;
  color: #6ab446;
}
.text {
  font-size: 20px;
  text-align: justify;
  color: white;
}
</style>
