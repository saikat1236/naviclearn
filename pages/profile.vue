<template>
  <section class="about-main py-4">
      <div class="center">
          <img src="~/assets/a4.png" alt="Avatar" class="avatar2" >
        </div>
     <b-row>
            <h1>name<br></h1>
     </b-row>
     <b-row>
            <h1>email</h1>
     </b-row>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.about-main{
    text-align: left;
    color: white;
    padding: 120px;
}
.img-about{
    text-align: right !important;
}
.text-about{
    font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
}
.about-head{
font-family: Now;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 33px;
letter-spacing: 0em;
text-align: center;
}
.middle-head{
font-size: 42px;
font-style: normal;
font-weight: 900;
font-family: Brandon Grotesque;
line-height: 55px;
letter-spacing: 0em;
text-align: center;
padding:1rem 0px 2rem 35%;
}
.avatar2{
  /* vertical-align: middle; */
  width: 200px;
  height: 200px;
  border-radius: 50%;
  /* color: black; */
  /* background-color: black; */
  background-color: #242728;border-color: #242728;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>
