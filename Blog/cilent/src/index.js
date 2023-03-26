//1) import the react and reactDOM libraries
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';

//2) get a reference to the div with id root
const el = document.getElementById('root');

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

// //4) create a component
// function  App() {
//   return <h1>Hi there</h1>
// }

//5) show the component on the screen
root.render(<App />);
