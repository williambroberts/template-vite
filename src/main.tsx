import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import HomeScreen from './screens/HomeScreen.tsx'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './utils/Errors/ErrorBoundary.tsx'

import '@fontsource/twinkle-star';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>} />
      
       
    
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
    <HelmetProvider>
   <RouterProvider router={router}/>
   </HelmetProvider>
   </ErrorBoundary>
  </React.StrictMode>,
)
