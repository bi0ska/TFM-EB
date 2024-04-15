"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[25166,71786,23110,22486],{7344:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var r=i(47817),s=i(58574),n=i(62268),o=i(44459),a=i(84604),l=i(89289);i(68700),i(18608),i(7390),i(64646),i(21693),i(69764),i(3467),i(29156),i(37085),i(44386),i(3271),i(23110),i(19026),i(94474),i(77639),i(18204),i(54100),i(22486),i(50542),i(52067),i(64033),i(19904),i(72304),i(72124),i(45914),i(24905),i(34970),i(5560),i(33102),i(22649),i(88659),i(76791),i(36238),i(86519),i(30286),i(23723),i(79367);let u=class extends r.ac{constructor(e){super(e),this.type="csv"}load(e){const t=(0,r.H)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>r.ap.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:r.M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await(0,l.p)("CSVSourceWorker",{strategy:(0,s.t)("feature-layers-workers")?"dedicated":"local",signal:e});const t=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=t.locationInfo,this.sourceJSON=t.layerDefinition,this.columnDelimiter=t.columnDelimiter}};(0,r.Z)([(0,r._)()],u.prototype,"type",void 0),(0,r.Z)([(0,r._)()],u.prototype,"url",void 0),(0,r.Z)([(0,r._)()],u.prototype,"delimiter",void 0),(0,r.Z)([(0,r._)()],u.prototype,"fields",void 0),(0,r.Z)([(0,r._)()],u.prototype,"latitudeField",void 0),(0,r.Z)([(0,r._)()],u.prototype,"longitudeField",void 0),(0,r.Z)([(0,r._)()],u.prototype,"spatialReference",void 0),(0,r.Z)([(0,r._)()],u.prototype,"timeInfo",void 0),(0,r.Z)([(0,r._)()],u.prototype,"locationInfo",void 0),(0,r.Z)([(0,r._)()],u.prototype,"sourceJSON",void 0),(0,r.Z)([(0,r._)()],u.prototype,"columnDelimiter",void 0),u=(0,r.Z)([(0,r.a0)("esri.layers.graphics.sources.CSVSource")],u);var c=u;let p=class extends o.k{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=r.O.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get capabilities(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:a.t,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new c({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(n.R.from(e)||this.createQuery()))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(n.R.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(n.R.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(n.R.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,r.Z)([(0,r._)({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],p.prototype,"capabilities",null),(0,r.Z)([(0,r._)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],p.prototype,"delimiter",void 0),(0,r.Z)([(0,r._)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],p.prototype,"editingEnabled",void 0),(0,r.Z)([(0,r._)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],p.prototype,"fields",void 0),(0,r.Z)([(0,r._)({type:Boolean,readOnly:!0})],p.prototype,"isTable",null),(0,r.Z)([(0,r.ab)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],p.prototype,"readWebMapLabelsVisible",null),(0,r.Z)([(0,r._)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],p.prototype,"latitudeField",void 0),(0,r.Z)([(0,r._)({type:["show","hide"]})],p.prototype,"listMode",void 0),(0,r.Z)([(0,r._)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],p.prototype,"locationType",void 0),(0,r.Z)([(0,r._)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],p.prototype,"longitudeField",void 0),(0,r.Z)([(0,r._)({type:["CSV"]})],p.prototype,"operationalLayerType",void 0),(0,r.Z)([(0,r._)()],p.prototype,"outFields",void 0),(0,r.Z)([(0,r._)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],p.prototype,"path",void 0),(0,r.Z)([(0,r._)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],p.prototype,"portalItem",void 0),(0,r.Z)([(0,r._)({json:{read:!1},cast:null,type:c,readOnly:!0})],p.prototype,"source",void 0),(0,r.Z)([(0,r._)({json:{read:!1},value:"csv",readOnly:!0})],p.prototype,"type",void 0),(0,r.Z)([(0,r._)({json:{read:r.de,write:{isRequired:!0,ignoreOrigin:!0,writer:r.aP}}})],p.prototype,"url",null),p=(0,r.Z)([(0,r.a0)("esri.layers.CSVLayer")],p);const d=p},64033:(e,t,i)=>{i.d(t,{a:()=>a,e:()=>s,u:()=>u});var r=i(47817);i(58574);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,r.Z)([(0,r._)({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=(0,r.Z)([(0,r.a0)("esri.layers.mixins.CustomParametersMixin")],t),t},n=new r.aq({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let o=class extends r.ao{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(e,t){t.drawingTool=n.toJSON(e)}writePrototype(e,t){t.prototype=(0,r.aa)((0,r.R)(e),!0)}writeThumbnail(e,t){t.thumbnail=(0,r.aa)((0,r.R)(e))}};(0,r.Z)([(0,r._)({json:{write:!0}})],o.prototype,"name",void 0),(0,r.Z)([(0,r._)({json:{write:!0}})],o.prototype,"description",void 0),(0,r.Z)([(0,r._)({json:{read:n.read,write:n.write}})],o.prototype,"drawingTool",void 0),(0,r.Z)([(0,r.aj)("drawingTool")],o.prototype,"writeDrawingTool",null),(0,r.Z)([(0,r._)({json:{write:!0}})],o.prototype,"prototype",void 0),(0,r.Z)([(0,r.aj)("prototype")],o.prototype,"writePrototype",null),(0,r.Z)([(0,r._)({json:{write:!0}})],o.prototype,"thumbnail",void 0),(0,r.Z)([(0,r.aj)("thumbnail")],o.prototype,"writeThumbnail",null),o=(0,r.Z)([(0,r.a0)("esri.layers.support.FeatureTemplate")],o);var a=o;let l=class extends r.ao{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const i in e)if(e.hasOwnProperty(i)){const s=e[i];switch(s.type){case"range":t[i]=r.c2.fromJSON(s);break;case"codedValue":t[i]=r.c1.fromJSON(s);break;case"inherited":t[i]=r.c0.fromJSON(s)}}return t}writeDomains(e,t){const i={};for(const t in e)e.hasOwnProperty(t)&&(i[t]=e[t]&&e[t].toJSON());(0,r.aa)(i),t.domains=i}readTemplates(e){return e&&e.map((e=>new a(e)))}writeTemplates(e,t){t.templates=e&&e.map((e=>e.toJSON()))}};(0,r.Z)([(0,r._)({json:{write:!0}})],l.prototype,"id",void 0),(0,r.Z)([(0,r._)({json:{write:!0}})],l.prototype,"name",void 0),(0,r.Z)([(0,r._)({json:{write:!0}})],l.prototype,"domains",void 0),(0,r.Z)([(0,r.ab)("domains")],l.prototype,"readDomains",null),(0,r.Z)([(0,r.aj)("domains")],l.prototype,"writeDomains",null),(0,r.Z)([(0,r._)({json:{write:!0}})],l.prototype,"templates",void 0),(0,r.Z)([(0,r.ab)("templates")],l.prototype,"readTemplates",null),(0,r.Z)([(0,r.aj)("templates")],l.prototype,"writeTemplates",null),l=(0,r.Z)([(0,r.a0)("esri.layers.support.FeatureType")],l);var u=l},83132:(e,t,i)=>{function r(e){return"date"===e.type||"esriFieldTypeDate"===e.type}i.d(t,{e:()=>s});class s{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!e)return;const t=[];for(const i of e){const e=i&&i.name;if(e){const s=n(e);this._fieldsMap.set(e,i),this._fieldsMap.set(s,i),t.push(s),r(i)&&(this.dateFields.push(i),this._dateFieldsSet.add(i))}}t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(n(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}function n(e){return e.toLowerCase().trim()}},18204:(e,t,i)=>{i.d(t,{i:()=>n,s:()=>s});var r=i(47817);class s{constructor(e,t,i){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,i,r=0){this._storage.put(this._namespace+e,t,i,r)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,i){this._storage.updateSize(this._namespace+e,t,i)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class n{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new r.b5,this._users=new r.b5}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,i,r){const s=this._db.get(e);if(s&&(this._size-=s.size,this._db.delete(e),s.entry!==t&&this._notifyRemoved(e,s.entry)),i>this._maxSize)return void this._notifyRemoved(e,t);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!i||i<0)return void console.warn("Refusing to cache entry with invalid size "+i);const n=1+Math.max(r,-3)- -3;this._db.set(e,{entry:t,size:i,lifetime:n,lives:n}),this._size+=i,this._checkSizeLimit()}updateSize(e,t,i){const r=this._db.get(e);if(r&&r.entry===t){if(this._size-=r.size,i>this._maxSize)return this._db.delete(e),void this._notifyRemoved(e,t);r.size=i,this._size+=i,this._checkSizeLimit()}}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,r)=>{const s=e.lifetime;i[s]=(i[s]||0)+e.size,this._users.forAll((i=>{const s=i.namespace;if(r.startsWith(s)){const i=t[s]||0;t[s]=i+e.size}}))}));const r={};this._users.forAll((e=>{const i=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const s=t[i]||0;t[i]=s,r[i]=Math.round(100*e.hitRate)+"%"}else r[i]="0%"}));const s=Object.keys(t);s.forEach((e=>t[e]=t[e]/this._size*100)),s.sort(((e,i)=>t[i]-t[e])),s.forEach((i=>e[i]=Math.round(t[i])+"% / "+r[i]));for(let t=i.length-1;t>=0;--t){const r=i[t];r&&(e["Priority "+(t+-3-1)]=Math.round(r/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){this._db.forEach(((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemoved(i,t.entry))}))}clearAll(){this._db.forEach(((e,t)=>this._notifyRemoved(t,e.entry))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(e,t){this._removeFuncs.forAll((i=>{e.startsWith(i[0])&&i[1](t)}))}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db)if(this._db.delete(e),t.lives<=1?(this._size-=t.size,this._notifyRemoved(e,t.entry)):(--t.lives,this._db.set(e,t)),this._size<=.9*this.maxSize)return}}},84604:(e,t,i)=>{i.d(t,{t:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},64646:(e,t,i)=>{i.d(t,{O:()=>y,S:()=>v,d:()=>u,g:()=>m,h:()=>d,m:()=>c,p:()=>l,v:()=>p,w:()=>h,y:()=>f});var r=i(47817);const s=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],n=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),o=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),a=/(.*)\/(\d+)\/?$/i;function l(e){return!!n.test(e)}function u(e){const t=(0,r.j)(e),i=t.path.match(n)||t.path.match(o);if(!i)return null;const[,s,a,l,u]=i,c=a.indexOf("/");return{title:p(-1!==c?a.slice(c+1):a),serverType:l,sublayer:null!=u&&""!==u?parseInt(u,10):null,url:{path:s}}}function c(e){const t=(0,r.j)(e).path.match(a);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function p(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function d(e,t){const i=[];if(e){const t=u(e);(0,r.H)(t)&&t.title&&i.push(t.title)}if(t){const e=p(t);i.push(e)}if(2===i.length){if(-1!==i[0].toLowerCase().indexOf(i[1].toLowerCase()))return i[0];if(-1!==i[1].toLowerCase().indexOf(i[0].toLowerCase()))return i[1]}return i.join(" - ")}function h(e){if(!e)return!1;const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),i=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&i}function f(e,t){return e?(0,r.b1)((0,r.b2)(e,t)):e}function m(e){let{url:t}=e;if(!t)return{url:t};t=(0,r.b2)(t,e.logger);const i=(0,r.j)(t),s=u(i.path);let n;if((0,r.H)(s))null!=s.sublayer&&null==e.layer.layerId&&(n=s.sublayer),t=s.url.path;else if(e.nonStandardUrlAllowed){const e=c(i.path);(0,r.H)(e)&&(t=e.serviceUrl,n=e.sublayerId)}return{url:(0,r.b1)(t),layerId:n}}function y(e,t,i,s,n){(0,r.aP)(t,s,"url",n),s.url&&null!=e.layerId&&(s.url=(0,r.b3)(s.url,i,e.layerId.toString()))}function v(e){if(!e)return!1;const t=e.toLowerCase(),i=-1!==t.indexOf("/services/"),r=-1!==t.indexOf("/mapserver/wmsserver"),s=-1!==t.indexOf("/imageserver/wmsserver"),n=-1!==t.indexOf("/wmsserver");return i&&(r||s||n)}},19026:(e,t,i)=>{i.d(t,{a:()=>c,m:()=>d,y:()=>p});var r=i(47817);const s=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function n(e){return e instanceof r.a1}function o(e){return e instanceof r.ae?Object.keys(e.items):n(e)?(0,r.aI)(e).keys():e?Object.keys(e):[]}function a(e,t){return e instanceof r.ae?e.items[t]:e[t]}function l(e){return e?e.declaredClass:null}function u(e,t){const i=e.diff;if(i&&"function"==typeof i)return i(e,t);const c=o(e),p=o(t);if(0===c.length&&0===p.length)return;if(!c.length||!p.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const d=p.filter((e=>-1===c.indexOf(e))),h=c.filter((e=>-1===p.indexOf(e))),f=c.filter((i=>p.indexOf(i)>-1&&a(e,i)!==a(t,i))).concat(d,h).sort(),m=l(e);if(m&&s.indexOf(m)>-1&&f.length)return{type:"complete",oldValue:e,newValue:t};let y;const v=n(e)&&n(t);for(const s of f){const n=a(e,s),o=a(t,s);let c;(v||"function"!=typeof n&&"function"!=typeof o)&&n!==o&&(null==n&&null==o||(c=i&&i[s]&&"function"==typeof i[s]?i[s](n,o):"object"==typeof n&&"object"==typeof o&&l(n)===l(o)?u(n,o):{type:"complete",oldValue:n,newValue:o},(0,r.H)(c)&&((0,r.H)(y)?y.diff[s]=c:y={type:"partial",diff:{[s]:c}})))}return y}function c(e,t){if((0,r.t)(e))return!1;const i=t.split(".");let s=e;for(const e of i){if("complete"===s.type)return!0;if("partial"!==s.type)return!1;{const t=s.diff[e];if(!t)return!1;s=t}}return!0}function p(e,t){for(const i of t)if(c(e,i))return!0;return!1}function d(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&l(e)!==l(t)?{type:"complete",oldValue:e,newValue:t}:u(e,t)}},29156:(e,t,i)=>{i.d(t,{m:()=>n});var r=i(47817),s=i(69764);const n={inches:(0,s.I)(1,"meters","inches"),feet:(0,s.I)(1,"meters","feet"),"us-feet":(0,s.I)(1,"meters","us-feet"),yards:(0,s.I)(1,"meters","yards"),miles:(0,s.I)(1,"meters","miles"),"nautical-miles":(0,s.I)(1,"meters","nautical-miles"),millimeters:(0,s.I)(1,"meters","millimeters"),centimeters:(0,s.I)(1,"meters","centimeters"),decimeters:(0,s.I)(1,"meters","decimeters"),meters:(0,s.I)(1,"meters","meters"),kilometers:(0,s.I)(1,"meters","kilometers"),"decimal-degrees":1/(0,s.R)(1,"meters",r.aW.radius)}},22486:(e,t,i)=>{i.d(t,{t:()=>s});var r=i(54100);function s(e,t,i){if(!i||!i.features||!i.hasZ)return;const s=(0,r.t)(i.geometryType,t,e.outSpatialReference);if(s)for(const e of i.features)s(e.geometry)}},43961:(e,t,i)=>{function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const i=t||n(e),r=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}i.d(t,{e:()=>s,i:()=>n,l:()=>o,n:()=>r})},23110:(e,t,i)=>{i.d(t,{N:()=>_,U:()=>y,V:()=>h,b:()=>d,d:()=>c,p:()=>u,v:()=>p}),i(58574);var r=i(47817),s=i(29156),n=i(43961);const o=r.S.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),a=new r.an,l=Math.PI,u=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function c(e,t,i){const s="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!s)return;if("esri.renderers.visualVariables.ColorVariable"!==s.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const n="number"==typeof t,a=n?null:t,l=a&&a.attributes;let u=n?t:null;const c=s.field,{ipData:p,hasExpression:d}=s.cache;let h=s.cache.compiledFunc;if(!c&&!d){const e=s.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(d){if(!(0,r.H)(i)||!(0,r.H)(i.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,n=t.getViewInfo(e),l=t.createExecContext(a,n);if(!h){const e=t.createSyntaxTree(s.valueExpression);h=t.createFunction(e),s.cache.compiledFunc=h}u=t.executeFunction(h,l)}else l&&(u=l[c]);const f=s.normalizationField,m=l?parseFloat(l[f]):void 0;if(null!=u&&(!f||n||!isNaN(m)&&0!==m)){isNaN(m)||n||(u/=m);const e=v(u,p);if(e){const t=e[0],n=e[1],o=t===n?s.stops[t].color:r.bu.blendColors(s.stops[t].color,s.stops[n].color,e[2],(0,r.H)(i)?i.color:void 0);return new r.bu(o)}}}function p(e,t,i){const s="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!s)return;if("esri.renderers.visualVariables.OpacityVariable"!==s.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof t,a=n?null:t,l=a&&a.attributes;let u=n?t:null;const c=s.field,{ipData:p,hasExpression:d}=s.cache;let h=s.cache.compiledFunc;if(!c&&!d){const e=s.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof u)if(d){if((0,r.t)(i)||(0,r.t)(i.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,n=t.getViewInfo(e),l=t.createExecContext(a,n);if(!h){const e=t.createSyntaxTree(s.valueExpression);h=t.createFunction(e),s.cache.compiledFunc=h}u=t.executeFunction(h,l)}else l&&(u=l[c]);const f=s.normalizationField,m=l?parseFloat(l[f]):void 0;if(null!=u&&(!f||n||!isNaN(m)&&0!==m)){isNaN(m)||n||(u/=m);const e=v(u,p);if(e){const t=e[0],i=e[1];if(t===i)return s.stops[t].opacity;{const r=s.stops[t].opacity;return r+(s.stops[i].opacity-r)*e[2]}}}}function d(e,t,i){const s="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!s)return;if("esri.renderers.visualVariables.RotationVariable"!==s.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=s.axis||"heading",a="heading"===n&&"arithmetic"===s.rotationType?90:0,l="heading"===n&&"arithmetic"===s.rotationType?-1:1,u="number"==typeof t?null:t,c=u&&u.attributes,p=s.field,{hasExpression:d}=s.cache;let h=s.cache.compiledFunc,f=0;if(!p&&!d)return f;if(d){if((0,r.t)(i)||(0,r.t)(i.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,n=t.getViewInfo(e),a=t.createExecContext(u,n);if(!h){const e=t.createSyntaxTree(s.valueExpression);h=t.createFunction(e),s.cache.compiledFunc=h}f=t.executeFunction(h,a)}else c&&(f=c[p]||0);return f="number"!=typeof f||isNaN(f)?null:a+l*f,f}function h(e,t,i){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.SizeVariable"!==a.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const u=function(e,t,i,n,o){switch(t.transformationType){case"additive":return function(e,t,i,r){return e+(f(t.minSize,i,r)||t.minDataValue)}(e,t,i,n);case"constant":return function(e,t,i){const r=e.stops;let s=r&&r.length&&r[0].size;return null==s&&(s=e.minSize),f(s,t,i)}(t,i,n);case"clamped-linear":return function(e,t,i,s){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),o=f(t.minSize,i,s),a=f(t.maxSize,i,s),u=(0,r.H)(s)?s.shape:void 0;if(e<=t.minDataValue)return o;if(e>=t.maxDataValue)return a;if("area"===t.scaleBy&&u){const e="circle"===u,t=e?l*(o/2)**2:o*o,i=t+n*((e?l*(a/2)**2:a*a)-t);return e?2*Math.sqrt(i/l):Math.sqrt(i)}return o+n*(a-o)}(e,t,i,n);case"proportional":return function(e,t,i,s){const n=(0,r.H)(s)?s.shape:void 0,o=e/t.minDataValue,a=f(t.minSize,i,s),l=f(t.maxSize,i,s);let u=null;return u="circle"===n?2*Math.sqrt(o*(a/2)**2):"square"===n||"diamond"===n||"image"===n?Math.sqrt(o*a**2):o*a,m(u,a,l)}(e,t,i,n);case"stops":return function(e,t,i,r,s){const[n,o,a]=v(e,s);if(n===o)return f(t.stops[n].size,i,r);{const e=f(t.stops[n].size,i,r);return e+(f(t.stops[o].size,i,r)-e)*a}}(e,t,i,n,o);case"real-world-size":return function(e,t,i,n){const o=((0,r.H)(n)&&n.resolution?n.resolution:1)*s.m[t.valueUnit],a=f(t.minSize,i,n),u=f(t.maxSize,i,n),{valueRepresentation:c}=t;let p=null;return p="area"===c?2*Math.sqrt(e/l)/o:"radius"===c||"distance"===c?2*e/o:e/o,m(p,a,u)}(e,t,i,n);case"identity":return e;case"unknown":return null}}(function(e,t,i){const s="number"==typeof t,a=s?null:t,l=a&&a.attributes;let u=s?t:null;const{isScaleDriven:c}=e.cache;let p=e.cache.compiledFunc;if(c){const t=(0,r.H)(i)?i.scale:void 0,s=(0,r.H)(i)?i.view:void 0;u=null==t||"3d"===s?function(e){let t=null,i=null;const r=e.stops;return r?(t=r[0].value,i=r[r.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):t}else if(!s)switch(e.inputValueType){case"expression":{if((0,r.t)(i)||(0,r.t)(i.arcade))return void o.error("Use of arcade expressions requires an arcade context");const t={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},s=i.arcade.arcadeUtils,n=s.getViewInfo(t),l=s.createExecContext(a,n);if(!p){const t=s.createSyntaxTree(e.valueExpression);p=s.createFunction(t),e.cache.compiledFunc=p}u=s.executeFunction(p,l);break}case"field":l&&(u=l[e.field]);break;case"unknown":u=null}if(!(0,n.e)(u))return null;if(s||!e.normalizationField)return u;const d=l?parseFloat(l[e.normalizationField]):null;return(0,n.e)(d)&&0!==d?u/d:null}(a,t,i),a,t,i,a.cache.ipData);return null==u||isNaN(u)?0:u}function f(e,t,i){return null==e?null:(0,n.n)(e)?h(e,t,i):(0,n.e)(e)?e:null}function m(e,t,i){return(0,n.e)(i)&&e>i?i:(0,n.e)(t)&&e<t?t:e}function y(e,t,i){const{isScaleDriven:r}=e.cache;if(!(r&&"3d"===i||t))return null;const s={scale:t,view:i};let n=f(e.minSize,a,s),o=f(e.maxSize,a,s);if(null!=n||null!=o){if(n>o){const e=o;o=n,n=e}return{minSize:n,maxSize:o}}}function v(e,t){if(!t)return;let i=0,r=t.length-1;return t.some(((t,s)=>e<t?(r=s,!0):(i=s,!1))),[i,r,(e-t[i])/(t[r]-t[i])]}function _(e,t,i){const r=["proportional","proportional","proportional"];for(const s of e){const e=s.useSymbolValue?"symbol-value":h(s,t,i);switch(s.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e}}return r}},54100:(e,t,i)=>{i.d(t,{l:()=>a,t:()=>n});var r=i(47817),s=i(69764);function n(e,t,i){if((0,r.t)(t)||(0,r.t)(i)||i.vcsWkid||(0,r.bf)(t,i))return null;const n=(0,s.T)(t)/(0,s.T)(i);if(1===n)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,n);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const i of e.paths)for(const e of i)e.length>2&&(e[2]*=t)}(e,n);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const i of e.rings)for(const e of i)e.length>2&&(e[2]*=t)}(e,n);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const i of e.points)i.length>2&&(i[2]*=t)}(e,n);default:return null}}function o(e,t,i){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=i)}function a(e,t,i){if(!e&&!t||!i)return;const r=(0,s.T)(i);l(e,i,r),l(t,i,r)}function l(e,t,i){if(e)for(const r of e)u(r.geometry,t,i)}function u(e,t,i){if(!e||!e.spatialReference||(0,r.bf)(e.spatialReference,t))return;const n=(0,s.T)(e.spatialReference)/i;if(1!==n)if("x"in e)null!=e.z&&(e.z*=n);else if("rings"in e)o(e,e.rings,n);else if("paths"in e)o(e,e.paths,n);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=n)}}}]);