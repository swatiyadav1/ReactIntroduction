import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {App1,App2} from './App';



var root=ReactDOM.createRoot(document.getElementById('divid'));
root.render(<div className='myClass'><App nameobj='anish'/><App1 /><App2/></div>);
