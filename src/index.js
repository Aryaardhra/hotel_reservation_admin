import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeContextProvider } from './context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
//import { DarkModeContextProvider } from "./context/DarkModeContextProvider";
//import { SearchContextProvider } from './context/SearchContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
   <AuthContextProvider>
   <DarkModeContextProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </DarkModeContextProvider>
    </AuthContextProvider>
);
