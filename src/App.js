import React from 'react';
import TimestampToDate from './stateless-component';
import Contador from './statefull-component'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ejemplo de componentes con estado y sin estado</h1>
      <hr />
      <h2>Componente sin estado (stateless)</h2>
      <TimestampToDate timestamp={1475700297974}></TimestampToDate>
      <hr />
      <h2>Componente con estado (statefull)</h2>
      <Contador></Contador>
    </div>
  );
}

export default App;
