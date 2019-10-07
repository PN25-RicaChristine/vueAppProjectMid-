<template>
  <div id="container">
    <center>
      <div id="card">
        <b-card  class="overflow-hidden" style="max-width: 540px;background-color:rgba(255, 255, 255,0.6)">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="require('assets/user.png')" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Personal Info">
                <hr>
                <br>
                <b-card-text>
                  <h6>Username: <i>{{username}}</i></h6>
                  <h6>Email: <i>{{email}}</i></h6>
                  <h6 type="password">Password: <i>{{password}}</i></h6>
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
  margin-top: 50px;
  // margin-left: 380px;
}



i{
  color:green;
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