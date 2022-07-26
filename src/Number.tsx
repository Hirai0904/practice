import React from "react";
// import Grid from "@material-ui/core/Grid";
// const useStyles = makeStyles({
//   root: {
//       },
// });
interface Props {
  count: number;
}
/* <Grid container alignItems="center" justify="center">
  <Grid item xs={8}></Grid>
</Grid>; */
export const Number = (Props: Props) => {
  // Propsの役割 App>number の親子関係の中で、子にその値を渡す
  return (
    <div>
      <h1
        style={{
          color: "green",
          fontSize: 60,
          margin: "auto",
          textAlign: "center",
        }}
      >
        {Props.count} 回
      </h1>
    </div>
  );
};
