<template>
  <section class="evolve py-4">
    <h1 class="section-head white" style="padding: 2rem 0 0rem">EVOLVE</h1>
    <div class="evolve-box">
      <b-row>
        <b-col lg="5" class="leftevolvebox">
          <h1 class="evolveboxhead py-2">EVOLVE &nbsp;- &nbsp; Level I</h1>
          <p class="contenttextpg">Start</p>
          <p class="contenttextpg">
            Start Begin your journey with Level 1 of the EVOLVE program to
            prepare and train yourself for the future of marketing. With a
            curated selection of 10 starter subjects, Level 1 aims to develop
            your curiosity and find up your marketing game whilst you learn and
            adapt to the ever-changing environment.
          </p>
          <h1 class="priceevolvebox navic-color py-2">₹14990</h1>
          <!-- <h1 class="priceevolvebox navic-color py-2">coming soon</h1> -->
          <!-- <b-button href="/registration" class="btn-black evolvegobtn"> Enroll Now </b-button> -->
          <div v-if="authenticatedUser">
            <b-button class="btn-black evolvegobtn" @click="evolve1">View Course</b-button>
          </div>
          <div v-else>
            <b-button href="/login" class="btn-black evolvegobtn">View Course</b-button>
          </div>
        </b-col>
        <b-col lg="3" class="centerevolvebox">
          <ul>
            <li>&#9679;&nbsp;10 Weeks course</li>
            <li>&#9679;&nbsp;10 sessions</li>
            <li>&#9679;&nbsp;10 students</li>
            <li>&#9679;&nbsp;10 tools</li>
            <li>&#9679;&nbsp;1-to-1 feedback</li>
          </ul>
        </b-col>
        <b-col lg="4" class="coursebarevolve">
          <div class="seatsleft">
            <h2 class="navic-color">5/10 SEATS LEFT</h2>
            <b-progress
              height="1.5 rem"
              width="2rem"
              :value="50"
              variant="info"
              striped
              :animated="animate"
              class="mt-2"
            ></b-progress>
            <br>
            <br>
            <h4>STARTS IN</h4>
            <b-row class="inlineflexer justify-content-around">
              <b-col lg="1" sm="1" class="seatbutton">{{displayday}}</b-col
              ><b-col lg="1" sm="1" class="seatbutton">{{displayhour}}</b-col
              ><b-col lg="1" sm="1" class="seatbutton">{{displaymin}}</b-col>
            </b-row>
            <b-row class="inlineflexer justify-content-around">
              <b-col>DAYS</b-col>
              <b-col >HOURS</b-col>
              <b-col  >MINS</b-col>
            </b-row>
            <div class="py-5 hidemobile"></div>
          </div>
        </b-col>
      </b-row>
    </div>
    <!---- evolve 2-->
    <div class="evolve-box">
      <b-row>
        <b-col lg="5" class="leftevolvebox">
          <h1 class="evolveboxhead py-2">EVOLVE &nbsp;- &nbsp; Level II</h1>
          <p class="contenttextpg">Grow</p>
          <p class="contenttextpg">
            Get deeper into the EVOLVE curriculum with Level 2. With a curated
            selection of 10 intermediate subjects, this course allows you to
            expand your knowledge base into becoming a Jack of All Trades of
            marketing.
          </p>
          <!-- <h1 class="priceevolvebox navic-color py-2">₹24990</h1> -->
          <h1 class="priceevolvebox navic-color py-2">coming soon</h1>
          <!-- <b-button href="/registration" class="btn-black evolvegobtn"> Enroll Now </b-button> -->
          <!-- <b-button href="/login2" class="btn-black evolvegobtn">View Course</b-button> -->
          <div v-if="authenticatedUser">
            <b-button class="btn-black evolvegobtn" @click="evolve2">View Course</b-button>
          </div>
          <div v-else>
            <b-button href="/login" class="btn-black evolvegobtn">View Course</b-button>
          </div>
        </b-col>
        <b-col lg="3" class="centerevolvebox">
          <ul>
           <li>&#9679;&nbsp;10 Weeks course</li>
            <li>&#9679;&nbsp;10 sessions</li>
            <li>&#9679;&nbsp;10 students</li>
            <li>&#9679;&nbsp;10 tools</li>
            <li>&#9679;&nbsp;1-to-1 feedback</li>
          </ul>
        </b-col>
        <b-col lg="4" class="coursebarevolve">
          <div class="seatsleft">
            <h2 class="navic-color">3/10 SEATS LEFT</h2>
            <b-progress
              height="1.5 rem"
              width="2rem"
              :value="30"
              variant="info"
              striped
              :animated="animate"
              class="mt-2"
            ></b-progress>
            <br>
            <br>
            <h4>STARTS IN</h4>
            <b-row class="inlineflexer justify-content-around">
              <b-col lg="1" sm="1" class="seatbutton">{{displayday}}</b-col
              ><b-col lg="1" sm="1" class="seatbutton">{{displayhour}}</b-col
              ><b-col lg="1" sm="1" class="seatbutton">{{displaymin}}</b-col>
            </b-row>
            <b-row class="inlineflexer justify-content-around">
              <b-col>DAYS</b-col>
              <b-col >HOURS</b-col>
              <b-col  >MINS</b-col>
            </b-row>
            <div class="py-5 hidemobile"></div>
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- Evolve 3-->
    <div class="evolve-box">
      <b-row>
        <b-col lg="5" class="leftevolvebox">
          <h1 class="evolveboxhead py-2">EVOLVE &nbsp;- &nbsp; Level III</h1>
          <p class="contenttextpg">Dominate</p>
          <p class="contenttextpg">
            Expand your horizons and become the leader in your peer group with
            level 3. With a curated selection of 10 pro subjects, this course
            allows you to perfect your role and career specialization. Own it.
          </p>
          <!-- <h1 class="priceevolvebox navic-color py-2">₹34990</h1> -->
          <h1 class="priceevolvebox navic-color py-2">coming soon</h1>
          <!-- <b-button href="/registration" class="btn-black evolvegobtn"> Enroll Now </b-button> -->
          <!-- <b-button href="/login3" class="btn-black evolvegobtn">View Course</b-button> -->
          <div v-if="authenticatedUser">
            <b-button class="btn-black evolvegobtn" @click="evolve3">View Course</b-button>
          </div>
          <div v-else>
            <b-button href="/login" class="btn-black evolvegobtn">View Course</b-button>
          </div>
        </b-col>
        <b-col lg="3" class="centerevolvebox">
          <ul>
          <li>&#9679;&nbsp;10 Weeks course</li>
            <li>&#9679;&nbsp;10 sessions</li>
            <li>&#9679;&nbsp;10 students</li>
            <li>&#9679;&nbsp;10 tools</li>
            <li>&#9679;&nbsp;1-to-1 feedback</li>
          </ul>
        </b-col>
        <b-col lg="4" class="coursebarevolve">
          <div class="seatsleft">
            <h2 class="navic-color">2/10 SEATS LEFT</h2>
            <b-progress
              height="1.5 rem"
              width="2rem"
              :value="20"
              variant="info"
              striped
              :animated="animate"
              class="mt-2"
            ></b-progress>
            <br>
            <br>
            <h4>STARTS IN</h4>
            <b-row class="inlineflexer justify-content-around">
              <b-col lg="1" sm="1" class="seatbutton">{{displayday}}</b-col
              ><b-col lg="1" sm="1" class="seatbutton">{{displayhour}}</b-col
              ><b-col lg="1" sm="1" class="seatbutton">{{displaymin}}</b-col>
            </b-row>
            <b-row class="inlineflexer justify-content-around">
              <b-col>DAYS</b-col>
              <b-col >HOURS</b-col>
              <b-col  >MINS</b-col>
            </b-row>
            <div class="py-5 hidemobile"></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script>
