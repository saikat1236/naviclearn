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
        <b-nav-item href="/login"><b-button class="navbar-button" variant="dark">SIGN IN</b-button></b-nav-item>
        <!-- <b-nav-item href="/profile"><b-button variant="dark" style="background-color: #242728;border-color: #242728;"><img src="~/assets/a4.png" alt="Avatar" class="avatar"></b-button></b-nav-item> -->
        <!-- <b-nav-item><div class="wrapper"><div class="single"><div class="box img"></div><div class="box img-txt"><div class="txt-area"><h7>saikat</h7></div></div></div></div></b-nav-item> -->
    </b-navbar-nav>
     </b-collapse>
  </b-navbar>
</template>

<script>
export default {

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
.avatar{
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* color: black; */
  /* background-color: black; */
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
/* .wrapper{
  width: 100px;
  height: 50px;
}
.box{
  width: 50px;
  height: 50px;
}
.img{
  background: url(~/assets/a4.png);
  -webkit-background-composite:cover;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateX(0px);
}
.single:hover .img{
  transform: translateX(-30px);
}
.img-txt{
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 5px;
box-sizing: border-box;
transform: translateX(-50px);
position: relative;
}
.single:hover .img-txt{
  transform: translateX(50px);
} */
</style>
