<template>
    <b-container fluid class="level1 bg">
    <h1 class="section-header white" style="padding:2rem 0 1rem" >  EVOLVE &nbsp;- &nbsp; Level I</h1>
<b-row class="">
<b-col lg="8" sm="12">
  <b-row>
    <b-col lg="5" >
      <ul class="listleftprep">
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Batch limit -10 students </li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> 10 Week Courses</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> 5 practicals</li>
      </ul> </b-col>
      <b-col lg="6">
        <ul class="listleftprep">
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Live Interactive Sessions</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> Segregated Q&A sessions</li>
      <li class="listitemgo"> <b-icon icon="check-circle" variant="info"></b-icon> 1-to-1 feedback</li>
      </ul>
      </b-col>
  </b-row>
  <b-row class="courseboxleft">
    <h3 class="middlehead">ABOUT</h3>
    <p class=preptext>Start<br>
Begin your journey with Level 1 of the EVOLVE program to prepare and train yourself for the future of marketing. With a curated selection of 10 starter subjects, Level 1 aims to develop your curiosity and find up your marketing game whilst you learn and adapt to the ever-changing environment.<br> EVOLVE-I is created for marketers by marketers. In a rapidly changing communications industry, EVOLVE aims to work with limited batches and grow your understanding about the future of marketing. Whether you come from Advertising, Digital Marketing, Public Relations or social media marketing, EVOLVE will add value to your personal marketing journey. *Recommended to take the courses in sequence.
 </p>
<!-- <p class="coursetiming">
Next Batch:  &nbsp;<b-icon icon="calendar3" variant="info"></b-icon>  Starting 15st August 2022 <b-icon icon="clock-history" variant="info"></b-icon></p> -->
  </b-row>
</b-col>
<b-col lg="4" class="coursebar">
  <div class="seatsleft">
    <h2 class="navic-color"> 5/10 SEATS LEFT</h2>
    <b-progress height="1.5 rem" width="2rem" :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <br>
    <br>
    <h4> STARTS IN </h4>
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
    <div class="py-5">
      <h2 class="navic-color pb-4">₹14990</h2>
      <!-- <a href="/registration"><b-button class="btn-black"> ENROLL NOW </b-button></a> -->
       </div>
  <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_K0MlZy4FQ5zlZf" async> </script> </form>
    </div>
</b-col>
</b-row>
  <h2 class="center centerhead py-2">Modules in This Course</h2>
  <b-row align-self="center">
    <b-col align-self="start"></b-col>
    <b-col lg="6" align-self="center">
  <div class="accordion accordian-body" role="tablist">
  <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/know.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-1 variant="dark">Know Your Tech Giants </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">
            &#9679;&nbsp;The evolution of Data<br>
&#9679;&nbsp;Silicon Valley<br>
&#9679;&nbsp;How did doing business change?<br>
&#9679;&nbsp;Who are they?<br>
&#9679;&nbsp;What do they know about you?<br>
&#9679;&nbsp;Role of India in Tech <br>
&#9679;&nbsp;What can we learn?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/digital.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-2 variant="dark">Digital Disruption </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is disruption?<br>
&#9679;&nbsp;How does an
industry get
disrupted?<br>
&#9679;&nbsp;Pros and cons of
disruption<br>
&#9679;&nbsp;Case 1<br>
&#9679;&nbsp;Case 2<br>
&#9679;&nbsp;Case 3<br>
&#9679;&nbsp;How can you
disrupt?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/E-commerce.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="dark">E-commerce</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;History of e-commerce<br>
&#9679;&nbsp;e-commerce today<br>
&#9679;&nbsp;Industry scope<br>
&#9679;&nbsp;Milestones<br>
&#9679;&nbsp;e-commerce in
2020<br>
&#9679;&nbsp;How can you use e-commerce for you<br>
&#9679;&nbsp;Future of e-commerce</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/Frame7.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-4 variant="dark">Digital Detox</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;Since this subject
concerns a detox of all
digital activities, all
components of this
session will be non-digital in nature.</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/Frame9.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-5 variant="dark">AI in Marketing </b-button>
      </b-card-header>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is AI<br>
&#9679;&nbsp;What is ML<br>
&#9679;&nbsp;What can AI do?<br>
&#9679;&nbsp;Types of AI<br>
&#9679;&nbsp;Who uses AI?<br>
&#9679;&nbsp;Most used AI<br>
&#9679;&nbsp;AI in comms</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/job.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-6 variant="dark">Marketing Jobs of Tomorrow</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is work?<br>
&#9679;&nbsp;How have jobs
changed?<br>
&#9679;&nbsp;The gig economy<br>
&#9679;&nbsp;Value creation<br>
&#9679;&nbsp;What is today what
wasn't yesterday?<br>
&#9679;&nbsp;Dependance on
automation over
people</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/media.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-7 variant="dark">The Media Industry </b-button>
      </b-card-header>
      <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What is Media?<br>
