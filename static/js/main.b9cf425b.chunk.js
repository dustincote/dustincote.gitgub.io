(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{37:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(0),r=i.n(a),c=i(17),o=i.n(c),s=(i(65),i.p,i(66),i(11)),h=(i(67),function(e){var t=Object(a.useState)(!1),i=Object(s.a)(t,2),r=(i[0],i[1],Object(a.useState)({width:window.innerWidth,height:window.innerHeight})),c=Object(s.a)(r,2),o=c[0],h=c[1],d=Object(a.useRef)();Object(a.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]);var l=function(){h({width:window.innerWidth,height:window.innerHeight})};return Object(a.useEffect)((function(){var e=d.current,t=e.getContext("2d");t.globalCompositeOperation="destination-over";var i=!0,n=0,a=10,r=360*Math.random();function c(){t.clearRect(0,0,e.width,e.height),n=0,a=10,r=360*Math.random(),o()}var o=function o(){if(i){if(function(){var i=.9*n,c=a*Math.sqrt(n),o=c*Math.sin(i)+e.width/2,s=c*Math.cos(i)+e.height/2;t.fillStyle="hsl(".concat(r,", 100%, 50%)"),t.strokeStyle="hsl(".concat(r,"-1, 100%, 50%)"),t.lineWidth=15,t.beginPath(),t.arc(o,s,n,0,2*Math.PI),t.closePath(),t.fill(),t.stroke(),r+=.05,n+=.3}(),n>250)return setTimeout((function(){c()}),50);requestAnimationFrame(o)}};return o(),function(){i=!1}})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("canvas",{ref:d,width:o.width,height:o.height})})}),d=(i(37),i(93)),l=i(98),u=i(102),j=i(95),b=i(96),w=i(97),m=i(5),g=Object(d.a)({media:{height:250},card:{marginTop:40,marginBottom:40,minHeight:300,backgroundColor:"rgba(0,0,0,.5)"},buttons:{color:"white",border:"1px solid white",margin:15,textShadow:"1.5px 1.5px black"}});var f=Object(m.f)((function(e){var t=g();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(u.a,{className:t.card,children:[Object(n.jsx)(j.a,{className:t.media,image:e.image}),Object(n.jsx)(b.a,{style:{color:"white",textShadow:"1.5px 1.5px black"},children:e.projectDescription}),Object(n.jsxs)(w.a,{className:t.buttons,variant:"outlined",onClick:function(){"/canvas"===e.url?e.history.push(e.url):window.open(e.url)},children:["To ",e.projectName]}),"none"!=e.github&&Object(n.jsx)(w.a,{className:t.buttons,variant:"outlined",onClick:function(){window.open(e.github)},children:"To GitHub"})]})})})),x=i(26),O=i(27),v=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){var e=t.current,i=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;var n=[],a=!1,r=function(){function t(e,i){Object(x.a)(this,t),this.x=e,this.y=i,this.size=Math.random(),this.weight=6*Math.random()+2,this.directionX=-5}return Object(O.a)(t,[{key:"update",value:function(){(this.y>e.height/3*2||this.weight>8.1)&&(this.y=0-this.size,this.weight=5*Math.random()+3,this.x=Math.random()*e.width*1.3),this.weight+=.01,this.y+=this.weight,this.x+=this.directionX}},{key:"draw",value:function(){i.fillStyle="hsl(".concat(179,", 100%, 92%)"),i.beginPath(),i.arc(this.x,this.y,this.size,0,2*Math.PI),i.closePath(),i.fill()}}]),t}();function c(){n=[];for(var t=0;t<15;t++){var i=Math.random()*e.width*1.4,a=Math.random()*-e.height*.9;n.push(new r(i,a))}}return c(),function t(){if(!a){i.fillStyle="rgba(0,0,0,1)",i.fillRect(0,0,e.width,e.height);for(var r=0;r<n.length;r++)n[r].update(),n[r].draw();requestAnimationFrame(t)}}(),window.addEventListener("resize",(function(){e.width=window.innerWidth,e.height=window.innerHeight,c()})),function(){a=!0}}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("canvas",{ref:t,width:window.innerWidth,height:window.innerHeight})})},p=i(99),y=i(101),k=i(100),C=i(45),S=i.n(C),M=i(46),N=i.n(M),E=i(47),z=i.n(E),H=Object(d.a)({root:{backgroundColor:"rgba(0,0,0,.5)"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},name:{color:"white",textShadow:"1.5px 3.5px black"},body:{color:"white",textShadow:"1.5px 1.5px black"},media:{marginTop:40,height:200,width:200}});function T(e){var t=H(),i=e.size;return Object(n.jsx)(u.a,{className:t.root,style:{marginTop:i.width>900?0:20,height:i.width>900?i.height:"auto",position:i.width>900?"fixed":"relative",top:0,maxWidth:i.width>900?300:i.width},children:Object(n.jsxs)(l.a,{item:!0,xs:10,children:[Object(n.jsx)(y.a,{alt:"Headshot",src:"headshot.jpeg",className:t.media}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(b.a,{variant:"h3",className:t.name,children:"Dustin Cote"}),Object(n.jsx)(b.a,{className:t.body,children:"Full Stack Developer"}),Object(n.jsx)("br",{}),Object(n.jsx)(b.a,{className:t.body,children:" I will be graduating from Emerging Digital Academy in the beginning of December 2020, I have a passion for technology and a desire to learn new things."}),Object(n.jsx)("br",{}),Object(n.jsx)(b.a,{className:t.body,children:" Contact Me:"}),Object(n.jsx)(b.a,{className:t.body,children:"dustincote@hotmail.com"}),Object(n.jsx)(k.a,{onClick:function(){window.open("https://www.linkedin.com/in/dustin-t-cote/")},className:t.body,children:Object(n.jsx)(S.a,{})}),Object(n.jsx)(k.a,{onClick:function(){window.open("https://github.com/dustincote")},className:t.body,children:Object(n.jsx)(N.a,{})}),Object(n.jsx)(k.a,{onClick:function(){window.location.href="mailto:dustincote@hotmail.com?subject=More Info Requested%20From%20Portfolio"},className:t.body,children:Object(n.jsx)(z.a,{})})]})]})})}var F=Object(d.a)({root:{minHeight:window.innerHeight,backgroundColor:"rgba(0,0,0,.5)"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},name:{color:"white",textShadow:"1.5px 3.5px black"},body:{color:"white",textShadow:"1.5px 1.5px black"},media:{marginTop:40,height:200,width:200}});function W(e){F();var t=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),i=Object(s.a)(t,2),r=i[0],c=i[1];Object(a.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]);var o=function(){c({width:window.innerWidth,height:window.innerHeight})};return Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{direction:r.width>900?"row":"column",container:!0,wrap:"nowrap",justify:"flex-start",alignItems:"center",children:[Object(n.jsx)(l.a,{item:!0,xs:10,sm:10,md:4,lg:3,align:"center",children:Object(n.jsx)(T,{size:r})}),Object(n.jsx)(v,{}),Object(n.jsx)(l.a,{container:!0,justify:"center",alignItems:"center",children:[{name:"Herdsman",image:"herdsman.jpeg",description:"Herdsman, A herd management system for ranchers",url:"https://herdsman.herokuapp.com/#/home",github:"https://github.com/dustincote/eda-solo-project"},{name:"Html5 Canvas Fun",image:"canvasfun.jpeg",description:"Just some fun with Canvas",url:"/canvas",github:"none"},{name:"Image Gallery",image:"imagegallery.jpeg",description:"First ever react App",url:"/https://ancient-spire-49988.herokuapp.com/",github:"https://github.com/dustincote/image-gallery"},{name:"ToDo app",image:"todoapp.jpeg",description:"Simple Jquery ToDo App",url:"https://intense-savannah-07225.herokuapp.com/",github:"https://github.com/dustincote?tab=repositories"}].map((function(e){return Object(n.jsx)(l.a,{item:!0,xs:12,md:12,lg:6,align:"center",children:Object(n.jsx)(l.a,{item:!0,xs:10,md:8,children:Object(n.jsx)(f,{image:e.image,projectDescription:e.description,projectName:e.name,url:e.url,github:e.github},e.name)})},e.name)}))})]})})}var P=i(33),L=i.n(P),R=i(48),I=i.n(R),D=Object(d.a)({root:{backgroundColor:"rgba(0,0,0,.5)"},goback:{color:"black",width:80},name:{color:"white",textShadow:"1.5px 3.5px black"},body:{color:"white",textShadow:"1.5px 1.5px black"},media:{marginTop:40,height:200,width:200},nav:{margin:15,color:"black",width:80}});var A=Object(m.f)((function(e){var t=D(),i=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),r=Object(s.a)(i,2),c=r[0],o=r[1];Object(a.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]);var h=function(){o({width:window.innerWidth,height:window.innerHeight})},d=function(){e.history.push("/")},j=function(t){var i=t.currentTarget.name;"tree"===t.currentTarget.name?I()({title:"Longer Render Time",text:"Just wanted to let you know that the tree takes a little while to render, it is not broken.",timer:2e3,buttons:!1}).then((function(){e.setActive(i)})):e.setActive(t.currentTarget.name)};return Object(n.jsx)("div",{children:c.width>900?Object(n.jsx)(l.a,{container:!0,wrap:"nowrap",justify:"flex-start",alignItems:"center",children:Object(n.jsx)(l.a,{item:!0,xs:8,sm:5,md:4,lg:2,align:"center",children:Object(n.jsx)(u.a,{className:t.root,style:{height:c.width>900?c.height:"auto"},children:Object(n.jsxs)(l.a,{item:!0,xs:10,children:[Object(n.jsx)(y.a,{alt:"Headshot",src:"headshot.jpeg",className:t.media}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(b.a,{variant:"h3",className:t.name,children:"Dustin Cote"}),Object(n.jsx)(b.a,{className:t.body,children:"Full Stack Developer"}),Object(n.jsx)(b.a,{className:t.body,children:"DustinCote@hotmail.com"}),Object(n.jsx)("br",{})]}),Object(n.jsx)(w.a,{className:t.goback,name:"fibflower",onClick:j,variant:"contained",children:" Spiral"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(w.a,{className:t.goback,name:"tree",onClick:j,variant:"contained",children:" Tree"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(w.a,{className:t.goback,name:"random",onClick:j,variant:"contained",children:" Random"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(w.a,{className:t.goback,name:"awesome",onClick:j,variant:"contained",children:"Rain"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(w.a,{className:t.goback,onClick:d,variant:"contained",children:[Object(n.jsx)(L.a,{})," Back"]})]})})})}):Object(n.jsxs)("div",{className:"canvas-buttons",children:[Object(n.jsx)(w.a,{className:t.nav,name:"fibflower",onClick:j,variant:"contained",children:" Spiral"}),Object(n.jsx)(w.a,{className:t.nav,name:"tree",onClick:j,variant:"contained",children:" Tree"}),Object(n.jsx)(w.a,{className:t.nav,name:"random",onClick:j,variant:"contained",children:" Random"}),Object(n.jsx)(w.a,{className:t.nav,name:"awesome",onClick:j,variant:"contained",children:"Rain"}),Object(n.jsxs)(w.a,{className:t.nav,onClick:d,variant:"contained",children:[Object(n.jsx)(L.a,{})," Back"]})]})})})),B=(i(75),function(e){var t=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),i=Object(s.a)(t,2),r=i[0],c=i[1],o=Object(a.useRef)();Object(a.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]);var h=function(){c({width:window.innerWidth,height:window.innerHeight})};return Object(a.useEffect)((function(){var e=o.current,t=e.getContext("2d");t.globalCompositeOperation="destination-over",function e(i,n,a,r,c,o,s){if(t.beginPath(),t.save(),t.strokeStyle=o,t.fillStyle=s,t.shadowBlur=15,t.shadowColor="black",t.lineWidth=c,t.translate(i,n),t.rotate(r*Math.PI/180),t.moveTo(0,0),r>0?t.bezierCurveTo(20,-a/2,20,-a/2,0,-a):t.bezierCurveTo(20,-a/2,-20,-a/2,0,-a),t.stroke(),a<10)return t.beginPath(),t.arc(0,-a,10,0,Math.PI/2),t.fill(),void t.restore();e(0,-a,.83*a,r+9,.6*c),e(0,-a,.83*a,r-9,.6*c),t.restore()}(e.width/2,e.height-70,100,0,25,"brown","green")})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("canvas",{ref:o,width:r.width,height:r.height})})}),q=(i(76),function(e){var t=Object(a.useState)(!1),i=Object(s.a)(t,2),r=(i[0],i[1],Object(a.useState)({width:window.innerWidth,height:window.innerHeight})),c=Object(s.a)(r,2),o=c[0],h=c[1],d=Object(a.useRef)();Object(a.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]);var l=function(){h({width:window.innerWidth,height:window.innerHeight})};return Object(a.useEffect)((function(){var e=d.current,t=e.getContext("2d");t.globalCompositeOperation="destination-over";var i=!0,n=0,a=5*Math.random()+2,r=8*Math.random()+1,c=360*Math.random();function o(){t.clearRect(0,0,e.width,e.height),n=0,a=5*Math.random()+2,c=360*Math.random(),r=8*Math.random()+1,s()}var s=function s(){if(i){if(function(){var i=.9*n,o=a*Math.sqrt(n),s=o*Math.sin(i)+e.width/2,h=o*Math.cos(i)+e.height/2;t.fillStyle="hsl(".concat(c,", 100%, 50%)"),t.strokeStyle="hsl(".concat(c,"-1, 100%, 50%)"),t.lineWidth=r,t.beginPath(),t.arc(s,h,n,0,2*Math.PI),t.closePath(),t.fill(),t.stroke(),c+=.05,n+=.3}(),n>200)return setTimeout((function(){o()}),50);requestAnimationFrame(s)}};return s(),function(){i=!1}})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("canvas",{ref:d,width:o.width,height:o.height})})}),J=(i(77),function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){var e=t.current,i=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;var n=[],a=!1,r=document.getElementById("title1"),c=r.getBoundingClientRect(),o={x:c.left,y:c.top,width:c.width,height:20},s=function(){function t(i,n){Object(x.a)(this,t),this.x=i,this.y=n,this.size=1.5*Math.random(),this.weight=3*Math.random(),this.directionX=(this.x,e.width,-1)}return Object(O.a)(t,[{key:"update",value:function(){this.y>e.height&&(this.y=0-this.size,this.weight=3*Math.random(),this.x=Math.random()*e.width*1.3),this.weight+=.01,this.y+=this.weight,this.x+=this.directionX,this.x<o.x+o.width&&this.x+this.size>o.x&&this.y<o.y+o.height&&this.y+this.size>o.y&&(this.y-=3,this.weight-=.3)}},{key:"draw",value:function(){var e=this.x/3;i.fillStyle="hsl(".concat(e,", 100%, 50%)"),i.beginPath(),i.arc(this.x,this.y,this.size,0,2*Math.PI),i.closePath(),i.fill()}}]),t}();function h(){d(),n=[];for(var t=0;t<2e3;t++){var i=Math.random()*e.width*1.4,a=Math.random()*-e.height*.9;n.push(new s(i,a))}}function d(){a=!a}return h(),function t(){if(a){i.fillStyle="rgba(0,0,0,1)",i.fillRect(0,0,e.width,e.height);for(var r=0;r<n.length;r++)n[r].update(),n[r].draw();requestAnimationFrame(t)}}(),window.addEventListener("resize",(function(){n=[],e.width=window.innerWidth,e.height=window.innerHeight,c=r.getBoundingClientRect(),o={x:c.left,y:c.top,width:c.width,height:10},d(),h()})),d}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("canvas",{ref:t,width:window.innerWidth,height:window.innerHeight}),Object(n.jsx)("h1",{id:"title1",children:"Dustin Cote"})]})});var X=function(e){var t=Object(a.useState)(!0),i=Object(s.a)(t,2),r=i[0],c=i[1],o=Object(a.useState)(""),d=Object(s.a)(o,2),l=d[0],u=d[1];Object(a.useEffect)((function(){return u("fibflower"),j}),[]),Object(a.useEffect)((function(){return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}}),[]);var j=function(){u("")},b=function(){c(!1),setTimeout((function(){return c(!0)}),10)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{setActive:u}),r&&"fibflower"===l&&Object(n.jsx)(h,{}),r&&"tree"===l&&Object(n.jsx)(B,{}),r&&"random"===l&&Object(n.jsx)(q,{}),r&&"awesome"===l&&Object(n.jsx)(J,{})]})},G=i(49);var K=function(){return Object(n.jsx)(G.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(W,{})}),Object(n.jsx)(m.a,{path:"/canvas",children:Object(n.jsx)(X,{})})]})})})},Q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,104)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),r(e),c(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(K,{})}),document.getElementById("root")),Q()}},[[78,1,2]]]);
//# sourceMappingURL=main.b9cf425b.chunk.js.map