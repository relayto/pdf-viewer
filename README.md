# PDF Viewer
## *Use node version 14*

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### Init Viewer
```javascript
window.PDFViewerApplication.initialize({
  spreadMode: 2,
  relaytoPagesView: [
    {
      embed: {
        pdfSvg: true,
      }
    },
    {
      style: {
        embed: {
          type: 'video',
          url: 'https://aaa.com',
        }
      },
    }
  ],
})
```

### Open PDF file
```javascript
window.PDFViewerApplication.open('https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
```

### Remove methods from current viewer
1. PDFViewerApplicationOptions.set(.., ..)
2. PDFViewerApplication.initialize(appConfig)
