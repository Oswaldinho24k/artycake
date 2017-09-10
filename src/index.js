import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/muicss/dist/css/mui.min.css';


const WIthRouter=()=>(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
)


ReactDOM.render(<WIthRouter />, document.getElementById('root'));
registerServiceWorker();
