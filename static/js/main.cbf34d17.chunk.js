(this["webpackJsonpwaktu-solat"]=this["webpackJsonpwaktu-solat"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(4),o=n.n(s),i=(n(13),n(3)),l=n.n(i),u=n(7),j=n(2),b=(n(15),function(e){var t=e.negeri,n=e.selected;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("select",{id:"select-negeri",value:t,onChange:function(e){return function(e){n(e.target.value)}(e)},children:[Object(a.jsx)("option",{value:"sabah",children:"Sabah"}),Object(a.jsx)("option",{value:"johor",children:"Johor"}),Object(a.jsx)("option",{value:"kedah",children:"Kedah"}),Object(a.jsx)("option",{value:"kelantan",children:"Kelantan"}),Object(a.jsx)("option",{value:"melaka",children:"Melaka"}),Object(a.jsx)("option",{value:"negeri sembilan",children:"Negeri Sembilan"}),Object(a.jsx)("option",{value:"pahang",children:"Pahang"}),Object(a.jsx)("option",{value:"perlis",children:"Perlis"}),Object(a.jsx)("option",{value:"pulau pinang",children:"Pulau Pinang"}),Object(a.jsx)("option",{value:"perak",children:"Perak"}),Object(a.jsx)("option",{value:"selangor",children:"Selangor"}),Object(a.jsx)("option",{value:"sarawak",children:"Sarawak"}),Object(a.jsx)("option",{value:"terengganu",children:"Terengganu"}),Object(a.jsx)("option",{value:"wilayah persekutuan",children:"Wilayah Persekutuan"})]})})}),h=function(e){var t=e.zon,n=e.userZon,c=e.selected;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("select",{id:"select-zon",value:n,onChange:function(e){return function(e){c(e.target.value)}(e)},children:t.map((function(e){return Object(a.jsxs)("option",{value:e,children:[" ",e," "]},t.indexOf(e))}))})})},d=(n(16),function(e){var t=e.waktuSolat;return Object(a.jsx)("div",{className:"card",children:t.map((function(e){var n=e.time,c=e.name.charAt(0).toUpperCase()+e.name.slice(1);return Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{className:"waktu",children:[" ",c," "]}),Object(a.jsxs)("span",{className:"masa",children:[" ",n,"  "]})]},t.indexOf(e)+1)}))})}),p=n(5),O=(n(17),function(e){var t=e.setDefault,n=function(){return p.c.dark("Default location saved.",{position:"bottom-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){t(),n()},children:" Set as default "}),Object(a.jsx)(p.b,{limit:1,transition:p.a})]})});n(18);var x=function(){var e=Object(c.useState)("sabah"),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),o=Object(j.a)(s,2),i=o[0],p=o[1],x=Object(c.useState)("kota kinabalu"),f=Object(j.a)(x,2),g=f[0],v=f[1],k=Object(c.useState)([]),m=Object(j.a)(k,2),S=m[0],w=m[1],z=Object(c.useState)(!0),_=Object(j.a)(z,2),I=_[0],P=_[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null!==localStorage.getItem("cookie_negeri")&&I&&r(localStorage.getItem("cookie_negeri")),t="https://waktu-solat-api.herokuapp.com/api/v1/states.json?negeri="+n,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,p(c.data.negeri.zon),null!==localStorage.getItem("cookie_zon")&&I?(v(localStorage.getItem("cookie_zon")),P(!1)):v(c.data.negeri.zon[0]);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon="+g,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,w(a.data[0].waktu_solat);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:" Waktu Solat "}),Object(a.jsxs)("div",{className:"selects",children:[Object(a.jsxs)("span",{children:[" ",Object(a.jsx)(b,{negeri:n,selected:function(e){r(e)}})," "]}),Object(a.jsxs)("span",{children:[" ",Object(a.jsx)(h,{zon:i,userZon:g,selected:function(e){v(e)}})," "]})]}),Object(a.jsx)(O,{setDefault:function(){localStorage.setItem("cookie_negeri",n),localStorage.setItem("cookie_zon",g)}}),Object(a.jsxs)("h3",{children:[" Waktu solat ",g," "]}),Object(a.jsx)(d,{waktuSolat:S})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cbf34d17.chunk.js.map