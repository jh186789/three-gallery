(window.webpackJsonp=window.webpackJsonp||[]).push([["gallery5"],{"733d":function(e,n,t){"use strict";t.r(n);var i,o,r,a,c,d,u,l=t("7a23"),s={id:"three",ref:"three"},m=t("5a89"),p=t("7996"),w=Object(l.defineComponent)({name:"gallery5",setup:function(){var e=Object(l.ref)(document.createElement("div")),n=Object(p.a)(i,o,r,void 0,void 0,void 0,a,c,d),t=n.initScene,s=n.initCamera,w=n.initRenderer,h=n.initLight,f=n.initHelpers,g=n.initStats,v=n.windowResize,b=n.initControls,C=n.initClock;function j(){i&&r.render(i,o),a&&a.update(),c&&c.update(d.getDelta()),u=requestAnimationFrame(j)}function L(e){i=t(),o=s(),r=w(e),a=g(e),c=b(),d=C(),h(),f(),(new m.ObjectLoader).load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/gun/model.json",(function(e){var n=new m.TextureLoader,t=n.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/gun/diffuse.jpg"),o=n.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/gun/normal.jpg");e.material=new m.MeshPhongMaterial({map:t,normalMap:o,normalScale:new m.Vector2(3,3)}),e.scale.set(200,200,200),e.rotateY(Math.PI),i.add(e)})),j()}return Object(l.onMounted)((function(){L(e.value),window.addEventListener("resize",v)})),Object(l.onBeforeUnmount)((function(){cancelAnimationFrame(u),c&&c.dispose(),window.removeEventListener("resize",v)})),{three:e}}});w.render=function(e,n,t,i,o,r){return Object(l.openBlock)(),Object(l.createBlock)("div",s,null,512)},n.default=w},7996:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t("5a89"),o=t("a550"),r=t("3191"),a=t.n(r);function c(e,n,t,r,c,d,u,l,s){var m=window.innerWidth,p=window.innerHeight,w=window.devicePixelRatio,h=200;return{initScene:function(){return e=new i.Scene},initCamera:function(){var t=m/p;return(n=new i.OrthographicCamera(-h*t,h*t,h,-h,1,1e3)).position.set(200,200,200),n.lookAt(e.position),n},initRenderer:function(e){return(t=new i.WebGLRenderer).setPixelRatio(w),t.setSize(m,p),t.setClearColor(12178431),e.appendChild(t.domElement),t},initLight:function(){(r=new i.DirectionalLight(16777215)).position.set(400,200,300),e.add(r),c=new i.AmbientLight(4473924),e.add(c)},initControls:function(){return(l=new o.a(n,t.domElement)).draggingDampingFactor=1,l},initClock:function(){return new i.Clock},initHelpers:function(){d=new i.AxesHelper(250),e.add(d)},initStats:function(e){return(u=new a.a).showPanel(0),u.dom.style.position="absolute",u.dom.style.left="0px",u.dom.style.top="0px",e&&e.appendChild(u.dom),u},windowResize:function(){var e=window.innerWidth,i=window.innerHeight,o=e/i;n.left=-h*o,n.right=h*o,n.top=h,n.bottom=-h,n.updateProjectionMatrix(),t.setSize(e,i)}}}o.a.install({THREE:i})}}]);