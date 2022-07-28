import React from "react";

interface Props {
  count: number;
}

export const Number = (props: Props) => {
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
        {props.count} 回
      </h1>
    </div>
  );
};
