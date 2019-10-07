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
              <div style="text-align:center;font-size:20px"><b>COURSE AND SUBJECT LISTS</b></div>
              
      
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">COURSE</th>
                    <th scope="col">SUBJECT</th>
                    <th scope="col">TEACHER</th>
                    <th scope="col">TIME</th>
                    <th scope="col">DAY</th>
                    <th scope="col">VENUE</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody hover v-for="(item, index) in this.rows" :key="index">
                  <tr>
                    <td>{{ item.course }}</td>
                    <td>{{ item.subject }}</td>
                    <td>{{ item.teacher }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.day }}</td>
                    <td>{{ item.venue }}</td>
                    <td><b-button variant="primary" @click="removeItem">Remove</b-button></td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </center>
        </div>
        <div class="col">
          <center>
            <b-card text-align id="card" img-top tag="article" class="mb-2" style="background-color:rgba(255, 255, 255,0.6)">
              <b-form-group label-for="input-lg">
                <label id="Subject">Course:</label>
                <b-form-input v-model="content.course" id="subject" size="sm"></b-form-input>
                <label id="Subject">Subject:</label>
                <b-form-input v-model="content.subject" id="subject" size="sm"></b-form-input>
                <label id="teacher">Teacher:</label>
                <b-form-input v-model="content.teacher" id="teacher" size="sm"></b-form-input>
                <label id="time">Time:</label>
                <b-form-input v-model="content.time" id="time" size="sm"></b-form-input>
                <label id="time">Day:</label>
                <b-form-input v-model="content.day" id="day" size="sm"></b-form-input>
                <label id="room">Venue:</label>
                <b-form-input v-model="content.venue" id="room" size="sm"></b-form-input>
                <br />
                <b-button variant="info" @click="addItem">Add Subject</b-button>
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
  margin-top: 100px;
  margin-left: 20px;
  width: 300px;
}
#card1{
    margin-top: 100px;
}

th{
  color:white;
}
</style>

<script>
export default {
  data() {
    return {
      rows: [],
      content: {
        course: "",
        subject: "",
        teacher: "",
        time: "",
        day: "",
        venue: ""
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        course: this.content.course,
        subject: this.content.subject,
        teacher: this.content.teacher,
        time: this.content.time,
        day: this.content.day,
        venue: this.content.venue
      };
      if (
        this.content.course == "" ||
        this.content.subject == "" ||
        this.content.teacher == "" ||
        this.content.time == "" ||
        this.content.day == "" ||
        this.content.venue == ""
      ) {
        this.$swal.fire("Please provide inputs","Inputs are required!","warning");
      } else {
        this.$swal.fire("Succesfully Added",this.content.course+" "+this.content.subject,"success");
        this.rows.push(object);
        this.content.course = "";
        this.content.subject = "";
        this.content.teacher = "";
        this.content.time = "";
        this.content.day = "";
        this.content.venue = "";
      }
    },
    // removeItem(){
    //   var object = {
    //     course: this.content.course,
    //     subject: this.content.subject,
    //     teacher: this.content.teacher,
    //     time: this.content.time,
    //     day: this.content.day,
    //     venue: this.content.venue
    //   }
    //   this.rows.splice(object,1);
    // }

    removeItem(e){
      for (let i = 0; i < this.rows.length; i++) {
            if (this.rows[i].course === this.delInfo.delCourse) {
              this.rows.splice(this.rows.indexOf(this.rows[i], 1));
            }
          }
          
    }
  }
};
</script>