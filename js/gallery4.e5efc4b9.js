(window.webpackJsonp=window.webpackJsonp||[]).push([["gallery4"],{"0294":function(e,n,t){"use strict";t.r(n);var i,o,r,a,c,d,s,l,u=t("7a23"),p={id:"three",ref:"three"},w=t("5a89"),m=t("7996"),h=Object(u.defineComponent)({name:"gallery4",setup:function(){var e=Object(u.ref)(document.createElement("div")),n=Object(m.a)(i,o,r,void 0,void 0,void 0,c,d,s),t=n.initScene,p=n.initCamera,h=n.initRenderer,f=n.initLight,g=n.initHelpers,v=n.initStats,b=n.windowResize,C=n.initControls,j=n.initClock;function y(){i&&r.render(i,o),c&&c.update(),d&&d.update(s.getDelta()),l=requestAnimationFrame(y),a.rotateY(.005)}function E(e){var n,l,u,m,b,E;i=t(),o=p(),r=h(e),c=v(e),d=C(),s=j(),f(),g(),n=new w.SphereGeometry(100,100,100),l=new w.TextureLoader,u=l.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/Earth.png"),m=l.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/EarthNormal.png"),b=l.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/earth_specular.png"),E=new w.MeshPhongMaterial({map:u,normalMap:m,normalScale:new w.Vector2(1.5,1.5),shininess:40,specularMap:b}),a=new w.Mesh(n,E),i.add(a),y()}return Object(u.onMounted)((function(){E(e.value),window.addEventListener("resize",b)})),Object(u.onBeforeUnmount)((function(){cancelAnimationFrame(l),d&&d.dispose(),window.removeEventListener("resize",b)})),{three:e}}});h.render=function(e,n,t,i,o,r){return Object(u.openBlock)(),Object(u.createBlock)("div",p,null,512)},n.default=h},7996:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t("5a89"),o=t("a550"),r=t("3191"),a=t.n(r),c=t("7bbe");function d(e,n,t,r,d,s,l,u,p){var w=window.innerWidth,m=window.innerHeight,h=window.devicePixelRatio,f=200;return{initScene:function(){return e=new i.Scene},initCamera:function(){var t=w/m;return(n=new i.OrthographicCamera(-f*t,f*t,f,-f,1,1e3)).position.set(200,200,200),n.lookAt(e.position),n},initRenderer:function(e){return(t=new i.WebGLRenderer).setPixelRatio(h),t.setSize(w,m),t.setClearColor(12178431),e.appendChild(t.domElement),t},initLight:function(){(r=new i.DirectionalLight(16777215)).position.set(400,200,300),e.add(r),d=new i.AmbientLight(4473924),e.add(d)},initControls:function(){return(u=new o.a(n,t.domElement)).draggingDampingFactor=1,u},initClock:function(){return new i.Clock},initHelpers:function(){s=new i.AxesHelper(250),e.add(s)},initStats:function(e){return(l=new a.a).showPanel(0),l.dom.style.position="absolute",l.dom.style.left="0px",l.dom.style.top="0px",e&&e.appendChild(l.dom),l},windowResize:Object(c.a)((function(){var e=window.innerWidth,i=window.innerHeight,o=e/i;n.left=-f*o,n.right=f*o,n.top=f,n.bottom=-f,n.updateProjectionMatrix(),t.setSize(e,i)}),100)}}o.a.install({THREE:i})}}]);