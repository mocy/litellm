(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{20661:function(e,t,s){Promise.resolve().then(s.bind(s,38695))},38695:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return eZ}});var n=s(3827),l=s(64090),r=s(47907),a=s(8792),o=s(2179),i=e=>{let{userID:t,userRole:s,userEmail:l}=e;return console.log("User ID:",t),console.log("userEmail:",l),(0,n.jsxs)("nav",{className:"left-0 right-0 top-0 flex justify-between items-center h-12 mb-4",children:[(0,n.jsx)("div",{className:"text-left mx-4 my-2 absolute top-0 left-0",children:(0,n.jsx)("div",{className:"flex flex-col items-center",children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsxs)("button",{className:"text-gray-800 text-2xl px-4 py-1 rounded text-center",children:[(0,n.jsx)("img",{src:"/get_image",width:50,height:50,alt:"LiteLLM Brand",className:"mr-2"}),"LiteLLM"]})})})}),(0,n.jsx)("div",{className:"text-right mx-4 my-2 absolute top-0 right-0",children:(0,n.jsxs)(o.Z,{variant:"secondary",children:[l,(0,n.jsxs)("p",{children:["Role: ",s]}),(0,n.jsxs)("p",{children:["ID: ",t]})]})})]})},c=s(80588);let d=async(e,t,s)=>{try{if(console.log("Form Values in keyCreateCall:",s),s.description&&(s.metadata||(s.metadata={}),s.metadata.description=s.description,delete s.description,s.metadata=JSON.stringify(s.metadata)),s.metadata){console.log("formValues.metadata:",s.metadata);try{s.metadata=JSON.parse(s.metadata)}catch(e){throw c.ZP.error("Failed to parse metadata: "+e),Error("Failed to parse metadata: "+e)}}console.log("Form Values after check:",s);let n=await fetch("/key/generate",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({user_id:t,...s})});if(!n.ok){let e=await n.text();throw c.ZP.error("Failed to create key: "+e),console.error("Error response from the server:",e),Error("Network response was not ok")}let l=await n.json();return console.log("API Response:",l),l}catch(e){throw console.error("Failed to create key:",e),e}},h=async(e,t,s)=>{try{if(console.log("Form Values in keyCreateCall:",s),s.description&&(s.metadata||(s.metadata={}),s.metadata.description=s.description,delete s.description,s.metadata=JSON.stringify(s.metadata)),s.metadata){console.log("formValues.metadata:",s.metadata);try{s.metadata=JSON.parse(s.metadata)}catch(e){throw c.ZP.error("Failed to parse metadata: "+e),Error("Failed to parse metadata: "+e)}}console.log("Form Values after check:",s);let n=await fetch("/user/new",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({user_id:t,...s})});if(!n.ok){let e=await n.text();throw c.ZP.error("Failed to create key: "+e),console.error("Error response from the server:",e),Error("Network response was not ok")}let l=await n.json();return console.log("API Response:",l),l}catch(e){throw console.error("Failed to create key:",e),e}},m=async(e,t)=>{try{console.log("in keyDeleteCall:",t),c.ZP.info("Making key delete request");let s=await fetch("/key/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({keys:[t]})});if(!s.ok){let e=await s.text();throw c.ZP.error("Failed to delete key: "+e),Error("Network response was not ok")}let n=await s.json();return console.log(n),c.ZP.success("API Key Deleted"),n}catch(e){throw console.error("Failed to create key:",e),e}},u=async function(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{let l="/user/info";"App Owner"==s&&t&&(l="".concat(l,"/?user_id=").concat(t)),console.log("in userInfoCall viewAll=",n),n&&(l="".concat(l,"/?view_all=true")),c.ZP.info("Requesting user data");let r=await fetch(l,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!r.ok){let e=await r.text();throw c.ZP.error(e),Error("Network response was not ok")}let a=await r.json();return c.ZP.info("Received user data"),a}catch(e){throw console.error("Failed to create key:",e),e}},x=async(e,t,s)=>{try{c.ZP.info("Requesting model data");let t=await fetch("/v2/model/info",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw c.ZP.error(e),Error("Network response was not ok")}let s=await t.json();return c.ZP.info("Received model data"),s}catch(e){throw console.error("Failed to create key:",e),e}},p=async(e,t)=>{try{let s="/spend/logs";console.log("in keySpendLogsCall:",s);let n=await fetch("".concat(s,"/?api_key=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!n.ok){let e=await n.text();throw c.ZP.error(e),Error("Network response was not ok")}let l=await n.json();return console.log(l),l}catch(e){throw console.error("Failed to create key:",e),e}},j=async(e,t,s,n,l,r)=>{try{let t="/spend/logs";t="App Owner"==s?"".concat(t,"/?user_id=").concat(n,"&start_date=").concat(l,"&end_date=").concat(r):"".concat(t,"/?start_date=").concat(l,"&end_date=").concat(r),c.ZP.info("Making spend logs request");let a=await fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!a.ok){let e=await a.text();throw c.ZP.error(e),Error("Network response was not ok")}let o=await a.json();return console.log(o),c.ZP.success("Spend Logs received"),o}catch(e){throw console.error("Failed to create key:",e),e}},g=async(e,t)=>{try{let s=await fetch("/v2/key/info",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({keys:t})});if(!s.ok){let e=await s.text();throw c.ZP.error(e),Error("Network response was not ok")}let n=await s.json();return console.log(n),n}catch(e){throw console.error("Failed to create key:",e),e}},Z=async(e,t)=>{try{let s="/spend/users";console.log("in spendUsersCall:",s);let n=await fetch("".concat(s,"/?user_id=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!n.ok){let e=await n.text();throw c.ZP.error(e),Error("Network response was not ok")}let l=await n.json();return console.log(l),l}catch(e){throw console.error("Failed to get spend for user",e),e}},y=async(e,t,s,n)=>{try{let l=await fetch("/user/request_model",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({models:[t],user_id:s,justification:n})});if(!l.ok){let e=await l.text();throw c.ZP.error("Failed to delete key: "+e),Error("Network response was not ok")}let r=await l.json();return console.log(r),c.ZP.success(""),r}catch(e){throw console.error("Failed to create key:",e),e}},f=async e=>{try{let t="/user/get_requests";console.log("in userGetRequesedtModelsCall:",t);let s=await fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!s.ok){let e=await s.text();throw c.ZP.error("Failed to delete key: "+e),Error("Network response was not ok")}let n=await s.json();return console.log(n),c.ZP.success(""),n}catch(e){throw console.error("Failed to get requested models:",e),e}};var w=s(10384),k=s(46453),_=s(71801),v=s(13969),b=s(12143),S=s(77171),N=s(29714),I=s(88707),A=s(1861);let{Option:C}=v.default;var T=e=>{let{userID:t,userRole:s,accessToken:r,data:a,userModels:i,setData:h}=e,[m]=b.Z.useForm(),[u,x]=(0,l.useState)(!1),[p,j]=(0,l.useState)(null),g=()=>{x(!1),m.resetFields()},Z=()=>{x(!1),j(null),m.resetFields()},y=async e=>{try{c.ZP.info("Making API Call"),x(!0);let s=await d(r,t,e);h(e=>e?[...e,s]:[s]),j(s.key),c.ZP.success("API Key Created"),m.resetFields(),localStorage.removeItem("userData"+t)}catch(e){console.error("Error creating the key:",e)}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{className:"mx-auto",onClick:()=>x(!0),children:"+ Create New Key"}),(0,n.jsx)(S.Z,{title:"Create Key",visible:u,width:800,footer:null,onOk:g,onCancel:Z,children:(0,n.jsxs)(b.Z,{form:m,onFinish:y,labelCol:{span:8},wrapperCol:{span:16},labelAlign:"left",children:["App Owner"===s||"Admin"===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.Z.Item,{label:"Key Name",name:"key_alias",children:(0,n.jsx)(N.Z,{})}),(0,n.jsx)(b.Z.Item,{label:"Team ID",name:"team_id",children:(0,n.jsx)(N.Z,{placeholder:"ai_team"})}),(0,n.jsx)(b.Z.Item,{label:"Models",name:"models",children:(0,n.jsx)(v.default,{mode:"multiple",placeholder:"Select models",style:{width:"100%"},children:i.map(e=>(0,n.jsx)(C,{value:e,children:e},e))})}),(0,n.jsx)(b.Z.Item,{label:"Max Budget (USD)",name:"max_budget",children:(0,n.jsx)(I.Z,{step:.01,precision:2,width:200})}),(0,n.jsx)(b.Z.Item,{label:"Tokens per minute Limit (TPM)",name:"tpm_limit",children:(0,n.jsx)(I.Z,{step:1,width:400})}),(0,n.jsx)(b.Z.Item,{label:"Requests per minute Limit (RPM)",name:"rpm_limit",children:(0,n.jsx)(I.Z,{step:1,width:400})}),(0,n.jsx)(b.Z.Item,{label:"Duration (eg: 30s, 30h, 30d)",name:"duration",children:(0,n.jsx)(N.Z,{})}),(0,n.jsx)(b.Z.Item,{label:"Metadata",name:"metadata",children:(0,n.jsx)(N.Z.TextArea,{rows:4,placeholder:"Enter metadata as JSON"})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.Z.Item,{label:"Key Name",name:"key_alias",children:(0,n.jsx)(N.Z,{})}),(0,n.jsx)(b.Z.Item,{label:"Team ID (Contact Group)",name:"team_id",children:(0,n.jsx)(N.Z,{placeholder:"ai_team"})}),(0,n.jsx)(b.Z.Item,{label:"Description",name:"description",children:(0,n.jsx)(N.Z.TextArea,{placeholder:"Enter description",rows:4})})]}),(0,n.jsx)("div",{style:{textAlign:"right",marginTop:"10px"},children:(0,n.jsx)(A.ZP,{htmlType:"submit",children:"Create Key"})})]})}),p&&(0,n.jsx)(S.Z,{title:"Save your key",visible:u,onOk:g,onCancel:Z,footer:null,children:(0,n.jsxs)(k.Z,{numItems:1,className:"gap-2 w-full",children:[(0,n.jsx)(w.Z,{numColSpan:1,children:(0,n.jsxs)("p",{children:["Please save this secret key somewhere safe and accessible. For security reasons, ",(0,n.jsx)("b",{children:"you will not be able to view it again"})," ","through your LiteLLM account. If you lose this secret key, you will need to generate a new one."]})}),(0,n.jsx)(w.Z,{numColSpan:1,children:null!=p?(0,n.jsxs)(_.Z,{children:["API Key: ",p]}):(0,n.jsx)(_.Z,{children:"Key being created, this might take 30s"})})]})})]})},P=s(33393),D=s(13810),E=s(61244),O=s(10827),R=s(3851),M=s(2044),F=s(64167),U=s(74480),L=s(7178),q=s(42440),z=s(9853),K=s(67989),B=s(56863),J=e=>{let{token:t,accessToken:s,keySpend:r,keyBudget:a,keyName:i}=e,[c,d]=(0,l.useState)(!1),[h,m]=(0,l.useState)(null),[u,x]=(0,l.useState)(null),j=async()=>{try{if(null==s||null==t)return;console.log("accessToken: ".concat(s,"; token: ").concat(t));let e=await p(s,t);console.log("Response:",e);let n=Object.values(e).reduce((e,t)=>{let s=new Date(t.startTime),n=new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"short"}).format(s);return e[n]=(e[n]||0)+t.spend,e},{}),l=Object.entries(n);l.sort((e,t)=>{let[s]=e,[n]=t,l=new Date(s),r=new Date(n);return l.getTime()-r.getTime()});let r=Object.fromEntries(l);console.log(r);let a=Object.values(e).reduce((e,t)=>{let s=t.user;return e[s]=(e[s]||0)+t.spend,e},{});console.log(n),console.log(a);let o=[];for(let[e,t]of Object.entries(r))o.push({day:e,spend:t});let i=Object.entries(a).sort((e,t)=>t[1]-e[1]).slice(0,5).map(e=>{let[t,s]=e;return{name:t,value:s}});m(o),x(i),console.log("arrayBarChart:",o)}catch(e){console.error("There was an error fetching the data",e)}};return t?(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{className:"mx-auto",onClick:()=>{console.log("Show Modal triggered"),d(!0),j()},children:"View Spend Report"}),(0,n.jsxs)(S.Z,{visible:c,width:1e3,onOk:()=>{d(!1)},onCancel:()=>{d(!1)},footer:null,children:[(0,n.jsxs)(q.Z,{style:{textAlign:"left"},children:["Key Name: ",i]}),(0,n.jsxs)(B.Z,{children:["Monthly Spend $",r]}),(0,n.jsx)(D.Z,{className:"mt-6 mb-6",children:h&&(0,n.jsx)(z.Z,{className:"mt-6",data:h,colors:["green"],index:"day",categories:["spend"],yAxisWidth:48})}),(0,n.jsx)(q.Z,{className:"mt-6",children:"Top 5 Users Spend (USD)"}),(0,n.jsx)(D.Z,{className:"mb-6",children:u&&(0,n.jsx)(K.Z,{className:"mt-6",data:u,color:"teal"})})]})]}):null},G=e=>{let{userID:t,accessToken:s,data:r,setData:a}=e,[i,c]=(0,l.useState)(!1),[d,h]=(0,l.useState)(!1),[u,x]=(0,l.useState)(null),p=async e=>{null!=r&&(x(e),localStorage.removeItem("userData"+t),h(!0))},j=async()=>{if(null!=u&&null!=r){try{await m(s,u);let e=r.filter(e=>e.token!==u);a(e)}catch(e){console.error("Error deleting the key:",e)}h(!1),x(null)}};if(null!=r)return console.log("RERENDER TRIGGERED"),(0,n.jsxs)(D.Z,{className:"w-full mx-auto flex-auto overflow-y-auto max-h-[50vh] mb-4",children:[(0,n.jsx)(q.Z,{children:"API Keys"}),(0,n.jsxs)(O.Z,{className:"mt-5",children:[(0,n.jsx)(F.Z,{children:(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(U.Z,{children:"Key Alias"}),(0,n.jsx)(U.Z,{children:"Secret Key"}),(0,n.jsx)(U.Z,{children:"Spend (USD)"}),(0,n.jsx)(U.Z,{children:"Key Budget (USD)"}),(0,n.jsx)(U.Z,{children:"Team ID"}),(0,n.jsx)(U.Z,{children:"Metadata"}),(0,n.jsx)(U.Z,{children:"Models"}),(0,n.jsx)(U.Z,{children:"TPM / RPM Limits"}),(0,n.jsx)(U.Z,{children:"Expires"})]})}),(0,n.jsx)(R.Z,{children:r.map(e=>(console.log(e),"litellm-dashboard"===e.team_id)?null:(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(M.Z,{children:null!=e.key_alias?(0,n.jsx)(_.Z,{children:e.key_alias}):(0,n.jsx)(_.Z,{children:"Not Set"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(_.Z,{children:e.key_name})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(_.Z,{children:e.spend})}),(0,n.jsx)(M.Z,{children:null!=e.max_budget?(0,n.jsx)(_.Z,{children:e.max_budget}):(0,n.jsx)(_.Z,{children:"Unlimited Budget"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(_.Z,{children:e.team_id})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(_.Z,{children:JSON.stringify(e.metadata)})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(_.Z,{children:JSON.stringify(e.models)})}),(0,n.jsx)(M.Z,{children:(0,n.jsxs)(_.Z,{children:["TPM Limit: ",e.tpm_limit?e.tpm_limit:"Unlimited"," ",(0,n.jsx)("br",{})," RPM Limit:"," ",e.rpm_limit?e.rpm_limit:"Unlimited"]})}),(0,n.jsx)(M.Z,{children:null!=e.expires?(0,n.jsx)(_.Z,{children:e.expires}):(0,n.jsx)(_.Z,{children:"Never expires"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(E.Z,{onClick:()=>p(e.token),icon:P.Z,size:"sm"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(J,{token:e.token,accessToken:s,keySpend:e.spend,keyBudget:e.max_budget,keyName:e.key_name})})]},e.token))})]}),d&&(0,n.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,n.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,n.jsx)("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:(0,n.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),(0,n.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,n.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,n.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,n.jsx)("div",{className:"sm:flex sm:items-start",children:(0,n.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,n.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Delete Key"}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this key ?"})})]})})}),(0,n.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[(0,n.jsx)(o.Z,{onClick:j,color:"red",className:"ml-2",children:"Delete"}),(0,n.jsx)(o.Z,{onClick:()=>{h(!1),x(null)},children:"Cancel"})]})]})]})})]})},V=e=>{let{userID:t,userSpendData:s,userRole:r,accessToken:a}=e;console.log("User SpendData:",s);let[o,i]=(0,l.useState)(null==s?void 0:s.spend),[c,d]=(0,l.useState)((null==s?void 0:s.max_budget)||null);return(0,l.useEffect)(()=>{(async()=>{if("Admin"===r)try{let e=await Z(a,"litellm-proxy-budget");console.log("Result from callSpendUsers:",e);let t=e[0];i(null==t?void 0:t.spend),d((null==t?void 0:t.max_budget)||null)}catch(e){console.error("Failed to get spend for user",e)}})()},[r,a,t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(D.Z,{className:"mx-auto mb-4",children:[(0,n.jsxs)(B.Z,{children:["$",o]}),(0,n.jsxs)(q.Z,{children:["/ ",null!==c?"$".concat(c," limit"):"No limit"]})]})})},$=s(37963);console.log("isLocal:",!1);var Y=e=>{let{userID:t,userRole:s,setUserRole:a,userEmail:o,setUserEmail:i}=e,[c,d]=(0,l.useState)(null),[h,m]=(0,l.useState)(null),p=(0,r.useSearchParams)();p.get("viewSpend"),(0,r.useRouter)();let j=p.get("token"),[g,Z]=(0,l.useState)(null),[y,f]=(0,l.useState)([]);if(window.addEventListener("beforeunload",function(){sessionStorage.clear()}),(0,l.useEffect)(()=>{if(j){let e=(0,$.o)(j);if(e){if(console.log("Decoded token:",e),console.log("Decoded key:",e.key),Z(e.key),e.user_role){let t=function(e){if(!e)return"Undefined Role";switch(console.log("Received user role: ".concat(e)),e.toLowerCase()){case"app_owner":case"demo_app_owner":return"App Owner";case"app_admin":return"Admin";case"app_user":return"App User";default:return"Unknown Role"}}(e.user_role);console.log("Decoded user_role:",t),a(t)}else console.log("User role not defined");e.user_email?i(e.user_email):console.log("User Email is not set ".concat(e))}}if(t&&g&&s&&!c){let e=sessionStorage.getItem("userModels"+t);e?f(JSON.parse(e)):(async()=>{try{let e=await u(g,t,s);m(e.user_info),d(e.keys),sessionStorage.setItem("userData"+t,JSON.stringify(e.keys)),sessionStorage.setItem("userSpendData"+t,JSON.stringify(e.user_info));let n=await x(g,t,s);console.log("model_info:",n);let l=n.data.filter(e=>!0===e.user_access).map(e=>e.model_name);console.log("available_model_names:",l),f(l),console.log("userModels:",y),sessionStorage.setItem("userModels"+t,JSON.stringify(l))}catch(e){console.error("There was an error fetching the data",e)}})()}},[t,j,g,c,s]),null==t||null==j){let e="/sso/key/generate";return console.log("Full URL:",e),window.location.href=e,null}return null==g?null:(null==s&&a("App Owner"),(0,n.jsx)("div",{children:(0,n.jsx)(k.Z,{numItems:1,className:"gap-0 p-10 h-[75vh] w-full",children:(0,n.jsxs)(w.Z,{numColSpan:1,children:[(0,n.jsx)(V,{userID:t,userSpendData:h,userRole:s,accessToken:g}),(0,n.jsx)(G,{userID:t,accessToken:g,data:c,setData:d}),(0,n.jsx)(T,{userID:t,userRole:s,userModels:y,accessToken:g,data:c,setData:d})]})})}))},W=s(5);let{Option:H}=v.default;var X=e=>{let{userModels:t,accessToken:s,userID:r}=e,[a]=b.Z.useForm(),[i,d]=(0,l.useState)(!1),h=async e=>{try{c.ZP.info("Requesting access");let{selectedModel:t,accessReason:n}=e;await y(s,t,r,n),d(!0)}catch(e){console.error("Error requesting access:",e)}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{size:"xs",onClick:()=>d(!0),children:"Request Access"}),(0,n.jsx)(S.Z,{title:"Request Access",visible:i,width:800,footer:null,onOk:()=>{d(!1),a.resetFields()},onCancel:()=>{d(!1),a.resetFields()},children:(0,n.jsxs)(b.Z,{form:a,onFinish:h,labelCol:{span:8},wrapperCol:{span:16},labelAlign:"left",children:[(0,n.jsx)(b.Z.Item,{label:"Select Model",name:"selectedModel",children:(0,n.jsx)(v.default,{placeholder:"Select model",style:{width:"100%"},children:t.map(e=>(0,n.jsx)(H,{value:e,children:e},e))})}),(0,n.jsx)(b.Z.Item,{label:"Reason for Access",name:"accessReason",children:(0,n.jsx)(N.Z.TextArea,{rows:4,placeholder:"Enter reason for access"})}),(0,n.jsx)("div",{style:{textAlign:"right",marginTop:"10px"},children:(0,n.jsx)(o.Z,{children:"Request Access"})})]})})]})},Q=e=>{let{accessToken:t,token:s,userRole:r,userID:a}=e,[i,c]=(0,l.useState)({data:[]}),[d,h]=(0,l.useState)([]);if((0,l.useEffect)(()=>{if(!t||!s||!r||!a)return;let e=async()=>{try{let e=await x(t,a,r);if(console.log("Model data response:",e.data),c(e),"Admin"===r&&t){let e=await f(t);console.log("Pending Requests:",d),h(e.requests||[])}}catch(e){console.error("There was an error fetching the model data",e)}};t&&s&&r&&a&&e()},[t,s,r,a]),!i||!t||!s||!r||!a)return(0,n.jsx)("div",{children:"Loading..."});let m=[];for(let e=0;e<i.data.length;e++){var u;let t=i.data[e],s=null==t?void 0:null===(u=t.litellm_params)||void 0===u?void 0:u.model,n=null==t?void 0:t.model_info,l="openai",r="",a="Undefined",o="Undefined",c="Undefined";if(s){let e=s.split("/"),t=e[0];r=1===e.length?l:t}else r=l;n&&(a=null==n?void 0:n.input_cost_per_token,o=null==n?void 0:n.output_cost_per_token,c=null==n?void 0:n.max_tokens),i.data[e].provider=r,i.data[e].input_cost=a,i.data[e].output_cost=o,i.data[e].max_tokens=c,m.push(t.model_name),console.log(i.data[e])}return(0,n.jsx)("div",{style:{width:"100%"},children:(0,n.jsxs)(k.Z,{className:"gap-2 p-10 h-[75vh] w-full",children:[(0,n.jsx)(D.Z,{children:(0,n.jsxs)(O.Z,{className:"mt-5",children:[(0,n.jsx)(F.Z,{children:(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Model Name "})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Provider"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Access"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Input Price per token ($)"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Output Price per token ($)"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Max Tokens"})})]})}),(0,n.jsx)(R.Z,{children:i.data.map(e=>(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:e.model_name})}),(0,n.jsx)(M.Z,{children:e.provider}),(0,n.jsx)(M.Z,{children:e.user_access?(0,n.jsx)(W.Z,{color:"green",children:"Yes"}):(0,n.jsx)(X,{userModels:m,accessToken:t,userID:a})}),(0,n.jsx)(M.Z,{children:e.input_cost}),(0,n.jsx)(M.Z,{children:e.output_cost}),(0,n.jsx)(M.Z,{children:e.max_tokens})]},e.model_name))})]})}),"Admin"===r&&d&&d.length>0?(0,n.jsx)(D.Z,{children:(0,n.jsxs)(O.Z,{children:[(0,n.jsxs)(F.Z,{children:[(0,n.jsx)(q.Z,{children:"Pending Requests"}),(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"User ID"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Requested Models"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Justification"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Justification"})})]})]}),(0,n.jsx)(R.Z,{children:d.map(e=>(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(M.Z,{children:(0,n.jsx)("p",{children:e.user_id})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)("p",{children:e.models[0]})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)("p",{children:e.justification})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)("p",{children:e.user_id})}),(0,n.jsx)(o.Z,{children:"Approve"}),(0,n.jsx)(o.Z,{variant:"secondary",className:"ml-2",children:"Deny"})]},e.request_id))})]})}):null]})})};let{Option:ee}=v.default;var et=e=>{let{userID:t,accessToken:s}=e,[r]=b.Z.useForm(),[a,i]=(0,l.useState)(!1),[d,m]=(0,l.useState)(null),[u,p]=(0,l.useState)([]);(0,l.useEffect)(()=>{(async()=>{try{let e=await x(s,t,"any"),n=[];for(let t=0;t<e.data.length;t++){let s=e.data[t];n.push(s.model_name)}console.log("Model data response:",e.data),console.log("Available models:",n),p(n)}catch(e){console.error("Error fetching model data:",e)}})()},[]);let j=()=>{i(!1),r.resetFields()},g=()=>{i(!1),m(null),r.resetFields()},Z=async e=>{try{c.ZP.info("Making API Call"),i(!0),console.log("formValues in create user:",e);let n=await h(s,t,e);console.log("user create Response:",n),m(n.key),c.ZP.success("API user Created"),r.resetFields(),localStorage.removeItem("userData"+t)}catch(e){console.error("Error creating the user:",e)}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{className:"mx-auto",onClick:()=>i(!0),children:"+ Create New User"}),(0,n.jsx)(S.Z,{title:"Create User",visible:a,width:800,footer:null,onOk:j,onCancel:g,children:(0,n.jsxs)(b.Z,{form:r,onFinish:Z,labelCol:{span:8},wrapperCol:{span:16},labelAlign:"left",children:[(0,n.jsx)(b.Z.Item,{label:"User ID",name:"user_id",children:(0,n.jsx)(N.Z,{placeholder:"Enter User ID"})}),(0,n.jsx)(b.Z.Item,{label:"Team ID",name:"team_id",children:(0,n.jsx)(N.Z,{placeholder:"ai_team"})}),(0,n.jsx)(b.Z.Item,{label:"Models",name:"models",children:(0,n.jsx)(v.default,{mode:"multiple",placeholder:"Select models",style:{width:"100%"},children:u.map(e=>(0,n.jsx)(ee,{value:e,children:e},e))})}),(0,n.jsx)(b.Z.Item,{label:"Max Budget (USD)",name:"max_budget",children:(0,n.jsx)(I.Z,{step:.01,precision:2,width:200})}),(0,n.jsx)(b.Z.Item,{label:"Tokens per minute Limit (TPM)",name:"tpm_limit",children:(0,n.jsx)(I.Z,{step:1,width:400})}),(0,n.jsx)(b.Z.Item,{label:"Requests per minute Limit (RPM)",name:"rpm_limit",children:(0,n.jsx)(I.Z,{step:1,width:400})}),(0,n.jsx)(b.Z.Item,{label:"Duration (eg: 30s, 30h, 30d)",name:"duration",children:(0,n.jsx)(N.Z,{})}),(0,n.jsx)(b.Z.Item,{label:"Metadata",name:"metadata",children:(0,n.jsx)(N.Z.TextArea,{rows:4,placeholder:"Enter metadata as JSON"})}),(0,n.jsx)("div",{style:{textAlign:"right",marginTop:"10px"},children:(0,n.jsx)(A.ZP,{htmlType:"submit",children:"Create User"})})]})}),d&&(0,n.jsxs)(S.Z,{title:"Save Your User",visible:a,onOk:j,onCancel:g,footer:null,children:[(0,n.jsxs)("p",{children:["Please save this secret user somewhere safe and accessible. For security reasons, ",(0,n.jsx)("b",{children:"you will not be able to view it again"})," through your LiteLLM account. If you lose this secret user, you will need to generate a new one."]}),(0,n.jsx)("p",{children:null!=d?"API user: ".concat(d):"User being created, this might take 30s"})]})]})},es=e=>{let{accessToken:t,token:s,userRole:r,userID:a}=e,[o,i]=(0,l.useState)(null),[c,d]=(0,l.useState)([]);return((0,l.useEffect)(()=>{if(!t||!s||!r||!a)return;let e=async()=>{try{let e=await u(t,null,r,!0);console.log("user data response:",e),i(e)}catch(e){console.error("There was an error fetching the model data",e)}};t&&s&&r&&a&&e()},[t,s,r,a]),o&&t&&s&&r&&a)?(0,n.jsx)("div",{style:{width:"100%"},children:(0,n.jsxs)(k.Z,{className:"gap-2 p-10 h-[75vh] w-full",children:[(0,n.jsx)(et,{userID:a,accessToken:t}),(0,n.jsx)(D.Z,{children:(0,n.jsxs)(O.Z,{className:"mt-5",children:[(0,n.jsx)(F.Z,{children:(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"User ID "})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"User Role"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"User Models"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"User Spend ($ USD)"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"User Max Budget  ($ USD)"})})]})}),(0,n.jsx)(R.Z,{children:o.map(e=>(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:e.user_id})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:e.user_role?e.user_role:"app_user"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:e.models&&e.models.length>0?e.models:"All Models"})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:e.spend?e.spend:0})}),(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:e.max_budget?e.max_budget:"Unlimited"})})]},e.user_id))})]})})]})}):(0,n.jsx)("div",{children:"Loading..."})},en=s(92836),el=s(26734),er=s(41608),ea=s(32126),eo=s(23682),ei=s(12968),ec=s(67951);async function ed(e,t,s,n){console.log("isLocal:",!1);let l=window.location.origin,r=new ei.ZP.OpenAI({apiKey:n,baseURL:l,dangerouslyAllowBrowser:!0});for await(let n of(await r.chat.completions.create({model:s,stream:!0,messages:[{role:"user",content:e}]})))console.log(n),n.choices[0].delta.content&&t(n.choices[0].delta.content)}var eh=e=>{let{accessToken:t,token:s,userRole:r,userID:a}=e,[o,i]=(0,l.useState)(""),[c,d]=(0,l.useState)([]),[h,m]=(0,l.useState)(void 0),[u,p]=(0,l.useState)(null);(0,l.useEffect)(()=>{t&&s&&r&&a&&(async()=>{let e=await x(t,a,r);console.log("model_info:",e),(null==e?void 0:e.data.length)>0&&(p(e),m(e.data[0].model_name))})()},[t,a,r]);let j=(e,t)=>{d(s=>{let n=s[s.length-1];return n&&n.role===e?[...s.slice(0,s.length-1),{role:e,content:n.content+t}]:[...s,{role:e,content:t}]})},g=async()=>{if(""!==o.trim()&&t&&s&&r&&a){d(e=>[...e,{role:"user",content:o}]);try{h&&await ed(o,e=>j("assistant",e),h,t)}catch(e){console.error("Error fetching model response",e),j("assistant","Error fetching model response")}i("")}};return(0,n.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,n.jsx)(k.Z,{className:"gap-2 p-10 h-[75vh] w-full",children:(0,n.jsx)(D.Z,{children:(0,n.jsxs)(el.Z,{children:[(0,n.jsxs)(er.Z,{className:"mt-4",children:[(0,n.jsx)(en.Z,{children:"Chat"}),(0,n.jsx)(en.Z,{children:"API Reference"})]}),(0,n.jsxs)(eo.Z,{children:[(0,n.jsxs)(ea.Z,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{children:"Select Model:"}),(0,n.jsx)("select",{value:h||"",onChange:e=>m(e.target.value),children:null==u?void 0:u.data.map(e=>(0,n.jsx)("option",{value:e.model_name,children:e.model_name},e.model_name))})]}),(0,n.jsxs)(O.Z,{className:"mt-5",style:{display:"block",maxHeight:"60vh",overflowY:"auto"},children:[(0,n.jsx)(F.Z,{children:(0,n.jsx)(L.Z,{children:(0,n.jsx)(M.Z,{children:(0,n.jsx)(q.Z,{children:"Chat"})})})}),(0,n.jsx)(R.Z,{children:c.map((e,t)=>(0,n.jsx)(L.Z,{children:(0,n.jsx)(M.Z,{children:"".concat(e.role,": ").concat(e.content)})},t))})]}),(0,n.jsx)("div",{className:"mt-3",style:{position:"absolute",bottom:5,width:"95%"},children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{type:"text",value:o,onChange:e=>i(e.target.value),className:"flex-1 p-2 border rounded-md mr-2",placeholder:"Type your message..."}),(0,n.jsx)("button",{onClick:g,className:"p-2 bg-blue-500 text-white rounded-md",children:"Send"})]})})]}),(0,n.jsx)(ea.Z,{children:(0,n.jsxs)(el.Z,{children:[(0,n.jsxs)(er.Z,{children:[(0,n.jsx)(en.Z,{children:"OpenAI Python SDK"}),(0,n.jsx)(en.Z,{children:"LlamaIndex"}),(0,n.jsx)(en.Z,{children:"Langchain Py"})]}),(0,n.jsxs)(eo.Z,{children:[(0,n.jsx)(ea.Z,{children:(0,n.jsx)(ec.Z,{language:"python",children:'\nimport openai\nclient = openai.OpenAI(\n    api_key="your_api_key",\n    base_url="http://0.0.0.0:4000" # proxy base url\n)\n\nresponse = client.chat.completions.create(\n    model="gpt-3.5-turbo", # model to use from Models Tab\n    messages = [\n        {\n            "role": "user",\n            "content": "this is a test request, write a short poem"\n        }\n    ],\n    extra_body={\n        "metadata": {\n            "generation_name": "ishaan-generation-openai-client",\n            "generation_id": "openai-client-gen-id22",\n            "trace_id": "openai-client-trace-id22",\n            "trace_user_id": "openai-client-user-id2"\n        }\n    }\n)\n\nprint(response)\n            '})}),(0,n.jsx)(ea.Z,{children:(0,n.jsx)(ec.Z,{language:"python",children:'\nimport os, dotenv\n\nfrom llama_index.llms import AzureOpenAI\nfrom llama_index.embeddings import AzureOpenAIEmbedding\nfrom llama_index import VectorStoreIndex, SimpleDirectoryReader, ServiceContext\n\nllm = AzureOpenAI(\n    engine="azure-gpt-3.5",               # model_name on litellm proxy\n    temperature=0.0,\n    azure_endpoint="http://0.0.0.0:4000", # litellm proxy endpoint\n    api_key="sk-1234",                    # litellm proxy API Key\n    api_version="2023-07-01-preview",\n)\n\nembed_model = AzureOpenAIEmbedding(\n    deployment_name="azure-embedding-model",\n    azure_endpoint="http://0.0.0.0:4000",\n    api_key="sk-1234",\n    api_version="2023-07-01-preview",\n)\n\n\ndocuments = SimpleDirectoryReader("llama_index_data").load_data()\nservice_context = ServiceContext.from_defaults(llm=llm, embed_model=embed_model)\nindex = VectorStoreIndex.from_documents(documents, service_context=service_context)\n\nquery_engine = index.as_query_engine()\nresponse = query_engine.query("What did the author do growing up?")\nprint(response)\n\n            '})}),(0,n.jsx)(ea.Z,{children:(0,n.jsx)(ec.Z,{language:"python",children:'\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.prompts.chat import (\n    ChatPromptTemplate,\n    HumanMessagePromptTemplate,\n    SystemMessagePromptTemplate,\n)\nfrom langchain.schema import HumanMessage, SystemMessage\n\nchat = ChatOpenAI(\n    openai_api_base="http://0.0.0.0:8000",\n    model = "gpt-3.5-turbo",\n    temperature=0.1,\n    extra_body={\n        "metadata": {\n            "generation_name": "ishaan-generation-langchain-client",\n            "generation_id": "langchain-client-gen-id22",\n            "trace_id": "langchain-client-trace-id22",\n            "trace_user_id": "langchain-client-user-id2"\n        }\n    }\n)\n\nmessages = [\n    SystemMessage(\n        content="You are a helpful assistant that im using to make a test request to."\n    ),\n    HumanMessage(\n        content="test from litellm. tell me why it\'s amazing in 1 sentence"\n    ),\n]\nresponse = chat(messages)\n\nprint(response)\n\n            '})})]})]})})]})]})})})})},em=s(33509),eu=s(30569);let{Sider:ex}=em.default;var ep=e=>{let{setPage:t,userRole:s}=e;return(0,n.jsx)(em.default,{style:{minHeight:"100vh",maxWidth:"120px"},children:(0,n.jsx)(ex,{width:120,children:(0,n.jsxs)(eu.Z,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%",borderRight:0},children:[(0,n.jsx)(eu.Z.Item,{onClick:()=>t("api-keys"),children:"API Keys"},"1"),(0,n.jsx)(eu.Z.Item,{onClick:()=>t("models"),children:"Models"},"2"),(0,n.jsx)(eu.Z.Item,{onClick:()=>t("llm-playground"),children:"Chat UI"},"3"),(0,n.jsx)(eu.Z.Item,{onClick:()=>t("usage"),children:"Usage"},"4"),"Admin"==s?(0,n.jsx)(eu.Z.Item,{onClick:()=>t("users"),children:"Users"},"5"):null]})})})};let ej=e=>{let{payload:t,active:s}=e;if(!s||!t)return null;let l=t[0].payload,r=l.startTime,a=Object.entries(l.models).map(e=>{let[t,s]=e;return[t,s]});a.sort((e,t)=>t[1]-e[1]);let o=a.slice(0,5);return(0,n.jsxs)("div",{className:"w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown",children:[r,o.map(e=>{let[t,s]=e;return(0,n.jsx)("div",{className:"flex flex-1 space-x-10",children:(0,n.jsx)("div",{className:"p-2",children:(0,n.jsxs)("p",{className:"text-tremor-content text-xs",children:[t,":",(0,n.jsxs)("span",{className:"text-xs text-tremor-content-emphasis",children:[" ",s?s<.01?"<$0.01":s.toFixed(2):""]})]})})},t)})]})};var eg=e=>{let{accessToken:t,token:s,userRole:r,userID:a}=e,o=new Date,[i,c]=(0,l.useState)([]),[d,h]=(0,l.useState)([]),[m,u]=(0,l.useState)([]),x=new Date(o.getFullYear(),o.getMonth(),1),p=new Date(o.getFullYear(),o.getMonth()+1,0),Z=f(x),y=f(p);function f(e){let t=e.getFullYear(),s=e.getMonth()+1,n=e.getDate();return"".concat(t,"-").concat(s<10?"0"+s:s,"-").concat(n<10?"0"+n:n)}return console.log("Start date is ".concat(Z)),console.log("End date is ".concat(y)),(0,l.useEffect)(()=>{t&&s&&r&&a&&(async()=>{try{await j(t,s,r,a,Z,y).then(async e=>{let s=(await g(t,function(e){let t=[];e.forEach(e=>{Object.entries(e).forEach(e=>{let[s,n]=e;"spend"!==s&&"startTime"!==s&&"models"!==s&&"users"!==s&&t.push({key:s,spend:n})})}),t.sort((e,t)=>Number(t.spend)-Number(e.spend));let s=t.slice(0,5).map(e=>e.key);return console.log("topKeys: ".concat(Object.keys(s[0]))),s}(e))).info.map(e=>({key:(e.key_name||e.key_alias||e.token).substring(0,7),spend:e.spend}));h(s),u(function(e){let t={};e.forEach(e=>{Object.entries(e.users).forEach(e=>{let[s,n]=e;""!==s&&null!=s&&"None"!=s&&(t[s]||(t[s]=0),t[s]+=n)})});let s=Object.entries(t).map(e=>{let[t,s]=e;return{user_id:t,spend:s}});s.sort((e,t)=>t.spend-e.spend);let n=s.slice(0,5);return console.log("topKeys: ".concat(Object.values(n[0]))),n}(e)),c(e)})}catch(e){console.error("There was an error fetching the data",e)}})()},[t,s,r,a,Z,y]),(0,n.jsx)("div",{style:{width:"100%"},children:(0,n.jsxs)(k.Z,{numItems:2,className:"gap-2 p-10 h-[75vh] w-full",children:[(0,n.jsx)(w.Z,{numColSpan:2,children:(0,n.jsxs)(D.Z,{children:[(0,n.jsx)(q.Z,{children:"Monthly Spend"}),(0,n.jsx)(z.Z,{data:i,index:"startTime",categories:["spend"],colors:["blue"],valueFormatter:e=>"$ ".concat(new Intl.NumberFormat("us").format(e).toString()),yAxisWidth:100,tickGap:5,customTooltip:ej})]})}),(0,n.jsx)(w.Z,{numColSpan:1,children:(0,n.jsxs)(D.Z,{children:[(0,n.jsx)(q.Z,{children:"Top API Keys"}),(0,n.jsx)(z.Z,{className:"mt-4 h-40",data:d,index:"key",categories:["spend"],colors:["blue"],yAxisWidth:80,tickGap:5,layout:"vertical",showXAxis:!1,showLegend:!1})]})}),(0,n.jsx)(w.Z,{numColSpan:1,children:(0,n.jsxs)(D.Z,{children:[(0,n.jsx)(q.Z,{children:"Top Users"}),(0,n.jsx)(z.Z,{className:"mt-4 h-40",data:m,index:"user_id",categories:["spend"],colors:["blue"],yAxisWidth:200,layout:"vertical",showXAxis:!1,showLegend:!1})]})})]})})},eZ=()=>{let[e,t]=(0,l.useState)(""),[s,a]=(0,l.useState)(null),o=(0,r.useSearchParams)(),c=o.get("userID"),d=o.get("token"),[h,m]=(0,l.useState)("api-keys"),[u,x]=(0,l.useState)(null);return(0,l.useEffect)(()=>{if(d){let e=(0,$.o)(d);if(e){if(console.log("Decoded token:",e),console.log("Decoded key:",e.key),x(e.key),e.user_role){let s=function(e){if(!e)return"Undefined Role";switch(console.log("Received user role: ".concat(e)),e.toLowerCase()){case"app_owner":case"demo_app_owner":return"App Owner";case"app_admin":return"Admin";case"app_user":return"App User";default:return"Unknown Role"}}(e.user_role);console.log("Decoded user_role:",s),t(s)}else console.log("User role not defined");e.user_email?a(e.user_email):console.log("User Email is not set ".concat(e))}}},[d]),(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsx)(i,{userID:c,userRole:e,userEmail:s}),(0,n.jsxs)("div",{className:"flex flex-1 overflow-auto",children:[(0,n.jsx)(ep,{setPage:m,userRole:e}),"api-keys"==h?(0,n.jsx)(Y,{userID:c,userRole:e,setUserRole:t,userEmail:s,setUserEmail:a}):"models"==h?(0,n.jsx)(Q,{userID:c,userRole:e,token:d,accessToken:u}):"llm-playground"==h?(0,n.jsx)(eh,{userID:c,userRole:e,token:d,accessToken:u}):"users"==h?(0,n.jsx)(es,{userID:c,userRole:e,token:d,accessToken:u}):(0,n.jsx)(eg,{userID:c,userRole:e,token:d,accessToken:u})]})]})})}}},function(e){e.O(0,[321,971,69,744],function(){return e(e.s=20661)}),_N_E=e.O()}]);