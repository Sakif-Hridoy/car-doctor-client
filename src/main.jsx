import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './providers/AuthProviders.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1400px] mx-auto'>
    <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
  </div>
)
