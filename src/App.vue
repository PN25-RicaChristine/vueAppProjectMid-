<template>
  <div id="app">
    <Header></Header>
    <Sidebar id="side"
    v-show="$route.path === '/Dashboard' || $route.path === '/Subjects' || $route.path === '/PersonalInfo' ? true : false"></Sidebar>
    <AppBody></AppBody>
  </div>
</template>

<script>
import Sidebar from "router/frame/Sidebar.vue";
import Header from "router/frame/Header.vue";
import AppBody from "router/frame/Body.vue";
export default {
  name: "app",
  components: {
    Header,
    AppBody,
    Sidebar
  }
};
</script>

<style>
body{
  background-image: url("http://static.asiawebdirect.com/m/phuket/portals/philippines-hotels-ws/homepage/cebu-island/best-cebu-attractions/pagePropertiesImage/best-cebu-attractions.jpg");
  background-size: cover;
}
</style>
