import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme } from './Component/Contents/Begin/Theme';
import { CountContext } from './Component/Contents/TongHop/CountContext';
import { UserContext } from './Component/User/UserContext/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <CountContext>
        <UserContext>
          <App />
        </UserContext>
      </CountContext>
    </Theme>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
