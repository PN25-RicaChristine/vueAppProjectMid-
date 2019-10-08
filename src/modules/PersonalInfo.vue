<template>
  <div id="container">
    <center>
      <div id="card">
        <b-card  class="overflow-hidden" style="max-width: 600px;background-color:rgba(255, 255, 255,0.6)">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="require('assets/user.png')" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Personal Information" style="font-weight:bold;font-size:20px;">
                <hr>
                <br>
                <b-card-text>
                  <h6>Username: <br><i>{{username}}</i></h6>
                  <h6>Email: <br><i>{{email}}</i></h6>
                  <h6 type="password">Password: <br><i>{{password}}</i></h6>
                </b-card-text>
                <center>
                  <br><br>
                  <router-link to="/Update"> <b-button variant="primary" @click="removeItem">Edit Account?</b-button></router-link>
                </center>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </center>
  </div>
</template>

<style scoped lang="scss">
@import "assets/colors.scss";
 .jumbotron{
   color: $primary !important;
    }
#card {
  margin-top: 100px;
  // margin-left: 380px;
}



i{
  color:$primary !important;
}
</style>
<script>
import AUTH from "services/auth";
export default {
  data() {
    return {
      auth: AUTH,
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email"),
      password: sessionStorage.getItem("Password")
    };
  },
  methods: {
   
  }
};
</script>