<template>
  <div id="app">
    <router-view name="header" />
    <router-view/>
    <router-view name="footer" />
  </div>
</template>

<style lang="less">
#app {
  color: #333;
  font-family: "PingFangSC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
