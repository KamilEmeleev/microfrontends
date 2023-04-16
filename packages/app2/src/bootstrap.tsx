import * as React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = rootElement && createRoot(rootElement);

root?.render(<App />);
