webpackJsonp([1],{"+WH4":function(t,e){},"05W9":function(t,e){},"30Wc":function(t,e,n){"use strict";var s=(n("Tt4a"),n("PJh5"));n.n(s);e.a={name:"webgl"}},"32l6":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("b",[t._v("Day:")]),t._v(" "+t._s(this.day)),n("br"),t._v(" "),n("br"),n("b",[t._v("Number of Blocks:")]),t._v(" "+t._s(this.numBlocks)),n("br"),t._v(" "),n("br"),n("b",[t._v("Fee:")]),t._v(" "+t._s(this.fee)),n("br"),t._v(" "),n("br"),n("b",[t._v("Value:")]),t._v(" "+t._s(this.value.toLocaleString("USD"))),n("br"),t._v(" "),n("router-link",{attrs:{to:this.prevDay}},[t._v(t._s(this.prevDay))]),t._v(" "),this.isBeforeToday?n("router-link",{attrs:{to:this.nextDay}},[t._v(t._s(this.nextDay))]):t._e()],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},"64Vl":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},[n("router-view",{staticClass:"big"}),t._v(" "),n("graph")],1),t._v(" "),n("webgl")],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},"6bm0":function(t,e,n){"use strict";var s={canvas:null,assetPath:"./assets/",itemDataListPath:"./assets/list.json",showStats:!0,debug:{displayShadowMap:!1,orbitControls:!1},scene:{bgColor:0,shadowsOn:!1,antialias:!0,showConvexHull:!1},postProcessing:{effectDownscaleDivisor:2},camera:{fov:60,autoMove:!0}};e.a=s},"84N7":function(t,e,n){"use strict";var s=n("Zrlr"),r=n.n(s),i=n("wxAW"),a=n.n(i),o=n("Ml+6"),h=n("qKrd"),c=n.n(h),u=n("6bm0"),l=(n("Fgch"),n("A1am")),d=c()(o),p=function(){function t(e){r()(this,t),this.camera,this.scene,this.renderer,this.width,this.height,this.bgMap,this.blocks=e,this.textureLoader=new o.TextureLoader,this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new o.Scene,this.scene.fog=new o.FogExp2(u.a.scene.bgColor,.001),this.canvas=document.getElementById("stage"),this.renderer=new o.WebGLRenderer({antialias:u.a.scene.antialias,canvas:this.canvas,alpha:!0}),this.renderer.setClearColor(u.a.scene.bgColor,0),this.renderer.autoClear=!1,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=o.PCFSoftShadowMap,this.renderer.shadowMap.soft=!0,this.renderer.autoClear=!1,this.renderer.sortObjects=!1,this.camera=new o.PerspectiveCamera(u.a.camera.fov,this.width/this.height,1,5e4),this.camera.position.set(0,35,0),this.camera.updateMatrixWorld(),this.controls=new d(this.camera,this.renderer.domElement),this.controls.minDistance=0,this.controls.maxDistance=5e3,window.addEventListener("resize",this.resize.bind(this),!1),this.resize(),this.addLights(),this.setupMaterials(),this.addObjects(),this.animate()}return a()(t,[{key:"addLights",value:function(t){var e=new o.AmbientLight(15847621);this.scene.add(e);var n=new o.SpotLight(15656613);n.position.set(100,30,0),n.target.position.set(0,0,0),n.castShadow=!0,n.shadow=new o.LightShadow(new o.PerspectiveCamera(50,1,500,15e3)),n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,this.scene.add(n)}},{key:"addObjects",value:function(){this.group=new o.Group,this.scene.add(this.group);for(var t=0;t<this.blocks.length;t++){var e=this.blocks[t],n=e.n_tx/250,s=e.fee/5e9,r=new o.BoxBufferGeometry(n,s,s),i=new o.Mesh(r,this.crystalMaterial),a=2*Math.PI/this.blocks.length*t;i.rotation.y=a,i.translateX(10+n/2),i.translateY(t/15),this.group.add(i)}this.group.rotation.x=2,this.group.position.z=-5}},{key:"addConvexHull",value:function(t){var e=new l.a(t),n=new o.MeshBasicMaterial({color:16777215,wireframe:!0,opacity:.5,transparent:!0}),s=new o.Mesh(e,n);s.rotation.set(0,Math.PI,Math.PI),this.scene.add(s)}},{key:"setupMaterials",value:function(){this.cubeMapUrls=["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],this.bgMap=(new o.CubeTextureLoader).setPath("/static/assets/textures/").load(this.cubeMapUrls),this.crystalMaterial=new o.MeshPhysicalMaterial({color:11517913,metalness:.6,roughness:0,opacity:1,side:o.DoubleSide,transparent:!1,envMap:this.bgMap})}},{key:"resize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}},{key:"render",value:function(){this.group.rotation.y+=1e-4,this.renderer.render(this.scene,this.camera),this.controls.update()}},{key:"animate",value:function(){requestAnimationFrame(this.animate.bind(this)),this.render()}}]),t}();e.a=p},A1am:function(t,e,n){"use strict";function s(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new o,this.unassigned=new o,this.vertices=[]}function r(){this.normal=new m.Vector3,this.midpoint=new m.Vector3,this.area=0,this.constant=0,this.outside=null,this.mark=g,this.edge=null}function i(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}function a(t){this.point=t,this.prev=null,this.next=null,this.face=null}function o(){this.head=null,this.tail=null}function h(t){m.Geometry.call(this),this.type="ConvexGeometry",this.fromBufferGeometry(new c(t)),this.mergeVertices()}function c(t){m.BufferGeometry.call(this),this.type="ConvexBufferGeometry";var e=[],n=[];void 0===s&&console.error("THREE.ConvexBufferGeometry: ConvexBufferGeometry relies on QuickHull");for(var r=(new s).setFromPoints(t),i=r.faces,a=0;a<i.length;a++){var o=i[a],h=o.edge;do{var c=h.head().point;e.push(c.x,c.y,c.z),n.push(o.normal.x,o.normal.y,o.normal.z),h=h.next}while(h!==o.edge)}this.addAttribute("position",new m.Float32BufferAttribute(e,3)),this.addAttribute("normal",new m.Float32BufferAttribute(n,3))}n.d(e,"a",function(){return h});var u=n("OvRC"),l=n.n(u),d=n("NnIC"),p=n.n(d),f=n("woOf"),v=n.n(f),m=n("Ml+6"),g=0;v()(s.prototype,{setFromPoints:function(t){!0!==Array.isArray(t)&&console.error("THREE.QuickHull: Points parameter is not an array."),t.length<4&&console.error("THREE.QuickHull: The algorithm needs at least four points."),this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.vertices.push(new a(t[e]));return this.compute(),this},setFromObject:function(t){var e=[];return t.updateMatrixWorld(!0),t.traverse(function(t){var n,s,r,i=t.geometry;if(void 0!==i)if(i.isGeometry){var a=i.vertices;for(n=0,s=a.length;n<s;n++)r=a[n].clone(),r.applyMatrix4(t.matrixWorld),e.push(r)}else if(i.isBufferGeometry){var o=i.attributes.position;if(void 0!==o)for(n=0,s=o.count;n<s;n++)r=new m.Vector3,r.fromBufferAttribute(o,n).applyMatrix4(t.matrixWorld),e.push(r)}}),this.setFromPoints(e)},makeEmpty:function(){return this.faces=[],this.vertices=[],this},addVertexToFace:function(t,e){return t.face=e,null===e.outside?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this},removeVertexFromFace:function(t,e){return t===e.outside&&(null!==t.next&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this},removeAllVerticesFromFace:function(t){if(null!==t.outside){for(var e=t.outside,n=t.outside;null!==n.next&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}},deleteFaceVertices:function(t,e){var n=this.removeAllVerticesFromFace(t);if(void 0!==n)if(void 0===e)this.unassigned.appendChain(n);else{var s=n;do{var r=s.next,i=e.distanceToPoint(s.point);i>this.tolerance?this.addVertexToFace(s,e):this.unassigned.append(s),s=r}while(null!==s)}return this},resolveUnassignedPoints:function(t){if(!1===this.unassigned.isEmpty()){var e=this.unassigned.first();do{for(var n=e.next,s=this.tolerance,r=null,i=0;i<t.length;i++){var a=t[i];if(a.mark===g){var o=a.distanceToPoint(e.point);if(o>s&&(s=o,r=a),s>1e3*this.tolerance)break}}null!==r&&this.addVertexToFace(e,r),e=n}while(null!==e)}return this},computeExtremes:function(){var t,e,n,s=new m.Vector3,r=new m.Vector3,i=[],a=[];for(t=0;t<3;t++)i[t]=a[t]=this.vertices[0];for(s.copy(this.vertices[0].point),r.copy(this.vertices[0].point),t=0,e=this.vertices.length;t<e;t++){var o=this.vertices[t],h=o.point;for(n=0;n<3;n++)h.getComponent(n)<s.getComponent(n)&&(s.setComponent(n,h.getComponent(n)),i[n]=o);for(n=0;n<3;n++)h.getComponent(n)>r.getComponent(n)&&(r.setComponent(n,h.getComponent(n)),a[n]=o)}return this.tolerance=3*p.a*(Math.max(Math.abs(s.x),Math.abs(r.x))+Math.max(Math.abs(s.y),Math.abs(r.y))+Math.max(Math.abs(s.z),Math.abs(r.z))),{min:i,max:a}},computeInitialHull:function(){var t,e,n;return function(){void 0===t&&(t=new m.Line3,e=new m.Plane,n=new m.Vector3);var s,i,a,o,h,c,u,l,d,p=this.vertices,f=this.computeExtremes(),v=f.min,g=f.max,w=0,b=0;for(c=0;c<3;c++)(d=g[c].point.getComponent(c)-v[c].point.getComponent(c))>w&&(w=d,b=c);for(i=v[b],a=g[b],w=0,t.set(i.point,a.point),c=0,u=this.vertices.length;c<u;c++)(s=p[c])!==i&&s!==a&&(t.closestPointToPoint(s.point,!0,n),(d=n.distanceToSquared(s.point))>w&&(w=d,o=s));for(w=0,e.setFromCoplanarPoints(i.point,a.point,o.point),c=0,u=this.vertices.length;c<u;c++)(s=p[c])!==i&&s!==a&&s!==o&&(d=Math.abs(e.distanceToPoint(s.point)))>w&&(w=d,h=s);var y=[];if(e.distanceToPoint(h.point)<0)for(y.push(r.create(i,a,o),r.create(h,a,i),r.create(h,o,a),r.create(h,i,o)),c=0;c<3;c++)l=(c+1)%3,y[c+1].getEdge(2).setTwin(y[0].getEdge(l)),y[c+1].getEdge(1).setTwin(y[l+1].getEdge(0));else for(y.push(r.create(i,o,a),r.create(h,i,a),r.create(h,a,o),r.create(h,o,i)),c=0;c<3;c++)l=(c+1)%3,y[c+1].getEdge(2).setTwin(y[0].getEdge((3-c)%3)),y[c+1].getEdge(0).setTwin(y[l+1].getEdge(1));for(c=0;c<4;c++)this.faces.push(y[c]);for(c=0,u=p.length;c<u;c++)if((s=p[c])!==i&&s!==a&&s!==o&&s!==h){w=this.tolerance;var x=null;for(l=0;l<4;l++)(d=this.faces[l].distanceToPoint(s.point))>w&&(w=d,x=this.faces[l]);null!==x&&this.addVertexToFace(s,x)}return this}}(),reindexFaces:function(){for(var t=[],e=0;e<this.faces.length;e++){var n=this.faces[e];n.mark===g&&t.push(n)}return this.faces=t,this},nextVertexToAdd:function(){if(!1===this.assigned.isEmpty()){var t,e=0,n=this.assigned.first().face,s=n.outside;do{var r=n.distanceToPoint(s.point);r>e&&(e=r,t=s),s=s.next}while(null!==s&&s.face===n);return t}},computeHorizon:function(t,e,n,s){this.deleteFaceVertices(n),n.mark=1;var r;r=null===e?e=n.getEdge(0):e.next;do{var i=r.twin,a=i.face;a.mark===g&&(a.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,i,a,s):s.push(r)),r=r.next}while(r!==e);return this},addAdjoiningFace:function(t,e){var n=r.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)},addNewFaces:function(t,e){this.newFaces=[];for(var n=null,s=null,r=0;r<e.length;r++){var i=e[r],a=this.addAdjoiningFace(t,i);null===n?n=a:a.next.setTwin(s),this.newFaces.push(a.face),s=a}return n.next.setTwin(s),this},addVertexToHull:function(t){var e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this},cleanup:function(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this},compute:function(){var t;for(this.computeInitialHull();void 0!==(t=this.nextVertexToAdd());)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}}),v()(r,{create:function(t,e,n){var s=new r,a=new i(t,s),o=new i(e,s),h=new i(n,s);return a.next=h.prev=o,o.next=a.prev=h,h.next=o.prev=a,s.edge=a,s.compute()}}),v()(r.prototype,{getEdge:function(t){for(var e=this.edge;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e},compute:function(){var t;return function(){void 0===t&&(t=new m.Triangle);var e=this.edge.tail(),n=this.edge.head(),s=this.edge.next.head();return t.set(e.point,n.point,s.point),t.normal(this.normal),t.midpoint(this.midpoint),this.area=t.area(),this.constant=this.normal.dot(this.midpoint),this}}(),distanceToPoint:function(t){return this.normal.dot(t)-this.constant}}),v()(i.prototype,{head:function(){return this.vertex},tail:function(){return this.prev?this.prev.vertex:null},length:function(){var t=this.head(),e=this.tail();return null!==e?e.point.distanceTo(t.point):-1},lengthSquared:function(){var t=this.head(),e=this.tail();return null!==e?e.point.distanceToSquared(t.point):-1},setTwin:function(t){return this.twin=t,t.twin=this,this}}),v()(o.prototype,{first:function(){return this.head},last:function(){return this.tail},clear:function(){return this.head=this.tail=null,this},insertBefore:function(t,e){return e.prev=t.prev,e.next=t,null===e.prev?this.head=e:e.prev.next=e,t.prev=e,this},insertAfter:function(t,e){return e.prev=t,e.next=t.next,null===e.next?this.tail=e:e.next.prev=e,t.next=e,this},append:function(t){return null===this.head?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this},appendChain:function(t){for(null===this.head?this.head=t:this.tail.next=t,t.prev=this.tail;null!==t.next;)t=t.next;return this.tail=t,this},remove:function(t){return null===t.prev?this.head=t.next:t.prev.next=t.next,null===t.next?this.tail=t.prev:t.next.prev=t.prev,this},removeSubList:function(t,e){return null===t.prev?this.head=e.next:t.prev.next=e.next,null===e.next?this.tail=t.prev:e.next.prev=t.prev,this},isEmpty:function(){return null===this.head}}),h.prototype=l()(m.Geometry.prototype),h.prototype.constructor=h,c.prototype=l()(m.BufferGeometry.prototype),c.prototype.constructor=c},BsyC:function(t,e,n){"use strict";var s=n("hiCB"),r=n.n(s),i=n("Zrlr"),a=n.n(i),o=n("wxAW"),h=n.n(o),c=n("Ml+6"),u=n("qKrd"),l=n.n(u),d=n("6bm0"),p=n("Fgch"),f=n("A1am"),v=n("jJoG"),m=n.n(v);n("Sazm");n("3VHS");var g=l()(c),w=function(){function t(e){a()(this,t),this.camera,this.scene,this.renderer,this.width,this.height,this.textureLoader,this.bgMap,this.firebaseDB,this.model,this.tsneIterations,this.crystalMaterial,this.pointCount,this.TSNESolution,this.currentBlock=e,this.textureLoader=new c.TextureLoader,this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new c.Scene,this.scene.fog=new c.FogExp2(d.a.scene.bgColor,1e-6),this.canvas=document.getElementById("stage"),this.renderer=new c.WebGLRenderer({antialias:d.a.scene.antialias,canvas:this.canvas}),this.renderer.setClearColor(d.a.scene.bgColor),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=c.PCFSoftShadowMap,this.renderer.shadowMap.soft=!0,this.renderer.autoClear=!1,this.renderer.sortObjects=!1,this.camera=new c.PerspectiveCamera(d.a.camera.fov,this.width/this.height,1,5e4),this.camera.position.set(0,1,0),this.camera.updateMatrixWorld(),this.controls=new g(this.camera,this.renderer.domElement),this.controls.minDistance=0,this.controls.maxDistance=5e3,window.addEventListener("resize",this.resize.bind(this),!1),this.resize(),this.addLights(),this.addObjects(),this.animate()}return h()(t,[{key:"addLights",value:function(t){var e=new c.AmbientLight(16777215);this.scene.add(e);var n=new c.SpotLight(16777215);n.position.set(1e4,300,0),n.target.position.set(0,0,0),d.a.scene.shadowsOn&&(n.castShadow=!0,n.shadow=new c.LightShadow(new c.PerspectiveCamera(50,1,500,15e3)),n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048),this.scene.add(n)}},{key:"addObjects",value:function(){var t=this;this.pointCount=this.currentBlock.n_tx,console.log("Block contains "+this.pointCount+" transactions"),this.runTSNE();for(var e=[],n=0;n<this.pointCount;n++){var s=this.TSNESolution[n];e.push({x:s[0],y:s[1],z:s[2]})}var i=new c.Group;this.scene.add(i);for(var a=[],o=0;o<e.length;o++){var h=e[o];a.push(new c.Vector3(h.x,h.y,h.z))}d.a.scene.showConvexHull&&this.addConvexHull(a),this.setupMaterials(),this.currentBlock.tx.forEach(function(n,s){for(var a=n.value/1e8,o=Math.log(a+1.5),h=e[s],u=new c.Vector2(h.x,h.y),l=r.a,d=0;d<e.length;d++){var f=new c.Vector2(e[d].x,e[d].y),v=f.distanceTo(u);v>0&&(l=Math.min(v,l))}for(var m=[],g=0;g<6;g++){var w=l/50;w=Math.min(w,.003);var b=g/6*Math.PI*2;m.push(new c.Vector2(Math.cos(b)*w,Math.sin(b)*w).multiplyScalar(100))}var y=new c.Shape(m),x=new c.Mesh(new p.a(y,{steps:1,amount:o/10}),t.crystalMaterial);x.position.set(h.x,h.y,h.z),x.castShadow=!0,x.receiveShadow=!0,i.add(x)})}},{key:"runTSNE",value:function(){switch(this.pointCount){case this.pointCount<100:this.tsneIterations=2;break;case this.pointCount<50:this.tsneIterations=1;break;default:this.tsneIterations=20}var t={};t.epsilon=100,t.perplexity=30,t.dim=3;var e=new m.a.tSNE(t);console.log(t);for(var n=[],s=0;s<this.currentBlock.tx.length;s++)n.push([this.currentBlock.tx[s].output,this.currentBlock.tx[s].time,this.currentBlock.tx[s].size,this.currentBlock.tx[s].weight]);console.log(n),e.initDataRaw(n);for(var r=1;r<=this.tsneIterations;r++)e.step(),console.log("Completed TSNE step "+r+" of "+this.tsneIterations);this.TSNESolution=e.getSolution()}},{key:"addConvexHull",value:function(t){var e=new f.a(t),n=new c.MeshBasicMaterial({color:16777215,wireframe:!0,opacity:.5,transparent:!0}),s=new c.Mesh(e,n);this.scene.add(s)}},{key:"setupMaterials",value:function(){this.cubeMapUrls=["right.png","left.png","top.png","bot.png","front.png","back.png"],this.bgMap=(new c.CubeTextureLoader).setPath("./assets/textures/skybox/").load(this.cubeMapUrls),this.bgMap.mapping=c.CubeRefractionMapping,this.scene.background=this.bgMap,this.crystalMaterial=new c.MeshPhysicalMaterial({color:16777215,metalness:.8,roughness:.5,refractionRatio:.88,opacity:.8,reflectivity:1,side:c.DoubleSide,transparent:!1,envMap:this.bgMap})}},{key:"resize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera),this.controls.update()}},{key:"animate",value:function(){requestAnimationFrame(this.animate.bind(this)),this.render()}}]),t}();e.a=w},CsbN:function(t,e,n){"use strict";function s(t){n("ecZ8")}var r=n("30Wc"),i=n("PYKX"),a=n("VU/8"),o=s,h=a(r.a,i.a,o,"data-v-b281ba50",null);e.a=h.exports},Fgch:function(t,e,n){"use strict";function s(t,e){o.Geometry.call(this),this.type="ExtrudeCrystalGeometry",this.parameters={shapes:t,options:e},this.fromBufferGeometry(new r(t,e)),this.mergeVertices()}function r(t,e){void 0!==t&&(o.BufferGeometry.call(this),this.type="ExtrudeCrystalBufferGeometry",t=Array.isArray(t)?t:[t],this.addShapeList(t,e),this.computeVertexNormals())}n.d(e,"a",function(){return r});var i=n("OvRC"),a=n.n(i),o=n("Ml+6");s.prototype=a()(o.Geometry.prototype),s.prototype.constructor=s,r.prototype=a()(o.BufferGeometry.prototype),r.prototype.constructor=r,r.prototype.getArrays=function(){var t=this.getAttribute("position"),e=t?Array.prototype.slice.call(t.array):[],n=this.getAttribute("uv"),s=n?Array.prototype.slice.call(n.array):[],r=this.index;return{position:e,uv:s,index:r?Array.prototype.slice.call(r.array):[]}},r.prototype.addShapeList=function(t,e){var n=t.length;e.arrays=this.getArrays();for(var s=0;s<n;s++){var r=t[s];this.addShape(r,e)}this.setIndex(e.arrays.index),this.addAttribute("position",new o.Float32BufferAttribute(e.arrays.position,3)),this.addAttribute("uv",new o.Float32BufferAttribute(e.arrays.uv,2))},r.prototype.addShape=function(t,e){function n(t,e){for(var n=void 0,s=void 0,r=t.length;--r>=0;){n=r,s=r-1,s<0&&(s=t.length-1);var i=0;for(i=0;i<1;i++){var o=B*i,h=B*(i+1);a(e+n+o,e+s+o,e+s+h,e+n+h,t,i,1,n,s)}}}function r(t,e,n){f.push(t),f.push(e),f.push(n)}function i(t,e,n){h(t),h(e),h(n);var s=l.length/3,r=g.generateTopUV(w,l,s-3,s-2,s-1);c(r[0]),c(r[1]),c(r[2])}function a(t,e,n,s,r,i,a,o,u){h(t),h(e),h(s),h(e),h(n),h(s);var d=l.length/3,p=g.generateSideWallUV(w,l,d-6,d-3,d-2,d-1);c(p[0]),c(p[1]),c(p[3]),c(p[1]),c(p[2]),c(p[3])}function h(t){d.push(l.length/3),l.push(f[3*t+0]),l.push(f[3*t+1]),l.push(f[3*t+2])}function c(t){p.push(t.x),p.push(t.y)}var u=e.arrays?e.arrays:this.getArrays(),l=u.position,d=u.index,p=u.uv,f=[],v=void 0!==e.amount?e.amount:100,m=void 0!==e.steps?e.steps:1,g=void 0!==e.UVGenerator?e.UVGenerator:s.WorldUVGenerator,w=this,b=t.extractPoints(12),y=b.shape;!o.ShapeUtils.isClockWise(y)&&(y=y.reverse());for(var x=[],j=0;j<y.length;j++)x.push(y[j]);for(var k=0,M=0,_=0;_<y.length;_++)k+=y[_].x,M+=y[_].y;var S=k/y.length,z=M/y.length,F=new o.Vector2(S,z);y.push(F);for(var V=[],C=y.length-1,T=0;T<C;T++){var P=[];T<C-1?(P.push(T),P.push(T+1)):(P.push(T),P.push(0)),P.push(C),V.push(P)}for(var E=void 0,B=y.length,A=void 0,D=V.length,H=0;H<B;H++)E=y[H],r(E.x,E.y,0);for(var L=(Math.random(),Math.random(),1);L<=m;L++)for(var G=0;G<B;G++)E=y[G],G==B-1?r(E.x,E.y,(v+v/2)/m*L):r(E.x,E.y,(v+Math.random()*v*.2)/m*L);!function(){for(var t=l.length/3,n=0;n<D;n++)A=V[n],i(A[2],A[1],A[0]);for(var s=0;s<D;s++)A=V[s],i(A[0]+B*m,A[1]+B*m,A[2]+B*m);w.addGroup(t,l.length/3-t,void 0!==e.material?e.material:0)}(),function(){var t=l.length/3,s=0;n(x,s),s+=x.length,w.addGroup(t,l.length/3-t,void 0!==e.extrudeMaterial?e.extrudeMaterial:1)}(),e.arrays||(this.setIndex(d),this.addAttribute("position",new o.Float32BufferAttribute(l,3)),this.addAttribute("uv",new o.Float32BufferAttribute(e.arrays.uv,2)))},s.WorldUVGenerator={generateTopUV:function(t,e,n,s,r){var i=e[3*n],a=e[3*n+1],h=e[3*s],c=e[3*s+1],u=e[3*r],l=e[3*r+1];return[new o.Vector2(i,a),new o.Vector2(h,c),new o.Vector2(u,l)]},generateSideWallUV:function(t,e,n,s,r,i){var a=e[3*n],h=e[3*n+1],c=e[3*n+2],u=e[3*s],l=e[3*s+1],d=e[3*s+2],p=e[3*r],f=e[3*r+1],v=e[3*r+2],m=e[3*i],g=e[3*i+1],w=e[3*i+2];return Math.abs(h-l)<.01?[new o.Vector2(a,1-c),new o.Vector2(u,1-d),new o.Vector2(p,1-v),new o.Vector2(m,1-w)]:[new o.Vector2(h,1-c),new o.Vector2(f,1-v),new o.Vector2(l,1-d),new o.Vector2(g,1-w)]}}},M3y6:function(t,e,n){"use strict";var s=n("Gu7T"),r=n.n(s),i=n("Tt4a"),a=n("VvTn");e.a={name:"graph",data:function(t){return{graph:[],width:500,height:100,min:0,max:0}},created:function(){var t=this;n.i(i.d)().then(function(e){var s=e.values;t.max=Math.max.apply(Math,r()(s)),t.min=Math.min.apply(Math,r()(s)),t.graph=s.map(function(e){return n.i(a.a)(e,t.min,t.max,t.height,0)}),t.graph=[100].concat(t.graph,[100])})}}},MQTS:function(t,e,n){"use strict";var s=n("PJh5");n.n(s)},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r=n("/ocq"),i=n("nTnm"),a=n("YORi"),o=n("s6+2"),h=n("PJh5"),c=n.n(h);s.a.config.productionTip=!1,s.a.use(r.a);var u=[{path:"/",component:o.a,props:!0,children:[{path:"",redirect:function(t){return"/"+c()().format("YYYY-MM-DD")}},{path:"/block/:blockhash",component:i.a,props:!0},{path:"/:date",component:a.a,props:!0}]}],l=new r.a({routes:u,mode:"history"});new s.a({router:l}).$mount("#app")},PYKX:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{attrs:{id:"stage"}})])}],i={render:s,staticRenderFns:r};e.a=i},Tt4a:function(t,e,n){"use strict";n.d(e,"d",function(){return w}),n.d(e,"b",function(){return b}),n.d(e,"a",function(){return x}),n.d(e,"c",function(){return j});var s=n("Xxa5"),r=n.n(s),i=n("exGp"),a=n.n(i),o=n("Dd8w"),h=n.n(o),c=n("mtWM"),u=n.n(c),l=n("Sazm"),d=n.n(l),p=n("3VHS"),f=(n.n(p),this);d.a.initializeApp({apiKey:"AIzaSyCkC_zpHJhgYkS-IbN_OwvZSjb4NfcN28g",projectId:"iohk-orpheus"});var v=d.a.firestore().collection("block"),m=function(t){var e=t.data,n=[],s=[];return e.values.forEach(function(t){var e=t.x,r=t.y;n.push(e),s.push(r)}),{times:n,values:s}},g=function(t){return h()({},t,{fee:t.output-t.input})},w=function(t,e){return u.a.get("https://api.blockchain.info/charts/transaction-fees?timespan=all&format=json&cors=true").then(m)},b=function(t){return v.where("hash","==",t).get().then(function(t){var e=t.docs;return g(e[0].data())})},y=function(){var t=a()(r.a.mark(function t(e){var n,s,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Date(e),n.setMilliseconds(0),n.setSeconds(0),n.setMinutes(0),n.setHours(0),s=new Date(n.getTime()),s.setHours(s.getHours()+24),t.next=9,v.where("time",">=",n/1e3).where("time","<",s/1e3).get().then(function(t){return t.docs.map(function(t){return g(t.data())})});case 9:return i=t.sent,t.abrupt("return",i);case 11:case"end":return t.stop()}},t,f)}));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=a()(r.a.mark(function t(e){var n,s,i,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return n=t.sent,s=n.reduce(function(t,e){return t+e.fee},0)||0,i=n.reduce(function(t,e){return t+e.input},0)||0,a=n.reduce(function(t,e){return t+e.output},0)||0,t.abrupt("return",{date:e,blocks:n,fee:s,input:i,output:a});case 7:case"end":return t.stop()}},t,f)}));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=a()(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v.where("hash","==",e).get().then(function(t){return t.docs[0].ref.collection("metadata").get()}).then(function(t){return t.docs[0].data().transaction}));case 1:case"end":return t.stop()}},t,f)}));return function(e){return t.apply(this,arguments)}}()},Uhku:function(t,e,n){"use strict";var s=(n("Tt4a"),n("PJh5")),r=(n.n(s),n("CsbN")),i=n("xMVz");e.a={name:"home",components:{webgl:r.a,graph:i.a}}},VvTn:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s=(Math.PI,function(t,e,n,s,r){return s+(t-e)*(r-s)/(n-e)})},YORi:function(t,e,n){"use strict";function s(t){n("05W9")}var r=n("tVek"),i=n("32l6"),a=n("VU/8"),o=s,h=a(r.a,i.a,o,"data-v-c9fe914a",null);e.a=h.exports},aL6n:function(t,e){},cbdp:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"graph"},[n("svg",{attrs:{width:"100%",height:t.height,viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[n("polyline",{attrs:{fill:"white",stroke:"white",points:t.graph.map(function(e,n){return[""+n/t.graph.length*100,e].join(",")})}}),t._v(" "),n("text",{attrs:{x:t.width,y:"10"}},[t._v(t._s(this.max))]),t._v(" "),n("text",{attrs:{x:t.width,y:t.height}},[t._v(t._s(this.min))])])])},r=[],i={render:s,staticRenderFns:r};e.a=i},ecZ8:function(t,e){},esd5:function(t,e){},nTnm:function(t,e,n){"use strict";function s(t){n("+WH4")}var r=n("v5/U"),i=n("vG3H"),a=n("VU/8"),o=s,h=a(r.a,i.a,o,"data-v-748bea0c",null);e.a=h.exports},"s6+2":function(t,e,n){"use strict";function s(t){n("esd5")}var r=n("Uhku"),i=n("64Vl"),a=n("VU/8"),o=s,h=a(r.a,i.a,o,"data-v-5418698a",null);e.a=h.exports},tVek:function(t,e,n){"use strict";var s=n("84N7"),r=n("Tt4a"),i=(n("MQTS"),n("PJh5")),a=n.n(i);e.a={name:"day",props:{date:{default:new Date}},data:function(){return{value:0,fee:"0",day:"",numBlocks:0,blocks:[],nextDay:"",prevDay:"",isBeforeToday:!1}},created:function(){this.asyncFetch()},methods:{asyncFetch:function(){var t=this;n.i(r.a)(a()(this.date).toDate()).then(function(e){var n=e.blocks,r=e.fee,i=e.date,o=(e.input,e.output);t.dateLiteral=a()(t.date).startOf("day").toDate(),t.fee=Math.floor(r/1e8).toLocaleString("USD"),t.value=Math.floor(o/1e8),t.day=a()(i).format("MMM Do YYYY"),t.numBlocks=n.length,t.blocks=n,t.nextDay=a()(t.date).add(1,"days").format("YYYY-MM-DD"),t.prevDay=a()(t.date).subtract(1,"days").format("YYYY-MM-DD"),t.isBeforeToday=t.dateLiteral<a()(new Date).startOf("day").toDate(),new s.a(n)})}}}},uslO:function(t,e,n){function s(t){return n(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="uslO"},"v5/U":function(t,e,n){"use strict";var s=n("BsyC"),r=n("Tt4a");e.a={name:"home",props:["blockhash"],data:function(t){return{block:{hash:"",time:0,prev_block:"",next_block:"",size:0,height:0,relayed_by:"",n_tx:0,bits:0,fee:0,input:0}}},created:function(){this.asyncFetch()},methods:{asyncFetch:function(){var t=this;n.i(r.b)(this.blockhash).then(function(e){t.block=e,n.i(r.c)(t.blockhash).then(function(n){t.block.tx=n,new s.a(e)})})}}}},vG3H:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("b",[t._v("Block:")]),t._v(" "),n("a",{attrs:{href:"https://blockchain.info/block/"+t.block.hash,target:"_blank"}},[t._v(t._s(t.block.hash))]),t._v(" "),n("br"),n("b",[t._v("Time:")]),t._v(" "+t._s(t.block.time)+"\n  "),n("br"),n("b",[t._v("Previous Block:")]),t._v(" "),n("router-link",{attrs:{to:t.block.prev_block}},[t._v(t._s(t.block.prev_block))]),t._v(" "),n("br"),n("b",[t._v("Next Block:")]),t._v(" "),n("router-link",{attrs:{to:t.block.next_block}},[t._v(t._s(t.block.next_block))]),t._v(" "),n("br"),n("b",[t._v("Size:")]),t._v(" "+t._s(t.block.size)+"\n  "),n("br"),n("b",[t._v("Height:")]),t._v(" "+t._s(t.block.height)+"\n  "),n("br"),n("b",[t._v("Number of Transactions: ")]),t._v(" "+t._s(t.block.n_tx)+"\n  "),n("br"),n("b",[t._v("Bits:")]),t._v(" "+t._s(t.block.bits)+"\n  "),n("br"),n("b",[t._v("Fee:")]),t._v(" "+t._s("BTC "+Math.floor(t.block.fee/1e8).toLocaleString("USD"))+"\n  "),n("br"),n("b",[t._v("Value")]),t._v(" "+t._s("BTC "+Math.floor(t.block.output/1e8).toLocaleString("USD"))+"\n")],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},xMVz:function(t,e,n){"use strict";function s(t){n("aL6n")}var r=n("M3y6"),i=n("cbdp"),a=n("VU/8"),o=s,h=a(r.a,i.a,o,"data-v-f9b70326",null);e.a=h.exports}},["NHnr"]);
//# sourceMappingURL=app.054ed5f350580bac0876.js.map