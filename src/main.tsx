import React from "react";

import App from './App.tsx'
import AuthProvider from "./context/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";


import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster closeButton={true} position="top-right" richColors />
          <App />
        </QueryClientProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
