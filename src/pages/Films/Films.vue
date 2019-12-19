<template>
  <div class="container-fluid">
    <div class="mt-5">电影浏览</div>
    <ul class="mt-5">
      <li v-for="(film, index) in films" :key="index" class="list-unstyled mb-5">
        <Film :film="film"></Film>
      </li>
    </ul>
  </div>
</template>

<script>
import Film from "../../components/Film";
export default {
  name: "Films",
  data() {
    return {
      films: [
        {
          cover: "./public/images/test1.png",
          title: "千与千寻",
          director: "宫崎骏",
          description:
            "千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。"
        },
        {
          cover: "../../../public/images/test2.png",
          name: "哈尔的移动城堡",
          director: "宫崎骏",
          description:
            "继母因无力负担生活，将苏菲和她的两个妹妹都送到了制帽店去当学徒。两个妹妹很快先后就离开了制帽店去追寻各自的梦想，只有苏菲坚持了下来。一天，小镇旁边来了一座移动堡垒，传说堡垒的主人哈尔专吸取年青姑娘的灵魂，所以小镇的姑娘都不敢靠近。"
        },
        {
          cover: "./public/images/test1.png",
          title: "千与千寻",
          director: "宫崎骏",
          description:
            "千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。"
        },
        {
          cover: "../../../public/images/test2.png",
          name: "哈尔的移动城堡",
          director: "宫崎骏",
          description:
            "继母因无力负担生活，将苏菲和她的两个妹妹都送到了制帽店去当学徒。两个妹妹很快先后就离开了制帽店去追寻各自的梦想，只有苏菲坚持了下来。一天，小镇旁边来了一座移动堡垒，传说堡垒的主人哈尔专吸取年青姑娘的灵魂，所以小镇的姑娘都不敢靠近。"
        },
        {
          cover: "./public/images/test1.png",
          title: "千与千寻",
          director: "宫崎骏",
          description:
            "千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。"
        },
        {
          cover: "../../../public/images/test2.png",
          name: "哈尔的移动城堡",
          director: "宫崎骏",
          description:
            "继母因无力负担生活，将苏菲和她的两个妹妹都送到了制帽店去当学徒。两个妹妹很快先后就离开了制帽店去追寻各自的梦想，只有苏菲坚持了下来。一天，小镇旁边来了一座移动堡垒，传说堡垒的主人哈尔专吸取年青姑娘的灵魂，所以小镇的姑娘都不敢靠近。"
        }
      ]
    };
  },
  components: {
    Film
  }
};
</script>

<style scoped>
</style>