import firebase from 'firebase'
import 'firebase/auth'
export default {
  data () {
    return {
      authenticatedUser: false,
      displayday: 0,
      displayhour: 0,
      displaymin: 0,
      displaysec: 0,
      loaded: false,
      expired: false
    }
  },
  mounted () {
    this.showremaining()
    this.setupFirebase()
  },
  computed: {
    _second: () => 1000,
    _minutes () {
      return this._second * 60
    },
    _hours () {
      return this._minutes * 60
    },
    _days () {
      return this._hours * 24
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
    evolve1 () {
      this.$router.replace({ name: 'evolveI' })
    },
    evolve2 () {
      this.$router.replace({ name: 'evolveII' })
    },
    evolve3 () {
      this.$router.replace({ name: 'evolveIII' })
    },
    formatNum: num => (num < 10 ? '0' + num : num),
    showremaining () {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(2022, 7, 17, 0, 0)
        const distance = end.getTime() - now.getTime()
        if (distance < 0) {
          clearInterval(timer)
          this.expired = true
        }
        const day = Math.floor(distance / this._days)
        const hour = Math.floor((distance % this._days) / this._hours)
        const min = Math.floor((distance % this._hours) / this._minutes)
        // const sec = Math.floor(distance / this._days)
        this.displayday = this.formatNum(day)
        this.displaymin = this.formatNum(min)
        this.displayhour = this.formatNum(hour)
        this.loaded = true
      }, 1000)
    }
  }
  // created () {
  //   firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  // }
}
</script>
<style>
.evolvegobtn{
 margin: 0rem 1rem 0rem 0rem;
}
.rightevolvebox{
    text-align: center !important;
}
.leftevolvebox{
    text-align: left;
}
.centerevolvebox{
    padding-top: 80px;
    font-size:18px;
}
.evolve{
    background:#242728;
    height: fit-content;
}
.evolve-box{
color:#FFFFFF;
border: 1.5px solid;
border-color: #21E3CE;
padding: 2rem;
margin: 3rem;
display: flexbox;
}
.rightseatcircle{
box-shadow: 4px 4px 7.2916669845581055px 0px #00000040 inset;
box-shadow: -4px -4px 7.2916669845581055px 0px #41414140 inset;
position: absolute;
width: 175px;
height: 170.62px;
border-radius: 0px;
border: 21.88px solid #242728;
opacity: 0.5;
}
.countdowntime{
background: #242728;
box-shadow: inset -4px -4px 4px rgba(40, 40, 40, 0.25), inset 4px 4px 4px rgba(2, 2, 2, 0.25);
border-radius: 40px;
display: inline-flex;
}
.countdownbox{
    display: flex;
}
.coursebarevolve{
  text-align: center;
  padding-top:3rem;
}
.seatsleft{
  font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 14.4762px;
line-height: 14px;
text-align: center;
}
@media only screen and (max-width: 768px){
  .evolveboxhead{
    font-size: 32px;
  }
  .seatsleft{
    padding: 2rem !important;
    margin: 2rem!important;
  }
}
.seatbutton{
background: #242728;
box-shadow: inset -4.8254px -4.8254px 4.8254px rgba(68, 68, 68, 0.25), inset 4.8254px 4.8254px 4.8254px rgba(2, 2, 2, 0.15);
border-radius: 48.254px;
margin: 22px 45px;
padding: 11px 13px 11px 13px;
display: inline-flex;
}
</style>
