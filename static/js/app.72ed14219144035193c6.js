webpackJsonp([5],{"1Eeq":function(t,e){},DAvY:function(t,e){},Gmsc:function(t,e){},NHnr:function(t,e,A){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=A("7+uW"),a={name:"Header",methods:{show:function(){console.log("hello")}}},i={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"header"},[A("div",{staticClass:"hd-wrap"},[A("h1",{staticClass:"hd-logo",on:{click:t.show}},[t._v(" - Listening | Makes life happy 。")]),t._v(" "),A("ul",{staticClass:"hd-nav"},[A("router-link",{attrs:{tag:"li",to:{name:"Home",params:{userId:123,userName:"nikeName"}}}},[t._v("Home")]),t._v(" "),A("router-link",{attrs:{tag:"li",to:"/mini-app"}},[t._v("Mini-App")]),t._v(" "),A("router-link",{attrs:{tag:"li",to:"/diary"}},[t._v("Diary")]),t._v(" "),A("router-link",{attrs:{tag:"li",to:"/resume"}},[t._v("Resume")])],1)])])},staticRenderFns:[]};var r=A("VU/8")(a,i,!1,function(t){A("k5Ml")},"data-v-1bdaecee",null).exports,s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"ft-wrap"},[e("p",[this._v("Copyright © coverlive有限公司 版权所有")]),this._v(" "),e("p",{staticClass:"address"},[this._v("地址：湖南省长沙市岳麓区  湘ICP备11016765号 "),e("img",{attrs:{src:A("NPQ6"),alt:""}})])])])}]};var o=A("VU/8")({name:"Footer"},s,!1,function(t){A("Gmsc")},"data-v-2c8b2147",null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("transition",{attrs:{name:"slide"}},[e("router-view")],1)],1)},staticRenderFns:[]};var p={name:"App",data:function(){return{}},components:{"app-header":r,"app-main":A("VU/8")({name:"Main"},c,!1,function(t){A("1Eeq")},"data-v-7f7eb74f",null).exports,"app-footer":o}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("app-main"),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var l=A("VU/8")(p,u,!1,function(t){A("DAvY")},null,null).exports,m=A("/ocq");n.a.use(m.a);var h=new m.a({routes:[{path:"/",redirect:{name:"MiniApp"}},{path:"/home",name:"Home",component:function(t){return A.e(1).then(function(){var e=[A("wUZA")];t.apply(null,e)}.bind(this)).catch(A.oe)}},{path:"/mini-app",name:"MiniApp",component:function(t){return A.e(0).then(function(){var e=[A("j1RM")];t.apply(null,e)}.bind(this)).catch(A.oe)}},{path:"/diary",name:"Diary",component:function(t){return A.e(2).then(function(){var e=[A("t+Vl")];t.apply(null,e)}.bind(this)).catch(A.oe)}},{path:"/resume",name:"Resume",component:function(t){return A.e(3).then(function(){var e=[A("gOcp")];t.apply(null,e)}.bind(this)).catch(A.oe)}}]}),v=A("mtWM"),d=A.n(v);n.a.prototype.$axios=d.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},NPQ6:function(t,e){t.exports="data:image/gif;base64,R0lGODlhMgAMAMQAAAAAAGaZADOZzP8zM8zMzNLS0tbW1tnZ2d3d3eHh4eTk5Ojo6Ozs7PDw8PX19fr6+v39/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/g9Qb3dlcmVkIGJ5IEFGRUkAIfkECQ8AEQAsAAAAADIADAAABaggIY5kaZ5oakJs675wLM+t+Nx4ru/84P/AYFDkKAKOAEdSqUQ2j8WoQ0ilEo2ILAIKQDiy3e/WKy2bz0VRYw04rBvto/vYmAPq77xgz+/7+SIMggAGggyEhwYADAaFi42GkQx/lH4iC5hIAAsABZwFmpxImKSlpqenIgqrCiStqwStI7KqrLasAbm6u7siCb/AwcLDxMO8x7oiWsvMzc7P0M0q09TVJSEAIfkECQ8AEQAsAAAAADIADAAABaogIY5kaZ5oakJs675wLM+t+Nx4ru98/wzAoHAgchgBSIBDuVwmnUijdEp1DK/FI2KLiAIQju033AVXz2ipqMEGHNgNN/KNbNABdrieLej7/4ACIgyEAAaEDIaJBgAMBoeNj4iTiIGWfiILmkkACwAFngWcnkmapqeoqakiCq0KJK+tBK8jtKyuuK4Bu7y9vSIJwcLDxMXGxb7JvCJczc7P0NHSzyrV1tclIQAh+QQJDwARACwAAAAAMgAMAAAFqiAhjmRpnmhqQmzrvnAsz6343Hiu73z/DMCgcCByGAFIgEO5XCadSKN0SnUMr8UjYouIAhCO7TfcBVfPaKmowQYc2A038o1s0AF2uJ4t6Pv/gAIiDIQABoQMhokGAAwGh42PiJOIgZZ+IguaSQALAAWeBZyeSZqmp6ipqSIKrQokr60EryO0rK6uAbq7vL27IgnBwsPExcbBvsm9IlzNzs/Q0dLPKtXW1yUhADs="},k5Ml:function(t,e){}},["NHnr"]);