&#9679;&nbsp;What encapsulates
the media industry?<br>
&#9679;&nbsp;How did the
internet change
media?<br>
&#9679;&nbsp;Who are the biggest
media corporations?<br>
&#9679;&nbsp;How has media
evolved?
</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/monitor.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-8 variant="dark">Data Monitoring and Permissions</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;Data monitoring
today<br>
&#9679;&nbsp;Role of corporations<br>
&#9679;&nbsp;Role of governments<br>
&#9679;&nbsp;What do you 'Agree'
to?<br>
&#9679;&nbsp;What do you own?<br>
&#9679;&nbsp;How much are you
worth?</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/smart-watch.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-9 variant="dark">Wearable Tech </b-button>
      </b-card-header>
      <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">&#9679;&nbsp;What are wearables?<br>
&#9679;&nbsp;Use-case of
wearables<br>
&#9679;&nbsp;Journey of
wearables<br>
&#9679;&nbsp;Pros and cons of
wearables<br>
&#9679;&nbsp;Data analysis<br>
&#9679;&nbsp;Importance of social
currency<br>
&#9679;&nbsp;Future of wearables</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>
    <b-row class="modulesbody">
    <b-col cols="2" class="modulesleft">
  <img src="~/assets/evolve1/socs.svg" class="moduleimg" height="55px;">
    </b-col>
    <b-col cols="10" class="py=0">
  <b-card no-body class="mb-1 darkbody">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-10 variant="dark">Social Commerce</b-button>
      </b-card-header>
      <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><p class="white insidetext">Marketing & communications students from the age of 8 to 80. We highly recommend this course to 3 kinds of students:<br>
              1. Students in graduation fields of Digital marketing, BMS/BMS, Management, Arts, Commerce, Communications, Advertising and Media<br>
              2. MBAs and Post graduates in Marketing streams<br>
              3. Professionals in Digital marketing, PR, Advertising, Media Planning & buying and Journalists
              <br> If you do well in EVOLVE, you’ll have more practical knowledge than half your peers and seniors in your current or future organisation.</p></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </b-col>
  </b-row>

  </div>
    </b-col>
    <b-col align-self="end"></b-col>
  </b-row>
<div class="coursebottom hidemobile">
  <b-row>
    <b-col lg="4" align-self="start"></b-col>
    <b-col lg="4" align-self="center" class="px-2">
      <div class="seatsleft">
    <h2 class="navic-color"> 5/10 SEATS LEFT</h2>
    <b-progress height="1.5 rem" width="2rem" :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <br>
    <br>
    <h4> STARTS IN </h4>
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
    <div class="py-5">
      <h2 class="navic-color pb-4">₹14990</h2>
<!-- <a href="/registration"><b-button class="btn-black"> ENROLL NOW </b-button></a> -->
    </div>
    </div>
    </b-col>
    <b-col align-self="end"></b-col>
  </b-row>
</div>
<h2 class="center py-6"> Who is EVOLVE-I made for? </h2>
<div class="for center py-4">
  <b-img src="~/assets/buis.svg"></b-img>
  <b-img src="~/assets/pro.svg"></b-img>
  <b-img src="~/assets/stu.svg"></b-img>
</div>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
      // timerCount: 10
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
}
</script>
<style>
.seatsleft{
  font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 14.4762px;
line-height: 14px;
text-align: center;
}
.level1{
  display: flexbox;
  color:white;
  padding:0px 100px;
}
.ul {
  list-style-type: none;
}
.listleftprep{
padding-inline-start: 0px !important;
font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 55px;
align-items: center;
}
.preptext{
  font-family: NowThin;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */
text-align: justify;
letter-spacing: 0.0161em;
}
.middlehead{
  font-family: Brandon Grotesque;
font-style: normal;
font-weight: 420;
font-size: 24px;
line-height: 55px;
/* or 231% */
text-transform: uppercase;
color: #FFFFFF;
}
.coursebar{
  text-align: center;
}
.progress{
  border-radius: 20px;
}
.coursetiming{
  font-family: Now;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
}
.courseboxleft{
  text-align: left;
  padding: 10px 53px;
}
.coursebottom{
  text-align: center;
  padding: 20px;
}
.seatbutton{
background: #242728;
box-shadow: inset -4.8254px -4.8254px 4.8254px rgba(68, 68, 68, 0.25), inset 4.8254px 4.8254px 4.8254px rgba(2, 2, 2, 0.15);
border-radius: 48.254px;
margin: 22px 45px;
padding: 11px 13px 11px 13px;
display: inline-flex;
}
.coursecard{
  text-align: center;
  padding: 20px 20px;
  margin:20px;
}
.card-title{
  font-size:18px;
}
.card-img{
  height:100px;
}
.for{
  align-content: center;
}
.blackbar{
  background: #242728;
box-shadow: inset -4px -4px 4px rgba(68, 68, 68, 0.25), inset 4px 4px 4px rgba(2, 2, 2, 0.15);
border-radius: 10px;
display: flex;
text-align: center;
    padding:10px;
    margin: 15px;
}
.aquatext{
font-family: Now;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 26px;
}
.centrehead{
font-family: Brandon Grotesque;
font-style: normal;
font-weight: 900;
font-size: 24px;
line-height: 55px;
text-align: center;
}
</style>
