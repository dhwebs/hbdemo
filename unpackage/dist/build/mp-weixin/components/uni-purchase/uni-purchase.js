(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-purchase/uni-purchase"],{"180d":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var r=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"47bf":function(t,n,e){"use strict";var u=e("6bad"),r=e.n(u);r.a},"6bad":function(t,n,e){},7183:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"purchase",props:{type:{type:String,default:"row"},list:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){console.log(this.list)},methods:{buy:function(n){n=JSON.stringify(n),t.navigateTo({url:"../info/info?item="+n})}}};n.default=e}).call(this,e("543d")["default"])},"8e64":function(t,n,e){"use strict";e.r(n);var u=e("180d"),r=e("ba9c");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("47bf");var c,i=e("f0c5"),o=Object(i["a"])(r["default"],u["b"],u["c"],!1,null,"5540883d",null,!1,u["a"],c);n["default"]=o.exports},ba9c:function(t,n,e){"use strict";e.r(n);var u=e("7183"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-purchase/uni-purchase-create-component',
    {
        'components/uni-purchase/uni-purchase-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8e64"))
        })
    },
    [['components/uni-purchase/uni-purchase-create-component']]
]);
