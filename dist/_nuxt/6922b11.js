(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{443:function(t,e,o){var content=o(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("7e54b399",content,!0,{sourceMap:!1})},541:function(t,e,o){"use strict";o(443)},542:function(t,e,o){var r=o(46)(!1);r.push([t.i,".login[data-v-7df88d04]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-7df88d04]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;color:#fff}div[data-v-7df88d04]{color:inherit}form[data-v-7df88d04]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-7df88d04]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-7df88d04]{width:auto}}.error[data-v-7df88d04]{color:red}.sub-text[data-v-7df88d04]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-7df88d04]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.formbody[data-v-7df88d04]{margin:0 300px}.form-control[data-v-7df88d04]{background:#242728;color:#fff;font-weight:800}.form-control[data-v-7df88d04]:focus{color:#e8edf1}#input-4[data-v-7df88d04]{height:80px}.formhead[data-v-7df88d04]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-7df88d04],.formhead[data-v-7df88d04]{font-style:normal;align-items:center}.custom-checkbox[data-v-7df88d04]{align-self:center;font-family:sans-serif;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-7df88d04]{padding:50px}.forgot-password[data-v-7df88d04]{color:#f9f2f2}",""]),t.exports=r},650:function(t,e,o){"use strict";o.r(e);o(11),o(24);var r=o(67),n=(o(250),{data:function(){return{email:"",password:"",error:""}},methods:{pressed:function(){var t=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log(data),t.$router.replace({name:"evolveIII"})})).catch((function(e){t.error=e}))}}}),d=(o(541),o(26)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"login py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[t._v("HI AGAIN")]),t._v(" "),o("b-row",[o("b-col"),o("b-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle white"},[t._v("New to NAVIC? ")]),t._v(" "),o("div",{staticClass:"subtitle navic-color text-center"},[o("a",{attrs:{href:"/reg3"}},[t._v(" SIGN UP ")])])]),o("b-col")],1),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("p",[o("a",{staticClass:"forgot-password",attrs:{href:"/forgotpass"}},[t._v("Forgot password ?")])]),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"btn-black"},[t._v("Login")]),t._v(" "),o("br")]),t._v(" "),t.error?o("div",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e()],1)}),[],!1,null,"7df88d04",null);e.default=component.exports;installComponents(component,{Form:o(249).default})}}]);