(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{390:function(t,e,o){var content=o(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("0701191a",content,!0,{sourceMap:!1})},428:function(t,e,o){"use strict";o(390)},429:function(t,e,o){var l=o(42)(!1);l.push([t.i,".evolvegobtn{margin:0 1rem 0 0}.rightevolvebox{text-align:center!important}.leftevolvebox{text-align:left}.centerevolvebox{padding-top:80px;font-size:18px}.evolve{background:#242728;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.evolve-box{color:#fff;border:1.5px solid #21e3ce;padding:2rem;margin:3rem;display:flexbox}.rightseatcircle{box-shadow:inset 4px 4px 7.2916669845581055px 0 rgba(0,0,0,.25098);box-shadow:inset -4px -4px 7.2916669845581055px 0 rgba(65,65,65,.25098);position:absolute;width:175px;height:170.62px;border-radius:0;border:21.88px solid #242728;opacity:.5}.countdowntime{background:#242728;box-shadow:inset -4px -4px 4px rgba(40,40,40,.25),inset 4px 4px 4px rgba(2,2,2,.25);border-radius:40px;display:inline-flex}.countdownbox{display:flex}.coursebarevolve{text-align:center;padding-top:3rem}.seatsleft{font-family:NowThin;font-style:normal;font-weight:400;font-size:14.4762px;line-height:14px;text-align:center}@media only screen and (max-width:768px){.evolveboxhead{font-size:32px}.seatsleft{padding:2rem!important;margin:2rem!important}}.seatbutton{background:#242728;box-shadow:inset -4.8254px -4.8254px 4.8254px rgba(68,68,68,.25),inset 4.8254px 4.8254px 4.8254px rgba(2,2,2,.15);border-radius:48.254px;margin:22px 45px;padding:11px 13px;display:inline-flex}",""]),t.exports=l},520:function(t,e,o){"use strict";o.r(e);o(13),o(19),o(37);var l=o(76),n=(o(118),{data:function(){return{authenticatedUser:!1,displayday:0,displayhour:0,displaymin:0,displaysec:0,loaded:!1,expired:!1}},mounted:function(){this.showremaining(),this.setupFirebase()},computed:{_second:function(){return 1e3},_minutes:function(){return 60*this._second},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},methods:{signout:function(){alert("test")},setupFirebase:function(){var t=this;l.a.auth().onAuthStateChanged((function(e){e?(console.log("logged in"),t.authenticatedUser=!0):t.authenticatedUser=!1}))},evolve1:function(){this.$router.replace({name:"e/evolveI"})},evolve2:function(){this.$router.replace({name:"e/evolveII"})},evolve3:function(){this.$router.replace({name:"e/evolveIII"})},formatNum:function(t){return t<10?"0"+t:t},showremaining:function(){var t=this,e=setInterval((function(){var o=new Date,l=new Date(2022,10,12,0,0).getTime()-o.getTime();l<0&&(clearInterval(e),t.expired=!0);var n=Math.floor(l/t._days),r=Math.floor(l%t._days/t._hours),v=Math.floor(l%t._hours/t._minutes);t.displayday=t.formatNum(n),t.displaymin=t.formatNum(v),t.displayhour=t.formatNum(r),t.loaded=!0}),1e3)}}}),r=(o(428),o(25)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"evolve py-4"},[o("h1",{staticClass:"section-head white",staticStyle:{padding:"2rem 0 0rem"}},[t._v("EVOLVE")]),t._v(" "),o("div",{staticClass:"evolve-box"},[o("b-row",[o("b-col",{staticClass:"leftevolvebox",attrs:{lg:"5"}},[o("h1",{staticClass:"evolveboxhead py-2"},[t._v("EVOLVE  -   Level I")]),t._v(" "),o("p",{staticClass:"contenttextpg"},[t._v("Start")]),t._v(" "),o("p",{staticClass:"contenttextpg"},[t._v("\n          Start Begin your journey with Level 1 of the EVOLVE program to\n          prepare and train yourself for the future of marketing. With a\n          curated selection of 10 starter subjects, Level 1 aims to develop\n          your curiosity and find up your marketing game whilst you learn and\n          adapt to the ever-changing environment.\n        ")]),t._v(" "),o("h1",{staticClass:"priceevolvebox navic-color py-2"},[t._v("₹14990 +"),o("h5",{staticStyle:{display:"inline"}},[t._v(" 18% GST")])]),t._v(" "),o("b-button",{staticClass:"btn-black evolvegobtn",attrs:{href:"/evolveI"}},[t._v(" View Course ")])],1),t._v(" "),o("b-col",{staticClass:"centerevolvebox",attrs:{lg:"3"}},[o("ul",[o("li",[t._v("● 10 Weeks course")]),t._v(" "),o("li",[t._v("● 10 sessions")]),t._v(" "),o("li",[t._v("● 10 students")]),t._v(" "),o("li",[t._v("● 10 tools")]),t._v(" "),o("li",[t._v("● 1-to-1 feedback")])])]),t._v(" "),o("b-col",{staticClass:"coursebarevolve",attrs:{lg:"4"}},[o("div",{staticClass:"seatsleft"},[o("h2",{staticClass:"navic-color"},[t._v("0/10 SEATS LEFT")]),t._v(" "),o("b-progress",{staticClass:"mt-2",attrs:{height:"1.5 rem",width:"2rem",value:50,variant:"info",striped:"",animated:t.animate}}),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("h4",[t._v("STARTS IN")]),t._v(" "),o("b-row",{staticClass:"inlineflexer justify-content-around"},[o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displayday))]),o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displayhour))]),o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displaymin))])],1),t._v(" "),o("b-row",{staticClass:"inlineflexer justify-content-around"},[o("b-col",[t._v("DAYS")]),t._v(" "),o("b-col",[t._v("HOURS")]),t._v(" "),o("b-col",[t._v("MINS")])],1),t._v(" "),o("div",{staticClass:"py-5 hidemobile"})],1)])],1)],1),t._v(" "),o("div",{staticClass:"evolve-box"},[o("b-row",[o("b-col",{staticClass:"leftevolvebox",attrs:{lg:"5"}},[o("h1",{staticClass:"evolveboxhead py-2"},[t._v("EVOLVE  -   Level II")]),t._v(" "),o("p",{staticClass:"contenttextpg"},[t._v("Grow")]),t._v(" "),o("p",{staticClass:"contenttextpg"},[t._v("\n          Get deeper into the EVOLVE curriculum with Level 2. With a curated\n          selection of 10 intermediate subjects, this course allows you to\n          expand your knowledge base into becoming a Jack of All Trades of\n          marketing.\n        ")]),t._v(" "),o("h1",{staticClass:"priceevolvebox navic-color py-2"},[t._v("coming soon")]),t._v(" "),o("b-button",{staticClass:"btn-black evolvegobtn",attrs:{href:"/evolveII"}},[t._v(" View Course ")])],1),t._v(" "),o("b-col",{staticClass:"centerevolvebox",attrs:{lg:"3"}},[o("ul",[o("li",[t._v("● 10 Weeks course")]),t._v(" "),o("li",[t._v("● 10 sessions")]),t._v(" "),o("li",[t._v("● 10 students")]),t._v(" "),o("li",[t._v("● 10 tools")]),t._v(" "),o("li",[t._v("● 1-to-1 feedback")])])]),t._v(" "),o("b-col",{staticClass:"coursebarevolve",attrs:{lg:"4"}},[o("div",{staticClass:"seatsleft"},[o("h2",{staticClass:"navic-color"},[t._v("10/10 SEATS LEFT")]),t._v(" "),o("b-progress",{staticClass:"mt-2",attrs:{height:"1.5 rem",width:"2rem",value:30,variant:"info",striped:"",animated:t.animate}}),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("h4",[t._v("STARTS IN")]),t._v(" "),o("b-row",{staticClass:"inlineflexer justify-content-around"},[o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v("0")]),o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v("0")]),o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v("0")])],1),t._v(" "),o("b-row",{staticClass:"inlineflexer justify-content-around"},[o("b-col",[t._v("DAYS")]),t._v(" "),o("b-col",[t._v("HOURS")]),t._v(" "),o("b-col",[t._v("MINS")])],1),t._v(" "),o("div",{staticClass:"py-5 hidemobile"})],1)])],1)],1),t._v(" "),o("div",{staticClass:"evolve-box"},[o("b-row",[o("b-col",{staticClass:"leftevolvebox",attrs:{lg:"5"}},[o("h1",{staticClass:"evolveboxhead py-2"},[t._v("EVOLVE  -   Level III")]),t._v(" "),o("p",{staticClass:"contenttextpg"},[t._v("Dominate")]),t._v(" "),o("p",{staticClass:"contenttextpg"},[t._v("\n          Expand your horizons and become the leader in your peer group with\n          level 3. With a curated selection of 10 pro subjects, this course\n          allows you to perfect your role and career specialization. Own it.\n        ")]),t._v(" "),o("h1",{staticClass:"priceevolvebox navic-color py-2"},[t._v("coming soon")]),t._v(" "),o("b-button",{staticClass:"btn-black evolvegobtn",attrs:{href:"/evolveIII"}},[t._v(" View Course ")])],1),t._v(" "),o("b-col",{staticClass:"centerevolvebox",attrs:{lg:"3"}},[o("ul",[o("li",[t._v("● 10 Weeks course")]),t._v(" "),o("li",[t._v("● 10 sessions")]),t._v(" "),o("li",[t._v("● 10 students")]),t._v(" "),o("li",[t._v("● 10 tools")]),t._v(" "),o("li",[t._v("● 1-to-1 feedback")])])]),t._v(" "),o("b-col",{staticClass:"coursebarevolve",attrs:{lg:"4"}},[o("div",{staticClass:"seatsleft"},[o("h2",{staticClass:"navic-color"},[t._v("10/10 SEATS LEFT")]),t._v(" "),o("b-progress",{staticClass:"mt-2",attrs:{height:"1.5 rem",width:"2rem",value:20,variant:"info",striped:"",animated:t.animate}}),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("h4",[t._v("STARTS IN")]),t._v(" "),o("b-row",{staticClass:"inlineflexer justify-content-around"},[o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v("0")]),o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v("0")]),o("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v("0")])],1),t._v(" "),o("b-row",{staticClass:"inlineflexer justify-content-around"},[o("b-col",[t._v("DAYS")]),t._v(" "),o("b-col",[t._v("HOURS")]),t._v(" "),o("b-col",[t._v("MINS")])],1),t._v(" "),o("div",{staticClass:"py-5 hidemobile"})],1)])],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);