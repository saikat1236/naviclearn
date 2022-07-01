<template>
  <b-container fluid class="customform">
      <div class="section-header white">EVOLVEPro</div>
      <div class="sub-text white" style="color:white">Tailored for agencies, corporates and start-ups</div>
      <div class="proformmain">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-row>
                  <b-col>
                      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group> </b-col>
       <b-col>      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group> </b-col>
              </b-row>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-3" label="Name of Company" label-for="input-3">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Name of your company"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Select Subjects (5 or more)" label-for="input-3" v-slot="{ ariaDescribedby }">
        <b-row>
        <b-col lg="4">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          stacked
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me1">Know Your Tech Giants</b-form-checkbox>
          <b-form-checkbox value="that1">VR & AR</b-form-checkbox>
           <b-form-checkbox value="that2">Growth Hacking</b-form-checkbox>
          <b-form-checkbox value="me2">The media industry</b-form-checkbox>
          <b-form-checkbox value="that3">Social Media & Government</b-form-checkbox>
           <b-form-checkbox value="that4">Content Marketing</b-form-checkbox>
          <b-form-checkbox value="me3">E-commerce</b-form-checkbox>
          <b-form-checkbox value="that5">Trolls and Bots</b-form-checkbox>
           <b-form-checkbox value="that6">Regional Communications</b-form-checkbox>
            <b-form-checkbox value="me4">Social Commerce</b-form-checkbox>
        </b-form-checkbox-group>
        </b-col>
        <b-col lg="4">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          stacked
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="that7">Virtual Assistants</b-form-checkbox>
           <b-form-checkbox value="that8">Meme Marketing</b-form-checkbox>
            <b-form-checkbox value="me5">Marketing jobs of tomorrow</b-form-checkbox>
          <b-form-checkbox value="that9">Money and Marketing</b-form-checkbox>
           <b-form-checkbox value="that10">Digital Brand Design</b-form-checkbox>
                     <b-form-checkbox value="me6">Wearable Tech</b-form-checkbox>
          <b-form-checkbox value="that11">The world of Open Source</b-form-checkbox>
           <b-form-checkbox value="that12">Digital Communities and Groups</b-form-checkbox>
                     <b-form-checkbox value="me7">Digital Disruption</b-form-checkbox>
          <b-form-checkbox value="that13">Affiliate & Influencer marketing</b-form-checkbox>
        </b-form-checkbox-group>
        </b-col>
<b-col lg="4">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          stacked
          :aria-describedby="ariaDescribedby"
        >
<b-form-checkbox value="that14">Metadata and keywords</b-form-checkbox>
                     <b-form-checkbox value="me8">Digital Detox</b-form-checkbox>
          <b-form-checkbox value="that15">Chatbots</b-form-checkbox>
           <b-form-checkbox value="that16">Gamification</b-form-checkbox>
          <b-form-checkbox value="me9">AI in Marketing 1</b-form-checkbox>
          <b-form-checkbox value="that17">Digital Safety Net</b-form-checkbox>
           <b-form-checkbox value="that18">AI in Marketing 2</b-form-checkbox>
                     <b-form-checkbox value="me10">Data monitoring and permissions</b-form-checkbox>
          <b-form-checkbox value="tha19t">Sci-Fi realities</b-form-checkbox>
           <b-form-checkbox value="that20">Digital Marketing - Tracking and Analysis</b-form-checkbox>
        </b-form-checkbox-group>
             </b-col>
             </b-row>
      </b-form-group>
      <b-row>
          <b-col> </b-col>
          <b-col class="align-self:centre"><b-button type="submit" class="btn-black align-center">Submit</b-button> </b-col>
          <b-col> </b-col>
      </b-row>
    </b-form>
      </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
.sub-text{
font-family: Brandon Grotesque;
font-size: 24px;
font-style: normal;
font-weight: 390;
line-height: 55px;
letter-spacing: 0em;
text-align: center;
color:white;
}
.proformmain{
    background: #242728;
    color:white;
    align-items: center;
    text-align: left;
    padding: 0px;
    font-family: sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
margin:20px 120px;
}
.formbody{
  margin:0px 300px;
}
.form-control{
background: #242728;
}
#input-4{
  height: 80px;
}
.formhead{
   font-family: Brandon Grotesque;
font-style: normal;
font-weight: 420;
font-size: 22px;
line-height: 27px;
/* or 135% */

display: flex;
align-items: center;
text-align: center;
}
.custom-checkbox{
    align-items: center;
    align-self: center;
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:aqua;
margin:10px;
padding:10px;
}
.customform{
    padding: 50px;
}
</style>
