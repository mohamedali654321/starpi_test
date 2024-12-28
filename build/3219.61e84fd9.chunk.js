"use strict";(self.webpackChunkblog_backend=self.webpackChunkblog_backend||[]).push([[3219],{76539:(A,y,e)=>{e.d(y,{Z:()=>f});var t=e(67294),u=e(86896),n=e(45697),s=e.n(n),M=e(87631),a=e(85018),g=e(67109),i=e(53979),o=e(11047),E=e(29728),l=e(30815),d=e(95428);const c=({onRegenerate:P,idToRegenerate:r,backUrl:I,onError:x})=>{const{formatMessage:K}=(0,u.Z)(),[U,B]=(0,t.useState)(!1),{regenerateData:W,isLoadingConfirmation:k}=(0,d.rW)(I,r,P,x),S=async()=>{W(),B(!1)};return t.createElement(t.Fragment,null,t.createElement(E.z,{startIcon:t.createElement(l.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>B(!0),name:"regenerate"},K({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(M.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(l.Z,null),isConfirmButtonLoading:k,isOpen:U,onToggleDialog:()=>B(!1),onConfirm:S,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};c.defaultProps={onRegenerate(){},onError:void 0},c.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired,backUrl:s().string.isRequired,onError:s().func};const m=c,T=({title:P,token:r,setToken:I,canEditInputs:x,canRegenerate:K,isSubmitting:U,backUrl:B,regenerateUrl:W,onErrorRegenerate:k})=>{const{formatMessage:S}=(0,u.Z)(),$=H=>{I({...r,accessKey:H})};return t.createElement(i.T,{title:r?.name||S(P),primaryAction:x?t.createElement(o.k,{gap:2},K&&r?.id&&t.createElement(m,{backUrl:W,onRegenerate:$,idToRegenerate:r?.id,onError:k}),t.createElement(E.z,{disabled:U,loading:U,startIcon:t.createElement(a.Z,null),type:"submit",size:"S"},S({id:"global.save",defaultMessage:"Save"}))):K&&r?.id&&t.createElement(m,{onRegenerate:$,idToRegenerate:r?.id,backUrl:W}),navigationAction:t.createElement(M.rU,{startIcon:t.createElement(g.Z,null),to:B},S({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};T.propTypes={token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setToken:s().func.isRequired,isSubmitting:s().bool.isRequired,backUrl:s().string.isRequired,title:s().shape({id:s().string,label:s().string}).isRequired,regenerateUrl:s().string.isRequired,onErrorRegenerate:s().func},T.defaultProps={token:void 0,onErrorRegenerate:void 0};const f=T},60401:(A,y,e)=>{e.d(y,{Z:()=>E});var t=e(67294),u=e(45697),n=e.n(u),s=e(86896),M=e(40619),a=e(82562),g=e(75515),i=e(75056);const o=({token:l,errors:d,values:c,onChange:m,isCreating:T})=>{const{formatMessage:f}=(0,s.Z)();return t.createElement(t.Fragment,null,t.createElement(M.P,{name:"lifespan",label:f({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:c.lifespan!==null?c.lifespan:"0",error:d.lifespan?f(d.lifespan?.id?d.lifespan:{id:d.lifespan,defaultMessage:d.lifespan}):null,onChange:P=>{m({target:{name:"lifespan",value:P}})},required:!0,disabled:!T,placeholder:"Select"},t.createElement(a.W,{value:"604800000"},f({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(a.W,{value:"2592000000"},f({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(a.W,{value:"7776000000"},f({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(a.W,{value:"0"},f({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(g.Z,{variant:"pi",textColor:"neutral600"},!T&&`${f({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,i.IX)(l?.createdAt,parseInt(c.lifespan,10))}`))};o.propTypes={errors:n().shape({lifespan:n().string}),onChange:n().func.isRequired,values:n().shape({lifespan:n().oneOfType([n().number,n().string])}).isRequired,isCreating:n().bool.isRequired,token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},o.defaultProps={errors:{},token:{}};const E=o},24122:(A,y,e)=>{e.d(y,{Z:()=>E});var t=e(67294),u=e(86896),n=e(87631),s=e(12028),M=e(65186),a=e(69427),g=e(45697),i=e.n(g);const o=({token:l,tokenType:d})=>{const{formatMessage:c}=(0,u.Z)(),m=(0,n.lm)(),{trackUsage:T}=(0,n.rS)(),{copy:f}=(0,n.VP)(),P=r=>async()=>{await f(r)&&(T.current("didCopyTokenKey",{tokenType:d}),m({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(n.Y_,{endAction:l&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(s.h,{label:c({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:P(l),noBorder:!0,icon:t.createElement(M.Z,null),style:{padding:0,height:"1rem"}})),title:l||c({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:c(l?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(a.Z,null),iconBackground:"neutral100"})};o.defaultProps={token:null},o.propTypes={token:i().string,tokenType:i().string.isRequired};const E=o},40695:(A,y,e)=>{e.d(y,{Z:()=>g});var t=e(67294),u=e(45697),n=e.n(u),s=e(86896),M=e(61467);const a=({errors:i,values:o,onChange:E,canEditInputs:l})=>{const{formatMessage:d}=(0,s.Z)();return t.createElement(M.g,{label:d({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:i.description?d(i.description?.id?i.description:{id:i.description,defaultMessage:i.description}):null,onChange:E,disabled:!l},o.description)};a.propTypes={errors:n().shape({description:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({description:n().string}).isRequired},a.defaultProps={errors:{}};const g=a},61053:(A,y,e)=>{e.d(y,{Z:()=>g});var t=e(67294),u=e(45697),n=e.n(u),s=e(86896),M=e(16364);const a=({errors:i,values:o,onChange:E,canEditInputs:l})=>{const{formatMessage:d}=(0,s.Z)();return t.createElement(M.o,{name:"name",error:i.name?d(i.name?.id?i.name:{id:i.name,defaultMessage:i.name}):null,label:d({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:E,value:o.name,disabled:!l,required:!0})};a.propTypes={errors:n().shape({name:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string}).isRequired},a.defaultProps={errors:{}};const g=a},31065:(A,y,e)=>{e.d(y,{Z:()=>i});var t=e(67294),u=e(45697),n=e.n(u),s=e(86896),M=e(40619),a=e(82562);const g=({name:o,errors:E,values:l,onChange:d,canEditInputs:c,options:m,label:T})=>{const{formatMessage:f}=(0,s.Z)();return t.createElement(M.P,{name:o,label:f({id:T.id,defaultMessage:T.defaultMessage}),value:l&&l[o],error:E[o]?f(E[o]?.id?E[o]:{id:E[o],defaultMessage:E[o]}):null,onChange:d,placeholder:"Select",required:!0,disabled:!c},m&&m.map(({value:P,label:r})=>t.createElement(a.W,{key:P,value:P},f(r))))};g.propTypes={name:n().string,options:n().arrayOf(n().shape({label:n().shape({id:n().string,defaultMessage:n().string}),value:n().string})),errors:n().shape({type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({type:n().string}).isRequired,label:n().shape({id:n().string,defaultMessage:n().string}).isRequired},g.defaultProps={name:"type",errors:{},options:[]};const i=g},47670:(A,y,e)=>{e.d(y,{Z:()=>t,f:()=>u});const t="api-token",u="transfer-token"},75056:(A,y,e)=>{e.d(y,{IX:()=>M,fK:()=>o,mk:()=>l});var t=e(66115),u=e(77349),n=e(51991);const M=(d,c,m="en")=>{if(c&&typeof c=="number"){const T=c/24/60/60/1e3;return(0,t.Z)((0,u.Z)(new Date(d),T),"PPP",{locale:n[m]})}return"Unlimited"};var a=e(87561),g=e(87631);const o=a.Ry().shape({name:a.Z_(g.I0.string).max(100).required(g.I0.required),type:a.Z_(g.I0.string).oneOf(["read-only","full-access","custom"]).required(g.I0.required),description:a.Z_().nullable(),lifespan:a.Rx().integer().min(0).nullable().defined(g.I0.required)}),l=d=>{const c={allActionsIds:[],permissions:[]};return c.permissions=Object.keys(d).map(m=>({apiId:m,label:m.split("::")[1],controllers:Object.keys(d[m].controllers).map(T=>({controller:T,actions:d[m].controllers[T].map(f=>{const P=`${m}.${T}.${f}`;return m.includes("api::")&&c.allActionsIds.push(P),{action:f,actionId:P}}).flat()})).flat()})),c}},53219:(A,y,e)=>{e.d(y,{Z:()=>ne});var t=e(67294),u=e(86896),n=e(14916),s=e(16550),M=e(88767),a=e(87631),g=e(185),i=e(49066),o=e(11047),E=e(19631),l=e(87561);const c=l.Ry().shape({name:l.Z_(a.I0.string).max(100).required(a.I0.required),description:l.Z_().nullable(),lifespan:l.Rx().integer().min(0).nullable().defined(a.I0.required),permissions:l.Z_(a.I0.string).required(a.I0.required)});var m=e(53979),T=e(29728),f=e(85018),P=e(45697),r=e.n(P);const I=({transferTokenName:D})=>{const{formatMessage:h}=(0,u.Z)();return(0,a.go)(),t.createElement(g.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"Transfer Tokens"}),t.createElement(m.T,{primaryAction:t.createElement(T.z,{disabled:!0,startIcon:t.createElement(f.Z,null),type:"button",size:"L"},h({id:"global.save",defaultMessage:"Save"})),title:D||h({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(i.D,null,t.createElement(a.dO,null)))};I.defaultProps={transferTokenName:null},I.propTypes={transferTokenName:r().string};const x=I;var K=e(87751),U=e(41580),B=e(75515),W=e(11276),k=e(74571),S=e(60401),$=e(61053),H=e(40695),b=e(31065);const _=({errors:D,onChange:h,canEditInputs:Z,isCreating:O,values:L,transferToken:v})=>{const{formatMessage:N}=(0,u.Z)(),j=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return t.createElement(U.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(B.Z,{variant:"delta",as:"h2"},N({id:"global.details",defaultMessage:"Details"})),t.createElement(W.r,{gap:5},t.createElement(k.P,{key:"name",col:6,xs:12},t.createElement($.Z,{errors:D,values:L,canEditInputs:Z,onChange:h})),t.createElement(k.P,{key:"description",col:6,xs:12},t.createElement(H.Z,{errors:D,values:L,canEditInputs:Z,onChange:h})),t.createElement(k.P,{key:"lifespan",col:6,xs:12},t.createElement(S.Z,{isCreating:O,errors:D,values:L,onChange:h,token:v})),t.createElement(k.P,{key:"permissions",col:6,xs:12},t.createElement(b.Z,{name:"permissions",values:L,errors:D,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:F=>{h({target:{name:"permissions",value:F}})},options:j,canEditInputs:Z})))))};_.propTypes={errors:r().shape({name:r().string,description:r().string,lifespan:r().string,type:r().string}),onChange:r().func.isRequired,canEditInputs:r().bool.isRequired,values:r().shape({name:r().string,description:r().string,lifespan:r().oneOfType([r().number,r().string]),type:r().string}).isRequired,isCreating:r().bool.isRequired,transferToken:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},_.defaultProps={errors:{},transferToken:{}};const q=_;var w=e(24122),ee=e(76539),z=e(47670);const te="Name already taken",ne=()=>{(0,a.go)();const{formatMessage:D}=(0,u.Z)(),{lockApp:h,unlockApp:Z}=(0,a.o1)(),O=(0,a.lm)(),L=(0,s.k6)(),[v,N]=(0,t.useState)(L.location.state?.transferToken.accessKey?{...L.location.state.transferToken}:null),{trackUsage:j}=(0,a.rS)(),F=(0,t.useRef)(j),{setCurrentStep:se}=(0,a.c1)(),{allowedActions:{canCreate:ae,canUpdate:re,canRegenerate:oe}}=(0,a.ss)(K.Z.settings["transfer-tokens"]),{params:{id:X}}=(0,s.$B)("/settings/transfer-tokens/:id"),{get:ie,post:le,put:de}=(0,a.kY)(),R=X==="create",{formatAPIError:Q}=(0,a.So)();(0,t.useEffect)(()=>{F.current(R?"didAddTokenFromList":"didEditTokenFromList",{tokenType:z.f})},[R]);const{status:ce}=(0,M.useQuery)(["transfer-token",X],async()=>{const{data:{data:p}}=await ie(`/admin/transfer/tokens/${X}`);return N({...p}),p},{enabled:!R&&!v,onError(p){p.response.data.error.details?.code==="INVALID_TOKEN_SALT"?O({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):O({type:"warning",message:Q(p)})}}),ge=async(p,V)=>{F.current(R?"willCreateToken":"willEditToken",{tokenType:z.f}),h();const G=p.lifespan&&parseInt(p.lifespan,10)&&p.lifespan!=="0"?parseInt(p.lifespan,10):null,Y=p.permissions.split("-");try{const{data:{data:C}}=R?await le("/admin/transfer/tokens",{...p,lifespan:G,permissions:Y}):await de(`/admin/transfer/tokens/${X}`,{name:p.name,description:p.description,permissions:Y});Z(),R&&(L.replace(`/settings/transfer-tokens/${C.id}`,{transferToken:C}),se("transferTokens.success")),N({...C}),O({type:"success",message:D(R?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),F.current(R?"didCreateToken":"didEditToken",{type:v?.permissions,tokenType:z.f})}catch(C){const ue=(0,E.Iz)(C.response.data);V.setErrors(ue),C?.response?.data?.error?.message===te?O({type:"warning",message:C.response.data.message||"notification.error.tokennamenotunique"}):C?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?O({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):O({type:"warning",message:C?.response?.data?.message||"notification.error"}),Z()}},J=re&&!R||ae&&R;if(!R&&!v&&ce!=="success")return t.createElement(x,{transferTokenName:v?.name});const pe=p=>{p?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?O({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):O({type:"warning",message:Q(p)})};return t.createElement(g.o,null,t.createElement(a.SL,{name:"Transfer Tokens"}),t.createElement(n.J9,{validationSchema:c,validateOnChange:!1,initialValues:{name:v?.name||"",description:v?.description||"",lifespan:v?.lifespan?v.lifespan.toString():v?.lifespan,permissions:v?.permissions.join("-")},enableReinitialize:!0,onSubmit:(p,V)=>ge(p,V)},({errors:p,handleChange:V,isSubmitting:G,values:Y})=>t.createElement(a.l0,null,t.createElement(ee.Z,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:v,setToken:N,canEditInputs:J,canRegenerate:oe,isSubmitting:G,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:pe}),t.createElement(i.D,null,t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(v?.name)&&t.createElement(w.Z,{token:v?.accessKey,tokenType:z.f}),t.createElement(q,{errors:p,onChange:V,canEditInputs:J,isCreating:R,values:Y,transferToken:v}))))))}}}]);
