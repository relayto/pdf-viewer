import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import PdfLoader from './PdfLoader';
import Viewer from './Viewer';

function App() {
	const [pdfSource, setPdfSource] = useState(null);

	function openFile({ detail }) {
		setPdfSource(detail.pdfSource);
	}

	useEffect(() => {
		window.PDFViewerApplication.addEventOpenFile(openFile);

		return () => {
			window.PDFViewerApplication.removeEventOpenFile(openFile);
			window.PDFViewerApplication.unbindEvents();
		};
	}, []);

	return (
		<div>
			<PdfLoader
				url={pdfSource}
				beforeLoad={<div>There is no Document...</div>}
			>
				{(pdfDocument) => (
					<Viewer pdfDocument={pdfDocument} />
				)}
			</PdfLoader>
		</div>
	);
}

export default App;
