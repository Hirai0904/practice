import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "lime", // ボックス背景色
    border: 10,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "green", //文字色
    height: 48,
    padding: "0 30px",
  },
});

interface Props {
  setCountdown: () => void;
}
export const Button2 = (Props: Props) => {
  const classes = useStyles();
  return (
    <Button size="large" className={classes.root} onClick={Props.setCountdown}>
      down
    </Button>
  );
};
//  ボタンを押すという動作を作る
