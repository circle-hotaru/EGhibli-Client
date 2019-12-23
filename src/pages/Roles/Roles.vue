<template>
  <div class="container">
    <div class="title mt-4">人物浏览</div>
    <ul class="mt-5">
      <li v-for="(role, index) in roles" :key="index" class="list-unstyled mb-5">
        <Role :role="role"></Role>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Role from "../../components/Role";

export default {
  name: "Films",
  computed: {
    ...mapState(["roles"])
  },
  mounted() {
    this.$store.state.roles;
  },
  components: {
    Role
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