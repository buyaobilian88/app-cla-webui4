(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696676b4"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[t._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},i=[],a={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},c=a,o=(n("5d19"),n("2877")),s=Object(o["a"])(c,r,i,!1,null,"1d41f76a",null);e["a"]=s.exports},1460:function(t,e,n){"use strict";var r=n("cf23"),i=n.n(r);i.a},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"498a":function(t,e,n){"use strict";var r=n("23e7"),i=n("58a8").trim,a=n("c8d2");r({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),c=n("50c4"),o=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,m=x?"$":"$0";return[function(n,r){var i=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(m)){var a=n(e,t,this,r);if(a.done)return a.value}var s=i(t),p=String(this),v="function"===typeof r;v||(r=String(r));var g=s.global;if(g){var b=s.unicode;s.lastIndex=0}var y=[];while(1){var _=l(s,p);if(null===_)break;if(y.push(_),!g)break;var R=String(_[0]);""===R&&(s.lastIndex=u(p,c(s.lastIndex),b))}for(var w="",C=0,A=0;A<y.length;A++){_=y[A];for(var I=String(_[0]),O=f(d(o(_.index),p.length),0),$=[],P=1;P<_.length;P++)$.push(h(_[P]));var T=_.groups;if(v){var U=[I].concat($,O,p);void 0!==T&&U.push(T);var k=String(r.apply(void 0,U))}else k=S(I,p,O,$,T,r);O>=C&&(w+=p.slice(C,O)+k,C=O+I.length)}return w+p.slice(C)}];function S(t,n,r,i,c,o){var s=r+t.length,u=i.length,l=g;return void 0!==c&&(c=a(c),l=v),e.call(o,l,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":o=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>u){var f=p(l/10);return 0===f?e:f<=u?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}o=i[l-1]}return void 0===o?"":o}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5d19":function(t,e,n){"use strict";var r=n("a573"),i=n.n(r);i.a},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,c,o=String(i(e)),s=r(n),u=o.length;return s<0||s>=u?t?"":void 0:(a=o.charCodeAt(s),a<55296||a>56319||s+1===u||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):a:t?o.slice(s,s+2):c-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,o=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(o=function(t){var e,n,i,o,f=this,d=u&&f.sticky,p=r.call(f),v=f.source,g=0,h=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),n=new RegExp("^(?:"+v+")",p)),l&&(n=new RegExp("^"+v+"$(?!\\s)",p)),s&&(e=f.lastIndex),i=a.call(d?n:f,h),d?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&c.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),a=n("a691"),c=n("50c4"),o=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),f=n("ae40"),d=l("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,g=Math.min,h=9007199254740991,x="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var n,r,l,f,d,p,E=o(this),m=c(E.length),S=i(t,m),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=m-S):(n=b-2,r=g(v(a(e),0),m-S)),m+n-r>h)throw TypeError(x);for(l=s(E,r),f=0;f<r;f++)d=S+f,d in E&&u(l,f,E[d]);if(l.length=r,n<r){for(f=S;f<m-r;f++)d=f+r,p=f+n,d in E?E[p]=E[d]:delete E[p];for(f=m;f>m-r+n;f--)delete E[f-1]}else if(n>r)for(f=m-r;f>S;f--)d=f+r-1,p=f+n-1,d in E?E[p]=E[d]:delete E[p];for(f=0;f<n;f++)E[f+S]=arguments[f+2];return E.length=m-r+n,l}})},a573:function(t,e,n){},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c8d2:function(t,e,n){var r=n("d039"),i=n("5899"),a="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||a[t]()!=a||i[t].name!==t}))}},c975:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,a=n("a640"),c=n("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),l=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!u||!l},{indexOf:function(t){return s?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},cf23:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),c=n("9263"),o=n("9112"),s=a("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=a(t),g=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!g||!h||"replace"===t&&(!u||!l||d)||"split"===t&&!p){var x=/./[v],E=n(v,""[t],(function(t,e,n,r,i){return e.exec===c?g&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=E[0],S=E[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}f&&o(RegExp.prototype[v],"sham",!0)}},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[t._v("© 2020 HUAWEI SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[t._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},i=[],a={name:"Footer"},c=a,o=(n("1460"),n("2877")),s=Object(o["a"])(c,r,i,!1,null,"bc0631b2",null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-696676b4.b936c13b.js.map