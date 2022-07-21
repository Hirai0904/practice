import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Number} from "./Number";
import { Button } from './Button';
// importとexportをしっかり定義

function App() {
  const [count, setCount]= useState(0);


  return (
    <div>
     <Number count={count} />
      <Button
        setCount={() => {
          setCount(count +1)
        }
      }/>
      
    </div>
  );
}

export default App;
