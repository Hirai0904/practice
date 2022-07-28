import { useCallback, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Number } from "./Number";
import { Button1 } from "./Button";
// importとexportをしっかり定義
const useStyles = makeStyles({
  root: {
    backgroundColor: "yellow", // ボックス背景色,
    color: "yellow",
  },
});

function App() {
  const [count, setCount] = useState(0);
  const callback1 = useCallback(() => {
    return setCount(count + 1);
  }, [count]);
  const callback2 = useCallback(() => {
    return setCount(count - 1);
  }, [count]);
  const callback3 = useCallback(() => {
    return setCount(0);
  }, [0]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Number count={count} />
      <Grid container spacing={3}>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button1
            onClick={() => {
              callback1();
            }}
            label={"up"}
          />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button1
            onClick={() => {
              callback2();
            }}
            label={"down"}
          />
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Button1
            onClick={() => {
              callback3();
            }}
            label={"reset"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
function count(count: any) {
  throw new Error("Function not implemented.");
}
