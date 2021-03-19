import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

function App() {
	const container = useRef(null);

	useEffect(() => {
		window.PDFViewerApplication.container = container.current;

		return () => {
			window.PDFViewerApplication.unbindEvents();
		};
	}, []);

	return (
		<div>
			<div id="PDFViewerContainer" className="viewerContainer" ref={container}>
				<div className="pdfViewer" />
			</div>
		</div>
	);
}

export default App;
