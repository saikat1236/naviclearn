(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{338:function(e,t,o){var content=o(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("c8c9c9ae",content,!0,{sourceMap:!1})},354:function(e,t,o){"use strict";o(338)},355:function(e,t,o){var r=o(40)(!1);r.push([e.i,".login[data-v-2e83babc]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-2e83babc]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;display:inline-flex;color:#fff}div[data-v-2e83babc]{color:inherit}form[data-v-2e83babc]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-2e83babc]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-2e83babc]{width:auto}}@media only screen and (max-width:768px){.formcourse[data-v-2e83babc]{padding:0 0 0 4rem}}.error[data-v-2e83babc]{color:red}.sub-text[data-v-2e83babc]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-2e83babc]{background:#f6f8f8;color:#fff;align-items:center;text-align:left;padding:0;font-family:NowThin;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.form-control[data-v-2e83babc]{color:#fff;font-weight:800}.form-control[data-v-2e83babc]:focus{color:#e8edf1}#input-4[data-v-2e83babc]{height:80px}.formhead[data-v-2e83babc]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-2e83babc],.formhead[data-v-2e83babc]{font-style:normal;align-items:center}.custom-checkbox[data-v-2e83babc]{align-self:center;font-family:NowThin;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-2e83babc],.form-main[data-v-2e83babc]{padding:50px}.form-main[data-v-2e83babc]{background:#eef3f5;color:#fff;align-items:center;text-align:left}.formbody[data-v-2e83babc]{margin:0 300px}.form-control[data-v-2e83babc]{background:#242728}#input-5[data-v-2e83babc]{height:200px}",""]),e.exports=r},421:function(e,t,o){"use strict";o.r(t);var r=o(114),n=o(60),l=(o(216),{data:function(){return{user:{fname:"",email:"",password:"",course:"",phoneno:"",error:""}}},methods:{pressed:function(){var e=this;r.a.collection("user").add(this.user).then((function(){e.user.fname="",e.user.email="",e.user.password="",e.user.phoneno="",e.user.course=""})),n.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then((function(data){alert("User successfully created!"),console.log(data),e.$router.push({name:"thanks"})})).catch((function(t){e.error=t}))}}}),c=(o(354),o(23)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("form",{on:{submit:function(t){return t.preventDefault(),e.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"fname",label:"Full Name*","label-for":"name"}},[o("b-form-input",{attrs:{id:"name",placeholder:"Your Full Name",required:""},model:{value:e.user.fname,callback:function(t){e.$set(e.user,"fname",t)},expression:"user.fname"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"phoneno",label:"Phone no.*","label-for":"phoneno"}},[o("b-form-input",{attrs:{id:"phoneno",placeholder:"9876543210",required:""},model:{value:e.user.phoneno,callback:function(t){e.$set(e.user,"phoneno",t)},expression:"user.phoneno"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),o("b-form-group",{staticClass:"formcourse",attrs:{label:"Course Interested in:"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[o("b-form-radio-group",{attrs:{id:"radio-group-1","aria-describedby":r,name:"radio-sub-component"},model:{value:e.user.course,callback:function(t){e.$set(e.user,"course",t)},expression:"user.course"}},[o("b-form-radio",{attrs:{value:"evolve"}},[e._v("Evolve I, II & III")]),e._v(" "),o("b-form-radio",{attrs:{value:"evolveprep"}},[e._v("Evolve Prep")]),e._v(" "),o("b-form-radio",{attrs:{value:"evolvego"}},[e._v("Evolve Go")]),e._v(" "),o("b-form-radio",{attrs:{value:"evolvepro"}},[e._v("Evolve Pro")])],1)]}}])})],1),e._v(" "),o("button",{staticClass:"btn-black"},[e._v("Sign Up")])]),e._v(" "),e.error?o("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])}),[],!1,null,"2e83babc",null);t.default=component.exports;installComponents(component,{Form:o(215).default})}}]);