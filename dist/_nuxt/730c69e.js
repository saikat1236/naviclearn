(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{756:function(e,t,n){"use strict";n.r(t);n(21);var o=n(416),r=n.n(o),c={name:"home",components:{},data:function(){return{price:0,order_id:"",name:"",desc:""}},methods:{makePayment:function(e){var t=this;e.preventDefault();var data={};data.name=this.name,data.desc=this.desc,data.amount=500,r()({method:"post",url:"",data:data}).then((function(e){t.order_id=e.data.order_id,new Razorpay({key:"rzp_test_enRiibCpGvB8WA",amount:e.data.amount,name:e.data.name,currency:"INR",description:e.data.desc,image:"Link Of Image",prefill:{name:"Allen Shaji",email:"allenshaji10@gmail.com"},notes:{address:""},theme:{color:"#00ffff"},order_id:e.data.order_id,callback_url:""+t.order_id,redirect:!0}).open()})).catch((function(e){console.log("ERR",e)}))}}},l=n(23),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("form",[n("div",{staticClass:"form-group"},[n("label",[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v("Description")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.desc,expression:"desc"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.desc},on:{input:function(t){t.target.composing||(e.desc=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",[e._v("Price")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn-success",on:{click:e.makePayment}},[e._v("Submit")])])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Form:n(215).default})}}]);