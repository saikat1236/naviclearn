(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{339:function(e,t,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("888fea70",content,!0,{sourceMap:!1})},355:function(e,t,r){"use strict";r(339)},356:function(e,t,r){var o=r(40)(!1);o.push([e.i,".login[data-v-6d215984]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-6d215984]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;display:inline-flex;color:#fff}div[data-v-6d215984]{color:inherit}form[data-v-6d215984]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-6d215984]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-6d215984]{width:auto}}@media only screen and (max-width:768px){.formcourse[data-v-6d215984]{padding:0 0 0 4rem}}.error[data-v-6d215984]{color:red}.sub-text[data-v-6d215984]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-6d215984]{background:#f6f8f8;color:#fff;align-items:center;text-align:left;padding:0;font-family:sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.form-control[data-v-6d215984]{color:#fff;font-weight:800}.form-control[data-v-6d215984]:focus{color:#e8edf1}#input-4[data-v-6d215984]{height:80px}.formhead[data-v-6d215984]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-6d215984],.formhead[data-v-6d215984]{font-style:normal;align-items:center}.custom-checkbox[data-v-6d215984]{align-self:center;font-family:sans-serif;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-6d215984],.form-main[data-v-6d215984]{padding:50px}.form-main[data-v-6d215984]{background:#eef3f5;color:#fff;align-items:center;text-align:left}.formbody[data-v-6d215984]{margin:0 300px}.form-control[data-v-6d215984]{background:#242728}#input-5[data-v-6d215984]{height:200px}",""]),e.exports=o},418:function(e,t,r){"use strict";r.r(t);var o=r(114),n=r(60),l=(r(216),{data:function(){return{user:{fname:"",email:"",password:"",course:"",phoneno:"",error:""}}},methods:{pressed:function(){var e=this;o.a.collection("user").add(this.user).then((function(){e.user.fname="",e.user.email="",e.user.password="",e.user.phoneno="",e.user.course=""})),n.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((function(data){alert("User successfully created!"),console.log(data),e.$router.push({name:"thanks"})})).catch((function(t){e.error=t}))}}}),d=(r(355),r(23)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.pressed.apply(null,arguments)}}},[r("div",{staticClass:"login proformmain"},[r("b-form-group",{attrs:{id:"fname",label:"Full Name*","label-for":"name"}},[r("b-form-input",{attrs:{id:"name",placeholder:"Your Full Name",required:""},model:{value:e.user.fname,callback:function(t){e.$set(e.user,"fname",t)},expression:"user.fname"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"phoneno",label:"Phone no.*","label-for":"phoneno"}},[r("b-form-input",{attrs:{id:"phoneno",placeholder:"9876543210",required:""},model:{value:e.user.phoneno,callback:function(t){e.$set(e.user,"phoneno",t)},expression:"user.phoneno"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[r("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("b-form-group",{staticClass:"formcourse",attrs:{label:"Course Interested in:"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.ariaDescribedby;return[r("b-form-radio-group",{attrs:{id:"radio-group-1","aria-describedby":o,name:"radio-sub-component"},model:{value:e.user.course,callback:function(t){e.$set(e.user,"course",t)},expression:"user.course"}},[r("b-form-radio",{attrs:{value:"evolve"}},[e._v("Evolve I, II & III")]),e._v(" "),r("b-form-radio",{attrs:{value:"evolveprep"}},[e._v("Evolve Prep")]),e._v(" "),r("b-form-radio",{attrs:{value:"evolvego"}},[e._v("Evolve Go")]),e._v(" "),r("b-form-radio",{attrs:{value:"evolvepro"}},[e._v("Evolve Pro")])],1)]}}])})],1),e._v(" "),r("button",{staticClass:"btn-black"},[e._v("Sign Up")])]),e._v(" "),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])}),[],!1,null,"6d215984",null);t.default=component.exports;installComponents(component,{Form:r(215).default})}}]);