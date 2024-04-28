import React, { useState } from 'react'
import { Separator } from "../components/ui/separator";

interface Checklist {
    id : string;
    title: string;
  }

  
interface LeftBarCardProps {
    checklist: Checklist;
    onClick: () => void;
 //   key : Key;
}  

interface Key{
    key : string;
}



const LeftBarCard : React.FC<LeftBarCardProps>= ({ checklist , onClick}) => {

    const [isSelected, setSelected] = useState(false);

const handleSelected = (onClick : ()=> void) => {

     onClick();
     setSelected(!isSelected);
}

    return (
        <div  onClick={() => {
            handleSelected(onClick)}} 
                className={`mt-3 ${isSelected ? 'translate-x-3 transition-transform hover:cursor-pointer' : ' hover:cursor-pointer'}`}
        >
            <span>{checklist.title}</span>
            <Separator className="mt-2" />
        </div>
    )
}

export default LeftBarCard