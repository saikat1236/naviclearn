(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{404:function(e,r,t){var content=t(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(49).default)("28ada8f2",content,!0,{sourceMap:!1})},441:function(e,r,t){"use strict";t(404)},442:function(e,r,t){var o=t(48)(!1);o.push([e.i,".login[data-v-2a09d788]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-2a09d788]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;display:inline-flex;color:#fff}div[data-v-2a09d788]{color:inherit}form[data-v-2a09d788]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-2a09d788]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-2a09d788]{width:auto}}@media only screen and (max-width:768px){.formcourse[data-v-2a09d788]{padding:0 0 0 4rem}}.error[data-v-2a09d788]{color:red}.sub-text[data-v-2a09d788]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-2a09d788]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.form-control[data-v-2a09d788]{color:#fff;font-weight:800}.form-control[data-v-2a09d788]:focus{color:#e8edf1}#input-4[data-v-2a09d788]{height:80px}.formhead[data-v-2a09d788]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-2a09d788],.formhead[data-v-2a09d788]{font-style:normal;align-items:center}.custom-checkbox[data-v-2a09d788]{align-self:center;font-family:sans-serif;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-2a09d788],.form-main[data-v-2a09d788]{padding:50px}.form-main[data-v-2a09d788]{background:#eef3f5;color:#fff;align-items:center;text-align:left}.formbody[data-v-2a09d788]{margin:0 300px}.form-control[data-v-2a09d788]{background:#242728}#input-5[data-v-2a09d788]{height:200px}",""]),e.exports=o},483:function(e,r,t){"use strict";t.r(r);var o=t(141),n=t(76),l=(t(176),{data:function(){return{user:{fname:"",email:"",password:"",course:"",phoneno:"",error:""}}},methods:{pressed:function(){var e=this;o.a.collection("user").add(this.user).then((function(){e.user.fname="",e.user.email="",e.user.password="",e.user.phoneno="",e.user.course="",e.user.error=""})),n.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((function(data){data.user.updateProfile({displayName:e.user.fname,email:e.user.email}),alert("User successfully created!"),console.log(data),e.$router.push({name:"profile"})})).catch((function(r){e.error=r}))}}}),d=(t(441),t(28)),component=Object(d.a)(l,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-container",{attrs:{fluid:""}},[t("form",{on:{submit:function(r){return r.preventDefault(),e.pressed.apply(null,arguments)}}},[t("div",{staticClass:"login proformmain"},[t("b-form-group",{attrs:{id:"fname",label:"Full Name*","label-for":"name"}},[t("b-form-input",{attrs:{id:"name",placeholder:"Your Full Name",required:""},model:{value:e.user.fname,callback:function(r){e.$set(e.user,"fname",r)},expression:"user.fname"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"phoneno",label:"Phone no.*","label-for":"phoneno"}},[t("b-form-input",{attrs:{id:"phoneno",placeholder:"9876543210",required:""},model:{value:e.user.phoneno,callback:function(r){e.$set(e.user,"phoneno",r)},expression:"user.phoneno"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[t("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),e._v(" "),t("b-form-group",{staticClass:"formcourse",attrs:{label:"Course Interested in:"},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.ariaDescribedby;return[t("b-form-radio-group",{attrs:{id:"radio-group-1","aria-describedby":o,name:"radio-sub-component"},model:{value:e.user.course,callback:function(r){e.$set(e.user,"course",r)},expression:"user.course"}},[t("b-form-radio",{attrs:{value:"evolve"}},[e._v("Evolve I, II & III")]),e._v(" "),t("b-form-radio",{attrs:{value:"evolveprep"}},[e._v("Evolve Prep")]),e._v(" "),t("b-form-radio",{attrs:{value:"evolvego"}},[e._v("Evolve Go")]),e._v(" "),t("b-form-radio",{attrs:{value:"evolvepro"}},[e._v("Evolve Pro")])],1)]}}])})],1),e._v(" "),t("button",{staticClass:"btn-black"},[e._v("Sign Up")])]),e._v(" "),e.error?t("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])}),[],!1,null,"2a09d788",null);r.default=component.exports;installComponents(component,{Form:t(253).default})}}]);