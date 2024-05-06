import React, { useState } from 'react'
import { Separator } from "../components/ui/separator";

interface Checklist {
    _id : string;
    title: string;
  }

  
interface LeftBarCardProps {
    checklist: Checklist;
    onClick: (id: String ) => void;
   // key : Key;
    active: boolean;
    activeId : String | null;
}  

interface Key{
    key : string;
}



const LeftBarCard : React.FC<LeftBarCardProps>=  ({ checklist , onClick  , activeId}) => {

    const [isSelected, setSelected] = useState(false);


    console.log("active id " , activeId);
    console.log("checklist id " , checklist._id );

/* const handleSelected = (onClick : ()=> void) => {

     onClick();
     setSelected(!isSelected);
} */
const handleSelected = () => {
    onClick(checklist._id);  
    setSelected(!isSelected); 
};

    return (
        <div  onClick={handleSelected} 
                className={`mt-3 ${(activeId === checklist._id ) ? 'translate-x-3 transition-transform hover:cursor-pointer duration-500' : ' hover:cursor-pointer'}`}
        >
            <span>{checklist.title}</span>
            <Separator className="mt-2" />
        </div>
    )
}

export default LeftBarCard