<template>
  <div class="container">
    <div class="title mt-4">吉卜力音乐</div>
    <aplayer class="mt-5" :audio="audio" :lrcType="0" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: [
        {
          name: "風になる",
          artist: "つじあやの",
          url: "/music/風になる.mp3"
        },
        {
          name: "君をのせて",
          artist: "井上あずみ",
          url: "/music/君をのせて.mp3"
        },
        {
          name: "Kiki's Delivery Service",
          artist: "久石让",
          url: "/music/Kiki's Delivery Service.mp3"
        },
        {
          name: "One Summer's Day",
          artist: "久石让",
          url: "/music/One Summer's Day.mp3"
        },
        {
          name: "もののけ姫",
          artist: "米良美一",
          url: "/music/もののけ姫.mp3"
        }
      ]
    };
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
