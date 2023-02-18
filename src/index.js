import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginApp from "./components/LoginScreen/LoginApp";
import "./styles.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LoginApp />
    </React.StrictMode>
);