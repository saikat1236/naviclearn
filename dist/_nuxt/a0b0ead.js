(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{473:function(t,e,o){var content=o(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("df395aee",content,!0,{sourceMap:!1})},542:function(t,e,o){"use strict";o(473)},543:function(t,e,o){var r=o(48)(!1);r.push([t.i,".login[data-v-3adc9cdc]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-3adc9cdc]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;color:#fff}div[data-v-3adc9cdc]{color:inherit}form[data-v-3adc9cdc]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-3adc9cdc]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-3adc9cdc]{width:auto}}.error[data-v-3adc9cdc]{color:red}.sub-text[data-v-3adc9cdc]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-3adc9cdc]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.formbody[data-v-3adc9cdc]{margin:0 300px}.form-control[data-v-3adc9cdc]{background:#242728;color:#fff;font-weight:800}.form-control[data-v-3adc9cdc]:focus{color:#e8edf1}#input-4[data-v-3adc9cdc]{height:80px}.formhead[data-v-3adc9cdc]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-3adc9cdc],.formhead[data-v-3adc9cdc]{font-style:normal;align-items:center}.custom-checkbox[data-v-3adc9cdc]{align-self:center;font-family:sans-serif;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-3adc9cdc]{padding:50px}.forgot-password[data-v-3adc9cdc]{color:#f9f2f2}",""]),t.exports=r},659:function(t,e,o){"use strict";o.r(e);o(13),o(23);var r=o(69),n=(o(175),{data:function(){return{email:"",password:"",error:""}},methods:{pressed:function(){var t=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log(data),t.$router.replace({name:"profile"})})).catch((function(e){t.error=e}))}}}),c=(o(542),o(28)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"login py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[t._v("HI AGAIN")]),t._v(" "),o("b-row",[o("b-col"),o("b-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle white"},[t._v("New to NAVIC? ")]),t._v(" "),o("div",{staticClass:"subtitle navic-color text-center"},[o("a",{attrs:{href:"/registration"}},[t._v(" SIGN UP ")])])]),o("b-col")],1),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("p",[o("a",{staticClass:"forgot-password",attrs:{href:"/forgotpass"}},[t._v("Forgot password ?")])]),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"btn-black"},[t._v("Login")]),t._v(" "),o("br")]),t._v(" "),t.error?o("div",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e()],1)}),[],!1,null,"3adc9cdc",null);e.default=component.exports;installComponents(component,{Form:o(253).default})}}]);