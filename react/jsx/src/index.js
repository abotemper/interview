//1) import the react and reactdom libraries
import React from 'react';
import  ReactDOM   from 'react-dom/client';

//2) get a reference to the div with ID root
const el = document.getElementById('root');

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4)create a component
function App(){
  let message = 'Bye there!';
  if (Math.random() > 0.5) {
    message = 'Hello there';
  }
  const date = new Date();
  const time = date.toLocaleTimeString();
  return <h1>{ time } </h1>;

  ;

}

//5)show the component on the screen
root.render(<App />)
