(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{388:function(e,t,o){var content=o(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("8adb8f8a",content,!0,{sourceMap:!1})},486:function(e,t,o){"use strict";o(388)},487:function(e,t,o){var r=o(40)(!1);r.push([e.i,".login[data-v-3dec30e3]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-3dec30e3]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;color:#fff}div[data-v-3dec30e3]{color:inherit}form[data-v-3dec30e3]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-3dec30e3]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-3dec30e3]{width:auto}}.error[data-v-3dec30e3]{color:red}.sub-text[data-v-3dec30e3]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-3dec30e3]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.formbody[data-v-3dec30e3]{margin:0 300px}.form-control[data-v-3dec30e3]{background:#242728;color:#fff;font-weight:800}.form-control[data-v-3dec30e3]:focus{color:#e8edf1}#input-4[data-v-3dec30e3]{height:80px}.formhead[data-v-3dec30e3]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-3dec30e3],.formhead[data-v-3dec30e3]{font-style:normal;align-items:center}.custom-checkbox[data-v-3dec30e3]{align-self:center;font-family:sans-serif;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-3dec30e3]{padding:50px}.forgot-password[data-v-3dec30e3]{color:#f9f2f2}",""]),e.exports=r},586:function(e,t,o){"use strict";o.r(t);o(11),o(20);var r=o(60),n=(o(216),{data:function(){return{email:"",password:"",error:""}},methods:{pressed:function(){var e=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log(data),e.$router.replace({name:"evolvePro"})})).catch((function(t){e.error=t}))}}}),l=(o(486),o(23)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{staticClass:"login py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[e._v("HI AGAIN")]),e._v(" "),o("b-row",[o("b-col"),o("b-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle white"},[e._v("New to NAVIC? ")]),e._v(" "),o("div",{staticClass:"subtitle navic-color text-center"},[o("a",{attrs:{href:"/regpro"}},[e._v(" SIGN UP ")])])]),o("b-col")],1),e._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),e.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),o("p",[o("a",{staticClass:"forgot-password",attrs:{href:"/forgotpass"}},[e._v("Forgot password ?")])]),e._v(" "),o("br"),e._v(" "),o("button",{staticClass:"btn-black"},[e._v("Login")]),e._v(" "),o("br"),e._v(" "),o("p",{staticClass:"forgot-password"},[e._v("If you forgot your password kindly get back to us in "),o("a",{staticStyle:{color:"aqua"},attrs:{href:"mailto:jai@naviclearn.com"}},[o("b",[e._v("jai@naviclearn.com")])])])]),e._v(" "),e.error?o("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()],1)}),[],!1,null,"3dec30e3",null);t.default=component.exports;installComponents(component,{Form:o(215).default})}}]);