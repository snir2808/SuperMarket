(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,c,t){},29:function(e,c,t){},37:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(1),j=t.n(n),r=t(17),a=t.n(r),i=(t(28),t(18)),b=t(21),l=t(8),o=t(2),d=t(3);t(29);function O(e){var c=Object(d.f)(),t=0;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Shopping cart"}),Object(s.jsx)("ul",{children:e.cart.map((function(c,n){return t+=c[0],Object(s.jsxs)("li",{children:[c[1],"   ",c[0],"$ ",Object(s.jsx)("button",{onClick:function(){!function(c,t){e.funcDel(c,t)}(n,c)},className:"Bdelete",children:Object(s.jsx)("span",{className:"Sdelete",children:"+"})})]})}))}),Object(s.jsxs)("h2",{children:["Total:",t,"$"]}),Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",onClick:function(){c.goBack()},children:"Continue shopping"}),Object(s.jsx)("br",{})]})}var x=t(20),h={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"50px",zIndex:1e3},m={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, .7)",zIndex:1e3};function u(e){var c=e.open,t=e.children;e.onClose;return c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{style:m}),Object(s.jsx)("div",{style:h,children:t})]}):null}var g=t.p+"static/media/shopping-cart.940c61e8.svg",p=t.p+"static/media/money-bag.76688644.svg",y=t.p+"static/media/Cash Register (Kaching) - Sound Effect (HD).861677ae.mp3";function f(e){var c=Object(n.useState)(!1),t=Object(l.a)(c,2),j=t[0],r=t[1],a=Object(x.a)(y),i=Object(l.a)(a,1)[0],b=Object(d.f)();return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{className:"cas_h1",children:["Thank you so much",Object(s.jsx)("br",{})," for coming to visit"]}),Object(s.jsxs)("div",{className:"cashier",children:[Object(s.jsx)("button",{onClick:function(){i(),r(!0),setTimeout((function(){b.push("/"),r(!1)}),3e3)},id:"cash_b",className:"myButton",children:"PAY"}),Object(s.jsxs)(u,{open:j,onClose:function(){r(!1)},children:[Object(s.jsx)("h1",{children:"Thank you so much for coming again"}),Object(s.jsxs)("h2",{children:["Your change is ",e.money]})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",onClick:function(){b.goBack()},children:"forget something?"}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"money",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[e.money,"$"]})]}),Object(s.jsxs)("p",{className:"p_shop",children:[Object(s.jsxs)(o.b,{to:"/cart",children:[" ",Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("br",{})]}),Object(s.jsx)("span",{children:e.cart.length})]})]})]})}var v=t.p+"static/media/black-forest.7c04c4a7.svg",N=t.p+"static/media/butter.2a48f437.svg",k=t.p+"static/media/cheese.4a521b55.svg",C=t.p+"static/media/milk-bottle.457a2fe5.svg",B=t.p+"static/media/Slices of cheese.567577ba.svg",_=t.p+"static/media/tiramisu.077cd34a.svg",q=t.p+"static/media/yogurt.499de068.svg";function $(e){var c=[10,"cake"],t=[2,"butter"],n=[5,"goat cheese"],j=[1,"milk"],r=[1.5,"cheese"],a=[6,"tiramisu"],i=[2,"yogurt"],b=function(c){e.funcAdd(c)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Dairy"}),Object(s.jsxs)("p",{className:"money",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[e.money,"$"]})]}),Object(s.jsxs)("p",{className:"p_shop",children:[Object(s.jsxs)(o.b,{to:"/cart",children:[" ",Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("br",{})]}),Object(s.jsx)("span",{children:e.cart.length})]}),Object(s.jsxs)("div",{className:"dairy_bg",children:[Object(s.jsxs)("div",{className:"dairy1",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return b(c)},src:v}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:" cake 10$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return b(t)},src:N}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"butter 2$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return b(n)},src:k}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"goat cheese 5$"})]})]}),Object(s.jsxs)("div",{className:"dairy2",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return b(j)},src:C}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"milk 1$"})]}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("img",{onClick:function(){return b(r)},src:B}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"cheese 1.5$"})]}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("img",{onClick:function(){return b(a)},src:_}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"tiramisu 6$"})]})]}),Object(s.jsx)("div",{className:"dairy3",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return b(i)},src:q}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"yogurt 2$"})]})})]}),Object(s.jsx)("h2",{children:"Which department do we continue to?"}),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/dairy",children:Object(s.jsx)("button",{style:{backgroundColor:"#4361EE"},className:"myButton",children:"Dairy"})}),Object(s.jsx)(o.b,{to:"/Meet",children:Object(s.jsx)("button",{style:{backgroundColor:"#D00000"},className:"myButton",children:"Meet"})}),Object(s.jsx)(o.b,{to:"/Vegetables",children:Object(s.jsx)("button",{style:{backgroundColor:"#80B918"},className:"myButton",children:"Vegetables"})}),Object(s.jsx)(o.b,{to:"/Fish",children:Object(s.jsx)("button",{style:{backgroundColor:"#01497C"},className:"myButton",children:"Fish"})}),Object(s.jsx)(o.b,{to:"/Liquor",children:Object(s.jsx)("button",{style:{backgroundColor:"#2E294E"},className:"myButton",children:"Liquor"})}),Object(s.jsx)(o.b,{to:"/Tobacco",children:Object(s.jsx)("button",{style:{backgroundColor:"#585123"},className:"myButton",children:"Tobacco"})}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{to:"/cashier",children:Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",children:"payment"})})]})]})}function E(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Which department do you want to start ?"}),Object(s.jsx)(o.b,{to:"/dairy",children:Object(s.jsx)("button",{style:{backgroundColor:"#4361EE"},className:"myButton",children:"Dairy"})}),Object(s.jsx)(o.b,{to:"/Meet",children:Object(s.jsx)("button",{style:{backgroundColor:"#D00000"},className:"myButton",children:"Meet"})}),Object(s.jsx)(o.b,{to:"/Vegetables",children:Object(s.jsx)("button",{style:{backgroundColor:"#80B918"},className:"myButton",children:"Vegetables"})}),Object(s.jsx)(o.b,{to:"/Fish",children:Object(s.jsx)("button",{style:{backgroundColor:"#01497C"},className:"myButton",children:"Fish"})}),Object(s.jsx)(o.b,{to:"/Liquor",children:Object(s.jsx)("button",{style:{backgroundColor:"#2E294E"},className:"myButton",children:"Liquor"})}),Object(s.jsx)(o.b,{to:"/Tobacco",children:Object(s.jsx)("button",{style:{backgroundColor:"#585123"},className:"myButton",children:"Tobacco"})})]})}var w=t.p+"static/media/caviar.4b803133.svg",A=t.p+"static/media/fish egg.9d060d2d.svg",F=t.p+"static/media/fish.b6e77cf9.svg",T=t.p+"static/media/salmon.a6c31a88.svg",D=t.p+"static/media/sashimi.ecd8a66e.svg",L=t.p+"static/media/tuna.a70cbf69.svg";function M(e){var c=[120,"caviar"],t=[15,"fishegg"],n=[7,"fish"],j=[5,"salmon"],r=[6,"sashimi"],a=[25,"tuna"],i=function(c){e.funcAdd(c)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Fish"}),Object(s.jsxs)("p",{className:"money",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[e.money,"$"]})]}),Object(s.jsxs)("p",{className:"p_shop",children:[Object(s.jsxs)(o.b,{to:"/cart",children:[" ",Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("br",{})]}),Object(s.jsx)("span",{children:e.cart.length})]}),Object(s.jsxs)("div",{className:"meet_bg",children:[Object(s.jsxs)("div",{className:"meet1",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(c)},src:w}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"caviar 120$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(t)},src:A}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"fish egg 15$"})]})]}),Object(s.jsxs)("div",{className:"meet2_2",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(n)},src:F}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"peter's fish 7$"})]}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("img",{onClick:function(){return i(j)},src:T}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"salmon 5$"})]})]}),Object(s.jsxs)("div",{className:"meet3",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(r)},src:D}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"sashimi 6$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(a)},src:L}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"tuna 25$"})]})]})]}),Object(s.jsx)("h2",{children:"Which department do we continue to?"}),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/dairy",children:Object(s.jsx)("button",{style:{backgroundColor:"#4361EE"},className:"myButton",children:"Dairy"})}),Object(s.jsx)(o.b,{to:"/Meet",children:Object(s.jsx)("button",{style:{backgroundColor:"#D00000"},className:"myButton",children:"Meet"})}),Object(s.jsx)(o.b,{to:"/Vegetables",children:Object(s.jsx)("button",{style:{backgroundColor:"#80B918"},className:"myButton",children:"Vegetables"})}),Object(s.jsx)(o.b,{to:"/Fish",children:Object(s.jsx)("button",{style:{backgroundColor:"#01497C"},className:"myButton",children:"Fish"})}),Object(s.jsx)(o.b,{to:"/Liquor",children:Object(s.jsx)("button",{style:{backgroundColor:"#2E294E"},className:"myButton",children:"Liquor"})}),Object(s.jsx)(o.b,{to:"/Tobacco",children:Object(s.jsx)("button",{style:{backgroundColor:"#585123"},className:"myButton",children:"Tobacco"})}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{to:"/cashier",children:Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",children:"payment"})})]})]})}function S(e){var c=Object(d.f)(),t=Object(n.useState)(),j=Object(l.a)(t,2),r=j[0],a=j[1],i=Object(n.useState)(),b=Object(l.a)(i,2),o=b[0],O=b[1],x=Object(n.useState)(),h=Object(l.a)(x,2),m=h[0],u=h[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Wellcome ",Object(s.jsx)("br",{}),"to the ",Object(s.jsx)("br",{}),"SuperMarket"]}),Object(s.jsx)("h2",{children:"Hi, please enter your details"}),Object(s.jsx)("label",{htmlFor:"",children:"Name "}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{onChange:function(e){var c=e.target.value;0==c.length?alert("Please enter your name!"):a(c)},type:"text"}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"",children:"Gender:"}),Object(s.jsx)("input",{onClick:function(e){return O(e.target.value)},type:"radio",name:"gender",value:"male"}),Object(s.jsx)("label",{children:"male"}),Object(s.jsx)("input",{onClick:function(e){return O(e.target.value)},type:"radio",name:"gender",value:"female"}),Object(s.jsx)("label",{children:"female"}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"",children:"How much money do you have ?"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{onChange:function(e){var c=e.target.value;Number(c),0==c||void 0==c||NaN==c||null==c?alert("Did you really come to the supermarket without money ???"):u(c)},type:"number"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"myButton",onClick:function(){r.length>1&&void 0!=o&&m>0?(e.newCust(r,o,m),c.push("/departments")):alert("Something is wrong with the details you entered")},children:"Let's do some shopping"})]})}var V=t.p+"static/media/beer-bottle.a936afe0.svg",W=t.p+"static/media/beer-can.35bdcfdf.svg",I=t.p+"static/media/liquor.ead8509b.svg",P=t.p+"static/media/vodka.fa19e78f.svg",H=t.p+"static/media/wine.78066a8f.svg",Y=t.p+"static/media/champagne.eaa30a3d.svg";function z(e){var c=[6,"beer bottle"],t=[4,"beer can"],n=[30,"liquor"],j=[40,"vodka"],r=[20,"wine"],a=[60,"champagne"],i=function(c){e.funcAdd(c)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Liquor"}),Object(s.jsxs)("p",{className:"money",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[e.money,"$"]})]}),Object(s.jsxs)("p",{className:"p_shop",children:[Object(s.jsxs)(o.b,{to:"/cart",children:[" ",Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("br",{})]}),Object(s.jsx)("span",{children:e.cart.length})]}),Object(s.jsxs)("div",{className:"liquors_bg",children:[Object(s.jsxs)("div",{className:"liquors1",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(c)},className:"img_liq",src:V}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"beer 6$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(t)},className:"img_liq",src:W}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"beer-can 4$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(n)},className:"img_liq",src:I}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"liquor 30$"})]})]}),Object(s.jsxs)("div",{className:"liquors2",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(j)},className:"img_liq",src:P}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"vodka 40$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(r)},className:"img_liq",src:H}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"wine 20$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(a)},className:"img_liq",src:Y}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"champagne 60$"})]})]})]}),Object(s.jsx)("h2",{children:"Which department do we continue to?"}),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/dairy",children:Object(s.jsx)("button",{style:{backgroundColor:"#4361EE"},className:"myButton",children:"Dairy"})}),Object(s.jsx)(o.b,{to:"/Meet",children:Object(s.jsx)("button",{style:{backgroundColor:"#D00000"},className:"myButton",children:"Meet"})}),Object(s.jsx)(o.b,{to:"/Vegetables",children:Object(s.jsx)("button",{style:{backgroundColor:"#80B918"},className:"myButton",children:"Vegetables"})}),Object(s.jsx)(o.b,{to:"/Fish",children:Object(s.jsx)("button",{style:{backgroundColor:"#01497C"},className:"myButton",children:"Fish"})}),Object(s.jsx)(o.b,{to:"/Liquor",children:Object(s.jsx)("button",{style:{backgroundColor:"#2E294E"},className:"myButton",children:"Liquor"})}),Object(s.jsx)(o.b,{to:"/Tobacco",children:Object(s.jsx)("button",{style:{backgroundColor:"#585123"},className:"myButton",children:"Tobacco"})}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{to:"/cashier",children:Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",children:"payment"})})]})]})}var G=t.p+"static/media/bacon.2bfb8bc4.svg",J=t.p+"static/media/beef.7ce0f331.svg",K=t.p+"static/media/chicken-leg.21662261.svg",R=t.p+"static/media/chicken-wings.31fdb9df.svg",Q=t.p+"static/media/sausages.ef3a8169.svg",U=t.p+"static/media/steak.43e62e8d.svg";function X(e){var c=[12,"bacon"],t=[15,"beef"],n=[7,"chicken leg"],j=[5,"chicken wings"],r=[6,"sausages"],a=[15,"steak"],i=function(c){e.funcAdd(c)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Meet"}),Object(s.jsxs)("p",{className:"money",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[e.money,"$"]})]}),Object(s.jsxs)("p",{className:"p_shop",children:[Object(s.jsxs)(o.b,{to:"/cart",children:[" ",Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("br",{})]}),Object(s.jsx)("span",{children:e.cart.length})]}),Object(s.jsxs)("div",{className:"meet_bg",children:[Object(s.jsxs)("div",{className:"meet1",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(c)},src:G}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"bacon 12$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(t)},src:J}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"beef 15$"})]})]}),Object(s.jsxs)("div",{className:"meet2",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(n)},src:K}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"chicken leg 7$"})]}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("img",{onClick:function(){return i(j)},src:R}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"chicken wings 5$"})]})]}),Object(s.jsxs)("div",{className:"meet3",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(r)},src:Q}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"sausages 6$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(a)},src:U}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"steak 25$"})]})]})]}),Object(s.jsx)("h2",{children:"Which department do we continue to?"}),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/dairy",children:Object(s.jsx)("button",{style:{backgroundColor:"#4361EE"},className:"myButton",children:"Dairy"})}),Object(s.jsx)(o.b,{to:"/Meet",children:Object(s.jsx)("button",{style:{backgroundColor:"#D00000"},className:"myButton",children:"Meet"})}),Object(s.jsx)(o.b,{to:"/Vegetables",children:Object(s.jsx)("button",{style:{backgroundColor:"#80B918"},className:"myButton",children:"Vegetables"})}),Object(s.jsx)(o.b,{to:"/Fish",children:Object(s.jsx)("button",{style:{backgroundColor:"#01497C"},className:"myButton",children:"Fish"})}),Object(s.jsx)(o.b,{to:"/Liquor",children:Object(s.jsx)("button",{style:{backgroundColor:"#2E294E"},className:"myButton",children:"Liquor"})}),Object(s.jsx)(o.b,{to:"/Tobacco",children:Object(s.jsx)("button",{style:{backgroundColor:"#585123"},className:"myButton",children:"Tobacco"})}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{to:"/cashier",children:Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",children:"payment"})})]})]})}var Z=t.p+"static/media/cigarette.d507bc81.svg",ee=t.p+"static/media/cigars.65ebb74f.svg",ce=t.p+"static/media/lighter.0e968880.svg",te=t.p+"static/media/smoking-pipe.b60a3b72.svg",se=t.p+"static/media/vape.9055efef.svg",ne=t.p+"static/media/weed.29d0e817.svg";function je(e){var c=[6,"cigarette"],t=[14,"cigars"],n=[1,"lighter"],j=[4,"smokingpipe"],r=[20,"vape"],a=[16,"weed"],i=function(c){e.funcAdd(c)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Tobacco"}),Object(s.jsxs)("p",{className:"money",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[e.money,"$"]})]}),Object(s.jsxs)("p",{className:"p_shop",children:[Object(s.jsxs)(o.b,{to:"/cart",children:[" ",Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("br",{})]}),Object(s.jsx)("span",{children:e.cart.length})]}),Object(s.jsxs)("div",{className:"liquors_bg",children:[Object(s.jsxs)("div",{className:"liquors1",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(c)},className:"img_liq",src:Z}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"marlboro 6$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(t)},className:"img_liq",src:ee}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"cigars 14$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(n)},className:"img_liq",src:ce}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"clipper 1$"})]})]}),Object(s.jsxs)("div",{className:"liquors2",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(j)},className:"img_liq",src:te}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"smoking-pipe 4$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(r)},className:"img_liq",src:se}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"vape 20$"})]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{onClick:function(){return i(a)},className:"img_liq",src:ne}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_liq",children:"weed 16$"})]})]})]}),Object(s.jsx)("h2",{children:"Which department do we continue to?"}),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/dairy",children:Object(s.jsx)("button",{style:{backgroundColor:"#4361EE"},className:"myButton",children:"Dairy"})}),Object(s.jsx)(o.b,{to:"/Meet",children:Object(s.jsx)("button",{style:{backgroundColor:"#D00000"},className:"myButton",children:"Meet"})}),Object(s.jsx)(o.b,{to:"/Vegetables",children:Object(s.jsx)("button",{style:{backgroundColor:"#80B918"},className:"myButton",children:"Vegetables"})}),Object(s.jsx)(o.b,{to:"/Fish",children:Object(s.jsx)("button",{style:{backgroundColor:"#01497C"},className:"myButton",children:"Fish"})}),Object(s.jsx)(o.b,{to:"/Liquor",children:Object(s.jsx)("button",{style:{backgroundColor:"#2E294E"},className:"myButton",children:"Liquor"})}),Object(s.jsx)(o.b,{to:"/Tobacco",children:Object(s.jsx)("button",{style:{backgroundColor:"#585123"},className:"myButton",children:"Tobacco"})}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{to:"/cashier",children:Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",children:"payment"})})]})]})}var re=t.p+"static/media/avocado.39fb2123.svg",ae=t.p+"static/media/beet.0e196d72.svg",ie=t.p+"static/media/carrot.b43fb8f5.svg",be=t.p+"static/media/cucumber.0c9a26f8.svg",le=t.p+"static/media/eggplant.277d676f.svg",oe=t.p+"static/media/onion.adba8af4.svg",de=t.p+"static/media/pepper.b9ae83fb.svg",Oe=t.p+"static/media/tomato.ccc93def.svg";function xe(e){var c=[6,"avocado"],t=[2,"beet"],n=[3,"carrot"],j=[2,"cucumber"],r=[4,"eggplant"],a=[2,"onion"],i=[6,"pepper"],b=[2.5,"tomato"],l=function(c){e.funcAdd(c)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Vegetables"}),Object(s.jsxs)("p",{className:"money",children:[Object(s.jsx)("img",{src:p,alt:""}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[e.money,"$"]})]}),Object(s.jsxs)("p",{className:"p_shop",children:[Object(s.jsxs)(o.b,{to:"/cart",children:[" ",Object(s.jsx)("img",{src:g,alt:""}),Object(s.jsx)("br",{})]}),Object(s.jsx)("span",{children:e.cart.length})]}),Object(s.jsxs)("div",{className:"vegetables_bg",children:[Object(s.jsxs)("div",{className:"vegetables1",children:[Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(c)},className:"img_veg",src:re}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"avocado 6$"})]}),Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(t)},className:"img_veg",src:ae}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"beet 2$"})]}),Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(n)},className:"img_veg",src:ie}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"carrot 3$"})]}),Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(j)},className:"img_veg",src:be}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"cucumber 2$"})]})]}),Object(s.jsxs)("div",{className:"vegetables2",children:[Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(r)},className:"img_veg",src:le}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"eggplant 4$"})]}),Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(a)},className:"img_veg",src:oe}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"onion 2$"})]}),Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(i)},className:"img_veg",src:de}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"pepper 6$"})]}),Object(s.jsxs)("p",{className:"p_veg",children:[Object(s.jsx)("img",{onClick:function(){return l(b)},className:"img_veg",src:Oe}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"span_veg",children:"tomato 2.5$"})]})]})]}),Object(s.jsx)("h2",{children:"Which department do we continue to?"}),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/dairy",children:Object(s.jsx)("button",{style:{backgroundColor:"#4361EE"},className:"myButton",children:"Dairy"})}),Object(s.jsx)(o.b,{to:"/Meet",children:Object(s.jsx)("button",{style:{backgroundColor:"#D00000"},className:"myButton",children:"Meet"})}),Object(s.jsx)(o.b,{to:"/Vegetables",children:Object(s.jsx)("button",{style:{backgroundColor:"#80B918"},className:"myButton",children:"Vegetables"})}),Object(s.jsx)(o.b,{to:"/Fish",children:Object(s.jsx)("button",{style:{backgroundColor:"#01497C"},className:"myButton",children:"Fish"})}),Object(s.jsx)(o.b,{to:"/Liquor",children:Object(s.jsx)("button",{style:{backgroundColor:"#2E294E"},className:"myButton",children:"Liquor"})}),Object(s.jsx)(o.b,{to:"/Tobacco",children:Object(s.jsx)("button",{style:{backgroundColor:"#585123"},className:"myButton",children:"Tobacco"})}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{to:"/cashier",children:Object(s.jsx)("button",{style:{backgroundColor:"#4A5058"},className:"myButton",children:"payment"})})]})]})}var he=function(){Object(d.f)();var e=Object(n.useState)({}),c=Object(l.a)(e,2),t=(c[0],c[1]),j=Object(n.useState)(0),r=Object(l.a)(j,2),a=r[0],x=r[1],h=Object(n.useState)([]),m=Object(l.a)(h,2),u=m[0],g=m[1],p=function(e,c,s){t({customerName:e,customerGender:c}),x(Number(s)),g([])},y=function(e){e[0]>a?alert("NO MONEY"):(x(a-e[0]),g([].concat(Object(b.a)(u),[e])))},v=function(e,c){x(a+c[0]);var t;t=u.filter((function(c,t){return e!==t})),g(t)};return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o.a,{children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/",component:function(){return Object(s.jsx)(S,{newCust:p})}}),Object(s.jsx)(d.a,{path:"/departments",component:function(){return Object(s.jsx)(E,{})}}),Object(s.jsx)(d.a,{path:"/dairy",component:function(){return Object(s.jsx)($,{money:a,cart:u,funcAdd:y})}}),Object(s.jsx)(d.a,{path:"/meet",component:function(){return Object(s.jsx)(X,{money:a,cart:u,funcAdd:y})}}),Object(s.jsx)(d.a,{path:"/vegetables",component:function(){return Object(s.jsx)(xe,{money:a,cart:u,funcAdd:y})}}),Object(s.jsx)(d.a,{path:"/fish",component:function(){return Object(s.jsx)(M,{money:a,cart:u,funcAdd:y})}}),Object(s.jsx)(d.a,{path:"/liquor",component:function(){return Object(s.jsx)(z,{money:a,cart:u,funcAdd:y})}}),Object(s.jsx)(d.a,{path:"/tobacco",component:function(){return Object(s.jsx)(je,{money:a,cart:u,funcAdd:y})}}),Object(s.jsx)(d.a,{path:"/cashier",component:function(){return Object(s.jsx)(f,{money:a,cart:u,funcAdd:y})}}),Object(s.jsx)(d.a,{path:"/cart",component:function(){return Object(s.jsx)(O,Object(i.a)({funcDel:v,money:a,cart:u,funcAdd:y},"cart",u))}})]})})})},me=function(e){e&&e instanceof Function&&t.e(4).then(t.bind(null,39)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,j=c.getLCP,r=c.getTTFB;t(e),s(e),n(e),j(e),r(e)}))};a.a.render(Object(s.jsx)(j.a.StrictMode,{children:Object(s.jsx)(he,{})}),document.getElementById("root")),me()}},[[37,1,2]]]);
//# sourceMappingURL=main.1b9832af.chunk.js.map