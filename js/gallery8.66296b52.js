(window.webpackJsonp=window.webpackJsonp||[]).push([["gallery8"],{"1dde":function(e,t,r){var i=r("d039"),n=r("b622"),a=r("2d00"),o=n("species");e.exports=function(e){return a>=51||!i((function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"59cb":function(e,t,r){},"65f0":function(e,t,r){var i=r("861d"),n=r("e8b5"),a=r("b622")("species");e.exports=function(e,t){var r;return n(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!n(r.prototype)?i(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},7996:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r("5a89"),n=r("a550"),a=r("3191"),o=r.n(a),s=r("7bbe");function c(e,t,r,a,c,l,u,h,d){var p=window.innerWidth,f=window.innerHeight,m=window.devicePixelRatio,v=200;return{initScene:function(){return e=new i.Scene},initCamera:function(){var r=p/f;return(t=new i.OrthographicCamera(-v*r,v*r,v,-v,1,1e3)).position.set(200,200,200),t.lookAt(e.position),t},initRenderer:function(e){return(r=new i.WebGLRenderer).setPixelRatio(m),r.setSize(p,f),r.setClearColor(12178431),e.appendChild(r.domElement),r},initLight:function(){(a=new i.DirectionalLight(16777215)).position.set(400,200,300),e.add(a),c=new i.AmbientLight(4473924),e.add(c)},initControls:function(){return(h=new n.a(t,r.domElement)).draggingDampingFactor=1,h},initClock:function(){return new i.Clock},initHelpers:function(){l=new i.AxesHelper(250),e.add(l)},initStats:function(e){return(u=new o.a).showPanel(0),u.dom.style.position="absolute",u.dom.style.left="0px",u.dom.style.top="0px",e&&e.appendChild(u.dom),u},windowResize:Object(s.a)((function(){var e=window.innerWidth,i=window.innerHeight,n=e/i;t.left=-v*n,t.right=v*n,t.top=v,t.bottom=-v,t.updateProjectionMatrix(),r.setSize(e,i)}),100)}}n.a.install({THREE:i})},"9a90":function(e,t,r){"use strict";r("59cb")},ae40:function(e,t,r){var i=r("83ab"),n=r("d039"),a=r("5135"),o=Object.defineProperty,s={},c=function(e){throw e};e.exports=function(e,t){if(a(s,e))return s[e];t||(t={});var r=[][e],l=!!a(t,"ACCESSORS")&&t.ACCESSORS,u=a(t,0)?t[0]:c,h=a(t,1)?t[1]:void 0;return s[e]=!!r&&!n((function(){if(l&&!i)return!0;var e={length:-1};l?o(e,1,{enumerable:!0,get:c}):e[1]=1,r.call(e,u,h)}))}},b727:function(e,t,r){var i=r("0366"),n=r("44ad"),a=r("7b0b"),o=r("50c4"),s=r("65f0"),c=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,u=4==e,h=6==e,d=5==e||h;return function(p,f,m,v){for(var b,g,w=a(p),y=n(w),j=i(f,m,3),x=o(y.length),L=0,V=v||s,C=t?V(p,x):r?V(p,0):void 0;x>L;L++)if((d||L in y)&&(g=j(b=y[L],L,w),e))if(t)C[L]=g;else if(g)switch(e){case 3:return!0;case 5:return b;case 6:return L;case 2:c.call(C,b)}else if(u)return!1;return h?-1:l||u?u:C}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d81d:function(e,t,r){"use strict";var i=r("23e7"),n=r("b727").map,a=r("1dde"),o=r("ae40"),s=a("map"),c=o("map");i({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e642:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("5a89"),n=function(){var e=/^[og]\s*(.+)?/,t=/^mtllib /,r=/^usemtl /,n=/^usemap /,a=new i.Vector3,o=new i.Vector3,s=new i.Vector3,c=new i.Vector3,l=new i.Vector3;function u(){var e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);var r=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){var r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);var i={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==r?r.smooth:this.smooth,groupStart:void 0!==r?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){var t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(i),i},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){var t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(var r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},r&&r.name&&"function"==typeof r.clone){var i=r.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseNormalIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseUVIndex:function(e,t){var r=parseInt(e,10);return 2*(r>=0?r-1:r+t/2)},addVertex:function(e,t,r){var i=this.vertices,n=this.object.geometry.vertices;n.push(i[e+0],i[e+1],i[e+2]),n.push(i[t+0],i[t+1],i[t+2]),n.push(i[r+0],i[r+1],i[r+2])},addVertexPoint:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){var i=this.normals,n=this.object.geometry.normals;n.push(i[e+0],i[e+1],i[e+2]),n.push(i[t+0],i[t+1],i[t+2]),n.push(i[r+0],i[r+1],i[r+2])},addFaceNormal:function(e,t,r){var i=this.vertices,n=this.object.geometry.normals;a.fromArray(i,e),o.fromArray(i,t),s.fromArray(i,r),l.subVectors(s,o),c.subVectors(a,o),l.cross(c),l.normalize(),n.push(l.x,l.y,l.z),n.push(l.x,l.y,l.z),n.push(l.x,l.y,l.z)},addColor:function(e,t,r){var i=this.colors,n=this.object.geometry.colors;void 0!==i[e]&&n.push(i[e+0],i[e+1],i[e+2]),void 0!==i[t]&&n.push(i[t+0],i[t+1],i[t+2]),void 0!==i[r]&&n.push(i[r+0],i[r+1],i[r+2])},addUV:function(e,t,r){var i=this.uvs,n=this.object.geometry.uvs;n.push(i[e+0],i[e+1]),n.push(i[t+0],i[t+1]),n.push(i[r+0],i[r+1])},addDefaultUV:function(){var e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){var t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,i,n,a,o,s,c){var l=this.vertices.length,u=this.parseVertexIndex(e,l),h=this.parseVertexIndex(t,l),d=this.parseVertexIndex(r,l);if(this.addVertex(u,h,d),this.addColor(u,h,d),void 0!==o&&""!==o){var p=this.normals.length;u=this.parseNormalIndex(o,p),h=this.parseNormalIndex(s,p),d=this.parseNormalIndex(c,p),this.addNormal(u,h,d)}else this.addFaceNormal(u,h,d);if(void 0!==i&&""!==i){var f=this.uvs.length;u=this.parseUVIndex(i,f),h=this.parseUVIndex(n,f),d=this.parseUVIndex(a,f),this.addUV(u,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";for(var t=this.vertices.length,r=0,i=e.length;r<i;r++)this.addVertexPoint(this.parseVertexIndex(e[r],t))},addLineGeometry:function(e,t){this.object.geometry.type="Line";for(var r=this.vertices.length,i=this.uvs.length,n=0,a=e.length;n<a;n++)this.addVertexLine(this.parseVertexIndex(e[n],r));var o=0;for(a=t.length;o<a;o++)this.addUVLine(this.parseUVIndex(t[o],i))}};return e.startObject("",!1),e}function h(e){i.Loader.call(this,e),this.materials=null}return h.prototype=Object.assign(Object.create(i.Loader.prototype),{constructor:h,load:function(e,t,r,n){var a=this,o=new i.FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(r){try{t(a.parse(r))}catch(t){n&&n(t),a.manager.itemError(e)}}),r,n)},setMaterials:function(e){return this.materials=e,this},parse:function(a){var o=new u;-1!==a.indexOf("\r\n")&&(a=a.replace(/\r\n/g,"\n")),-1!==a.indexOf("\\\n")&&(a=a.replace(/\\\n/g,""));for(var s=a.split("\n"),c="",l="",h=[],d="function"==typeof"".trimLeft,p=0,f=s.length;p<f;p++)if(c=s[p],0!==(c=d?c.trimLeft():c.trim()).length&&"#"!==(l=c.charAt(0)))if("v"===l){var m=c.split(/\s+/);switch(m[0]){case"v":o.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?o.colors.push(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6])):o.colors.push(void 0,void 0,void 0);break;case"vn":o.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":o.uvs.push(parseFloat(m[1]),parseFloat(m[2]))}}else if("f"===l){for(var v=c.substr(1).trim().split(/\s+/),b=[],g=0,w=v.length;g<w;g++){var y=v[g];if(y.length>0){var j=y.split("/");b.push(j)}}var x=b[0];for(g=1,w=b.length-1;g<w;g++){var L=b[g],V=b[g+1];o.addFace(x[0],L[0],V[0],x[1],L[1],V[1],x[2],L[2],V[2])}}else if("l"===l){var C=c.substring(1).trim().split(" "),A=[],I=[];if(-1===c.indexOf("/"))A=C;else for(var M=0,z=C.length;M<z;M++){var S=C[M].split("/");""!==S[0]&&A.push(S[0]),""!==S[1]&&I.push(S[1])}o.addLineGeometry(A,I)}else if("p"===l){var F=c.substr(1).trim().split(" ");o.addPointGeometry(F)}else if(null!==(h=e.exec(c))){var O=(" "+h[0].substr(1).trim()).substr(1);o.startObject(O)}else if(r.test(c))o.object.startMaterial(c.substring(7).trim(),o.materialLibraries);else if(t.test(c))o.materialLibraries.push(c.substring(7).trim());else if(n.test(c));else if("s"===l){if((h=c.split(" ")).length>1){var P=h[1].trim().toLowerCase();o.object.smooth="0"!==P&&"off"!==P}else o.object.smooth=!0;(J=o.object.currentMaterial())&&(J.smooth=o.object.smooth)}else if("\0"===c)continue;o.finalize();var E=new i.Group;for(E.materialLibraries=[].concat(o.materialLibraries),p=0,f=o.objects.length;p<f;p++){var U=o.objects[p],B=U.geometry,R=U.materials,k="Line"===B.type,D="Points"===B.type,_=!1;if(0!==B.vertices.length){var q=new i.BufferGeometry;q.setAttribute("position",new i.Float32BufferAttribute(B.vertices,3)),q.setAttribute("normal",new i.Float32BufferAttribute(B.normals,3)),B.colors.length>0&&(_=!0,q.setAttribute("color",new i.Float32BufferAttribute(B.colors,3))),!0===B.hasUVIndices&&q.setAttribute("uv",new i.Float32BufferAttribute(B.uvs,2));for(var G,H=[],N=0,W=R.length;N<W;N++){var T=(Q=R[N]).name+"_"+Q.smooth+"_"+_,J=o.materials[T];if(null!==this.materials)if(J=this.materials.create(Q.name),!k||!J||J instanceof i.LineBasicMaterial){if(D&&J&&!(J instanceof i.PointsMaterial)){var Y=new i.PointsMaterial({size:10,sizeAttenuation:!1});i.Material.prototype.copy.call(Y,J),Y.color.copy(J.color),Y.map=J.map,J=Y}}else{var K=new i.LineBasicMaterial;i.Material.prototype.copy.call(K,J),K.color.copy(J.color),J=K}void 0===J&&((J=k?new i.LineBasicMaterial:D?new i.PointsMaterial({size:1,sizeAttenuation:!1}):new i.MeshPhongMaterial).name=Q.name,J.flatShading=!Q.smooth,J.vertexColors=_,o.materials[T]=J),H.push(J)}if(H.length>1){for(N=0,W=R.length;N<W;N++){var Q=R[N];q.addGroup(Q.groupStart,Q.groupCount,N)}G=k?new i.LineSegments(q,H):D?new i.Points(q,H):new i.Mesh(q,H)}else G=k?new i.LineSegments(q,H[0]):D?new i.Points(q,H[0]):new i.Mesh(q,H[0]);G.name=U.name,E.add(G)}}return E}}),h}()},e8b5:function(e,t,r){var i=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}},f67d:function(e,t,r){"use strict";r.r(t);var i=r("7a23"),n=Object(i.withScopeId)("data-v-0ef6f000");Object(i.pushScopeId)("data-v-0ef6f000");var a={id:"three",ref:"three"};Object(i.popScopeId)();var o,s,c,l,u,h,d,p,f,m=n((function(e,t,r,n,o,s){return Object(i.openBlock)(),Object(i.createBlock)("div",a,null,512)})),v=(r("d81d"),r("5a89")),b=r("e642"),g=r("7996"),w=Object(i.defineComponent)({name:"gallery8",setup:function(){var e=Object(i.ref)(document.createElement("div")),t=Object(g.a)(o,s,c,void 0,l,void 0,u,h,d),r=t.initScene,n=t.initCamera,a=t.initRenderer,m=t.initHelpers,w=t.initStats,y=t.windowResize,j=t.initControls,x=t.initClock;function L(){o&&c.render(o,s),u&&u.update(),h&&h.update(d.getDelta()),f&&f.rotateY(.01),p=requestAnimationFrame(L)}function V(e){o=r(),s=n(),(c=a(e)).setClearColor(0),u=w(e),h=j(),d=x(),function(){var e=new v.PointLight(16777215,.3);e.position.set(400,200,300),o.add(e),l=new v.AmbientLight(16777215,.8),o.add(l);var t=new v.DirectionalLight(16777215,.5);t.position.set(400,200,300),o.add(t);var r=new v.DirectionalLight(16777215,.5);r.position.set(-400,-200,-300),o.add(r)}(),m(),(new b.a).load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/model.obj",(function(e){o.add(e),(f=e.children[0]).scale.set(10,10,10);var t=new v.TextureLoader;f.material.map=t.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/color.png"),f.material.normalMap=t.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/normal.png"),f.material.normalScale.set(1.5,1.5),f.material.specularMap=t.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/specular.png"),f.material.specular.set(16777215),f.material.shininess=100;var r="https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/env/",i=".jpg",n=[r+"px"+i,r+"nx"+i,r+"py"+i,r+"ny"+i,r+"pz"+i,r+"nz"+i];f.material.envMap=(new v.CubeTextureLoader).load(n)})),L()}return Object(i.onMounted)((function(){V(e.value),window.addEventListener("resize",y)})),Object(i.onBeforeUnmount)((function(){cancelAnimationFrame(p),h&&h.dispose(),window.removeEventListener("resize",y)})),{three:e}}});r("9a90"),w.render=m,w.__scopeId="data-v-0ef6f000",t.default=w}}]);