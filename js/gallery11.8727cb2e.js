(window.webpackJsonp=window.webpackJsonp||[]).push([["gallery11"],{7996:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t("5a89"),o=t("a550"),r=t("3191"),a=t.n(r),c=t("7bbe");function d(e,n,t,r,d,w,s,u,l){var p=window.innerWidth,f=window.innerHeight,v=window.devicePixelRatio,m=200;return{initScene:function(){return e=new i.Scene},initCamera:function(){var t=p/f;return(n=new i.OrthographicCamera(-m*t,m*t,m,-m,1,1e3)).position.set(200,200,200),n.lookAt(e.position),n},initRenderer:function(e){return(t=new i.WebGLRenderer).setPixelRatio(v),t.setSize(p,f),t.setClearColor(12178431),e.appendChild(t.domElement),t},initLight:function(){(r=new i.DirectionalLight(16777215)).position.set(400,200,300),e.add(r),d=new i.AmbientLight(4473924),e.add(d)},initControls:function(){return(u=new o.a(n,t.domElement)).draggingDampingFactor=1,u},initClock:function(){return new i.Clock},initHelpers:function(){w=new i.AxesHelper(250),e.add(w)},initStats:function(e){return(s=new a.a).showPanel(0),s.dom.style.position="absolute",s.dom.style.left="0px",s.dom.style.top="0px",e&&e.appendChild(s.dom),s},windowResize:Object(c.a)((function(){var e=window.innerWidth,i=window.innerHeight,o=e/i;n.left=-m*o,n.right=m*o,n.top=m,n.bottom=-m,n.updateProjectionMatrix(),t.setSize(e,i)}),100)}}o.a.install({THREE:i})},fbe8:function(e,n,t){"use strict";t.r(n);var i,o,r,a,c,d,w=t("7a23"),s={id:"three",ref:"three"},u=t("5a89"),l=t("7bbe"),p=t("7996"),f=0,v=Object(w.defineComponent)({name:"gallery11",setup:function(){var e=Object(w.ref)(document.createElement("div")),n=Object(p.a)(i,void 0,r,void 0,void 0,void 0,a,void 0,void 0),t=n.initScene,s=n.initRenderer,v=n.initLight,m=n.initHelpers,h=n.initStats;function b(){i&&r.render(i,o),a&&a.update(),c=requestAnimationFrame(b),f<d.length-100?(o.position.set(d[f].x,d[f].y,d[f].z),o.lookAt(new u.Vector3(d[f+1].x,d[f+1].y,d[f+1].z)),f+=1):f=0}var g=Object(l.a)((function(){var e=window.innerWidth,n=window.innerHeight;r.setSize(e,n),o.aspect=e/n,o.updateProjectionMatrix()}),100);function C(e){var n;i=t(),n=window.innerWidth/window.innerHeight,o=o=new u.PerspectiveCamera(60,n,1,1e3),(r=s(e)).setClearColor(0),a=h(e),v(),m(),function(){var e=new u.CatmullRomCurve3([new u.Vector3(-500,200,900),new u.Vector3(-100,400,400),new u.Vector3(0,0,0),new u.Vector3(600,-600,0),new u.Vector3(900,-400,600),new u.Vector3(1200,-200,300)]);d=e.getPoints(500);for(var n=new u.TubeGeometry(e,200,30,30),t=n.vertices.length,o=0;o<t;o++){var r=new u.Color;r.setRGB(Math.random(),.8,o/t),n.colors.push(r)}var a=new u.PointsMaterial({size:1.5,vertexColors:!0}),c=new u.Points(n,a);i.add(c)}(),b()}return Object(w.onMounted)((function(){C(e.value),window.addEventListener("resize",g)})),Object(w.onBeforeUnmount)((function(){cancelAnimationFrame(c),window.removeEventListener("resize",g)})),{three:e}}});v.render=function(e,n,t,i,o,r){return Object(w.openBlock)(),Object(w.createBlock)("div",s,null,512)},n.default=v}}]);