import { h, render } from 'preact';

import './style.css';
import './viewerApplication';
import App from './components/App';

render(<App />, document.getElementById('pdfViewerContent'));
