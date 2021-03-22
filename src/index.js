import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Schools from './Schools';
import {data} from "./store/store";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
    <Schools data={data}/>
  </>,
  document.getElementById('root')
);

reportWebVitals();
