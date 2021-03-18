import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

function PdfLoader({ url, beforeLoad, children}) {
  const [pdfDocument, setPdfDocument] = useState(null);

  function password() {
  }

  function progress({ loaded, total }) {
    const level = loaded / total;
    const percent = Math.round(level * 100);

    console.log(percent);
  }

  useEffect(() => {
    if (url) {
      window
        .PDFViewerApplication
        .loadDocument(url, password, progress)
        .then(setPdfDocument);
    } else {
      setPdfDocument(null);
    }
  }, [url]);

  return (pdfDocument ? children(pdfDocument) : beforeLoad);
}

export default PdfLoader;
