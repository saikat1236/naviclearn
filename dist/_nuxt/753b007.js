(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{310:function(t,e,o){t.exports=o.p+"img/pro.9c24b78.svg"},311:function(t,e,o){t.exports=o.p+"img/stu.11abb0a.svg"},312:function(t,e,o){t.exports=o.p+"img/buis.2a5a228.svg"},313:function(t,e,o){t.exports=o.p+"img/ai.d757158.svg"},335:function(t,e,o){t.exports=o.p+"img/content.df66ef1.svg"},336:function(t,e,o){t.exports=o.p+"img/digibrand.cad0c46.svg"},337:function(t,e,o){t.exports=o.p+"img/digimarket.1bb7506.svg"},338:function(t,e,o){t.exports=o.p+"img/game.3661c39.svg"},339:function(t,e,o){t.exports=o.p+"img/group.abe2a04.svg"},340:function(t,e,o){t.exports=o.p+"img/growth.d183a4d.svg"},341:function(t,e,o){t.exports=o.p+"img/meme.c0fdeae.svg"},342:function(t,e,o){t.exports=o.p+"img/meta.52a5d2c.svg"},343:function(t,e,o){t.exports=o.p+"img/regional.755c408.svg"},398:function(t,e,o){var content=o(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("301ec900",content,!0,{sourceMap:!1})},441:function(t,e,o){"use strict";o(398)},442:function(t,e,o){var r=o(42)(!1);r.push([t.i,".seatsleft{font-family:NowThin;font-style:normal;font-weight:400;font-size:14.4762px;line-height:14px;text-align:center}.level1{display:flexbox;color:#fff;padding:0 100px}.ul{list-style-type:none}[dir=ltr] .listleftprep{padding-left:0!important}[dir=rtl] .listleftprep{padding-right:0!important}.listleftprep{line-height:55px;align-items:center}.listleftprep,.preptext{font-family:NowThin;font-style:normal;font-weight:400;font-size:16px}.preptext{line-height:26px;text-align:justify;letter-spacing:.0161em}.middlehead{font-family:Brandon Grotesque;font-style:normal;font-weight:420;font-size:24px;line-height:55px;text-transform:uppercase;color:#fff}.coursebar{text-align:center}.progress{border-radius:20px}.coursetiming{font-family:Now;font-style:normal;font-weight:500;font-size:16px;line-height:22px}.courseboxleft{text-align:left;padding:10px 53px}.coursebottom{text-align:center;padding:20px}.seatbutton{background:#242728;box-shadow:inset -4.8254px -4.8254px 4.8254px rgba(68,68,68,.25),inset 4.8254px 4.8254px 4.8254px rgba(2,2,2,.15);border-radius:48.254px;margin:22px 45px;padding:11px 13px;display:inline-flex}.coursecard{text-align:center;padding:20px;margin:20px}.card-title{font-size:18px}.card-img{height:100px}.for{align-content:center}.blackbar{background:#242728;box-shadow:inset -4px -4px 4px rgba(68,68,68,.25),inset 4px 4px 4px rgba(2,2,2,.15);border-radius:10px;display:flex;text-align:center;padding:10px;margin:15px}.aquatext{font-family:Now;font-weight:700;line-height:26px}.aquatext,.centrehead{font-style:normal;font-size:24px}.centrehead{font-family:Brandon Grotesque;font-weight:900;line-height:55px;text-align:center}",""]),t.exports=r},528:function(t,e,o){"use strict";o.r(e);o(38);var r={data:function(){return{displayday:0,displayhour:0,displaymin:0,displaysec:0,loaded:!1,expired:!1}},mounted:function(){this.showremaining()},computed:{_second:function(){return 1e3},_minutes:function(){return 60*this._second},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},methods:{formatNum:function(t){return t<10?"0"+t:t},showremaining:function(){var t=this,e=setInterval((function(){var o=new Date,r=new Date(2022,7,17,0,0).getTime()-o.getTime();r<0&&(clearInterval(e),t.expired=!0);var n=Math.floor(r/t._days),c=Math.floor(r%t._days/t._hours),l=Math.floor(r%t._hours/t._minutes);t.displayday=t.formatNum(n),t.displaymin=t.formatNum(l),t.displayhour=t.formatNum(c),t.loaded=!0}),1e3)}}},n=(o(441),o(25)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"level1 bg",attrs:{fluid:""}},[r("h1",{staticClass:"section-header white",staticStyle:{padding:"2rem 0 1rem"}},[t._v("\n      EVOLVE  -   Level III\n    ")]),t._v(" "),r("b-row",{},[r("b-col",{attrs:{lg:"8"}},[r("b-row",[r("b-col",{attrs:{lg:"5"}},[r("ul",{staticClass:"listleftprep"},[r("li",{staticClass:"listitemgo"},[r("b-icon",{attrs:{icon:"check-circle",variant:"info"}}),t._v(" Batch limit\n                -10 students\n              ")],1),t._v(" "),r("li",{staticClass:"listitemgo"},[r("b-icon",{attrs:{icon:"check-circle",variant:"info"}}),t._v(" 10 Week\n                Courses\n              ")],1),t._v(" "),r("li",{staticClass:"listitemgo"},[r("b-icon",{attrs:{icon:"check-circle",variant:"info"}}),t._v(" 5\n                practicals\n              ")],1)])]),t._v(" "),r("b-col",{attrs:{lg:"6"}},[r("ul",{staticClass:"listleftprep"},[r("li",{staticClass:"listitemgo"},[r("b-icon",{attrs:{icon:"check-circle",variant:"info"}}),t._v(" Live\n                Interactive Sessions\n              ")],1),t._v(" "),r("li",{staticClass:"listitemgo"},[r("b-icon",{attrs:{icon:"check-circle",variant:"info"}}),t._v(" Segregated\n                Q&A sessions\n              ")],1),t._v(" "),r("li",{staticClass:"listitemgo"},[r("b-icon",{attrs:{icon:"check-circle",variant:"info"}}),t._v(" 1-to-1\n                feedback\n              ")],1)])])],1),t._v(" "),r("b-row",{staticClass:"courseboxleft"},[r("h3",{staticClass:"middlehead"},[t._v("ABOUT")]),t._v(" "),r("p",{staticClass:"preptext"},[t._v("\n            Dominate"),r("br"),t._v("\n            Expand your horizons and become the leader in your peer group with\n            level 3. With a curated selection of 10 pro subjects, this course\n            allows you to perfect your role and career specialization. Own\n            it."),r("br"),t._v("\n            EVOLVE-III is created for marketers by marketers. In a rapidly\n            changing communications industry, EVOLVE aims to work with limited\n            batches and grow your understanding about the future of marketing.\n            Whether you come from Advertising, Digital Marketing, Public\n            Relations or social media marketing, EVOLVE will add value to your\n            personal marketing journey.\n            "),r("br"),t._v(" "),r("b",[t._v("*Recommended to take the courses in sequence. ")])])])],1),t._v(" "),r("b-col",{staticClass:"coursebar",attrs:{lg:"4"}},[r("div",{staticClass:"seatsleft"},[r("h2",{staticClass:"navic-color"},[t._v("2/10 SEATS LEFT")]),t._v(" "),r("b-progress",{staticClass:"mt-2",attrs:{height:"1.5 rem",width:"2rem",value:20,variant:"info",striped:"",animated:t.animate}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("STARTS IN")]),t._v(" "),r("b-row",{staticClass:"inlineflexer justify-content-around"},[r("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displayday))]),r("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displayhour))]),r("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displaymin))])],1),t._v(" "),r("b-row",{staticClass:"inlineflexer justify-content-around"},[r("b-col",[t._v("DAYS")]),t._v(" "),r("b-col",[t._v("HOURS")]),t._v(" "),r("b-col",[t._v("MINS")])],1),t._v(" "),r("div",{staticClass:"py-5"},[r("h2",{staticClass:"navic-color pb-4"},[t._v("₹34990")])]),t._v(" "),r("form",[r("script",{attrs:{src:"https://checkout.razorpay.com/v1/payment-button.js","data-payment_button_id":"pl_K0MpvY7pr5S4oo",async:""}})])],1)])],1),t._v(" "),r("h2",{staticClass:"center centerhead py-5"},[t._v("Modules in This Course")]),t._v(" "),r("b-row",{attrs:{"align-self":"center"}},[r("b-col",{attrs:{"align-self":"start"}}),t._v(" "),r("b-col",{attrs:{lg:"6","align-self":"center"}},[r("div",{staticClass:"accordion accordian-body",attrs:{role:"tablist"}},[r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(313),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Ai In Marketing 2")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● The AI revolution"),r("br"),t._v("\n                        ● The Turing Test"),r("br"),t._v("\n                        ● How AI communicates"),r("br"),t._v("\n                        ● How communicators use AI"),r("br"),t._v("\n                        ● Case 1"),r("br"),t._v("\n                        ● Case 2"),r("br"),t._v("\n                        ● How can you use AI?"),r("br"),t._v("\n                        ● Future of AI\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(335),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Content Marketing")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-2",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● What is content marketing?"),r("br"),t._v("\n                        ● How has it changed? Storytelling Automation\n                        in Content"),r("br"),t._v("\n                        ● Change in content formats Old vs new"),r("br"),t._v("\n                        ● Use case 1"),r("br"),t._v("\n                        ● Use case 2\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(336),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Digital Brand Design")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-3",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● Basics of brand design"),r("br"),t._v("\n                        ● What is a digital brand design?"),r("br"),t._v("\n                        ● Fundamentals of digital brand design"),r("br"),t._v("\n                        ● Digital consumer journey"),r("br"),t._v("\n                        ● Digital experience"),r("br"),t._v("\n                        ● Use-case of digital brand design\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(337),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Digital Marketing - Tracking and Analysis")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-4",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● What is tracking and analysis?"),r("br"),t._v("\n                        ● Fundamentals of success"),r("br"),t._v("\n                        ● Expectation setting"),r("br"),t._v("\n                        ● Types of metrics"),r("br"),t._v("\n                        ● Tools to track marketing success"),r("br"),t._v("\n                        ● Use-case 1"),r("br"),t._v("\n                        ● Use-case 2\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(338),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Gamification")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-5",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● What is a game?"),r("br"),t._v("\n                        ● Gamification - Basics"),r("br"),t._v("\n                        ● The fundamental design of gamification"),r("br"),t._v("\n                        ● Gamification & Communications"),r("br"),t._v("\n                        ● Case 1"),r("br"),t._v("\n                        ● Case 2"),r("br"),t._v("\n                        ● Incentives\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(339),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Digital Communities and Groups")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-6",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● Who are the digital communities and\n                        groups?"),r("br"),t._v("\n                        ● What is their role in social media\n                        communication?"),r("br"),t._v("\n                        ● Types of groups and communities"),r("br"),t._v("\n                        ● Paid/Unpaid partnerships"),r("br"),t._v("\n                        ● Use-cases\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(340),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-7",modifiers:{"accordion-7":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Growth Hacking")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-7",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● What is Growth Hacking?"),r("br"),t._v("\n                        ● What is growth hacking on\n                        social/digital?"),r("br"),t._v("\n                        ● Basic techniques of growth hacking"),r("br"),t._v("\n                        ● The role of JUGAAD"),r("br"),t._v("\n                        ● Use-case of growthhacking\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(341),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-8",modifiers:{"accordion-8":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Meme Marketing")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-8",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        What is a meme?"),r("br"),t._v("\n                        ● History of memes"),r("br"),t._v("\n                        ● Types of memes"),r("br"),t._v("\n                        ● Use-cases of memes"),r("br"),t._v("\n                        ● Memes in India"),r("br"),t._v("\n                        ● How to create memes"),r("br"),t._v("\n                        ● Fundamentals of meme marketing\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(342),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-9",modifiers:{"accordion-9":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Metadata and keywords")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-9",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● What is metadata?"),r("br"),t._v("\n                        ● How does it work?"),r("br"),t._v("\n                        ● Use case of Metadata"),r("br"),t._v("\n                        ● What are keywords?"),r("br"),t._v("\n                        ● How do they work?"),r("br"),t._v("\n                        ● Use-case of keywords"),r("br"),t._v("\n                        ● Synergy\n                      ")])])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"modulesbody"},[r("b-col",{staticClass:"modulesleft",attrs:{cols:"2"}},[r("img",{staticClass:"moduleimg",attrs:{src:o(343),height:"55px;"}})]),t._v(" "),r("b-col",{staticClass:"py=0",attrs:{cols:"10"}},[r("b-card",{staticClass:"mb-1 darkbody",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-10",modifiers:{"accordion-10":!0}}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[t._v("Regional Communications")])],1),t._v(" "),r("b-collapse",{attrs:{id:"accordion-10",visible:"",accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("p",{staticClass:"white insidetext"},[t._v("\n                        ● What are regional communications?"),r("br"),t._v("\n                        ● What is the role of regional content in\n                        India?"),r("br"),t._v("\n                        ● The role of social platforms in pushing\n                        regional content"),r("br"),t._v("\n                        ● The situation today"),r("br"),t._v("\n                        ● Usecase 1"),r("br"),t._v("\n                        ● Usecase 2\n                      ")])])],1)],1)],1)],1)],1)],1)]),t._v(" "),r("b-col",{attrs:{"align-self":"end"}})],1),t._v(" "),r("div",{staticClass:"coursebottom hidemobile"},[r("b-row",[r("b-col",{attrs:{lg:"4","align-self":"start"}}),t._v(" "),r("b-col",{staticClass:"px-2",attrs:{lg:"4","align-self":"center"}},[r("div",{staticClass:"seatsleft"},[r("h2",{staticClass:"navic-color"},[t._v("2/10 SEATS LEFT")]),t._v(" "),r("b-progress",{staticClass:"mt-2",attrs:{height:"1.5 rem",width:"2rem",value:20,variant:"info",striped:"",animated:t.animate}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("STARTS IN")]),t._v(" "),r("b-row",{staticClass:"inlineflexer justify-content-around"},[r("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displayday))]),r("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displayhour))]),r("b-col",{staticClass:"seatbutton",attrs:{lg:"1",sm:"1"}},[t._v(t._s(t.displaymin))])],1),t._v(" "),r("b-row",{staticClass:"inlineflexer justify-content-around"},[r("b-col",[t._v("DAYS")]),t._v(" "),r("b-col",[t._v("HOURS")]),t._v(" "),r("b-col",[t._v("MINS")])],1),t._v(" "),r("div",{staticClass:"py-5"},[r("h2",{staticClass:"navic-color pb-4"},[t._v("₹34990")])])],1)]),t._v(" "),r("b-col",{attrs:{"align-self":"end"}})],1)],1),t._v(" "),r("h2",{staticClass:"center py-6"},[t._v("Who is EVOLVE-III made for?")]),t._v(" "),r("div",{staticClass:"for center py-4"},[r("b-img",{attrs:{src:o(312)}}),t._v(" "),r("b-img",{attrs:{src:o(310)}}),t._v(" "),r("b-img",{attrs:{src:o(311)}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Form:o(219).default})}}]);