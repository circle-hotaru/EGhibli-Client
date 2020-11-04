<template>
  <div class="container">
    <div class="title mt-5">人物浏览</div>
    <ul class="mt-5">
      <li
        v-for="(role, index) in roles"
        :key="index"
        class="list-unstyled mb-5"
      >
        <el-card shadow="hover">
          <Role :role="role" :index="index"></Role>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import Role from "../../components/Role";
import { mapState } from "vuex";

export default {
  name: "Films",
  mounted() {
    this.$store.dispatch("Roles/getAllRole");
  },
  computed: {
    ...mapState({
      roles: (state) => state.Roles.roles,
    }),
  },

  components: {
    Role,
  },
};
</script>

<style scoped>
.title {
  font-family: Calibri;
  font: 72px bold;
  color: #6ab446;
}
</style>