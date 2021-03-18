import { h, render } from 'preact';

import './style.css';
import './viewerApplication';
import App from './components/app';

render(<App />, document.getElementById('pdfViewerContent'));
