import react from "react";

interface Props {
    setCount: () => void;
}
export const Button = (Props:Props) =>{
 return <button 
       onClick= {Props.setCount}
       >
        button</button>;

};
//  ボタンを押すという動作を作る