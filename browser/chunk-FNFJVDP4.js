import{$ as E,A as we,B as de,D as B,E as j,F as g,G as s,H as S,I as v,J as he,K as h,L as fe,N as O,O as l,P as u,Q as D,T as Ie,U as Se,V as f,W as Ne,Y as c,_ as Oe,a as m,aa as q,b,ca as ke,da as xe,e as be,f as N,g as Ae,ga as pe,ha as z,ia as Pe,ja as Te,k as Me,la as Be,n as A,o as W,p as ue,q as C,r as I,ra as je,s as Ee,t as ce,ta as Y,u as M,v as V,w as d,wa as me,xa as k,y as T,z as Fe}from"./chunk-EJYITEIO.js";var qe=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(j),s(B))},e.\u0275dir=d({type:e});let t=e;return t})(),St=(()=>{let e=class e extends qe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=de(e)))(o||e)}})(),e.\u0275dir=d({type:e,features:[v]});let t=e;return t})(),ie=new I("NgValueAccessor");var Nt={provide:ie,useExisting:A(()=>ne),multi:!0};function Ot(){let t=pe()?pe().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var kt=new I("CompositionEventMode"),ne=(()=>{let e=class e extends qe{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ot())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(j),s(B),s(kt,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&f("input",function(_){return o._handleInput(_.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(_){return o._compositionEnd(_.target.value)})},features:[E([Nt]),v]});let t=e;return t})();function F(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function ze(t){return t!=null&&typeof t.length=="number"}var re=new I("NgValidators"),oe=new I("NgAsyncValidators"),xt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,U=class{static min(e){return Pt(e)}static max(e){return Tt(e)}static required(e){return Bt(e)}static requiredTrue(e){return jt(e)}static email(e){return Gt(e)}static minLength(e){return Rt(e)}static maxLength(e){return Ut(e)}static pattern(e){return Ht(e)}static nullValidator(e){return Ye(e)}static compose(e){return et(e)}static composeAsync(e){return it(e)}};function Pt(t){return e=>{if(F(e.value)||F(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Tt(t){return e=>{if(F(e.value)||F(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Bt(t){return F(t.value)?{required:!0}:null}function jt(t){return t.value===!0?null:{required:!0}}function Gt(t){return F(t.value)||xt.test(t.value)?null:{email:!0}}function Rt(t){return e=>F(e.value)||!ze(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ut(t){return e=>ze(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ht(t){if(!t)return Ye;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(F(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Ye(t){return null}function Ze(t){return t!=null}function Xe(t){return Se(t)?be(t):t}function Ke(t){let e={};return t.forEach(n=>{e=n!=null?m(m({},e),n):e}),Object.keys(e).length===0?null:e}function Je(t,e){return e.map(n=>n(t))}function Lt(t){return!t.validate}function Qe(t){return t.map(e=>Lt(e)?e:n=>e.validate(n))}function et(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){return Ke(Je(n,e))}}function tt(t){return t!=null?et(Qe(t)):null}function it(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){let i=Je(n,e).map(Xe);return Ae(i).pipe(N(Ke))}}function nt(t){return t!=null?it(Qe(t)):null}function Ge(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function rt(t){return t._rawValidators}function ot(t){return t._rawAsyncValidators}function ge(t){return t?Array.isArray(t)?t:[t]:[]}function X(t,e){return Array.isArray(t)?t.includes(e):t===e}function Re(t,e){let n=ge(e);return ge(t).forEach(r=>{X(n,r)||n.push(r)}),n}function Ue(t,e){return ge(e).filter(n=>!X(t,n))}var K=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=tt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},p=class extends K{get formDirective(){return null}get path(){return null}},H=class extends K{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},$t={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ui=b(m({},$t),{"[class.ng-submitted]":"isSubmitted"}),st=(()=>{let e=class e extends J{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(H,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&fe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[v]});let t=e;return t})(),at=(()=>{let e=class e extends J{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(p,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&fe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[v]});let t=e;return t})();var G="VALID",Z="INVALID",x="PENDING",R="DISABLED";function ve(t){return(se(t)?t.validators:t)||null}function Wt(t){return Array.isArray(t)?tt(t):t||null}function ye(t,e){return(se(e)?e.asyncValidators:t)||null}function qt(t){return Array.isArray(t)?nt(t):t||null}function se(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function lt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new W(1e3,"");if(!i[n])throw new W(1001,"")}function ut(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new W(1002,"")})}var L=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===G}get invalid(){return this.status===Z}get pending(){return this.status==x}get disabled(){return this.status===R}get enabled(){return this.status!==R}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ue(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ue(e,this._rawAsyncValidators))}hasValidator(e){return X(this._rawValidators,e)}hasAsyncValidator(e){return X(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=x,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=R,this.errors=null,this._forEachChild(i=>{i.disable(b(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=G,this._forEachChild(i=>{i.enable(b(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===G||this.status===x)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?R:G}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator=!0;let n=Xe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new S,this.statusChanges=new S}_calculateStatus(){return this._allControlsDisabled()?R:this.errors?Z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(Z)?Z:G}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){se(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Wt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=qt(this._rawAsyncValidators)}},Q=class extends L{constructor(e,n,i){super(ve(n),ye(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){ut(this,!0,e),Object.keys(e).forEach(i=>{lt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ct=new I("CallSetDisabledState",{providedIn:"root",factory:()=>_e}),_e="always";function Ce(t,e){return[...e.path,t]}function He(t,e,n=_e){Ve(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Yt(t,e),Xt(t,e),Zt(t,e),zt(t,e)}function Le(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),te(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function ee(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function zt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Ve(t,e){let n=rt(t);e.validator!==null?t.setValidators(Ge(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=ot(t);e.asyncValidator!==null?t.setAsyncValidators(Ge(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();ee(e._rawValidators,r),ee(e._rawAsyncValidators,r)}function te(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=rt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=ot(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return ee(e._rawValidators,i),ee(e._rawAsyncValidators,i),n}function Yt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&dt(t,e)})}function Zt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&dt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function dt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Xt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Kt(t,e){t==null,Ve(t,e)}function Jt(t,e){return te(t,e)}function Qt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ei(t){return Object.getPrototypeOf(t.constructor)===St}function ti(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ii(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===ne?n=o:ei(o)?i=o:r=o}),r||i||n||null}function ni(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function $e(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function We(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var y=class extends L{constructor(e=null,n,i){super(ve(n),ye(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),se(n)&&(n.nonNullable||n.initialValueIsDefault)&&(We(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){We(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ri=t=>t instanceof y,oi=(()=>{let e=class e extends p{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Ce(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=de(e)))(o||e)}})(),e.\u0275dir=d({type:e,features:[v]});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var si=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=C({});let t=e;return t})();var ft=new I("NgModelWithFormControlWarning");var ai={provide:p,useExisting:A(()=>P)},P=(()=>{let e=class e extends p{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new S,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(te(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return He(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Le(i.control||null,i,!1),ni(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,ti(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Le(r||null,i),ri(o)&&(He(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Kt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Jt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ve(this.form,this),this._oldForm&&te(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(s(re,10),s(oe,10),s(ct,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&f("submit",function(_){return o.onSubmit(_)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[E([ai]),v,T]});let t=e;return t})(),li={provide:p,useExisting:A(()=>pt)},pt=(()=>{let e=class e extends oi{constructor(i,r,o){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(o)}_checkParentType(){mt(this._parent)}};e.\u0275fac=function(r){return new(r||e)(s(p,13),s(re,10),s(oe,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[E([li]),v]});let t=e;return t})(),ui={provide:p,useExisting:A(()=>ae)},ae=(()=>{let e=class e extends p{constructor(i,r,o){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(o)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Ce(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){mt(this._parent)}};e.\u0275fac=function(r){return new(r||e)(s(p,13),s(re,10),s(oe,10))},e.\u0275dir=d({type:e,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[E([ui]),v]});let t=e;return t})();function mt(t){return!(t instanceof pt)&&!(t instanceof P)&&!(t instanceof ae)}var ci={provide:H,useExisting:A(()=>De)},De=(()=>{let e=class e extends H{set isDisabled(i){}constructor(i,r,o,a,_){super(),this._ngModelWarningConfig=_,this._added=!1,this.name=null,this.update=new S,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ii(this,a)}ngOnChanges(i){this._added||this._setUpControl(),Qt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Ce(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(p,13),s(re,10),s(oe,10),s(ie,10),s(ft,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[E([ci]),v,T]});let t=e;return t})();var di=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=C({imports:[si]});let t=e;return t})(),$=class extends L{constructor(e,n,i){super(ve(n),ye(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){ut(this,!1,e),e.forEach((i,r)=>{lt(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var gt=t=>t instanceof $;var vt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ft,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ct,useValue:i.callSetDisabledState??_e}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=C({imports:[di]});let t=e;return t})();var _t=(()=>{class t{constructor(n,i){this.renderer=n,this.elementRef=i,this.onInput=r=>{let o=r?new Date(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()):null,a=o?o.toISOString():null;this.onChange(a)},this.onChange=()=>{},this.onTouched=()=>{}}writeValue(n){let i=n?new Date(n):null,r=i?new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())):null;this.renderer.setProperty(this.elementRef.nativeElement,"valueAsDate",r)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",n)}}return t.\u0275fac=function(n){return new(n||t)(s(j),s(B))},t.\u0275dir=d({type:t,selectors:[["","useValueAsLocalIso",""]],hostBindings:function(n,i){n&1&&f("input",function(o){return i.onInput(o.target.valueAsDate)})("blur",function(){return i.onTouched()})},standalone:!0,features:[E([{provide:ie,useExisting:A(()=>t),multi:!0}])]}),t})();var Vt=(()=>{let e=class e{constructor(i){this.service=i}isbnExists(){return i=>this.service.check(i.value).pipe(N(r=>r?{isbnexists:!0}:null))}};e.\u0275fac=function(r){return new(r||e)(Ee(k))},e.\u0275prov=ue({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Dt=function(t){if(!t.value||typeof t.value!="string")return null;let n=t.value.replace(/-/g,"").length;return n===10||n===13?null:{isbnformat:!0}},bt=function(t){return!gt(t)||t.controls.some(e=>!!e.value)?null:{atleastonevalue:!0}};function fi(t,e){if(t&1&&(l(0,"p",1),c(1),u()),t&2){let n=e.$implicit;g(1),Oe(" ",n,`
`)}}var Mt=(()=>{let e=class e{constructor(i){this.form=i,this.messages={}}get errors(){if(!this.controlName)return[];let i=this.form.control.get(this.controlName);return!i||!i.errors||!i.touched?[]:Object.keys(i.errors).map(r=>this.messages[r])}};e.\u0275fac=function(r){return new(r||e)(s(P))},e.\u0275cmp=M({type:e,selectors:[["bm-form-errors"]],inputs:{controlName:"controlName",messages:"messages"},decls:1,vars:1,consts:[["class","error",4,"ngFor","ngForOf"],[1,"error"]],template:function(r,o){r&1&&O(0,fi,2,1,"p",0),r&2&&h("ngForOf",o.errors)},dependencies:[z]});let t=e;return t})();function mi(t,e){if(t&1&&D(0,"input",20),t&2){let n=e.index;h("formControlName",n),he("aria-label","Author "+n)}}var gi=()=>({required:"Title is required"}),vi=()=>({required:"ISBN is required",isbnformat:"ISBN must have 10 or 13 chars",isbnexists:"ISBN already exists"}),yi=()=>({atleastonevalue:"At least one author required"}),le=(()=>{let e=class e{constructor(){this.submitBook=new S,this.form=new Q({title:new y("",{nonNullable:!0,validators:U.required}),subtitle:new y("",{nonNullable:!0}),isbn:new y("",{nonNullable:!0,validators:[U.required,Dt],asyncValidators:ce(Vt).isbnExists()}),description:new y("",{nonNullable:!0}),published:new y("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new y("",{nonNullable:!0})})}ngOnChanges(){this.book?(this.setFormValues(this.book),this.setEditMode(!0)):this.setEditMode(!1)}setFormValues(i){this.form.patchValue(i),this.form.setControl("authors",this.buildAuthorsArray(i.authors))}setEditMode(i){let r=this.form.controls.isbn;i?r.disable():r.enable()}buildAuthorsArray(i){return new $(i.map(r=>new y(r,{nonNullable:!0})),bt)}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new y("",{nonNullable:!0}))}submitForm(){let i=this.form.getRawValue(),r=i.authors.filter(a=>!!a),o=b(m({},i),{authors:r});this.submitBook.emit(o)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["bm-book-form"]],inputs:{book:"book"},outputs:{submitBook:"submitBook"},features:[T],decls:30,vars:9,consts:[[3,"formGroup","ngSubmit"],["for","title"],["id","title","formControlName","title"],["controlName","title",3,"messages"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["controlName","isbn",3,"messages"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName",4,"ngFor","ngForOf"],["controlName","authors",3,"messages"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"],[3,"formControlName"]],template:function(r,o){r&1&&(l(0,"form",0),f("ngSubmit",function(){return o.submitForm()}),l(1,"label",1),c(2,"Title"),u(),D(3,"input",2)(4,"bm-form-errors",3),l(5,"label",4),c(6,"Subtitle"),u(),D(7,"input",5),l(8,"label",6),c(9,"ISBN"),u(),D(10,"input",7)(11,"bm-form-errors",8),l(12,"label"),c(13,"Authors"),u(),l(14,"button",9),f("click",function(){return o.addAuthorControl()}),c(15," + Author "),u(),l(16,"fieldset",10),O(17,mi,1,2,"input",11),u(),D(18,"bm-form-errors",12),l(19,"label",13),c(20,"Description"),u(),D(21,"textarea",14),l(22,"label",15),c(23,"Published"),u(),D(24,"input",16),l(25,"label",17),c(26,"Thumbnail URL"),u(),D(27,"input",18),l(28,"button",19),c(29," Save "),u()()),r&2&&(h("formGroup",o.form),g(4),h("messages",q(6,gi)),g(7),h("messages",q(7,vi)),g(6),h("ngForOf",o.authors.controls),g(1),h("messages",q(8,yi)),g(10),h("disabled",o.form.invalid))},dependencies:[z,ht,ne,st,at,P,De,ae,_t,Mt]});let t=e;return t})();var Ft=(()=>{let e=class e{constructor(i,r){this.service=i,this.router=r}create(i){this.service.create(i).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)(s(k),s(Y))},e.\u0275cmp=M({type:e,selectors:[["bm-book-create"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(r,o){r&1&&(l(0,"h1"),c(1,"Create Book"),u(),l(2,"bm-book-form",0),f("submitBook",function(_){return o.create(_)}),u())},dependencies:[le]});let t=e;return t})();function Ci(t,e){if(t&1){let n=Ie();l(0,"bm-book-form",1),f("submitBook",function(r){Fe(n);let o=Ne();return we(o.update(r))}),u()}if(t&2){let n=e.ngIf;h("book",n)}}var wt=(()=>{let e=class e{constructor(i,r,o){this.service=i,this.route=r,this.router=o,this.book$=this.route.paramMap.pipe(N(a=>a.get("isbn")),Me(a=>this.service.getSingle(a)))}update(i){this.service.update(i).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)(s(k),s(je),s(Y))},e.\u0275cmp=M({type:e,selectors:[["bm-book-edit"]],decls:4,vars:3,consts:[[3,"book","submitBook",4,"ngIf"],[3,"book","submitBook"]],template:function(r,o){r&1&&(l(0,"h1"),c(1,"Edit Book"),u(),O(2,Ci,1,1,"bm-book-form",0),ke(3,"async")),r&2&&(g(2),h("ngIf",xe(3,1,o.book$)))},dependencies:[Pe,le,Te]});let t=e;return t})();var Vi=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:Ft},{path:"edit/:isbn",component:wt}],It=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=C({imports:[me.forChild(Vi),me]});let t=e;return t})();var En=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=C({imports:[Be,It,vt]});let t=e;return t})();export{En as AdminModule};
