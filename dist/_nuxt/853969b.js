(window.webpackJsonp=window.webpackJsonp||[]).push([[31,4],{337:function(e,t,o){var content=o(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("3a98c017",content,!0,{sourceMap:!1})},347:function(e,t,o){"use strict";o(337)},348:function(e,t,o){var r=o(40)(!1);r.push([e.i,".login[data-v-7c9822e6]{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.subtitle[data-v-7c9822e6]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;text-align:center;display:inline-flex;color:#fff}div[data-v-7c9822e6]{color:inherit}form[data-v-7c9822e6]{display:flex;justify-content:center;align-items:center;flex-direction:column}input[data-v-7c9822e6]{width:600px;padding:30px;margin:0;font-size:21px}@media only screen and (max-width:768px){input[data-v-7c9822e6]{width:auto}}@media only screen and (max-width:768px){.formcourse[data-v-7c9822e6]{padding:0 0 0 4rem}}.error[data-v-7c9822e6]{color:red}.sub-text[data-v-7c9822e6]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-7c9822e6]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:cursive;font-style:normal;font-weight:400;font-size:18px;line-height:20px;margin:20px 120px}.form-control[data-v-7c9822e6]{color:#fff;font-weight:800}.form-control[data-v-7c9822e6]:focus{color:#e8edf1}#input-4[data-v-7c9822e6]{height:80px}.formhead[data-v-7c9822e6]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-7c9822e6],.formhead[data-v-7c9822e6]{font-style:normal;align-items:center}.custom-checkbox[data-v-7c9822e6]{align-self:center;font-family:cursive;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-7c9822e6],.form-main[data-v-7c9822e6]{padding:50px}.form-main[data-v-7c9822e6]{background:#eef3f5;color:#fff;align-items:center;text-align:left}.formbody[data-v-7c9822e6]{margin:0 300px}.form-control[data-v-7c9822e6]{background:#242728}#input-5[data-v-7c9822e6]{height:200px}",""]),e.exports=r},379:function(e,t,o){var content=o(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("7394bc08",content,!0,{sourceMap:!1})},416:function(e,t,o){"use strict";o.r(t);o(11),o(20);var r=o(414),n=o(381),l={data:function(){return{user:{name:"",email:"",password:"",confirmpassword:""},submitted:!1}},validations:{user:{email:{required:n.required,email:n.email},password:{required:n.required,minLength:Object(n.minLength)(6)},confirmpassword:{required:n.required,sameAsPassword:Object(n.sameAs)("password")}}},methods:{forgotPassword:function(){var e=this;r.a.auth().sendPasswordResetEmail(this.user.email).then((function(){alert("Check your registered email to reset the password!"),e.$router.replace({name:"index"})})).catch((function(e){alert(e)}))}}},d=(o(347),o(23)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("form",{on:{submit:function(t){return t.preventDefault(),e.forgotPassword.apply(null,arguments)}}},[o("div",{staticClass:"login proformmain"},[o("b-form-group",{attrs:{id:"email",label:"Email Address*","label-for":"email"}},[o("b-form-input",{attrs:{id:"email",placeholder:"Your Email Address",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"newpassword",label:"New Password*","label-for":"new-password"}},[o("b-form-input",{attrs:{type:"password",id:"newpassword",placeholder:"***********",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"confirmpassword",label:"Confirm new password*","label-for":"confirm-password"}},[o("b-form-input",{attrs:{type:"password",id:"confirmpassword",placeholder:"***********",required:""},model:{value:e.user.confirmpassword,callback:function(t){e.$set(e.user,"confirmpassword",t)},expression:"user.confirmpassword"}})],1)],1),e._v(" "),o("button",{staticClass:"btn-black"},[e._v("Submit")])]),e._v(" "),e.error?o("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])}),[],!1,null,"7c9822e6",null);t.default=component.exports;installComponents(component,{Form:o(215).default})},445:function(e,t,o){"use strict";o(379)},446:function(e,t,o){var r=o(40)(!1);r.push([e.i,".login[data-v-40486d2a]{width:100%;justify-content:center;align-items:center;flex-direction:column}.login[data-v-40486d2a],.subtitle[data-v-40486d2a]{text-align:center}.subtitle[data-v-40486d2a]{font-family:Now;font-size:18px;font-style:normal;font-weight:500;line-height:26px;letter-spacing:0;color:#fff}div[data-v-40486d2a]{color:inherit}.error[data-v-40486d2a]{color:red}.sub-text[data-v-40486d2a]{font-family:Brandon Grotesque;font-size:24px;font-style:normal;font-weight:390;line-height:55px;letter-spacing:0;text-align:center}.proformmain[data-v-40486d2a]{background:#242728;color:#fff;align-items:center;text-align:left;padding:0;font-family:cursive;font-style:normal;font-weight:400;font-size:12px;line-height:20px;margin:20px 120px}.formbody[data-v-40486d2a]{margin:0 300px}.form-control[data-v-40486d2a]{background:#242728}#input-4[data-v-40486d2a]{height:80px}.formhead[data-v-40486d2a]{font-family:Brandon Grotesque;font-weight:420;font-size:22px;line-height:27px;display:flex;text-align:center}.custom-checkbox[data-v-40486d2a],.formhead[data-v-40486d2a]{font-style:normal;align-items:center}.custom-checkbox[data-v-40486d2a]{align-self:center;font-family:cursive;font-size:16px;font-weight:600;line-height:20px;letter-spacing:0;text-align:left;color:#0ff;margin:10px;padding:10px}.customform[data-v-40486d2a]{padding:50px}",""]),e.exports=r},603:function(e,t,o){"use strict";o.r(t);o(445);var r=o(23),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{staticClass:"py-5",attrs:{fluid:""}},[o("h1",{staticClass:"section-header white"},[e._v("FORGOT PASSWORD?")]),e._v(" "),o("Forgotpass")],1)}),[],!1,null,"40486d2a",null);t.default=component.exports;installComponents(component,{Forgotpass:o(416).default})}}]);