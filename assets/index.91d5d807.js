import{r as m,o as p,c as f,a as n,b as l,w as c,$ as h,d,e as k,f as w,g as x,h as b}from"./vendor.27f6a2ae.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};L();var $="/assets/rect.4997e783.png";var v=(i,s)=>{for(const[a,r]of s)i[a]=r;return i};const C={mounted(){function i(){var s=h("#nav").outerHeight();h("#navImg1").height(window.innerHeight-s)}window.onresize=i,i()}},E=n("div",{id:"navImg1"},[n("div",{id:"navImg2"}),n("div",{class:"flex",id:"navImg3"},[n("div",null,[n("img",{id:"mainLogo",alt:"Club Logo",src:$,width:"400"})])])],-1),S={id:"nav"},I={class:"flex"},P=d("Home"),H=d("Committee"),A=d("Gallery"),B=d("Statutes"),N={style:{padding:"0px 100px 50px"}},O=n("footer",null,[n("div",{class:"flex"})],-1);function R(i,s,a,r,e,o){const t=m("router-link"),u=m("router-view");return p(),f("div",null,[E,n("nav",S,[n("div",I,[n("div",null,[l(t,{to:"/"},{default:c(()=>[P]),_:1})]),n("div",null,[l(t,{to:"/committee"},{default:c(()=>[H]),_:1})]),n("div",null,[l(t,{to:"/gallery"},{default:c(()=>[A]),_:1})]),n("div",null,[l(t,{to:"/statutes"},{default:c(()=>[B]),_:1})])])]),n("div",N,[l(u)]),O])}var V=v(C,[["render",R]]);const T="modulepreload",g={},j="/",_=function(s,a){return!a||a.length===0?s():Promise.all(a.map(r=>{if(r=`${j}${r}`,r in g)return;g[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":T,e||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),e)return new Promise((u,y)=>{t.addEventListener("load",u),t.addEventListener("error",y)})})).then(()=>s())};const G={},W=k('<title>Home | CUISC</title><div class="home"><h1>Welcome to Ice Skating!!</h1> Founded in 2021, we proudly aim to support all skating enthusiasts, from those simply wishing to learn how to stay upright on the ice, to those with experience wishing to continue their journey. We are a small but friendly community, and hope to provide both sporting and social events to your weekly calendar! </div><h2>Some Useful Links</h2><div class="flex" id="links"><div class="linkBtn"><a href="https://lists.srcf.net/mailman/listinfo/cuisc-members"><span>Join the Mailing List</span></a></div><br><div class="linkBtn"><a href="https://cambridgeparkandride.info/newmarketroad.shtml"><span>Newmarket Park&amp;Ride details</span></a></div><br><div class="linkBtn"><a href="https://goo.gl/maps/tP5TfBg4iQUTGryW8"><span>Cycle Route Map</span></a></div><br><div class="linkBtn"><a href="https://www.facebook.com/groups/ubersharecuisc/"><span>Uber Sharing Group</span></a></div></div>',4),U=[W];function D(i,s){return p(),f("div",null,U)}var q=v(G,[["render",D]]);const z=[{path:"/",name:"Home",component:q},{path:"/Committee",name:"Committee",component:function(){return _(()=>import("./Committee.dd8de3cc.js"),["assets/Committee.dd8de3cc.js","assets/vendor.27f6a2ae.js"])}},{path:"/statutes",name:"Statutes",component:function(){return _(()=>import("./Statutes.1a602c28.js"),["assets/Statutes.1a602c28.js","assets/vendor.27f6a2ae.js"])}},{path:"/gallery",name:"Gallery",component:function(){return _(()=>import("./Gallery.ca18fefc.js"),["assets/Gallery.ca18fefc.js","assets/vendor.27f6a2ae.js"])}}],F=w({history:x(),routes:z});b(V).use(F).mount("#app");export{v as _};
