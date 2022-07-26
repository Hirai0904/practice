import { useState } from "react";
import "./App.css";
import { Number } from "./Number";
import { Button1 } from "./Button";
import { Button2 } from "./Buttondown";
// importとexportをしっかり定義

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Number count={count} />
      <Button1
        setCountup={() => {
          setCount(count + 1);
        }}
      />
      <Button2
        setCountdown={() => {
          return setCount(count - 1);
        }}
      />
    </div>
  );
}

export default App;
