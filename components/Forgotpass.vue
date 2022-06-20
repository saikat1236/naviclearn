<template>
  <b-container fluid>
    <form @submit.prevent="forgotPassword">
      <div class="login proformmain">
        <b-form-group id="email" label="Email Address*" label-for="email">
          <b-form-input
            id="email"
            v-model="user.email"
            placeholder="Your Email Address"
            required
          ></b-form-input>
        </b-form-group>
        <!-- <b-form-group id="newpassword" label="New Password*" label-for="new-password">
          <b-form-input
            type="password"
            id="newpassword"
            v-model="user.password"
            placeholder="***********"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="confirmpassword" label="Confirm new password*" label-for="confirm-password">
          <b-form-input
            type="password"
            id="confirmpassword"
            v-model="user.confirmpassword"
            placeholder="***********"
            required
          ></b-form-input>
        </b-form-group> -->
      </div>
      <button class="btn-black">Submit</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </b-container>
</template>
<script>
import firebase from 'firebase'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      user: {
        // name: '',
        email: ''
        // password: '',
        // confirmpassword: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
      email: { required, email }
      // password: { required, minLength: minLength(6) },
      // confirmpassword: { required, sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    forgotPassword () {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert('Check your registered email to reset the password!')
          this.$router.replace({ name: 'index' })
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
<style scoped>
.login {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.subtitle {
  font-family: Now;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  display: inline-flex;
  color: white;
}
div {
  color: inherit;
}
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input {
  width: 600px;
  padding: 30px;
  margin: 0px;
  font-size: 21px;
}
@media only screen and (max-width: 768px) {
  input {
    width: auto;
  }
}
@media only screen and (max-width: 768px) {
  .formcourse {
    padding: 0rem 0rem 0rem 4rem;
  }
}
.error {
  color: red;
}
.sub-text {
  font-family: Brandon Grotesque;
  font-size: 24px;
  font-style: normal;
  font-weight: 390;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: center;
}
.proformmain {
  background: #242728;
  color: white;
  align-items: center;
  text-align: left;
  padding: 0px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin: 20px 120px;
}
.formbody {
  margin: 0px 300px;
}
.form-control{
background: #242728;
    color:white;
        font-weight: 800;

}
 .form-control:focus {
      color: #e8edf1;

    }
#input-4 {
  height: 80px;
}
.formhead {
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
.custom-checkbox {
  align-items: center;
  align-self: center;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: aqua;
  margin: 10px;
  padding: 10px;
}
.customform {
  padding: 50px;
}
.form-main {
  background: #eef3f5;
  color: white;
  align-items: center;
  text-align: left;
  padding: 50px;
}
.formbody {
  margin: 0px 300px;
}
.form-control {
  background: #242728;
}
#input-5 {
  height: 200px;
}

</style>
