<template>
<b-navbar type="dark" toggleable="lg" class="navbar">
    <b-navbar-brand href="/">
      <img class="logoconstruction" src="~/assets/vector.png" alt="NavicLogo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
     <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav >
        <b-nav-item class="ml-auto" href="/about">ABOUT</b-nav-item>
        <b-nav-item href="/#course">COURSES</b-nav-item>
        <b-nav-item href="/faqs">FAQ</b-nav-item>
        <b-nav-item href="/media">MEDIA & PRESS</b-nav-item>
        <!-- <b-nav-item href="/terms">T&C</b-nav-item>
        <b-nav-item href="/privacy">privacy</b-nav-item>
        <b-nav-item href="/refund">refund</b-nav-item> -->
        <!-- <b-nav-item href="/profile" v-if="authenticatedUser">
          <b-button class="navbar-button" variant="dark">profile</b-button>
        </b-nav-item> -->
        <b-nav-item v-if="authenticatedUser">
          <b-button class="navbar-button" variant="dark" @click="logout">SIGN OUT</b-button>
        </b-nav-item>
        <b-nav-item v-if="authenticatedUser" href="/profile">
          <!-- <b-button class="navbar-button" variant="dark">profile</b-button> -->
          <img src="~/assets/icon2.png" class="img-b">
        </b-nav-item>
        <b-nav-item v-else href="/login"><b-button class="navbar-button" variant="dark">SIGN IN</b-button></b-nav-item>
    </b-navbar-nav>
     </b-collapse>
     <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TCCB5D2');</script>
<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCCB5D2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  </b-navbar>
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
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace({ name: 'index' })
      })
    }
  }
  // created () {
  //   firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  // }
}
</script>

<style>
.navbar{
background: #242728;
box-shadow: 0px 5px 10px rgba(2, 2, 2, 0.2);
}
.nav-link{
  color: rgba(255, 255, 255, 1) !important;
}
.nav-link:hover{
  background: linear-gradient(180deg, #00C2FF 0%, #3DFFA2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
.logoconstruction{
    align-content: center;
    text-align: center;
    width: 9rem !important;
    height: auto;
    margin: 0px 30px;
    padding: 0px;
}

.navbar-nav{
  margin-left: 50%;
  font-size: 15px;
  font-family: NOW;
  display: contents;
  color: rgba(255, 255, 255, 1 )!important;
}
.navbar-button{
border: 1px solid #FFFFFF;
border-radius: 25.1825px;
display: inline-block;
width: max-content;
background-color: #242728;
color: rgb(255, 255, 255);

}
.img-b{
  border: 1px solid #FFFFFF;
border-radius: 25.1825px;
display: inline-block;
height: 38px;
width: 38px;
}
.navbar-button:hover{
  background:none !important;
}
.nav-item{
  padding-right: 60px;
  color: #ffffff !important;
}

@media screen and (max-width: 600px) {
.navbar-collapse{
  text-align: right;
  padding-left:76%;
}
}
</style>
