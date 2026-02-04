(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=s(o);fetch(o.href,e)}})();const ne="modulepreload",oe=function(t){return"/GoCompress/"+t},M={},A=function(n,s,a){let o=Promise.resolve();if(s&&s.length>0){let d=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");o=d(s.map(c=>{if(c=oe(c),c in M)return;M[c]=!0;const f=c.endsWith(".css"),E=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${E}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":ne,f||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((y,v)=>{p.addEventListener("load",y),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function e(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return o.then(i=>{for(const l of i||[])l.status==="rejected"&&e(l.reason);return n().catch(e)})},Z=document.querySelector("#app");if(!Z)throw new Error("App container not found");Z.innerHTML=`
  <div class="app-root">
    <header class="app-header">
      <h1 id="text-title" class="app-title">Privacy First Image Compressor</h1>
      <p id="text-subtitle" class="app-subtitle">
        100% local image compression in your browser. No upload, safe for passports and ID photos.
      </p>
      <div class="app-badges">
        <span id="badge-privacy" class="badge">No upload · Privacy first</span>
        <span id="badge-target" class="badge">Target size · KB control</span>
        <span id="badge-batch" class="badge">Batch · Unlimited locally</span>
      </div>
      <div class="lang-switch">
        <button class="lang-btn active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="zh">中文</button>
      </div>
    </header>

    <main class="main-layout">
      <section class="card">
        <div class="card-header">
          <div>
            <h2 id="section-upload-title" class="card-title">Upload images</h2>
            <p id="section-upload-desc" class="card-desc">
              Drag &amp; drop or select JPG / PNG / WebP. All compression runs locally in your browser.
            </p>
            <div class="scenario-presets">
              <button id="scenario-passport" class="scenario-btn" data-scenario="passport">
                Passport / ID
                <span>&lt; 200KB · Face must stay clear</span>
              </button>
              <button id="scenario-gov" class="scenario-btn" data-scenario="gov">
                Web / Gov portals
                <span>&lt; 500KB · Pass online forms</span>
              </button>
              <button id="scenario-social" class="scenario-btn" data-scenario="social">
                Social / General
                <span>Balance quality &amp; size</span>
              </button>
            </div>
          </div>
        </div>

        <div class="drop-area" id="drop-area">
          <p id="drop-title" class="drop-title">Drop images here or click to browse</p>
          <p id="drop-subtitle" class="drop-subtitle">
            <span class="primary-text">100% local compression</span> · No upload · Ideal for passports and forms
          </p>
          <p id="drop-hint" class="drop-hint">Supports multiple images, recommended &lt; 20 MB each</p>
          <input class="file-input" id="file-input" type="file" accept="image/*" multiple />
        </div>

        <div class="controls-grid">
          <div class="field-group">
            <label id="label-target" for="target-kb">Target size (KB)</label>
            <div class="field-row">
              <input id="target-kb" class="input" type="number" min="5" step="5" value="200" />
              <span class="input-suffix">KB</span>
            </div>
            <div class="preset-chips">
              <button id="chip-50" class="chip" data-kb="50">&lt; 50KB (avatars / chat)</button>
              <button id="chip-100" class="chip" data-kb="100">&lt; 100KB (social media)</button>
              <button id="chip-200" class="chip secondary" data-kb="200">&lt; 200KB (passports / forms)</button>
              <button id="chip-500" class="chip" data-kb="500">&lt; 500KB (general)</button>
            </div>
          </div>

          <div class="field-group">
            <label id="label-smart">Smart options</label>
            <div class="toggle-row">
              <label class="toggle">
                <input type="checkbox" id="allow-convert" checked />
                <span class="toggle-track"><span class="toggle-thumb"></span></span>
              </label>
              <span id="toggle-convert-label" class="toggle-label">
                Allow PNG to auto-convert to JPG/WebP (smaller size)
              </span>
            </div>
            <div class="toggle-row">
              <label class="toggle">
                <input type="checkbox" id="limit-resolution" />
                <span class="toggle-track"><span class="toggle-thumb"></span></span>
              </label>
              <span id="toggle-limit-label" class="toggle-label">
                Limit longest edge to 2000px (better compression)
              </span>
            </div>
            <div class="privacy-hint">
              <span id="privacy-hint">
                <strong>Privacy protected:</strong> EXIF data (GPS / device info) is stripped during compression and
                images never leave your browser.
              </span>
            </div>
          </div>
        </div>

        <div class="actions-row">
          <div class="progress">
            <div id="progress-text">Not started yet</div>
            <div class="progress-bar">
              <div id="progress-bar-fill" class="progress-bar-fill"></div>
            </div>
          </div>
          <button id="start-btn" class="btn btn-primary">
            <span class="btn-icon">⚡</span>
            <span id="start-btn-label">Start compressing</span>
          </button>
        </div>

        <div class="actions-row" style="margin-top: 0.4rem;">
          <div class="summary-chips" id="summary-chips"></div>
          <div style="display:flex; gap:0.4rem;">
            <button id="clear-all-btn" class="btn btn-ghost btn-sm">
              <span id="clear-all-btn-label">Clear list</span>
            </button>
            <button id="download-all-btn" class="btn btn-secondary btn-sm" disabled>
              <span id="download-all-btn-label">Download all as ZIP</span>
            </button>
          </div>
        </div>
      </section>

      <section class="card">
        <div class="list-header">
  <div>
            <h2 id="list-title" class="card-title">Compression list</h2>
            <p id="list-desc" class="card-desc">Check the result and status of each image.</p>
          </div>
          <div class="list-count" id="list-count">0 images</div>
        </div>

        <ul id="file-list" class="file-list"></ul>
        <div id="empty-hint" class="empty-hint">No images yet. Drag some in from the left panel.</div>
      </section>
    </main>

    <section class="card" style="margin-top: 1.2rem;">
      <div class="sidebar-section">
        <h3 id="sidebar-safe-title" class="sidebar-title">Why is this safer?</h3>
        <p id="sidebar-safe-text" class="sidebar-text">
          Everything runs entirely inside your browser and <strong>no image is ever uploaded to a server</strong>.
          Perfect for passports, IDs and other sensitive documents.
        </p>
      </div>
      <div class="sidebar-section">
        <h3 id="sidebar-scenes-title" class="sidebar-title">Typical scenarios</h3>
        <ul class="sidebar-list">
          <li id="sidebar-li-200kb">Online portals that require images to be under 200KB.</li>
          <li id="sidebar-li-passport">Preparing passport / visa / ID photos before uploading.</li>
          <li id="sidebar-li-batch">Batch compression for social media, resumes and product images.</li>
        </ul>
        <div class="sidebar-pill-row">
          <span class="sidebar-pill">Compress image to 50KB</span>
          <span class="sidebar-pill">Reduce image size to 200KB for passport</span>
          <span class="sidebar-pill">Online image compressor without uploading</span>
        </div>
    </div>
    </section>

    <p class="footer-note">
      <span id="footer-note">
        <strong>Note:</strong> This is an MVP using browser-based compression. A full WebAssembly codec upgrade is on
        the roadmap.
      </span>
    </p>
  </div>
`;const W=document.querySelector("#file-input"),P=document.querySelector("#drop-area"),x=document.querySelector("#target-kb"),D=document.querySelector("#start-btn"),j=document.querySelector("#download-all-btn"),re=document.querySelector("#clear-all-btn"),_=document.querySelector("#file-list"),G=document.querySelector("#empty-hint"),F=document.querySelector("#list-count"),I=document.querySelector("#progress-text"),T=document.querySelector("#progress-bar-fill"),K=document.querySelector("#summary-chips"),k=Array.from(document.querySelectorAll(".scenario-btn[data-scenario]")),Y=Array.from(document.querySelectorAll(".lang-btn[data-lang]")),ee="image_zip_settings",$="image_zip_lang",r={jobs:[],nextId:1,isProcessing:!1,lang:"en",scenario:null};function te(){try{const t=window.localStorage.getItem(ee);if(!t)return{targetKb:200,allowConvert:!0,limitResolution:!1,scenario:null};const n=JSON.parse(t);return{targetKb:n.targetKb||200,allowConvert:n.allowConvert??!0,limitResolution:n.limitResolution??!1,scenario:n.scenario??null}}catch{return{targetKb:200,allowConvert:!0,limitResolution:!1,scenario:null}}}function U(t){const s={...te(),...t};window.localStorage.setItem(ee,JSON.stringify(s))}const O={en:{"text-title":"Privacy First Image Compressor","text-subtitle":"100% local image compression in your browser. No upload, safe for passports and ID photos.","badge-privacy":"No upload · Privacy first","badge-target":"Target size · KB control","badge-batch":"Batch · Unlimited locally","section-upload-title":"Upload images","section-upload-desc":"Drag & drop or select JPG / PNG / WebP. All compression runs locally in your browser.","scenario-passport":"Passport / ID","scenario-passport-sub":"< 200KB · Face must stay clear","scenario-gov":"Web / Gov portals","scenario-gov-sub":"< 500KB · Pass online forms","scenario-social":"Social / General","scenario-social-sub":"Balance quality &amp; size","drop-title":"Drop images here or click to browse","drop-subtitle":'<span class="primary-text">100% local compression</span> · No upload · Ideal for passports and forms',"drop-hint":"Supports multiple images, recommended &lt; 20 MB each","label-target":"Target size (KB)","chip-50":"&lt; 50KB (avatars / chat)","chip-100":"&lt; 100KB (social media)","chip-200":"&lt; 200KB (passports / forms)","chip-500":"&lt; 500KB (general)","label-smart":"Smart options","toggle-convert-label":"Allow PNG to auto-convert to JPG/WebP (smaller size)","toggle-limit-label":"Limit longest edge to 2000px (better compression)","privacy-hint":"<strong>Privacy protected:</strong> EXIF data (GPS / device info) is stripped during compression and images never leave your browser.","progress-text-initial":"Not started yet","start-btn-label":"Start compressing","clear-all-btn-label":"Clear list","download-all-btn-label":"Download all as ZIP","list-title":"Compression list","list-desc":"Check the result and status of each image.","list-count-zero":"0 images","empty-hint":"No images yet. Drag some in from the left panel.","sidebar-safe-title":"Why is this safer?","sidebar-safe-text":"Everything runs entirely inside your browser and <strong>no image is ever uploaded to a server</strong>. Perfect for passports, IDs and other sensitive documents.","sidebar-scenes-title":"Typical scenarios","sidebar-li-200kb":"Online portals that require images to be under 200KB.","sidebar-li-passport":"Preparing passport / visa / ID photos before uploading.","sidebar-li-batch":"Batch compression for social media, resumes and product images.","footer-note":"<strong>Note:</strong> This is an MVP using browser-based compression. A full WebAssembly codec upgrade is on the roadmap."},zh:{"text-title":"隐私优先图片压缩器","text-subtitle":"100% 在浏览器本地压缩，不上传服务器，安全适合护照和证件照。","badge-privacy":"不上传 · 隐私优先","badge-target":"指定大小 · 精确 KB","badge-batch":"批量 · 利用本机算力","section-upload-title":"上传图片","section-upload-desc":"拖拽或选择 JPG / PNG / WebP，全部在本地浏览器完成压缩。","scenario-passport":"证件照 / 护照","scenario-passport-sub":"&lt; 200KB · 人像需清晰可见","scenario-gov":"政府 / 报名网站","scenario-gov-sub":"&lt; 500KB · 通过各类表单","scenario-social":"社交 / 通用","scenario-social-sub":"画质与体积平衡","drop-title":"将图片拖到这里，或点击选择文件","drop-subtitle":'<span class="primary-text">100% 本地压缩</span> · 不上传服务器 · 适合证件照和报名材料',"drop-hint":"支持多张图片，单张建议小于 20 MB","label-target":"目标大小（KB）","chip-50":"&lt; 50KB（头像 / 聊天）","chip-100":"&lt; 100KB（社交媒体）","chip-200":"&lt; 200KB（证件 / 报名）","chip-500":"&lt; 500KB（通用压缩）","label-smart":"智能选项","toggle-convert-label":"允许 PNG 自动转为 JPG/WebP（体积更小）","toggle-limit-label":"限制最长边为 2000px（更利于压缩）","privacy-hint":"<strong>隐私保护：</strong> 压缩时自动移除 EXIF 信息（GPS / 设备型号等），图片不出本机。","progress-text-initial":"尚未开始压缩","start-btn-label":"开始压缩","clear-all-btn-label":"清空列表","download-all-btn-label":"打包下载全部","list-title":"压缩列表","list-desc":"查看每一张图片的压缩结果和状态。","list-count-zero":"0 张图片","empty-hint":"还没有图片，先从左侧拖拽或选择几张图吧。","sidebar-safe-title":"为什么更安全？","sidebar-safe-text":"本工具完全在浏览器内运行，<strong>不上传任何图片到服务器</strong>。适合处理护照、身份证、合同等敏感图片。","sidebar-scenes-title":"典型场景","sidebar-li-200kb":"报名 / 政府网站要求“图片必须小于 200KB”。","sidebar-li-passport":"上传护照、签证、证件照到线上系统前的预处理。","sidebar-li-batch":"社交媒体、求职简历、产品图批量压缩。","footer-note":"<strong>说明：</strong> 本版为基础 MVP，先使用浏览器压缩，后续会升级为 WebAssembly 高质量压缩。"}},H={en:{listCount:"images",rowWaiting:"Waiting…",rowProcessing:"Compressing…",rowDone:"Done",statusPending:"Queued",statusProcessing:"Processing",statusSuccess:"Success",statusError:"Failed",btnDownload:"Download",btnDelete:"Remove",progressCompressing:"Compressing",progressReady:"Ready to compress",alertAddOne:"Please add at least one image first.",alertProcessingError:"An error occurred during compression.",confirmClear:"Clear all images from the list?",unknownError:"Unknown error"},zh:{listCount:"张图片",rowWaiting:"等待压缩…",rowProcessing:"压缩中…",rowDone:"已完成",statusPending:"待压缩",statusProcessing:"压缩中",statusSuccess:"成功",statusError:"失败",btnDownload:"下载",btnDelete:"删除",progressCompressing:"正在压缩",progressReady:"尚未开始压缩",alertAddOne:"请先添加至少一张图片",alertProcessingError:"压缩过程中出现错误",confirmClear:"确认清空当前列表中的所有图片吗？",unknownError:"未知错误"}};function h(t){return H[r.lang][t]??H.en[t]}function q(t){r.lang=t;const n=O[t];Object.entries(n).forEach(([a,o])=>{const e=document.getElementById(a);e&&(e.innerHTML=o)});const s=document.getElementById("list-count");s&&r.jobs.length===0&&(s.textContent=n["list-count-zero"]),I.textContent=n["progress-text-initial"],Y.forEach(a=>{const o=a.getAttribute("data-lang")||"en";a.classList.toggle("active",o===t)}),window.localStorage.setItem($,t)}function N(t){if(t<1024)return`${t.toFixed(0)} B`;const n=t/1024;return n<1024?`${n.toFixed(1)} KB`:`${(n/1024).toFixed(2)} MB`}function J(t){const n=parseInt(x.value||"0",10),s=Number.isFinite(n)&&n>0?n:200;Array.from(t).forEach(a=>{if(!a.type.startsWith("image/"))return;const e={id:r.nextId++,file:a,originalSize:a.size,targetSize:s*1024,status:"pending"};e.blobUrl=URL.createObjectURL(a),r.jobs.push(e)}),L()}function L(){_.innerHTML="",r.jobs.length===0?(G.style.display="block",F.textContent=O[r.lang]["list-count-zero"]):(G.style.display="none",F.textContent=r.lang==="zh"?`${r.jobs.length} ${h("listCount")}`:`${r.jobs.length} ${h("listCount")}`);let t=0,n=0;for(const e of r.jobs){t+=e.originalSize,e.compressedSize!=null&&(n+=e.compressedSize);const i=document.createElement("li");i.className="file-row";const l=document.createElement("img");l.className="file-thumb",e.blobUrl&&(l.src=e.blobUrl),l.alt=e.file.name;const d=document.createElement("div");d.className="file-meta";const c=document.createElement("div");c.className="file-name",c.textContent=e.file.name;const f=document.createElement("div");f.className="file-sub";const E=e.originalWidth&&e.originalHeight?`${e.originalWidth}×${e.originalHeight}px · `:"";f.textContent=`${E}${N(e.originalSize)}`,d.appendChild(c),d.appendChild(f);const p=document.createElement("div");if(p.className="file-result",e.compressedSize!=null&&e.compressedBlob&&e.compressedUrl){const S=(1-e.compressedSize/e.originalSize)*100,z=document.createElement("span");z.innerHTML=`➡ <span class="${e.compressedSize<=e.targetSize?"file-size-ok":"file-size-warn"}">${N(e.compressedSize)}</span>`;const R=document.createElement("span");R.innerHTML=` · 减少 <strong>${S.toFixed(1)}%</strong>`,p.appendChild(z),p.appendChild(R)}else e.status==="pending"?p.textContent=h("rowWaiting"):e.status==="processing"?p.textContent=h("rowProcessing"):e.status==="error"?p.textContent=e.message||h("statusError"):p.textContent=h("rowDone");const y=document.createElement("div");y.style.display="flex",y.style.flexDirection="column",y.style.alignItems="flex-end",y.style.gap="0.25rem";const v=document.createElement("span");v.classList.add("status-pill");const C=document.createElement("span");C.className="status-badge-dot",v.appendChild(C);const w=document.createElement("span");e.status==="pending"?(v.classList.add("status-pending"),w.textContent=h("statusPending")):e.status==="processing"?(v.classList.add("status-pending"),w.textContent=h("statusProcessing")):e.status==="success"?(v.classList.add("status-success"),w.textContent=h("statusSuccess")):(v.classList.add("status-error"),w.textContent=h("statusError")),v.appendChild(w),y.appendChild(v);const b=document.createElement("div");b.style.display="flex",b.style.gap="0.25rem";const u=document.createElement("button");u.className="btn btn-ghost btn-sm",u.textContent=h("btnDownload"),u.disabled=!e.compressedBlob,u.onclick=()=>{if(!e.compressedBlob||!e.compressedUrl)return;const g=document.createElement("a");g.href=e.compressedUrl;const S=e.compressedBlob.type.includes("webp")?".webp":".jpg";g.download=e.file.name.replace(/\.[^.]+$/,"")+"-compressed"+S,document.body.appendChild(g),g.click(),document.body.removeChild(g)};const m=document.createElement("button");m.className="btn btn-ghost btn-sm btn-danger",m.textContent=h("btnDelete"),m.onclick=()=>{e.blobUrl&&URL.revokeObjectURL(e.blobUrl),e.compressedUrl&&URL.revokeObjectURL(e.compressedUrl),r.jobs=r.jobs.filter(g=>g.id!==e.id),L()},b.appendChild(u),b.appendChild(m),y.appendChild(b),i.appendChild(l),i.appendChild(d),i.appendChild(p),i.appendChild(y),_.appendChild(i)}if(K.innerHTML="",r.jobs.length>0){const e=document.createElement("span");e.className="summary-chip",e.innerHTML=`<strong>${r.jobs.length}</strong> 张图片`,K.appendChild(e);const i=document.createElement("span");if(i.className="summary-chip",i.innerHTML=`<strong>${N(t)}</strong> ➝ ${n>0?N(n):"待计算"}`,K.appendChild(i),n>0){const d=(1-n/t)*100,c=document.createElement("span");c.className="summary-chip",c.innerHTML=`总体减少 <strong>${d.toFixed(1)}%</strong>`,K.appendChild(c)}}const s=r.jobs.some(e=>!!e.compressedBlob);j.disabled=!s;const a=r.jobs.filter(e=>e.status==="success"||e.status==="error").length,o=r.jobs.length;if(o===0)I.textContent=h("progressReady"),T.style.width="0%";else{const e=a/o*100;T.style.width=`${e}%`,a===0?I.textContent=r.lang==="zh"?`已添加 ${o} 张图片，等待开始压缩`:`${o} image(s) added. Ready to start.`:I.textContent=r.lang==="zh"?`已完成 ${a} / ${o} 张`:`Done ${a} / ${o}`}}function se(t,n){if(r.scenario=t,k.forEach(e=>{const i=e.getAttribute("data-scenario")||null;e.classList.toggle("active",i===t)}),!n)return;let s=200,a=!1;t==="passport"?(s=200,a=!0):t==="gov"?(s=500,a=!0):t==="social"&&(s=300,a=!1),x.value=String(s);const o=document.querySelector("#limit-resolution");o&&(o.checked=a),U({targetKb:s,limitResolution:a,scenario:t})}function ie(t){return new Promise(n=>{const s=new Image;s.onload=()=>{t.originalWidth=s.naturalWidth,t.originalHeight=s.naturalHeight,n()},s.onerror=()=>n(),s.src=t.blobUrl||URL.createObjectURL(t.file)})}async function V(t,n,s){const a=new Image;a.decoding="async";const o=t.blobUrl||URL.createObjectURL(t.file);await new Promise((u,m)=>{a.onload=()=>u(),a.onerror=()=>m(new Error("无法加载图片")),a.src=o});const e=document.createElement("canvas"),i=e.getContext("2d");if(!i)throw new Error("Canvas 不可用");let l=a.naturalWidth,d=a.naturalHeight;if(s){const m=Math.max(l,d);if(m>2e3){const g=2e3/m;l=Math.round(l*g),d=Math.round(d*g)}}e.width=l,e.height=d,i.drawImage(a,0,0,l,d);const c=t.targetSize;if(t.originalSize<=c){const u=await new Promise(m=>{e.toBlob(g=>m(g),t.file.type||"image/jpeg",.9)});if(!u)throw new Error("压缩失败");t.compressedBlob=u,t.compressedSize=u.size,t.compressedUrl=URL.createObjectURL(u),t.status="success",t.message="原图已满足大小要求";return}const f=n?"image/jpeg":t.file.type||"image/jpeg";let E=.2,p=.95,y=null,v=1/0,C=null,w=1/0;for(let u=0;u<7;u++){const m=(E+p)/2,g=await new Promise(R=>{e.toBlob(ae=>R(ae),f,m)});if(!g)break;const S=g.size,z=Math.abs(S-c);S<=c&&z<v&&(v=z,y=g),S<w&&(w=S,C=g),S>c?p=m:E=m}const b=y??C;if(!b)throw new Error("已压到极限，仍无法达到目标大小");t.compressedBlob=b,t.compressedSize=b.size,t.compressedUrl=URL.createObjectURL(b),t.status="success",b.size>c&&(t.message=r.lang==="zh"?"已压到极限，但仍略大于目标":"Compressed but slightly above target size")}async function le(t,n,s){const[{decode:a},{encode:o},{resize:e}]=await Promise.all([A(()=>import("./index-BFQYeWfP.js"),[]),A(()=>import("./index-BvoJlU1-.js"),[]),A(()=>import("./index-CdvgTbXV.js"),[])]),i=await t.file.arrayBuffer();let l=await a(i);if(s){const b=Math.max(l.width,l.height);if(b>2e3){const u=2e3/b,m=Math.round(l.width*u),g=Math.round(l.height*u);l=await e(l,{width:m,height:g})}}if(t.originalSize<=n){const w=await o(l,{quality:85}),b=new Blob([w],{type:"image/webp"});t.compressedBlob=b,t.compressedSize=b.size,t.compressedUrl=URL.createObjectURL(b),t.status="success",t.message="原图已满足大小要求";return}let d=35,c=92,f=null,E=1/0,p=null,y=1/0;for(let w=0;w<7;w++){const b=Math.round((d+c)/2),u=await o(l,{quality:b}),m=u.byteLength,g=Math.abs(m-n);m<=n&&g<E&&(E=g,f=u),m<y&&(y=m,p=u),m>n?c=b-1:d=b+1}const v=f??p;if(!v)throw new Error("已压到极限，仍无法达到目标大小");const C=new Blob([v],{type:"image/webp"});t.compressedBlob=C,t.compressedSize=C.size,t.compressedUrl=URL.createObjectURL(C),t.status="success",C.size>n&&(t.message=r.lang==="zh"?"已压到极限，但仍略大于目标":"Compressed but slightly above target size")}async function ce(t,n,s){t.status="processing",t.message=void 0,L();const a=t.targetSize,o=t.file.type||"",e=o.includes("jpeg")||o.includes("jpg");try{e?await le(t,a,s):await V(t,n,s)}catch(i){if(e)try{await V(t,n,s);return}catch{}t.status="error",t.message=i instanceof Error?i.message:"压缩失败"}}async function de(){if(r.isProcessing||r.jobs.length===0)return;r.isProcessing=!0,D.disabled=!0;const t=document.getElementById("start-btn-label");t&&(t.textContent=r.lang==="zh"?"压缩中…":"Compressing…");const n=document.querySelector("#allow-convert")?.checked??!0,s=document.querySelector("#limit-resolution")?.checked??!1,a=r.jobs.filter(e=>e.status==="pending"||e.status==="error"),o=a.length;for(let e=0;e<a.length;e++){const i=a[e];try{await ie(i),await ce(i,n,s)}catch(c){i.status="error",i.message=c instanceof Error?c.message:h("unknownError")}const l=r.jobs.filter(c=>c.status==="success"||c.status==="error").length,d=l/r.jobs.length*100;T.style.width=`${d}%`,I.textContent=r.lang==="zh"?`正在压缩 ${e+1} / ${o}（总进度：${l} / ${r.jobs.length}）`:`Compressing ${e+1} / ${o} (overall: ${l} / ${r.jobs.length})`,L()}r.isProcessing=!1,D.disabled=!1,t&&(t.textContent=O[r.lang]["start-btn-label"])}function pe(){P.addEventListener("click",()=>{W.click()}),W.addEventListener("change",s=>{const a=s.target;a.files&&(J(a.files),a.value="")}),Y.forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-lang")||"en";q(a),L()})});const t=document.querySelector("#allow-convert"),n=document.querySelector("#limit-resolution");t&&t.addEventListener("change",()=>{U({allowConvert:t.checked})}),n&&n.addEventListener("change",()=>{U({limitResolution:n.checked,scenario:null}),r.scenario=null,k.forEach(s=>s.classList.remove("active"))}),k.forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-scenario")||null;se(a,!0)})}),["dragenter","dragover"].forEach(s=>{P.addEventListener(s,a=>{a.preventDefault(),a.stopPropagation(),P.classList.add("dragover")})}),["dragleave","drop"].forEach(s=>{P.addEventListener(s,a=>{a.preventDefault(),a.stopPropagation(),P.classList.remove("dragover")})}),P.addEventListener("drop",s=>{const a=s.dataTransfer;a?.files&&a.files.length>0&&J(a.files)}),document.querySelectorAll(".chip[data-kb]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-kb");a&&(x.value=a,U({targetKb:Number(a),scenario:null}),r.scenario=null,k.forEach(o=>o.classList.remove("active")))})}),x.addEventListener("change",()=>{const s=parseInt(x.value||"0",10);Number.isFinite(s)&&s>0&&(U({targetKb:s,scenario:null}),r.scenario=null,k.forEach(a=>a.classList.remove("active")))}),D.addEventListener("click",()=>{if(r.jobs.length===0){alert(h("alertAddOne"));return}const s=parseInt(x.value||"0",10),o=(Number.isFinite(s)&&s>0?s:200)*1024;r.jobs.forEach(e=>{e.targetSize=o,(e.status==="success"||e.status==="error")&&(e.compressedUrl&&URL.revokeObjectURL(e.compressedUrl),e.compressedBlob=void 0,e.compressedUrl=void 0,e.compressedSize=void 0,e.message=void 0,e.status="pending")}),L(),de().catch(e=>{console.error(e),alert(h("alertProcessingError")),r.isProcessing=!1,D.disabled=!1;const i=document.getElementById("start-btn-label");i&&(i.textContent=O[r.lang]["start-btn-label"])})}),re.addEventListener("click",()=>{r.jobs.length!==0&&window.confirm(h("confirmClear"))&&(r.jobs.forEach(s=>{s.blobUrl&&URL.revokeObjectURL(s.blobUrl),s.compressedUrl&&URL.revokeObjectURL(s.compressedUrl)}),r.jobs=[],r.nextId=1,L())}),j.addEventListener("click",async()=>{const s=await A(()=>import("./jszip.min-D7KnG0-e.js").then(d=>d.j),[]),a=new s.default,o=r.jobs.filter(d=>d.compressedBlob);if(o.length===0)return;o.forEach(d=>{if(!d.compressedBlob)return;const c=".jpg",f=d.file.name.replace(/\.[^.]+$/,"");a.file(`${f}-compressed${c}`,d.compressedBlob)});const e=await a.generateAsync({type:"blob"}),i=URL.createObjectURL(e),l=document.createElement("a");l.href=i,l.download="compressed-images.zip",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(i)})}pe();const B=te();function ue(){const t=window.localStorage.getItem($);return t==="en"||t==="zh"?t:(navigator.language||navigator.userLanguage||"").toLowerCase().startsWith("zh")?"zh":"en"}function me(){window.localStorage.getItem($)||r.lang==="zh"||fetch("https://ipapi.co/json/").then(n=>n.json()).then(n=>{const s=n.country_code?.toUpperCase();["CN","TW","HK","MO","SG"].includes(s)&&!window.localStorage.getItem($)&&r.lang==="en"&&(q("zh"),L())}).catch(()=>{})}const ge=ue();q(ge);me();x.value=String(B.targetKb);const Q=document.querySelector("#allow-convert"),X=document.querySelector("#limit-resolution");Q&&(Q.checked=B.allowConvert);X&&(X.checked=B.limitResolution);B.scenario&&(se(B.scenario,!1),r.scenario=B.scenario);L();export{A as _};
