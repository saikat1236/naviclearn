(window.webpackJsonp=window.webpackJsonp||[]).push([[44,13],{336:function(e,t,o){var content=o(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("08660f12",content,!0,{sourceMap:!1})},351:function(e,t,o){"use strict";o(336)},352:function(e,t,o){var n=o(40)(!1);n.push([e.i,".login[data-v-0e9bd3d8]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-0e9bd3d8]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;display:inline-flex;color:#fff}div[data-v-0e9bd3d8]{color:inherit}form[data-v-0e9bd3d8]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-0e9bd3d8]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-0e9bd3d8]{width:auto}}@media only screen and (max-width:768px){.formcourse[data-v-0e9bd3d8]{padding:0 0 0 4rem}}.error[data-v-0e9bd3d8]{color:red}.sub-text[data-v-0e9bd3d8]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-0e9bd3d8]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:NowThin;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}#input-4[data-v-0e9bd3d8]{height:80px}.formhead[data-v-0e9bd3d8]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-0e9bd3d8],.formhead[data-v-0e9bd3d8]{font-style:normal;align-items:center}.custom-checkbox[data-v-0e9bd3d8]{align-self:center;font-family:NowThin;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-0e9bd3d8],.form-main[data-v-0e9bd3d8]{padding:50px}.form-main[data-v-0e9bd3d8]{background:#242728;color:#fff;align-items:center;text-align:left}.formbody[data-v-0e9bd3d8]{margin:0 300px}.form-control[data-v-0e9bd3d8]{background:#242728}#input-5[data-v-0e9bd3d8]{height:200px}",""]),e.exports=n},396:function(e,t,o){var content=o(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("4d7851fa",content,!0,{sourceMap:!1})},418:function(e,t,o){"use strict";o.r(t);var n=o(114),r=o(60),l=(o(216),{data:function(){return{user:{fname:"",email:"",password:"",course:"",phoneno:"",error:""}}},methods:{pressed:function(){var e=this;n.a.collection("user").add(this.user).then((function(){e.user.fname="",e.user.email="",e.user.password="",e.user.phoneno="",e.user.course=""})),r.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((function(data){alert("User successfully created!"),console.log(data),e.$router.push({name:"evolveGo"})})).catch((function(t){e.error=t}))}}}),d=(o(351),o(23)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("form",{on:{submit:function(t){return t.preventDefault(),e.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"fname",label:"Full Name*","label-for":"name"}},[o("b-form-input",{attrs:{id:"name",placeholder:"Your Full Name",required:""},model:{value:e.user.fname,callback:function(t){e.$set(e.user,"fname",t)},expression:"user.fname"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"phoneno",label:"Phone no.*","label-for":"phoneno"}},[o("b-form-input",{attrs:{id:"phoneno",placeholder:"9876543210",required:""},model:{value:e.user.phoneno,callback:function(t){e.$set(e.user,"phoneno",t)},expression:"user.phoneno"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),o("b-form-group",{staticClass:"formcourse",attrs:{label:"Course Interested in:"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.ariaDescribedby;return[o("b-form-radio-group",{attrs:{id:"radio-group-1","aria-describedby":n,name:"radio-sub-component"},model:{value:e.user.course,callback:function(t){e.$set(e.user,"course",t)},expression:"user.course"}},[o("b-form-radio",{attrs:{value:"evolvego"}},[e._v("Evolve Go")])],1)]}}])})],1),e._v(" "),o("button",{staticClass:"btn-black"},[e._v("Sign Up")])]),e._v(" "),e.error?o("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])}),[],!1,null,"0e9bd3d8",null);t.default=component.exports;installComponents(component,{Form:o(215).default})},486:function(e,t,o){"use strict";o(396)},487:function(e,t,o){var n=o(40)(!1);n.push([e.i,".login[data-v-5f5348e5]{width:100%;justify-content:center;align-items:center;flex-direction:column}.login[data-v-5f5348e5],.subtitle[data-v-5f5348e5]{text-align:center}.subtitle[data-v-5f5348e5]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;color:#fff}div[data-v-5f5348e5]{color:inherit}.error[data-v-5f5348e5]{color:red}.sub-text[data-v-5f5348e5]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-5f5348e5]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:NowThin;font-style:normal;font-weight:400;font-size:12px;line-height:20px;margin:20px 120px}.formbody[data-v-5f5348e5]{margin:0 300px}.form-control[data-v-5f5348e5]{background:#242728}#input-4[data-v-5f5348e5]{height:80px}.formhead[data-v-5f5348e5]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-5f5348e5],.formhead[data-v-5f5348e5]{font-style:normal;align-items:center}.custom-checkbox[data-v-5f5348e5]{align-self:center;font-family:NowThin;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-5f5348e5]{padding:50px}",""]),e.exports=n},596:function(e,t,o){"use strict";o.r(t);o(486);var n=o(23),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{staticClass:"py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[e._v("SIGN UP")]),e._v(" "),o("div",{staticClass:"login"},[o("b-col"),o("b-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle white"},[e._v("Already Part of NAVIC? ")]),e._v(" "),o("div",{staticClass:"subtitle navic-color text-center"},[o("a",{attrs:{href:"/logingo"}},[e._v(" LOGIN ")])])]),o("b-col")],1),e._v(" "),o("signupgo")],1)}),[],!1,null,"5f5348e5",null);t.default=component.exports;installComponents(component,{Signupgo:o(418).default})}}]);