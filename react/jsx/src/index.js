//1) import the react and reactdom libraries
import React from 'react';
import  ReactDOM   from 'react-dom/client';
//2) get a reference to the div with ID root
const el = element.getElementById('root');
//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);
//4)create a component
function App(){
  return <h1>Hi There!</h1>;
}
//5)show the component on the screen
root.render(<App />)
