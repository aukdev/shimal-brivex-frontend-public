import{ab as i,aA as n,aq as r}from"./index-DcQVKrRM.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=i("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),s="printBills:target",o="/print/bills";function h(){const e=n();return r.useCallback(t=>{if(t.mode==="ids"){const a=Array.from(new Set(t.ids.filter(Boolean)));if(a.length===0)return;t={...t,ids:a}}try{sessionStorage.setItem(s,JSON.stringify(t))}catch{}e(o)},[e])}const d=s;export{d as P,l as a,h as u};
