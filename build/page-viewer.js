(()=>{var n,e={1547:(n,e,r)=>{"use strict";var t=r(3379),o=r.n(t),i=r(5426);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=r(6306),p=r(7692),d=r(3174),l=r(3832),s=r(6454);function g(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,p.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}window.rtPDFPageViewer=new function n(){var e=this;(0,a.Z)(this,n),(0,p.Z)(this,"container",null),(0,p.Z)(this,"onPassword",(function(){})),(0,p.Z)(this,"onProgress",(function(n){var e=n.loaded/n.total,r=Math.round(100*e);console.log(r)})),(0,p.Z)(this,"initialize",(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.isDefaultWorker||(d.GlobalWorkerOptions.workerPort=null,d.GlobalWorkerOptions.workerSrc=n.workerSrc),e.container=n.container||window.document.getElementById(n.containerId||"pdfViewerContent"),e.eventBus=new s.EventBus})),(0,p.Z)(this,"open",(function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.pdfLoadingTask=d.getDocument({url:n,disableRange:t}),e.pdfLoadingTask.onPassword=e.onPassword,e.pdfLoadingTask.onProgress=e.onProgress,e.pdfLoadingTask.promise.then((function(n){return n.getPage(r).then((function(n){var t=new l.n(c({container:e.container,id:r,scale:1,defaultViewport:n.getViewport({scale:1}),eventBus:e.eventBus},o));return t.setPdfPage(n),t.draw()}))}))}))}},5426:(n,e,r)=>{"use strict";r.d(e,{Z:()=>c});var t=r(7705),o=r.n(t),i=r(6742),a=r.n(i),p=r(8307),d=r(1764),l=o()((function(n){return n[1]})),s=a()(p),g=a()(d);l.push([n.id,".viewerContainer {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    outline: none;\n}\n\n.pdfViewer .canvasWrapper {\n    overflow: hidden;\n}\n\n.pdfViewer .page {\n    direction: ltr;\n    width: 816px;\n    height: 1056px;\n    margin: 1px auto -8px;\n    position: relative;\n    overflow: visible;\n    border: 9px solid transparent;\n    background-clip: content-box;\n    border-image: url("+s+") 9 9 repeat;\n    background-color: rgba(255, 255, 255, 1);\n}\n\n.pdfViewer.removePageBorders .page {\n    margin: 0 auto 10px;\n    border: none;\n}\n\n.pdfViewer.singlePageView {\n    display: inline-block;\n}\n\n.pdfViewer.singlePageView .page {\n    margin: 0;\n    border: none;\n}\n\n.pdfViewer.scrollHorizontal,\n.pdfViewer.scrollWrapped,\n.spread {\n    margin-left: 3.5px;\n    margin-right: 3.5px;\n    text-align: center;\n}\n\n.pdfViewer.scrollHorizontal,\n.spread {\n    white-space: nowrap;\n}\n\n.pdfViewer.removePageBorders,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.spread .page,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.spread .page,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page {\n    margin-left: -3.5px;\n    margin-right: -3.5px;\n}\n\n.pdfViewer.removePageBorders .spread .page,\n.pdfViewer.removePageBorders.scrollHorizontal .page,\n.pdfViewer.removePageBorders.scrollWrapped .page {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.pdfViewer .page canvas {\n    margin: 0;\n    display: block;\n}\n\n.pdfViewer .page canvas[hidden] {\n    display: none;\n}\n\n.pdfViewer .page .loadingIcon {\n    position: absolute;\n    display: block;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: url("+g+") center no-repeat;\n}\n\n.pdfPresentationMode .pdfViewer {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.pdfPresentationMode .pdfViewer .page,\n.pdfPresentationMode .pdfViewer .spread {\n    display: block;\n}\n\n.pdfPresentationMode .pdfViewer .page,\n.pdfPresentationMode .pdfViewer.removePageBorders .page {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.pdfPresentationMode:fullscreen .pdfViewer .page {\n    margin-bottom: 100%;\n    border: 0;\n}\n\n.textLayer {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    opacity: 0.2;\n    line-height: 1;\n}\n\n.textLayer > span {\n    color: transparent;\n    position: absolute;\n    white-space: pre;\n    cursor: text;\n    transform-origin: 0% 0%;\n}\n\n.textLayer .highlight {\n    margin: -1px;\n    padding: 1px;\n    background-color: rgba(180, 0, 170, 1);\n    border-radius: 4px;\n}\n\n.textLayer .highlight.begin {\n    border-radius: 4px 0 0 4px;\n}\n\n.textLayer .highlight.end {\n    border-radius: 0 4px 4px 0;\n}\n\n.textLayer .highlight.middle {\n    border-radius: 0;\n}\n\n.textLayer .highlight.selected {\n    background-color: rgba(0, 100, 0, 1);\n}\n\n.textLayer ::selection {\n    background: rgba(0, 0, 255, 1);\n}\n\n.textLayer .endOfContent {\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 100%;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    cursor: default;\n    user-select: none;\n}\n\n.textLayer .endOfContent.active {\n    top: 0;\n}\n",""]);const c=l},1764:(n,e,r)=>{"use strict";n.exports=r.p+"ff2dfa442d903d9d5e30.gif"},8307:(n,e,r)=>{"use strict";n.exports=r.p+"020ca14de41fcc6c4d0b.png"},3414:()=>{},172:()=>{},2001:()=>{},3779:()=>{},6558:()=>{},2258:()=>{},263:()=>{},7146:()=>{},9498:()=>{},3500:()=>{},6965:()=>{},546:()=>{}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,n=[],t.O=(e,r,o,i)=>{if(!r){var a=1/0;for(l=0;l<n.length;l++){for(var[r,o,i]=n[l],p=!0,d=0;d<r.length;d++)(!1&i||a>=i)&&Object.keys(t.O).every((n=>t.O[n](r[d])))?r.splice(d--,1):(p=!1,i<a&&(a=i));p&&(n.splice(l--,1),e=o())}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,o,i]},t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",(()=>{var n={742:0};t.O.j=e=>0===n[e];var e=(e,r)=>{var o,i,[a,p,d]=r,l=0;for(o in p)t.o(p,o)&&(t.m[o]=p[o]);for(d&&d(t),e&&e(r);l<a.length;l++)i=a[l],t.o(n,i)&&n[i]&&n[i][0](),n[a[l]]=0;t.O()},r=self.webpackChunkpdf_viewer=self.webpackChunkpdf_viewer||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=t.O(void 0,[509],(()=>t(1547)));o=t.O(o)})();