(function(e){function t(t){for(var n,i,l=t[0],u=t[1],c=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e._m(0),r("v-main",[r("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","fill-height":""}},[r("v-card",{attrs:{elevation:"24",width:"85%"}},[r("v-card-subtitle",[e._v(" GengTu.Upload ")]),r("v-divider"),r("v-card-text",[r("v-alert",{attrs:{elevation:"12",text:"",type:"warning"}},[e._v(" 由于 Gengtu 相册放在 Github 上，您提交 Gengtu 时需要一个 Github账号 。 "),r("br"),e._v(" 另外，您可能需要 Cross Great Wall. ")]),r("v-form",{ref:"form",model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[r("v-text-field",{attrs:{rules:e.imageLinkRule,label:"图片链接（需为图片直链）",required:"","prepend-icon":"mdi-image"},model:{value:e.imageLink,callback:function(t){e.imageLink=t},expression:"imageLink"}}),r("v-textarea",{attrs:{rules:e.descriptionRule,counter:"100","auto-grow":"",clearable:"","clear-icon":"mdi-close","prepend-icon":"mdi-comment",rows:"5",label:"图片描述（非必填）"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),[r("v-combobox",{attrs:{items:e.peoples,rules:e.aboutPeopleRule,chips:"",clearable:"",label:"与此 Gengtu 有关的人",multiple:"","prepend-icon":"mdi-bash"},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.attrs,o=t.item,a=t.select,i=t.selected;return[r("v-chip",e._b({attrs:{"input-value":i,close:"",color:e.randomColor(),dark:""},on:{click:a,"click:close":function(t){return e.remove(o)}}},"v-chip",n,!1),[r("strong",[e._v(e._s(o))])])]}}]),model:{value:e.aboutPeople,callback:function(t){e.aboutPeople=t},expression:"aboutPeople"}})],r("v-text-field",{attrs:{rules:e.qqIdRule,label:"QQ号",required:"","prepend-icon":"mdi-qqchat"},model:{value:e.qqId,callback:function(t){e.qqId=t},expression:"qqId"}}),r("v-card-actions",[r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.formValid,color:"success"},on:{click:e.validate}},[e._v(" 提交 ")]),r("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" 重置 ")])],1)],2)],1)],1)],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:e.randomColor()+"--text"},expression:"{ class: `${randomColor()}--text` }"}],attrs:{app:"",color:e.randomColor(),dark:""}},[r("v-icon",{staticClass:"logo",attrs:{"x-large":""}},[e._v(" mdi-cat ")]),e._v(" GengTu.Upload "),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/HelloGwkki/GengTu",target:"_blank",text:"",icon:""}},[r("v-icon",[e._v(" mdi-github ")])],1)],1)}],i=r("2909");r("a4d3"),r("e01a"),r("a434");function l(e){return void 0==e||null==e?[]:e}var u={awesome:l},c={name:"app",data:function(){return{allColors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","blue-grey","grey"],formValid:!1,imageLink:"",imageLinkRule:[function(e){return!!e||"图片链接不能为空"},function(e){return/^((https|http)?:\/\/)[^\s]+(\.gif|jpeg|png|jpg)+/.test(e)||"链接格式有误"}],description:"",descriptionRule:[function(e){return!(u.awesome(e).length>100)||"字数不能大于100"}],peoples:["空","彩虹酱","NoName","HelloGwkki","Dundun","蓝梦","宇宙","shift8","霜啸"],aboutPeople:[],search:null,aboutPeopleRule:[function(e){return!u.awesome(e).length<=0||"必须选择此 Gengtu 的相关人员"},function(e){return!(u.awesome(e).length>5)||"不能选择 5 个人以上"}],qqId:"",qqIdRule:[function(e){return!!e||" QQ号 不能为空"},function(e){return/[1-9]([0-9]{4,10})/.test(e)||"QQ号格式有误"}]}},methods:{validate:function(){this.$refs.form.validate(),this.$refs.form.validate()&&(console.log(this),window.location.href="https://github.com/HelloGwkki/GengTu/issues/new?title=GengtuUpload&body=\x3c!--Please%20submit.%20DONT%20EDIT%20AGAIN.--\x3e%0A%0A[IMAGE LINK]%0A"+this.$data.imageLink+"%0A%0A[DESCRIPTION]%0A"+this.$data.description+"%0A%0A[PEOPLES]%0A"+this.$data.aboutPeople+"%0A%0A[QQ ID]%0A"+this.$data.qqId+"%0A%0A%0AOwO")},reset:function(){this.$refs.form.reset()},remove:function(e){this.aboutPeople.splice(this.aboutPeople.indexOf(e),1),this.aboutPeople=Object(i["a"])(this.aboutPeople)},randomColor:function(){return this.allColors[Math.floor(Math.random()*this.allColors.length)]}}},s=c,p=(r("034f"),r("2877")),d=r("6544"),f=r.n(d),v=r("0798"),b=r("7496"),m=r("40dc"),h=r("8336"),g=r("b0af"),w=r("99d9"),k=r("cc20"),x=r("2b5d"),y=r("ce7e"),_=r("4bd4"),V=r("132d"),A=r("a722"),P=r("f6c4"),C=r("2fa4"),O=r("8654"),q=r("a844"),G=r("269a"),I=r.n(G),j=r("5607"),T=Object(p["a"])(s,o,a,!1,null,null,null),$=T.exports;f()(T,{VAlert:v["a"],VApp:b["a"],VAppBar:m["a"],VBtn:h["a"],VCard:g["a"],VCardActions:w["a"],VCardSubtitle:w["b"],VCardText:w["c"],VChip:k["a"],VCombobox:x["a"],VDivider:y["a"],VForm:_["a"],VIcon:V["a"],VLayout:A["a"],VMain:P["a"],VSpacer:C["a"],VTextField:O["a"],VTextarea:q["a"]}),I()(T,{Ripple:j["a"]});var L=r("f309");n["a"].use(L["a"]);var R=new L["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:R,render:function(e){return e($)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.625b487b.js.map