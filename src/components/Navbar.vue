<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <router-link to="/" class="navbar-brand">E-Ghibli</router-link>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="menu" class="collapse navbar-collapse ml-auto">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/search" class="nav-link">
            <i class="fas fa-search"></i> 搜索
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <i class="fas fa-home"></i> 首页
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/films" class="nav-link">
            <i class="fas fa-film"></i> 电影
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/people" class="nav-link">
            <i class="fas fa-grin-alt"></i> 人物
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/link" class="nav-link">
            <i class="fas fa-link"></i> 友链
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            <i class="fas fa-heart"></i> 关于
          </router-link>
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