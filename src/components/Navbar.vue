<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <router-link to="/" class="navbar-brand">Eghibli</router-link>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="menu" class="collapse navbar-collapse ml-auto">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/search" class="nav-link">搜索</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/film" class="nav-link">电影</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/people" class="nav-link">人物</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/link" class="nav-link">友链</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">关于</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
</style>