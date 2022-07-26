import { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import { Number } from "./Number";
import { Button1 } from "./Button";
import { Button2 } from "./Buttondown";
import { Button3 } from "./Buttonreset";
// importとexportをしっかり定義

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "yellow",
      }}
    >
      <Number count={count} />
      <Grid container spacing={3}>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button1
            setCountup={() => {
              setCount(count + 1);
            }}
          />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button2
            setCountdown={() => {
              return setCount(count - 1);
            }}
          />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button3
            setCountreset={() => {
              return setCount(0);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
