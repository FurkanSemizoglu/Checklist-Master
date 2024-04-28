import React from 'react'
import { Separator } from "../components/ui/separator";

interface Checklist {
    id : string;
    title: string;
  }

const LeftBarCard : React.FC<{checklist:Checklist}>= ({checklist}) => {
  return (
   
        <div className="mt-3 hover:cursor-pointer">
        <span> {checklist.title} </span>
        <Separator className="mt-2" />
        </div>
  )
}

export default LeftBarCard