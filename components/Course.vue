<template>
  <section id="course" class="course-body">
    <h1 class="section-head white">Courses</h1>
    <b-row>
      <b-col class="box-bg">
        <div></div>
        <p class="course-title"><b>EVOLVE</b>Go</p>
        <!-- <p class="course-title"><b>coming soon</b></p> -->
        <h3 class="price navic-color">
          <div style="font-size: 12px">from &nbsp;</div>
          <!-- ₹990 -->
          coming soon
        </h3>
        <div>
          <img src="~/assets/courseline.svg" />
        </div>
        <ul>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> 2 Hours
            Workshop
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Segregated QA
            sessions
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Live
            Interactive Session
          </li>
        </ul>
        <b-row
          ><b-col></b-col
          ><b-col cols="8" align-self="center" style="margin-top: 9rem"
            >
            <!-- <a href="/eg"><b-button class="btn-black coursebtn">KNOW MORE</b-button></a> -->
            <div v-if="authenticatedUser">
            <b-button class="btn-black coursebtn" @click="evolvego">KNOW MORE</b-button>
          </div>
          <div v-else>
            <b-button href="/eg" class="btn-black coursebtn">KNOW MORE</b-button>
          </div>
            </b-col
          ><b-col></b-col
        ></b-row>
      </b-col>
      <b-col class="box-bg">
        <div></div>
        <h2 class="course-title">EVOLVE I, II & III</h2>
        <h3 class="price navic-color">
          <div style="font-size: 12px">from &nbsp;</div>
          ₹14990
        </h3>
        <div>
          <img src="~/assets/courseline.svg" />
        </div>
        <ul>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> 10 Week Courses
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Segregated QA
            sessions
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Live
            Interactive Session
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> 10 Subjects
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> 10 Assignments
            & 3 Projects
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Individual
            feedback
          </li>
        </ul>
        <b-row
          ><b-col></b-col
          ><b-col cols="8" align-self="center" style="margin-top: 2rem"
            >
            <a href="/e"><b-button class="btn-black coursebtn">KNOW MORE</b-button></a>
             <!-- <div v-if="authenticatedUser">
            <b-button class="btn-black evolvegobtn" @click="evolve">KNOW MORE</b-button>
          </div>
          <div v-else>
            <b-button href="/e" class="btn-black coursebtn">KNOW MORE</b-button>
          </div> -->
            </b-col
          ><b-col></b-col
        ></b-row>
      </b-col>
      <b-col class="box-bg">
        <div></div>
        <h2 class="course-title">EVOLVEPrep</h2>
        <!-- <h2 class="course-title">coming soon</h2> -->
        <h3 class="price navic-color">
          <div style="font-size: 12px"></div>
          <!-- ₹4990 -->
          coming soon
        </h3>
        <div>
          <img src="~/assets/courseline.svg" />
        </div>
        <ul>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> 5 day career
            prep curriculum
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Segregated QA
            sessions
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Live
            Interactive Session
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> 2 Live projects
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Individual
            student feedback
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Individual
            feedback
          </li>
        </ul>
        <b-row
          ><b-col></b-col
          ><b-col cols="8" align-self="center" style="margin-top: 0rem"
            >
            <!-- <a href="/epr"><b-button class="btn-black coursebtn">KNOW MORE</b-button></a> -->
             <div v-if="authenticatedUser">
            <b-button class="btn-black coursebtn" @click="evolveprep">KNOW MORE</b-button>
          </div>
          <div v-else>
            <b-button href="/epr" class="btn-black coursebtn">KNOW MORE</b-button>
          </div>
            </b-col
          ><b-col></b-col
        ></b-row>
      </b-col>
      <b-col class="box-bg">
        <div></div>
        <h2 class="course-title">EVOLVEPro</h2>
        <!-- <h2 class="course-title">coming soon</h2> -->
        <h3 class="price navic-color">
          <div style="font-size: 12px"></div>
          <!-- Price On Request -->
          coming soon
        </h3>
        <div>
          <img src="~/assets/courseline.svg" />
        </div>
        <ul>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Customized
            Course
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> 5 or more
            subjects
          </li>
          <li class="liitem">
            <b-icon icon="check-cic rcle" variant="info"></b-icon> Live
            Interactive Session
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Segregated Q&A
            sessions
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Live Projects
          </li>
          <li class="liitem">
            <b-icon icon="check-circle" variant="info"></b-icon> Individual
            employee feedback
          </li>
        </ul>
        <b-row
          ><b-col></b-col
          ><b-col cols="8" align-self="center" style="margin-top: 2rem"
            ><a href="/evolvePro"><b-button class="btn-black coursebtn">CUSTOMIZE NOW</b-button></a
            ></b-col
          ><b-col></b-col
        ></b-row>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import firebase from 'firebase'
import 'firebase/auth'
export default {
  mounted () {
    this.setupFirebase()
  },
  data () {
    return {
      authenticatedUser: false
    }
  },
  methods: {
    signout () {
      alert('test')
    },
    setupFirebase () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('logged in')
          this.authenticatedUser = true
        } else {
          this.authenticatedUser = false
        }
      })
    },
    evolvego () {
      this.$router.replace({ name: 'evolveGo' })
    },
    evolveprep () {
      this.$router.replace({ name: 'evolvePrep' })
    }
  }
  // created () {
  //   firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  // }
}
</script>
<style scoped>
.course-body {
  height: 100%;
  width: 100%;
  background: #242728;
  padding: 3rem;
  text-align: center;
}
.course-title {
  font-family: Brandon Grotesque;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 55px;
  /* or 231% */

  text-align: center;

  color: #ffffff;
}
.price {
  font-family: Now;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 55px;
  /* identical to box height, or 462% */
  text-align: center;
  text-transform: capitalize;
  display: inline-flex;
}
.sub-col {
  font-family: Now;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 55px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  text-align: left;
  margin: 10px;
  padding-top: 30px;
}

.sub-text {
  padding: 10px;
}
.text-column {
  font-size: 14px;
  text-align: justify;
}

.course-list {
  align-content: center;
  text-align: left;
  padding-top: 70px;
}
.course-item {
  padding: 10px;
  text-transform: uppercase;
}
.liitem {
  font-family: NowThin;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  align-items: center;
  color: #ffffff;
}
.seats-time {
  display: inline-flex;
  margin: 1px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
}
.seats-timetext {
  text-align: center;
  padding: 10px;
}
.seats-circle {
  display: block;
  padding-block: 70px;
  height: 200px;
  width: 200px;
  border-radius: 100%;
  opacity: 0.5;
  border: 21.875px solid #0f0f0f;
  filter: blur(0px);
  border: 2.19px solid;
  border-image-source: linear-gradient(180deg, #00c2ff 0%, #3dffa2 100%);
  box-shadow: inset -4px -4px 7.29167px rgba(65, 65, 65, 0.25),
    inset 4px 4px 7.29167px rgba(0, 0, 0, 0.25);
}
.circle-border {
  background: #0f0f0f;
  box-shadow: inset -4px -4px 4px rgba(40, 40, 40, 0.25),
    inset 4px 4px 4px rgba(2, 2, 2, 0.25);
  border-radius: 100%;
  display: inline-flex;
  padding: 20px;
  height: 60px;
  width: 60px;
  text-align: center;
}
.circle-group {
  display: inline-flexbox;
  text-align: center;
}
.textbox-left {
  margin-left: 0px;
}
.coursebtn {
  width: 11rem;
  /* padding: 0rem 0rem; */
  /* left: 50%;
  right: 50%; */
  align-self: center;
  bottom: 0%;
}
.box-bg {
  font-family: Now;
  color: white;
}
</style>
