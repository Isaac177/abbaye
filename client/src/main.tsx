import React from 'react'
import App from './App.tsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <NextUIProvider>
          <App />
        </NextUIProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
