import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "lime", // ボックス背景色
    border: 10,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "green", //NOTE:文字色
    height: 48,
    padding: "0 30px",
  },
});

interface Props {
  onClick: () => void;
  label: string; //NOTE:情報の型を決める
}
export const Button1 = (props: Props) => {
  const classes = useStyles();
  return (
    <Button size="large" className={classes.root} onClick={props.onClick}>
      {props.label}
    </Button>
  );
};
//  NOTE:ボタンを押すという動作を作る
