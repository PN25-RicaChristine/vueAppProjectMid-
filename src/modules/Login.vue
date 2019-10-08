<template>
  <div id="background" style="padding-top:20px;">
    <center>
      <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
        <form class="container">
          <center>
            <h1>Login</h1>
          </center>
          <hr>
          <div class="row">
            <label id="username" for="loginUsername">Username:</label>
            <input
              required
              v-model="username"
              name="username"
              class="form-control"
              placeholder="Enter Username"
            > 
            <br>
          </div>
          <br>
          <div class="row">
            <label id="pass" for="loginPassword">Password:</label>
            <input
              required
              v-model="password"
              type="password"
              name="password"
              class="form-control"
              id="loginPassword"
              placeholder="Enter Password"
            >
          </div>
          <br>
           <div class="row">
            <label id="conpass" for="inputConPassword" style="color:white">Confirm Password:</label>
            <input
              v-model="conpassword"
              required
              type="password"
              class="form-control"
              id="inputConPassword"
              placeholder="Confirm Password"
            >
          </div>
          <br>
          <button id="btnLogin" class="btn btn-primary" @click="submit">
            <h6>Login</h6>
          </button>
          <br>
        </form>
      </div>
    </center>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";

#username {
  color: $plain !important;
}
#pass {
  color: $plain !important;
}

#divLogin{
  background-color: $formbg !important;
}
</style>
<script>
import AUTH from 'services/auth'
import ROUTER from "router";
// import jquery from 'jquery'
export default {
  data() {
    AUTH;
    return {
      username: "",
      password: "",
      conpassword:"",
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      let user = AUTH.login(this.username, this.password);
      
      if (this.username == "" || this.password == "" || this.conpassword=="") {
        this.$swal.fire("Inputs are required!"," ","warning");
      }else if(this.password != this.conpassword){
        this.$swal.fire("Password Mismatch!"," ","error");
      } else {
        this.$swal.fire("You need to register first!"," ","error");
        AUTH.setUser(user);
        if (user !== null) {
          this.$swal.fire("Successfully Login!"," ","success");
          ROUTER.push("/Dashboard");
        }
      }
    }
  }
};
</script>