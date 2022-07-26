import { Button2 } from "./Buttondown";
// importとexportをしっかり定義

function App() {
  const [count, setCount]= useState(0);
  


  return (
    <div>
     <Number count={count} />
      <Button2
        setCountdown={() => {
          return setCount(count - 1);
        }}
      />
    </div>
  );
}

export default App;
