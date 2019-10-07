<template>
  <sidebar-menu :menu="menu" id="side"/>
</template>

<style scoped lang="scss">
@import "assets/colors.scss";
#side{
margin-top: 56px;
height:93%;
background-color:$formbg !important;
width:200px;
}

</style>

 
<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true
        },
        {
          href: "/Dashboard",
          title: "Dashboard",
          icon: "fa fa-chart-area",
        },
        {
          href: "/Subjects",
          title: "Subjects",
          icon: "fa fa-table",
        },
        {
          href: "/PersonalInfo",
          title: "Personal Info",
          icon: "fa fa-chart-area",
        },
        {
          href: "/Login",
          title: "Logout",
          icon: "fa fa-chart-area",
        }
      ]
    };
  }
};
</script> 