import react from "react";
import Button from '@material-ui/core/Button'
interface Props {
    setCount: () => void;
}
export const Buttonmain = (Props:Props) =>{
 return <Button variant="outlined" color="secondary"
       onClick= {Props.setCount}
       >
        button</Button>;

};
//  ボタンを押すという動作を作る