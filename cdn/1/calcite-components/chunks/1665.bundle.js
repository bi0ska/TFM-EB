/*! For license information please see 1665.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1665,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},4445:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CalciteInputNumber:()=>s,defineCustomElement:()=>o});var i=n(8878);const s=i.I,o=i.d},9055:(e,t,n)=>{"use strict";n.d(t,{H:()=>g,a:()=>b,c:()=>d,d:()=>h,f:()=>f,r:()=>u,s:()=>l});var i=n(9145),s=n(7210);!function(e){function t(e,t,n){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",n)}"function"!=typeof e.requestSubmit&&(e.requestSubmit=function(e){e?(function(e,n){e instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==e.type||t(TypeError,"The specified element is not a submit button"),e.form==n||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}(e,this),e.click()):((e=document.createElement("input")).type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))})}(HTMLFormElement.prototype);const o="hidden-form-input";function r(e){return"checked"in e}const a=new WeakMap,c=new WeakSet;function l(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function u(e){e.formEl?.reset()}function d(e){const{el:t,value:n}=e,s=f(e);if(!s||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let s=!1;return e.addEventListener(n,(e=>{s=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),s}(s,t))return;e.formEl=s,e.defaultValue=n,r(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||m).bind(e);s.addEventListener("reset",o),a.set(e.el,o),c.add(t)}function f(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function m(){r(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function h(e){const{el:t,formEl:n}=e;if(!n)return;const i=a.get(t);n.removeEventListener("reset",i),a.delete(t),e.formEl=null,c.delete(t)}function b(e,t){e.defaultValue=t}const p=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},v=e=>e.removeEventListener("change",p);function E(e,t,n){const{defaultValue:i,disabled:s,form:o,name:a,required:c}=e;t.defaultValue=i,t.disabled=s,t.name=a,t.required=c,t.tabIndex=-1,o?t.setAttribute("form",o):t.removeAttribute("form"),r(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const g=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:s}=e,{ownerDocument:r}=t,a=t.querySelectorAll(`input[slot="${o}"]`);if(!n||!i)return void a.forEach((e=>{v(e),e.remove()}));const c=Array.isArray(s)?s:[s],l=[],u=new Set;let d;a.forEach((t=>{const n=c.find((e=>e==t.value));null!=n?(u.add(n),E(e,t,n)):l.push(t)})),c.forEach((t=>{if(u.has(t))return;let n=l.pop();n||(n=r.createElement("input"),n.slot=o),d||(d=r.createDocumentFragment()),d.append(n),n.addEventListener("change",p),E(e,n,t)})),d&&t.append(d),l.forEach((e=>{v(e),e.remove()}))}(e),(0,s.h)("slot",{name:o}))},4586:(e,t,n)=>{"use strict";n.d(t,{I:()=>l,d:()=>u});var i=n(7210),s=n(9145),o=n(5545);const r={},a={},c={s:16,m:24,l:32};const l=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:n,scale:o,textLabel:r}=this,a=(0,s.b)(e),l=c[o],u=!!r,d=[].concat(n||"");return(0,i.h)(i.AA,{"aria-hidden":(0,s.t)(!u),"aria-label":u?r:null,role:u?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{"flip-rtl":"rtl"===a&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((e=>"string"==typeof e?(0,i.h)("path",{d:e}):(0,i.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:n}=this;i.Z5.isBrowser&&e&&n&&(this.pathData=await async function({icon:e,scale:t}){const n=c[t],s=function(e){const t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){const t=/[a-z]/i;e=n.map(((e,n)=>e.replace(t,(function(e,t){return 0===n&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(e),o="F"===s.charAt(s.length-1),l=`${o?s.substring(0,s.length-1):s}${n}${o?"F":""}`;if(r[l])return r[l];a[l]||(a[l]=fetch((0,i.K3)(`./assets/icon/${l}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${l}" is not a valid calcite-ui-icon name`),""))));const u=await a[l];return r[l]=u,u}({icon:e,scale:t}))}waitUntilVisible(e){this.intersectionObserver=(0,o.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function u(){"undefined"!=typeof customElements&&["calcite-icon"].forEach((e=>{"calcite-icon"===e&&(customElements.get(e)||customElements.define(e,l))}))}u()},4426:(e,t,n)=>{"use strict";n.d(t,{c:()=>p,d:()=>v,g:()=>s,u:()=>f});var i=n(7210);function s(){if(!i.Z5.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}const o=/firefox/i.test(s()),r=o?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(o&&!r.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const l=["mousedown","mouseup","click"];function u(e){if(o&&!r.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function f(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void m(e);b(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function m(e){var t;e.el.click=a,(t=o?h(e):e.el)&&(t.addEventListener("pointerdown",c,d),l.forEach((e=>t.addEventListener(e,u,d))))}function h(e){return r.get(e.el)}function b(e){var t;delete e.el.click,(t=o?h(e):e.el)&&(t.removeEventListener("pointerdown",c,d),l.forEach((e=>t.removeEventListener(e,u,d))))}function p(e){if(!e.disabled||!o)return;const t=e.el.parentElement||e.el;r.set(e.el,t),m(e)}function v(e){o&&(r.delete(e.el),b(e))}},1629:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,c:()=>h,d:()=>b,g:()=>v,l:()=>o});var i=n(9145);const s="calciteInternalLabelClick",o="calciteInternalLabelConnected",r="calciteInternalLabelDisconnected",a="calcite-label",c=new WeakMap,l=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakSet,m=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${a}[for="${t}"]`});if(n)return n;const s=(0,i.c)(e,a);return!s||function(e,t){let n;const i="custom-element-ancestor-check",s=i=>{i.stopImmediatePropagation();const s=i.composedPath();n=s.slice(s.indexOf(t),s.indexOf(e))};e.addEventListener(i,s,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,s);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(s,e)?null:s};function h(e){const t=m(e.el);if(l.has(t)&&t===e.labelEl||!t&&f.has(e))return;const n=w.bind(e);if(t){e.labelEl=t;const i=c.get(t)||[];i.push(e),c.set(t,i.sort(p)),l.has(e.labelEl)||(l.set(e.labelEl,E),e.labelEl.addEventListener(s,E)),f.delete(e),document.removeEventListener(o,u.get(e)),d.set(e,n),document.addEventListener(r,n)}else f.has(e)||(n(),document.removeEventListener(r,d.get(e)))}function b(e){if(f.delete(e),document.removeEventListener(o,u.get(e)),document.removeEventListener(r,d.get(e)),u.delete(e),d.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,l.get(e.labelEl)),l.delete(e.labelEl)),c.set(e.labelEl,t.filter((t=>t!==e)).sort(p)),e.labelEl=null}function p(e,t){return(0,i.x)(e.el,t.el)?-1:1}function v(e){return e.label||e.labelEl?.textContent?.trim()||""}function E(e){const t=e.detail.sourceEvent.target,n=c.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const s=n[0];s.disabled||s.onLabelClick(e)}function g(){f.has(this)&&h(this)}function w(){f.add(this);const e=u.get(this)||g.bind(this);u.set(this,e),document.addEventListener(o,e)}},6265:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,b:()=>c,c:()=>l,s:()=>a});var i=n(7210);const s=new WeakMap,o=new WeakMap;function r(e){o.set(e,new Promise((t=>s.set(e,t))))}function a(e){s.get(e)()}function c(e){return o.get(e)}async function l(e){if(await c(e),i.Z5.isBrowser)return(0,i.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},3801:(e,t,n)=>{"use strict";n.d(t,{c:()=>d,d:()=>f,s:()=>c,u:()=>u});var i=n(7210),s=n(9417);const o={};function r(){throw new Error("could not fetch component message bundle")}function a(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await l(e,e.effectiveLocale),a(e)}async function l(e,t){if(!i.Z5.isBrowser)return{};const{el:n}=e,a=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return o[n]||(o[n]=fetch((0,i.K3)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||r(),e.json()))).catch((()=>r()))),o[n]}((0,s.g)(t,"t9n"),a)}async function u(e,t){e.defaultMessages=await l(e,t),a(e)}function d(e){e.onMessagesChange=m}function f(e){e.onMessagesChange=void 0}function m(){a(this)}}}]);