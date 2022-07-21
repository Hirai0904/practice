import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Number} from "./Number";
import { Buttonmain } from './Button';
import {makeStyles} from '@material-ui/core/styles'
// importとexportをしっかり定義
import Container from '@material-ui/core/Container'
import { isReturnStatement } from 'typescript';
const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
      
    },
  });
function App() {
  const [count, setCount]= useState(0);
  
    const classes = useStyles();
  

  return (
    <Container maxWidth="sm" className = {classes.root}>
     <Number count={count} />
      <Buttonmain
        setCount={() => {
          setCount(count +1)
        }
      }/>
      
    </Container>
  );
}

export default App;
