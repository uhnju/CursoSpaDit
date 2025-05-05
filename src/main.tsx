/// <reference types="vite/client" />

import ReactDOM from 'react-dom/client'
import { SpaditContextoProvider } from '@dit/spad-rdit_library';
import { BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const App = lazy(() => import(/* @vite-ignore */ `./AppRoutes/${import.meta.env.VITE_APP_ROUTE}`));

// HTML <title></title>
document.title = `${import.meta.env.VITE_TITLE}`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SpaditContextoProvider>
      <BrowserRouter basename={import.meta.env.VITE_URL_NATIVA_SPADIT} >
        <App/>
      </BrowserRouter>
  </SpaditContextoProvider>
)  
