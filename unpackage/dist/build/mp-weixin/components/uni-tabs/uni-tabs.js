(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-tabs/uni-tabs"],{"458b":function(t,n,e){"use strict";e.r(n);var i=e("c31c"),c=e("e1be");for(var a in c)"default"!==a&&function(t){e.d(n,t,(function(){return c[t]}))}(a);e("b0c6");var o,u=e("f0c5"),r=Object(u["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=r.exports},"6b83":function(t,n,e){},b0c6:function(t,n,e){"use strict";var i=e("6b83"),c=e.n(i);c.a},c31c:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var c=function(){var t=this,n=t.$createElement;t._self._c},a=[]},e1be:function(t,n,e){"use strict";e.r(n);var i=e("e81e"),c=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=c.a},e81e:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{title:{type:Array,default:""},active:{type:[Number,String],default:0},isSticky:{type:Boolean,default:!0},position:{type:String,default:"top"}},data:function(){return{intoIndex:"a0"}},created:function(){this.intoIndex="a".concat(this.active)},watch:{active:function(t){console.log(t),this.intoIndex="a".concat(t),console.log(this.isSticky,"isSticky")}},methods:{indexChange:function(t){this.intoIndex="a".concat(t),this.$emit("change",t)},activeChagne2:function(t){this.$emit("change",t.detail.current)}}};n.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-tabs/uni-tabs-create-component',
    {
        'components/uni-tabs/uni-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("458b"))
        })
    },
    [['components/uni-tabs/uni-tabs-create-component']]
]);
