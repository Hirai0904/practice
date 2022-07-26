import react from 'react'


interface Props {
    count:number
}

export const Number = (Props: Props ) => {
// Propsの役割　App>number の親子関係の中で、子にその値を渡す
    return(<div>
        
        クリックした回数：{Props.count}
    </div>)
}