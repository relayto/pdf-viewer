import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

function Viewer () {
  const containerRef = useRef(null);

  useEffect(() => {
    window.PDFViewerApplication.initViewer(containerRef.current);

    return () => {
      window.PDFViewerApplication.cleanup();
    };
  }, []);

  return (
    <div className="viewerContainer" ref={containerRef}>
      <div class="pdfViewer" />
    </div>
  );
}

export default Viewer;
