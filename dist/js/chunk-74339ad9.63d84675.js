(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74339ad9"],{2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("6b75");function s(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||i(t)||Object(o["a"])(t)||r()}},3187:function(t,e,n){},"373e":function(t,e,n){},"3bd7":function(t,e,n){},"460b":function(t,e,n){},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"9bf4":function(t,e,n){"use strict";n("460b")},a953:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-contorl"},t._l(t.titles,(function(e,a){return n("div",{key:a,staticClass:"tab-contorl-item",class:{active:a==t.currentIndex},on:{click:function(e){return t.tabChange(a)}}},[n("span",[t._v(t._s(e))])])})),0)},s=[],i={name:"tabContorl",props:{titles:{type:Array,default:function(){return["选项1","选项2","选项3"]}}},data:function(){return{currentIndex:0}},methods:{tabChange:function(t){this.currentIndex=t,this.$emit("changeDate",t),this.$bus.$emit("indexChange",t)}}},o=i,r=(n("da47"),n("2877")),c=Object(r["a"])(o,a,s,!1,null,"e8deb20e",null);e["a"]=c.exports},a9b0:function(t,e,n){},b3d7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav",scopedSlots:t._u([{key:"center",fn:function(){return[n("div",[t._v("购物街")])]},proxy:!0}])}),n("tab-contorl",{directives:[{name:"show",rawName:"v-show",value:t.isFiexd,expression:"isFiexd"}],ref:"tabControl2",staticClass:"tab-contorl",attrs:{titles:["流行","新款","精选"]},on:{changeDate:t.changeDate}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{pulling:t.pullingUp,showBackTop:t.showBackTop}},[n("home-swiper",{staticClass:"mt",attrs:{list:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),n("recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-contorl",{ref:"tabControl",staticClass:"tab-contorl",attrs:{titles:["流行","新款","精选"]},on:{changeDate:t.changeDate}}),n("goods-list",{attrs:{list:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isBackTop,expression:"isBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},s=[],i=n("2909"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[t.list.length>0?n("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.list,(function(e,a){return n("swiper-slide",{key:a},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},r=[],c=n("7212"),l=(n("dfa4"),{name:"HomeSwiper",props:{list:{type:Array,default:function(){return[]}}},components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"]},data:function(){return{swiperOptions:{loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},isImageLoad:!1}},methods:{imageLoad:function(){this.isImageLoad||(this.$emit("swiperImageLoad"),this.isImageLoad=!0)}}}),u=l,p=(n("b8f5"),n("2877")),d=Object(p["a"])(u,o,r,!1,null,"4c67fae2",null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-view"},t._l(t.recommends,(function(e,a){return n("div",{key:a,staticClass:"recommend-item"},[n("div",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("span",[t._v(t._s(e.title))])])])])})),0)},b=[],h={name:"recommendView",props:{recommends:{type:Array,default:function(){return[]}}}},g=h,v=(n("9bf4"),Object(p["a"])(g,m,b,!1,null,"677607cf",null)),w=v.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feature"},[a("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[a("img",{attrs:{src:n("5cbe"),alt:""}})])])}],x={name:"feature"},_=x,C=(n("daae"),Object(p["a"])(_,y,k,!1,null,null,null)),T=C.exports,O=n("a7ac"),$=n("a953"),I=n("6d71"),j=n("5d17"),S=n("1bab");function L(){return Object(S["a"])({url:"/home/multidata"})}function H(t,e){return Object(S["a"])({url:"/home/data",params:{type:t,page:e}})}n("90b9");var E=n("eecb"),B={name:"Home",components:{NavBar:O["a"],HomeSwiper:f,recommendView:w,FeatureView:T,TabContorl:$["a"],GoodsList:I["a"],Scroll:j["a"]},data:function(){return{isFiexd:!1,banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,keepScrollY:0}},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mixins:[E["b"],E["a"]],activated:function(){this.$refs.scroll.scrollTo(0,this.keepScrollY,0)},deactivated:function(){this.keepScrollY=this.$refs.scroll.scroll.y},computed:{showGoods:function(){return this.goods[this.currentType].list}},methods:{changeDate:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl.currentIndex=t,this.$refs.tabControl2.currentIndex=t},showBackTop:function(t){this.isBackTop=-t>3e3,this.isFiexd=-t>this.tabOffsetTop},pullingUp:function(){var t=this;this.getHomeGoods(this.currentType),setTimeout((function(){t.$refs.scroll.pullingUp()}),1e3),this.$refs.scroll.scrollBy(0,-50,1e3)},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop},getHomeMultidata:function(){var t=this;L().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;H(t,n).then((function(n){var a;(a=e.goods[t].list).push.apply(a,Object(i["a"])(n.data.list)),e.goods[t].page+=1}))}}},G=B,A=(n("b745"),Object(p["a"])(G,a,s,!1,null,"28abc7ac",null));e["default"]=A.exports},b745:function(t,e,n){"use strict";n("a9b0")},b8f5:function(t,e,n){"use strict";n("3187")},da47:function(t,e,n){"use strict";n("3bd7")},daae:function(t,e,n){"use strict";n("373e")}}]);
//# sourceMappingURL=chunk-74339ad9.63d84675.js.map