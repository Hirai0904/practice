import react from "react";
import{makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        background: 'red',// ボックス背景色
        border:10,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'blue',//文字色
        height: 48,
        padding: '0 30px',
    },
});

interface Props {
    setCount: () => void;

}
export const Button = (Props:Props) =>{
    const classes = useStyles();
 return <button className={classes.root}

       onClick= {Props.setCount}
       >
        button</button>;

};
//  ボタンを押すという動作を作る