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
        <b-nav-item href="/profile" v-if="isLoggedIn"><b-button class="navbar-button" variant="dark">profile</b-button></b-nav-item>
        <b-nav-item href="/login" v-else><b-button class="navbar-button" variant="dark">SIGN IN</b-button></b-nav-item>
    </b-navbar-nav>
     </b-collapse>
  </b-navbar>
</template>

<script setup>
import { ref } from 'vue' // used for conditional rendering
import firebase from 'firebase'
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})
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
.navbar-button:hover{
  background:none !important;
}
.nav-item{
  padding-right: 50px;
  color: #ffffff !important;
}

@media screen and (max-width: 600px) {
.navbar-collapse{
  text-align: right;
  padding-left:76%;
}
}
</style>
