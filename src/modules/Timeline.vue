<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <center>
            <b-card
              text-align
              id="card1"
              img-top
              tag="article"
              style="max-width: 40rem;background-color:rgba(255, 255, 255,0.6)"
              class="mb-2"
          
            >
              <div style="font-size:20px;font-weight:bold;color:white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">
               TIMELINE POSTS</div>
              <br>
      <hr>
              <table class="table">
                <thead>
                
                </thead>
                <tbody v-for="(item, index) in this.rows" :key="index">
                  <tr>  
                    <td><b-card-img id="image" :src="require('assets/user.png')" class="rounded-0" style="width:50px;height:50px"></b-card-img>>>><b style="color:red"><u>{{username}}</u></b><br><center>{{ item.course }}</center></td>
        
                    <!-- <td>{{ item.subject }}</td>
                    <td>{{ item.teacher }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.day }}</td>
                    <td>{{ item.venue }}</td> -->
                  </tr>
                  <hr style="color:red">
                  <tr>
                      <td><i>October 8,2019</i></td>
                      <td style="text-align:right"> <b-button variant="warning" @click="removeItem">Remove</b-button> | <b-button variant="success" @click="editItem">Edit</b-button></td>
                  </tr>
                </tbody>
               
              </table>
              
<br>
               
            </b-card>
           
          </center>
        </div>
        <div class="col">
          <center>
            <b-card text-align id="card" img-top tag="article" class="mb-2" style="background-color:rgba(255, 255, 255,0.6);width:500px;float:right">
              <b-form-group label-for="input-lg">
                <label id="Subject"><b-card-img id="image" :src="require('assets/user.png')" class="rounded-0" style="width:50px;height:50px"></b-card-img><br>{{username}}<br></label>
                <b-form-textarea v-model="content.course" id="subject" style="height:200px;width:400px" placeholder="Type some text here..."></b-form-textarea>
                <br />
                <b-button variant="info" @click="addItem">Post</b-button>
              </b-form-group>
            </b-card>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang = "scss">
@import "assets/colors.scss";
#card {
  margin-top: 50px;
  margin-left: 20px;
  width: 300px;
}
#card1{
    margin-top: 50px;
}
</style>

<script>
export default {
  data() {
    return {
        username: sessionStorage.getItem("Username"),
      rows: [],
      content: {
        course: ""
       
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        course: this.content.course,
      };
      if (
        this.content.course == "" 
      ) {
        this.$swal.fire("Please provide inputs","Inputs are required!","warning");
      } else {
        this.$swal.fire("Succesfully Posted","","success");
        this.rows.push(object);

        this.content.course = "";
        
      }
    },
    removeItem(){
      var object = {
        course: this.content.course,
      
      }
      this.rows.splice(object,1);
    }
  }
};
</script>