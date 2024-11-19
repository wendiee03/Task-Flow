// src/index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container!); // Create a root

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);