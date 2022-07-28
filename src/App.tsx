import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Number } from "./Number";
import { Button1 } from "./Button";
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
            onClick={() => {
              return setCount(count + 1);
            }}
            label={"up"}
          />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button1
            onClick={() => {
              return setCount(count - 1);
            }}
            label={"down"}
          />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button1
            onClick={() => {
              return setCount(0);
            }}
            label={"reset"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
