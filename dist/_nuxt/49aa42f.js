(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{434:function(t,e,o){var content=o(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("6a9ddf72",content,!0,{sourceMap:!1})},585:function(t,e,o){"use strict";o(434)},586:function(t,e,o){var n=o(40)(!1);n.push([t.i,".login[data-v-011a4a76]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-011a4a76]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;color:#fff}div[data-v-011a4a76]{color:inherit}form[data-v-011a4a76]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-011a4a76]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-011a4a76]{width:auto}}.error[data-v-011a4a76]{color:red}.sub-text[data-v-011a4a76]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-011a4a76]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:NowThin;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.formbody[data-v-011a4a76]{margin:0 300px}.form-control[data-v-011a4a76]{background:#242728}#input-4[data-v-011a4a76]{height:80px}.formhead[data-v-011a4a76]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-011a4a76],.formhead[data-v-011a4a76]{font-style:normal;align-items:center}.custom-checkbox[data-v-011a4a76]{align-self:center;font-family:NowThin;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-011a4a76]{padding:50px}",""]),t.exports=n},800:function(t,e,o){"use strict";o.r(e);var n=o(60),r=(o(216),{data:function(){return{email:"",password:"",error:""}},methods:{pressed:function(){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log(data),t.$router.push({path:"https://www.naviclearn.com/evolve/evolveii/"})})).catch((function(e){t.error=e}))}}}),l=(o(585),o(23)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"login py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[t._v("HI AGAIN")]),t._v(" "),o("b-row",[o("b-col"),o("b-col",{attrs:{cols:"12"}},[o("div",{staticClass:"subtitle white"},[t._v("New to NAVIC? ")]),t._v(" "),o("div",{staticClass:"subtitle navic-color text-center"},[o("a",{attrs:{href:"/reg123"}},[t._v(" SIGN UP ")])])]),o("b-col")],1),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.pressed.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"password",label:"Password*","label-for":"password"}},[o("b-form-input",{attrs:{type:"password",id:"password",placeholder:"***********",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),o("button",{staticClass:"btn-black"},[t._v("Login")])]),t._v(" "),t.error?o("div",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e()],1)}),[],!1,null,"011a4a76",null);e.default=component.exports;installComponents(component,{Form:o(215).default})}}]);