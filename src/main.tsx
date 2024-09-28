import React from "react";
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import QueryProvider from "./lib/tanstack-query/query-provider.tsx";


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
)
