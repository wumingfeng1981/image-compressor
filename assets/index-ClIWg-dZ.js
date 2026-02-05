(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const ie="modulepreload",le=function(e){return"/"+e},W={},N=function(a,n,s){let o=Promise.resolve();if(n&&n.length>0){let d=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");o=d(n.map(c=>{if(c=le(c),c in W)return;W[c]=!0;const f=c.endsWith(".css"),S=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${S}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":ie,f||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),f)return new Promise((y,v)=>{u.addEventListener("load",y),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return o.then(i=>{for(const l of i||[])l.status==="rejected"&&t(l.reason);return a().catch(t)})};var ce="@vercel/analytics",de="1.6.1",ue=()=>{window.va||(window.va=function(...a){(window.vaq=window.vaq||[]).push(a)})};function Z(){return typeof window<"u"}function Y(){try{const e="production"}catch{}return"production"}function pe(e="auto"){if(e==="auto"){window.vam=Y();return}window.vam=e}function me(){return(Z()?window.vam:Y())||"production"}function T(){return me()==="development"}function ge(e){return e.scriptSrc?e.scriptSrc:T()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?`${e.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function be(e={debug:!0}){var a;if(!Z())return;pe(e.mode),ue(),e.beforeSend&&((a=window.va)==null||a.call(window,"beforeSend",e.beforeSend));const n=ge(e);if(document.head.querySelector(`script[src*="${n}"]`))return;const s=document.createElement("script");s.src=n,s.defer=!0,s.dataset.sdkn=ce+(e.framework?`/${e.framework}`:""),s.dataset.sdkv=de,e.disableAutoTrack&&(s.dataset.disableAutoTrack="1"),e.endpoint?s.dataset.endpoint=e.endpoint:e.basePath&&(s.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(s.dataset.dsn=e.dsn),s.onerror=()=>{const o=T()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${o}`)},T()&&e.debug===!1&&(s.dataset.debug="false"),document.head.appendChild(s)}const ee=document.querySelector("#app");if(!ee)throw new Error("App container not found");ee.innerHTML=`
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
`;const _=document.querySelector("#file-input"),P=document.querySelector("#drop-area"),x=document.querySelector("#target-kb"),A=document.querySelector("#start-btn"),te=document.querySelector("#download-all-btn"),fe=document.querySelector("#clear-all-btn"),G=document.querySelector("#file-list"),F=document.querySelector("#empty-hint"),H=document.querySelector("#list-count"),I=document.querySelector("#progress-text"),O=document.querySelector("#progress-bar-fill"),K=document.querySelector("#summary-chips"),z=Array.from(document.querySelectorAll(".scenario-btn[data-scenario]")),se=Array.from(document.querySelectorAll(".lang-btn[data-lang]")),ne="image_zip_settings",D="image_zip_lang",r={jobs:[],nextId:1,isProcessing:!1,lang:"en",scenario:null};function ae(){try{const e=window.localStorage.getItem(ne);if(!e)return{targetKb:200,allowConvert:!0,limitResolution:!1,scenario:null};const a=JSON.parse(e);return{targetKb:a.targetKb||200,allowConvert:a.allowConvert??!0,limitResolution:a.limitResolution??!1,scenario:a.scenario??null}}catch{return{targetKb:200,allowConvert:!0,limitResolution:!1,scenario:null}}}function U(e){const n={...ae(),...e};window.localStorage.setItem(ne,JSON.stringify(n))}const q={en:{"text-title":"Privacy First Image Compressor","text-subtitle":"100% local image compression in your browser. No upload, safe for passports and ID photos.","badge-privacy":"No upload · Privacy first","badge-target":"Target size · KB control","badge-batch":"Batch · Unlimited locally","section-upload-title":"Upload images","section-upload-desc":"Drag & drop or select JPG / PNG / WebP. All compression runs locally in your browser.","scenario-passport":"Passport / ID","scenario-passport-sub":"< 200KB · Face must stay clear","scenario-gov":"Web / Gov portals","scenario-gov-sub":"< 500KB · Pass online forms","scenario-social":"Social / General","scenario-social-sub":"Balance quality &amp; size","drop-title":"Drop images here or click to browse","drop-subtitle":'<span class="primary-text">100% local compression</span> · No upload · Ideal for passports and forms',"drop-hint":"Supports multiple images, recommended &lt; 20 MB each","label-target":"Target size (KB)","chip-50":"&lt; 50KB (avatars / chat)","chip-100":"&lt; 100KB (social media)","chip-200":"&lt; 200KB (passports / forms)","chip-500":"&lt; 500KB (general)","label-smart":"Smart options","toggle-convert-label":"Allow PNG to auto-convert to JPG/WebP (smaller size)","toggle-limit-label":"Limit longest edge to 2000px (better compression)","privacy-hint":"<strong>Privacy protected:</strong> EXIF data (GPS / device info) is stripped during compression and images never leave your browser.","progress-text-initial":"Not started yet","start-btn-label":"Start compressing","clear-all-btn-label":"Clear list","download-all-btn-label":"Download all as ZIP","list-title":"Compression list","list-desc":"Check the result and status of each image.","list-count-zero":"0 images","empty-hint":"No images yet. Drag some in from the left panel.","sidebar-safe-title":"Why is this safer?","sidebar-safe-text":"Everything runs entirely inside your browser and <strong>no image is ever uploaded to a server</strong>. Perfect for passports, IDs and other sensitive documents.","sidebar-scenes-title":"Typical scenarios","sidebar-li-200kb":"Online portals that require images to be under 200KB.","sidebar-li-passport":"Preparing passport / visa / ID photos before uploading.","sidebar-li-batch":"Batch compression for social media, resumes and product images.","footer-note":"<strong>Note:</strong> This is an MVP using browser-based compression. A full WebAssembly codec upgrade is on the roadmap."},zh:{"text-title":"隐私优先图片压缩器","text-subtitle":"100% 在浏览器本地压缩，不上传服务器，安全适合护照和证件照。","badge-privacy":"不上传 · 隐私优先","badge-target":"指定大小 · 精确 KB","badge-batch":"批量 · 利用本机算力","section-upload-title":"上传图片","section-upload-desc":"拖拽或选择 JPG / PNG / WebP，全部在本地浏览器完成压缩。","scenario-passport":"证件照 / 护照","scenario-passport-sub":"&lt; 200KB · 人像需清晰可见","scenario-gov":"政府 / 报名网站","scenario-gov-sub":"&lt; 500KB · 通过各类表单","scenario-social":"社交 / 通用","scenario-social-sub":"画质与体积平衡","drop-title":"将图片拖到这里，或点击选择文件","drop-subtitle":'<span class="primary-text">100% 本地压缩</span> · 不上传服务器 · 适合证件照和报名材料',"drop-hint":"支持多张图片，单张建议小于 20 MB","label-target":"目标大小（KB）","chip-50":"&lt; 50KB（头像 / 聊天）","chip-100":"&lt; 100KB（社交媒体）","chip-200":"&lt; 200KB（证件 / 报名）","chip-500":"&lt; 500KB（通用压缩）","label-smart":"智能选项","toggle-convert-label":"允许 PNG 自动转为 JPG/WebP（体积更小）","toggle-limit-label":"限制最长边为 2000px（更利于压缩）","privacy-hint":"<strong>隐私保护：</strong> 压缩时自动移除 EXIF 信息（GPS / 设备型号等），图片不出本机。","progress-text-initial":"尚未开始压缩","start-btn-label":"开始压缩","clear-all-btn-label":"清空列表","download-all-btn-label":"打包下载全部","list-title":"压缩列表","list-desc":"查看每一张图片的压缩结果和状态。","list-count-zero":"0 张图片","empty-hint":"还没有图片，先从左侧拖拽或选择几张图吧。","sidebar-safe-title":"为什么更安全？","sidebar-safe-text":"本工具完全在浏览器内运行，<strong>不上传任何图片到服务器</strong>。适合处理护照、身份证、合同等敏感图片。","sidebar-scenes-title":"典型场景","sidebar-li-200kb":"报名 / 政府网站要求“图片必须小于 200KB”。","sidebar-li-passport":"上传护照、签证、证件照到线上系统前的预处理。","sidebar-li-batch":"社交媒体、求职简历、产品图批量压缩。","footer-note":"<strong>说明：</strong> 本版为基础 MVP，先使用浏览器压缩，后续会升级为 WebAssembly 高质量压缩。"}},J={en:{listCount:"images",rowWaiting:"Waiting…",rowProcessing:"Compressing…",rowDone:"Done",statusPending:"Queued",statusProcessing:"Processing",statusSuccess:"Success",statusError:"Failed",btnDownload:"Download",btnDelete:"Remove",progressCompressing:"Compressing",progressReady:"Ready to compress",alertAddOne:"Please add at least one image first.",alertProcessingError:"An error occurred during compression.",confirmClear:"Clear all images from the list?",unknownError:"Unknown error"},zh:{listCount:"张图片",rowWaiting:"等待压缩…",rowProcessing:"压缩中…",rowDone:"已完成",statusPending:"待压缩",statusProcessing:"压缩中",statusSuccess:"成功",statusError:"失败",btnDownload:"下载",btnDelete:"删除",progressCompressing:"正在压缩",progressReady:"尚未开始压缩",alertAddOne:"请先添加至少一张图片",alertProcessingError:"压缩过程中出现错误",confirmClear:"确认清空当前列表中的所有图片吗？",unknownError:"未知错误"}};function h(e){return J[r.lang][e]??J.en[e]}function M(e){r.lang=e;const a=q[e];Object.entries(a).forEach(([s,o])=>{const t=document.getElementById(s);t&&(t.innerHTML=o)});const n=document.getElementById("list-count");n&&r.jobs.length===0&&(n.textContent=a["list-count-zero"]),I.textContent=a["progress-text-initial"],se.forEach(s=>{const o=s.getAttribute("data-lang")||"en";s.classList.toggle("active",o===e)}),window.localStorage.setItem(D,e)}function $(e){if(e<1024)return`${e.toFixed(0)} B`;const a=e/1024;return a<1024?`${a.toFixed(1)} KB`:`${(a/1024).toFixed(2)} MB`}function V(e){const a=parseInt(x.value||"0",10),n=Number.isFinite(a)&&a>0?a:200;Array.from(e).forEach(s=>{if(!s.type.startsWith("image/"))return;const t={id:r.nextId++,file:s,originalSize:s.size,targetSize:n*1024,status:"pending"};t.blobUrl=URL.createObjectURL(s),r.jobs.push(t)}),L()}function L(){G.innerHTML="",r.jobs.length===0?(F.style.display="block",H.textContent=q[r.lang]["list-count-zero"]):(F.style.display="none",H.textContent=r.lang==="zh"?`${r.jobs.length} ${h("listCount")}`:`${r.jobs.length} ${h("listCount")}`);let e=0,a=0;for(const t of r.jobs){e+=t.originalSize,t.compressedSize!=null&&(a+=t.compressedSize);const i=document.createElement("li");i.className="file-row";const l=document.createElement("img");l.className="file-thumb",t.blobUrl&&(l.src=t.blobUrl),l.alt=t.file.name;const d=document.createElement("div");d.className="file-meta";const c=document.createElement("div");c.className="file-name",c.textContent=t.file.name;const f=document.createElement("div");f.className="file-sub";const S=t.originalWidth&&t.originalHeight?`${t.originalWidth}×${t.originalHeight}px · `:"";f.textContent=`${S}${$(t.originalSize)}`,d.appendChild(c),d.appendChild(f);const u=document.createElement("div");if(u.className="file-result",t.compressedSize!=null&&t.compressedBlob&&t.compressedUrl){const C=(1-t.compressedSize/t.originalSize)*100,k=document.createElement("span");k.innerHTML=`➡ <span class="${t.compressedSize<=t.targetSize?"file-size-ok":"file-size-warn"}">${$(t.compressedSize)}</span>`;const R=document.createElement("span");R.innerHTML=` · 减少 <strong>${C.toFixed(1)}%</strong>`,u.appendChild(k),u.appendChild(R)}else t.status==="pending"?u.textContent=h("rowWaiting"):t.status==="processing"?u.textContent=h("rowProcessing"):t.status==="error"?u.textContent=t.message||h("statusError"):u.textContent=h("rowDone");const y=document.createElement("div");y.style.display="flex",y.style.flexDirection="column",y.style.alignItems="flex-end",y.style.gap="0.25rem";const v=document.createElement("span");v.classList.add("status-pill");const E=document.createElement("span");E.className="status-badge-dot",v.appendChild(E);const w=document.createElement("span");t.status==="pending"?(v.classList.add("status-pending"),w.textContent=h("statusPending")):t.status==="processing"?(v.classList.add("status-pending"),w.textContent=h("statusProcessing")):t.status==="success"?(v.classList.add("status-success"),w.textContent=h("statusSuccess")):(v.classList.add("status-error"),w.textContent=h("statusError")),v.appendChild(w),y.appendChild(v);const b=document.createElement("div");b.style.display="flex",b.style.gap="0.25rem";const p=document.createElement("button");p.className="btn btn-ghost btn-sm",p.textContent=h("btnDownload"),p.disabled=!t.compressedBlob,p.onclick=()=>{if(!t.compressedBlob||!t.compressedUrl)return;const g=document.createElement("a");g.href=t.compressedUrl;const C=t.compressedBlob.type.includes("webp")?".webp":".jpg";g.download=t.file.name.replace(/\.[^.]+$/,"")+"-compressed"+C,document.body.appendChild(g),g.click(),document.body.removeChild(g)};const m=document.createElement("button");m.className="btn btn-ghost btn-sm btn-danger",m.textContent=h("btnDelete"),m.onclick=()=>{t.blobUrl&&URL.revokeObjectURL(t.blobUrl),t.compressedUrl&&URL.revokeObjectURL(t.compressedUrl),r.jobs=r.jobs.filter(g=>g.id!==t.id),L()},b.appendChild(p),b.appendChild(m),y.appendChild(b),i.appendChild(l),i.appendChild(d),i.appendChild(u),i.appendChild(y),G.appendChild(i)}if(K.innerHTML="",r.jobs.length>0){const t=document.createElement("span");t.className="summary-chip",t.innerHTML=`<strong>${r.jobs.length}</strong> 张图片`,K.appendChild(t);const i=document.createElement("span");if(i.className="summary-chip",i.innerHTML=`<strong>${$(e)}</strong> ➝ ${a>0?$(a):"待计算"}`,K.appendChild(i),a>0){const d=(1-a/e)*100,c=document.createElement("span");c.className="summary-chip",c.innerHTML=`总体减少 <strong>${d.toFixed(1)}%</strong>`,K.appendChild(c)}}const n=r.jobs.some(t=>!!t.compressedBlob);te.disabled=!n;const s=r.jobs.filter(t=>t.status==="success"||t.status==="error").length,o=r.jobs.length;if(o===0)I.textContent=h("progressReady"),O.style.width="0%";else{const t=s/o*100;O.style.width=`${t}%`,s===0?I.textContent=r.lang==="zh"?`已添加 ${o} 张图片，等待开始压缩`:`${o} image(s) added. Ready to start.`:I.textContent=r.lang==="zh"?`已完成 ${s} / ${o} 张`:`Done ${s} / ${o}`}}function oe(e,a){if(r.scenario=e,z.forEach(t=>{const i=t.getAttribute("data-scenario")||null;t.classList.toggle("active",i===e)}),!a)return;let n=200,s=!1;e==="passport"?(n=200,s=!0):e==="gov"?(n=500,s=!0):e==="social"&&(n=300,s=!1),x.value=String(n);const o=document.querySelector("#limit-resolution");o&&(o.checked=s),U({targetKb:n,limitResolution:s,scenario:e})}function he(e){return new Promise(a=>{const n=new Image;n.onload=()=>{e.originalWidth=n.naturalWidth,e.originalHeight=n.naturalHeight,a()},n.onerror=()=>a(),n.src=e.blobUrl||URL.createObjectURL(e.file)})}async function j(e,a,n){const s=new Image;s.decoding="async";const o=e.blobUrl||URL.createObjectURL(e.file);await new Promise((p,m)=>{s.onload=()=>p(),s.onerror=()=>m(new Error("无法加载图片")),s.src=o});const t=document.createElement("canvas"),i=t.getContext("2d");if(!i)throw new Error("Canvas 不可用");let l=s.naturalWidth,d=s.naturalHeight;if(n){const m=Math.max(l,d);if(m>2e3){const g=2e3/m;l=Math.round(l*g),d=Math.round(d*g)}}t.width=l,t.height=d,i.drawImage(s,0,0,l,d);const c=e.targetSize;if(e.originalSize<=c){const p=await new Promise(m=>{t.toBlob(g=>m(g),e.file.type||"image/jpeg",.9)});if(!p)throw new Error("压缩失败");e.compressedBlob=p,e.compressedSize=p.size,e.compressedUrl=URL.createObjectURL(p),e.status="success",e.message="原图已满足大小要求";return}const f=a?"image/jpeg":e.file.type||"image/jpeg";let S=.2,u=.95,y=null,v=1/0,E=null,w=1/0;for(let p=0;p<7;p++){const m=(S+u)/2,g=await new Promise(R=>{t.toBlob(re=>R(re),f,m)});if(!g)break;const C=g.size,k=Math.abs(C-c);C<=c&&k<v&&(v=k,y=g),C<w&&(w=C,E=g),C>c?u=m:S=m}const b=y??E;if(!b)throw new Error("已压到极限，仍无法达到目标大小");e.compressedBlob=b,e.compressedSize=b.size,e.compressedUrl=URL.createObjectURL(b),e.status="success",b.size>c&&(e.message=r.lang==="zh"?"已压到极限，但仍略大于目标":"Compressed but slightly above target size")}async function ve(e,a,n){const[{decode:s},{encode:o},{resize:t}]=await Promise.all([N(()=>import("./index-CEDPNOBM.js"),[]),N(()=>import("./index-CJRyUfGh.js"),[]),N(()=>import("./index-Dc9k37mQ.js"),[])]),i=await e.file.arrayBuffer();let l=await s(i);if(n){const b=Math.max(l.width,l.height);if(b>2e3){const p=2e3/b,m=Math.round(l.width*p),g=Math.round(l.height*p);l=await t(l,{width:m,height:g})}}if(e.originalSize<=a){const w=await o(l,{quality:85}),b=new Blob([w],{type:"image/webp"});e.compressedBlob=b,e.compressedSize=b.size,e.compressedUrl=URL.createObjectURL(b),e.status="success",e.message="原图已满足大小要求";return}let d=35,c=92,f=null,S=1/0,u=null,y=1/0;for(let w=0;w<7;w++){const b=Math.round((d+c)/2),p=await o(l,{quality:b}),m=p.byteLength,g=Math.abs(m-a);m<=a&&g<S&&(S=g,f=p),m<y&&(y=m,u=p),m>a?c=b-1:d=b+1}const v=f??u;if(!v)throw new Error("已压到极限，仍无法达到目标大小");const E=new Blob([v],{type:"image/webp"});e.compressedBlob=E,e.compressedSize=E.size,e.compressedUrl=URL.createObjectURL(E),e.status="success",E.size>a&&(e.message=r.lang==="zh"?"已压到极限，但仍略大于目标":"Compressed but slightly above target size")}async function ye(e,a,n){e.status="processing",e.message=void 0,L();const s=e.targetSize,o=e.file.type||"",t=o.includes("jpeg")||o.includes("jpg");try{t?await ve(e,s,n):await j(e,a,n)}catch(i){if(t)try{await j(e,a,n);return}catch{}e.status="error",e.message=i instanceof Error?i.message:"压缩失败"}}async function we(){if(r.isProcessing||r.jobs.length===0)return;r.isProcessing=!0,A.disabled=!0;const e=document.getElementById("start-btn-label");e&&(e.textContent=r.lang==="zh"?"压缩中…":"Compressing…");const a=document.querySelector("#allow-convert")?.checked??!0,n=document.querySelector("#limit-resolution")?.checked??!1,s=r.jobs.filter(t=>t.status==="pending"||t.status==="error"),o=s.length;for(let t=0;t<s.length;t++){const i=s[t];try{await he(i),await ye(i,a,n)}catch(c){i.status="error",i.message=c instanceof Error?c.message:h("unknownError")}const l=r.jobs.filter(c=>c.status==="success"||c.status==="error").length,d=l/r.jobs.length*100;O.style.width=`${d}%`,I.textContent=r.lang==="zh"?`正在压缩 ${t+1} / ${o}（总进度：${l} / ${r.jobs.length}）`:`Compressing ${t+1} / ${o} (overall: ${l} / ${r.jobs.length})`,L()}r.isProcessing=!1,A.disabled=!1,e&&(e.textContent=q[r.lang]["start-btn-label"])}function Se(){P.addEventListener("click",()=>{_.click()}),_.addEventListener("change",n=>{const s=n.target;s.files&&(V(s.files),s.value="")}),se.forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-lang")||"en";M(s),L()})});const e=document.querySelector("#allow-convert"),a=document.querySelector("#limit-resolution");e&&e.addEventListener("change",()=>{U({allowConvert:e.checked})}),a&&a.addEventListener("change",()=>{U({limitResolution:a.checked,scenario:null}),r.scenario=null,z.forEach(n=>n.classList.remove("active"))}),z.forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-scenario")||null;oe(s,!0)})}),["dragenter","dragover"].forEach(n=>{P.addEventListener(n,s=>{s.preventDefault(),s.stopPropagation(),P.classList.add("dragover")})}),["dragleave","drop"].forEach(n=>{P.addEventListener(n,s=>{s.preventDefault(),s.stopPropagation(),P.classList.remove("dragover")})}),P.addEventListener("drop",n=>{const s=n.dataTransfer;s?.files&&s.files.length>0&&V(s.files)}),document.querySelectorAll(".chip[data-kb]").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-kb");s&&(x.value=s,U({targetKb:Number(s),scenario:null}),r.scenario=null,z.forEach(o=>o.classList.remove("active")))})}),x.addEventListener("change",()=>{const n=parseInt(x.value||"0",10);Number.isFinite(n)&&n>0&&(U({targetKb:n,scenario:null}),r.scenario=null,z.forEach(s=>s.classList.remove("active")))}),A.addEventListener("click",()=>{if(r.jobs.length===0){alert(h("alertAddOne"));return}const n=parseInt(x.value||"0",10),o=(Number.isFinite(n)&&n>0?n:200)*1024;r.jobs.forEach(t=>{t.targetSize=o,(t.status==="success"||t.status==="error")&&(t.compressedUrl&&URL.revokeObjectURL(t.compressedUrl),t.compressedBlob=void 0,t.compressedUrl=void 0,t.compressedSize=void 0,t.message=void 0,t.status="pending")}),L(),we().catch(t=>{console.error(t),alert(h("alertProcessingError")),r.isProcessing=!1,A.disabled=!1;const i=document.getElementById("start-btn-label");i&&(i.textContent=q[r.lang]["start-btn-label"])})}),fe.addEventListener("click",()=>{r.jobs.length!==0&&window.confirm(h("confirmClear"))&&(r.jobs.forEach(n=>{n.blobUrl&&URL.revokeObjectURL(n.blobUrl),n.compressedUrl&&URL.revokeObjectURL(n.compressedUrl)}),r.jobs=[],r.nextId=1,L())}),te.addEventListener("click",async()=>{const n=await N(()=>import("./jszip.min-D7KnG0-e.js").then(d=>d.j),[]),s=new n.default,o=r.jobs.filter(d=>d.compressedBlob);if(o.length===0)return;o.forEach(d=>{if(!d.compressedBlob)return;const c=".jpg",f=d.file.name.replace(/\.[^.]+$/,"");s.file(`${f}-compressed${c}`,d.compressedBlob)});const t=await s.generateAsync({type:"blob"}),i=URL.createObjectURL(t),l=document.createElement("a");l.href=i,l.download="compressed-images.zip",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(i)})}Se();const B=ae();function Ee(){const e=window.localStorage.getItem(D);return e==="en"||e==="zh"?e:(navigator.language||navigator.userLanguage||"").toLowerCase().startsWith("zh")?"zh":"en"}function Ce(){window.localStorage.getItem(D)||r.lang==="zh"||fetch("https://ipapi.co/json/").then(a=>a.json()).then(a=>{const n=a.country_code?.toUpperCase();["CN","TW","HK","MO","SG"].includes(n)&&!window.localStorage.getItem(D)&&r.lang==="en"&&(M("zh"),L())}).catch(()=>{})}const Le=Ee();M(Le);Ce();x.value=String(B.targetKb);const Q=document.querySelector("#allow-convert"),X=document.querySelector("#limit-resolution");Q&&(Q.checked=B.allowConvert);X&&(X.checked=B.limitResolution);B.scenario&&(oe(B.scenario,!1),r.scenario=B.scenario);L();be();export{N as _};
