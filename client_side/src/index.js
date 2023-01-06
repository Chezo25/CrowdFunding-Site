import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';


import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render( <ThirdwebProvider desiredChainId = { ChainId.Goerli }>
    <Router >
    
    <Route path = "/"
    component = { App }
    /> </Router>
     </ThirdwebProvider>
    
    

);