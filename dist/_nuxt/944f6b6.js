(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{380:function(t,e,o){var content=o(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("18300efa",content,!0,{sourceMap:!1})},447:function(t,e,o){"use strict";o(380)},448:function(t,e,o){var n=o(40)(!1);n.push([t.i,".login[data-v-45f6a0dc]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-45f6a0dc]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;color:#fff}div[data-v-45f6a0dc]{color:inherit}form[data-v-45f6a0dc]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-45f6a0dc]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-45f6a0dc]{width:auto}}.error[data-v-45f6a0dc]{color:red}.sub-text[data-v-45f6a0dc]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-45f6a0dc]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:cursive;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.formbody[data-v-45f6a0dc]{margin:0 300px}.form-control[data-v-45f6a0dc]{background:#242728;color:#fff;font-weight:800}.form-control[data-v-45f6a0dc]:focus{color:#e8edf1}#input-4[data-v-45f6a0dc]{height:80px}.formhead[data-v-45f6a0dc]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-45f6a0dc],.formhead[data-v-45f6a0dc]{font-style:normal;align-items:center}.custom-checkbox[data-v-45f6a0dc]{align-self:center;font-family:cursive;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-45f6a0dc]{padding:50px}",""]),t.exports=n},554:function(t,e,o){"use strict";o.r(e);o(11),o(20);var n=o(60),r=(o(216),{data:function(){return{email:"",password:"",error:""}},methods:{pressed:function(){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log(data),t.$router.replace({name:"evolvePrep"})})).catch((function(e){t.error=e}))}}}),l=(o(447),o(23)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"login py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[t._v("HI AGAIN")]),t._v(" "),o("b-row",[o("b-col"),o("b-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle white"},[t._v("New to NAVIC? ")]),t._v(" "),o("div",{staticClass:"subtitle navic-color text-center"},[o("a",{attrs:{href:"/regprep"}},[t._v(" SIGN UP ")])])]),o("b-col")],1),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("button",{staticClass:"btn-black"},[t._v("Login")])]),t._v(" "),t.error?o("div",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e()],1)}),[],!1,null,"45f6a0dc",null);e.default=component.exports;installComponents(component,{Form:o(215).default})}}]);