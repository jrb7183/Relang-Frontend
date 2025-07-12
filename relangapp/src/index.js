import React from 'react';
import ReactDOM from 'react-dom/client';
import ConsTable from './components/consTable'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const rows =[
  [
    {isHeader: true, text: "Consonants"},
    {isHeader: true, text: "Labial"},
    {isHeader: true, text: "Alveolar"},
    {isHeader: true, text: "Velar"},
  ],
  [
    {isHeader: true, text: "Nasal"},
    {isHeader: false, text: "m"},
    {isHeader: false, text: "n"},
    {isHeader: false, text: "ŋ"},
  ],
  [
    {isHeader: true, text: "Plosive"},
    {isHeader: false, text: "p"},
    {isHeader: false, text: "t"},
    {isHeader: false, text: "k"},
  ],
  [
    {isHeader: true, text: "Fricative"},
    {isHeader: false, text: "f"},
    {isHeader: false, text: "s"},
    {isHeader: false, text: "x"},
  ]
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ConsTable rows={rows} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
