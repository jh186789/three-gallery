(window.webpackJsonp=window.webpackJsonp||[]).push([["gallery10"],{"2a9d":function(e,t,n){"use strict";n.r(t);var i,o,r,a,c,d,l,p,u,s,m=n("7a23"),w={id:"three",ref:"three"},v=n("5a89"),f=n("7996"),g=new v.Clock,h=Object(m.defineComponent)({name:"gallery10",setup:function(){var e=Object(m.ref)(document.createElement("div")),t=Object(f.a)(i,o,r,void 0,void 0,void 0,a,c,d),n=t.initScene,w=t.initCamera,h=t.initRenderer,x=t.initLight,C=t.initHelpers,y=t.initStats,b=t.windowResize,S=t.initControls,T=t.initClock;function R(){var e=g.getDelta();i&&r.render(i,o),a&&a.update(),c&&c.update(d.getDelta()),l=requestAnimationFrame(R),p.time.value+=e,s.rotation.y-=.005,u&&u.update(e)}function j(e){var t,l,m;i=n(),o=w(),(r=h(e)).setClearColor(0),a=y(e),c=S(),d=T(),x(),C(),function(){var e="https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/sun/",t=new v.TextureLoader,n=new v.SphereGeometry(100,100,100),o=t.load("".concat(e,"noise.png")),r=t.load("".concat(e,"atmosphere.jpg"));o.wrapS=v.RepeatWrapping,o.wrapT=v.RepeatWrapping,r.wrapS=v.RepeatWrapping,r.wrapT=v.RepeatWrapping,p={time:{value:1},texture1:{value:o},texture2:{value:r}};var a=new v.ShaderMaterial({uniforms:p,vertexShader:"varying vec2 texCoord;void main(){texCoord = uv;vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_Position = projectionMatrix * mvPosition;}",fragmentShader:"uniform float time;uniform sampler2D texture1;uniform sampler2D texture2;varying vec2 texCoord;uniform float opacity;void main(  ) {vec4 noise = texture2D( texture1, texCoord );vec2 T1 = texCoord + vec2( 1.5, -1.5 ) * time  * 0.01;vec2 T2 = texCoord + vec2( -0.5, 2.0 ) * time *  0.01;T1.x -= noise.r * 2.0;T1.y += noise.g * 4.0;T2.x += noise.g * 0.2;T2.y += noise.b * 0.2;float p = texture2D( texture1, T1 * 2.0 ).a + 0.25;vec4 color = texture2D( texture2, T2 );vec4 temp = color * 2.0 * ( vec4( p, p, p, p ) ) + ( color * color );  gl_FragColor = vec4(temp.rgb,temp.a*opacity);}"});s=new v.Mesh(n,a),i.add(s)}(),t=new v.KeyframeTrack(".scale",[0,5],[.01,.01,.01,1,1,1]),l=new v.AnimationClip("default",5,[t]),(m=(u=new v.AnimationMixer(s)).clipAction(l,s)).loop=v.LoopOnce,m.clampWhenFinished=!0,m.play(),R()}return Object(m.onMounted)((function(){j(e.value),window.addEventListener("resize",b)})),Object(m.onBeforeUnmount)((function(){cancelAnimationFrame(l),c&&c.dispose(),window.removeEventListener("resize",b)})),{three:e}}});h.render=function(e,t,n,i,o,r){return Object(m.openBlock)(),Object(m.createBlock)("div",w,null,512)},t.default=h},7996:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("5a89"),o=n("a550"),r=n("3191"),a=n.n(r);function c(e,t,n,r,c,d,l,p,u){var s=window.innerWidth,m=window.innerHeight,w=window.devicePixelRatio,v=200;return{initScene:function(){return e=new i.Scene},initCamera:function(){var n=s/m;return(t=new i.OrthographicCamera(-v*n,v*n,v,-v,1,1e3)).position.set(200,200,200),t.lookAt(e.position),t},initRenderer:function(e){return(n=new i.WebGLRenderer).setPixelRatio(w),n.setSize(s,m),n.setClearColor(12178431),e.appendChild(n.domElement),n},initLight:function(){(r=new i.DirectionalLight(16777215)).position.set(400,200,300),e.add(r),c=new i.AmbientLight(4473924),e.add(c)},initControls:function(){return(p=new o.a(t,n.domElement)).draggingDampingFactor=1,p},initClock:function(){return new i.Clock},initHelpers:function(){d=new i.AxesHelper(250),e.add(d)},initStats:function(e){return(l=new a.a).showPanel(0),l.dom.style.position="absolute",l.dom.style.left="0px",l.dom.style.top="0px",e&&e.appendChild(l.dom),l},windowResize:function(){var e=window.innerWidth,i=window.innerHeight,o=e/i;t.left=-v*o,t.right=v*o,t.top=v,t.bottom=-v,t.updateProjectionMatrix(),n.setSize(e,i)}}}o.a.install({THREE:i})}}]);