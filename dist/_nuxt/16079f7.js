(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{384:function(t,e,o){var content=o(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("21dcbae0",content,!0,{sourceMap:!1})},478:function(t,e,o){"use strict";o(384)},479:function(t,e,o){var r=o(40)(!1);r.push([t.i,".login[data-v-fa89ca5e]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-fa89ca5e]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;color:#fff}div[data-v-fa89ca5e]{color:inherit}form[data-v-fa89ca5e]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-fa89ca5e]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-fa89ca5e]{width:auto}}.error[data-v-fa89ca5e]{color:red}.sub-text[data-v-fa89ca5e]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-fa89ca5e]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:cursive;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.formbody[data-v-fa89ca5e]{margin:0 300px}.form-control[data-v-fa89ca5e]{background:#242728;color:#fff;font-weight:800}.form-control[data-v-fa89ca5e]:focus{color:#e8edf1}#input-4[data-v-fa89ca5e]{height:80px}.formhead[data-v-fa89ca5e]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-fa89ca5e],.formhead[data-v-fa89ca5e]{font-style:normal;align-items:center}.custom-checkbox[data-v-fa89ca5e]{align-self:center;font-family:cursive;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-fa89ca5e]{padding:50px}.forgot-password[data-v-fa89ca5e]{color:#f9f2f2}",""]),t.exports=r},584:function(t,e,o){"use strict";o.r(e);o(11),o(20);var r=o(60),n=(o(216),{data:function(){return{email:"",password:"",error:""}},methods:{pressed:function(){var t=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log(data),t.$router.replace({name:"evolveII"})})).catch((function(e){t.error=e}))}}}),l=(o(478),o(23)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"login py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[t._v("HI AGAIN")]),t._v(" "),o("b-row",[o("b-col"),o("b-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle white"},[t._v("New to NAVIC? ")]),t._v(" "),o("div",{staticClass:"subtitle navic-color text-center"},[o("a",{attrs:{href:"/reg2"}},[t._v(" SIGN UP ")])])]),o("b-col")],1),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("p",[o("a",{staticClass:"forgot-password",attrs:{href:"/forgotpass"}},[t._v("Forgot password ?")])]),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"btn-black"},[t._v("Login")]),t._v(" "),o("br"),t._v(" "),o("p",{staticClass:"forgot-password"},[t._v("If you forgot your password kindly get back to us in "),o("a",{attrs:{href:"mailto:jai@naviclearn.com"}},[o("b",[t._v("jai@naviclearn.com")])])])]),t._v(" "),t.error?o("div",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e()],1)}),[],!1,null,"fa89ca5e",null);e.default=component.exports;installComponents(component,{Form:o(215).default})}}]);