(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{337:function(e,t,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("51658a74",content,!0,{sourceMap:!1})},357:function(e,t,r){"use strict";r(337)},358:function(e,t,r){var o=r(40)(!1);o.push([e.i,".login[data-v-1571062c]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-1571062c]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;display:inline-flex;color:#fff}div[data-v-1571062c]{color:inherit}form[data-v-1571062c]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-1571062c]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-1571062c]{width:auto}}@media only screen and (max-width:768px){.formcourse[data-v-1571062c]{padding:0 0 0 4rem}}.error[data-v-1571062c]{color:red}.sub-text[data-v-1571062c]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-1571062c]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:NowThin;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}#input-4[data-v-1571062c]{height:80px}.formhead[data-v-1571062c]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-1571062c],.formhead[data-v-1571062c]{font-style:normal;align-items:center}.custom-checkbox[data-v-1571062c]{align-self:center;font-family:NowThin;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-1571062c],.form-main[data-v-1571062c]{padding:50px}.form-main[data-v-1571062c]{background:#242728;color:#fff;align-items:center;text-align:left}.formbody[data-v-1571062c]{margin:0 300px}.form-control[data-v-1571062c]{background:#242728}#input-5[data-v-1571062c]{height:200px}",""]),e.exports=o},413:function(e,t,r){"use strict";r.r(t);var o=r(114),n=r(60),l=(r(216),{data:function(){return{user:{fname:"",email:"",password:"",course:"",phoneno:"",error:""}}},methods:{pressed:function(){var e=this;o.a.collection("user").add(this.user).then((function(){e.user.fname="",e.user.email="",e.user.password="",e.user.phoneno="",e.user.course=""})),n.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((function(data){alert("User successfully created!"),console.log(data),e.$router.push({name:"evolvePrep"})})).catch((function(t){e.error=t}))}}}),c=(r(357),r(23)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.pressed.apply(null,arguments)}}},[r("div",{staticClass:"login proformmain"},[r("b-form-group",{attrs:{id:"fname",label:"Full Name*","label-for":"name"}},[r("b-form-input",{attrs:{id:"name",placeholder:"Your Full Name",required:""},model:{value:e.user.fname,callback:function(t){e.$set(e.user,"fname",t)},expression:"user.fname"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"phoneno",label:"Phone no.*","label-for":"phoneno"}},[r("b-form-input",{attrs:{id:"phoneno",placeholder:"9876543210",required:""},model:{value:e.user.phoneno,callback:function(t){e.$set(e.user,"phoneno",t)},expression:"user.phoneno"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[r("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("b-form-group",{staticClass:"formcourse",attrs:{label:"Course Interested in:"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.ariaDescribedby;return[r("b-form-radio-group",{attrs:{id:"radio-group-1","aria-describedby":o,name:"radio-sub-component"},model:{value:e.user.course,callback:function(t){e.$set(e.user,"course",t)},expression:"user.course"}},[r("b-form-radio",{attrs:{value:"evolve"}},[e._v("Evolve I, II & III")]),e._v(" "),r("b-form-radio",{attrs:{value:"evolveprep"}},[e._v("Evolve Prep")]),e._v(" "),r("b-form-radio",{attrs:{value:"evolvego"}},[e._v("Evolve Go")]),e._v(" "),r("b-form-radio",{attrs:{value:"evolvepro"}},[e._v("Evolve Pro")])],1)]}}])})],1),e._v(" "),r("button",{staticClass:"btn-black"},[e._v("Sign Up")])]),e._v(" "),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])}),[],!1,null,"1571062c",null);t.default=component.exports;installComponents(component,{Form:r(215).default})}}]);