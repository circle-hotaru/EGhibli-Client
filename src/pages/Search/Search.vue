<template>
  <div class="container-fluid">
    <div class="mt-5">电影搜索</div>
    <div class="row mt-5">
      <div class="mt-2">
        <i class="iconfont icon-sousuo col-md-9"></i>
      </div>
      <input placeholder="输入电影名来搜索" type="text" class="form-control col-md-10" v-model.trim="title" />
      <!-- <button class="btn btn-primary btn-block ml-2 col-md-1" @click="searchFilm">搜索</button> -->
    </div>
    <!-- v-show="!init" -->
    <div>
      <ul class="mt-5">
        <li v-for="(film, index) in searchFilm" :key="index" class="list-unstyled mb-5">
          <Film :film="film"></Film>
        </li>
      </ul>
      <!-- <div v-show="films.length === 0" class="container mt-5">
        <div class="row">
          <div style="font-family: 等线" v-show="!init">暂时没有您要搜索的电影~</div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Film from "../../components/Film";
import bus from "../../eventBus";

export default {
  name: "Search",
  data() {
    return {
      title: "",
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
          title: "哈尔的移动城堡",
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
          title: "哈尔的移动城堡",
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
          title: "哈尔的移动城堡",
          director: "宫崎骏",
          description:
            "继母因无力负担生活，将苏菲和她的两个妹妹都送到了制帽店去当学徒。两个妹妹很快先后就离开了制帽店去追寻各自的梦想，只有苏菲坚持了下来。一天，小镇旁边来了一座移动堡垒，传说堡垒的主人哈尔专吸取年青姑娘的灵魂，所以小镇的姑娘都不敢靠近。"
        }
      ]
    };
  },
  components: {
    Film
  },
  computed: {
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
  }
};
</script>

<style scoped>
</style>
