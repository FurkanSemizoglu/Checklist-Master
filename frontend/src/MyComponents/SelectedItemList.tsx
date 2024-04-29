import { getSingleChecklist } from "@/actions";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect } from "react";
import { connect } from "react-redux";


interface SelectedItemListProps {
  activeId: String | null;
 // props : any;  
 getSingleChecklist: () => void;
}


const SelectedItemList : React.FC<SelectedItemListProps> = ({activeId , getSingleChecklist}) => {

  useEffect(() => {
    console.log("active id ", activeId);

    getSingleChecklist();


  }, [activeId]);


  return (
    <div className="flex flex-col h-full justify-between items-center">
      <div className="flex items-center justify-center w-full h-1/4">
        Ürünler
      </div>

      <div className="h-full w-4/5 flex items-start flex-wrap">
        <div className="flex h-auto items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions</label>
        </div>

        <div className="flex h-auto items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions</label>
        </div>

        <div className="flex h-auto items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions</label>
        </div>


        <div className="flex h-auto items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions</label>
        </div>


        <div className="flex h-auto items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions</label>
        </div>




      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    checklists: state.checklists,
  };
};  


const mapDispatchToProps = {
  getSingleChecklist,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItemList);