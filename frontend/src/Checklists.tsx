import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Separator } from "./components/ui/separator";
import { getChecklists } from "./actions";
import { connect } from "react-redux";
import LeftBarCard from "./MyComponents/LeftBarCard";
import SelectedItemList from "./MyComponents/SelectedItemList";

const Checklists = (props: any) => {
  useEffect(() => {
    props.getChecklists();
  }, []);

  const [enable, setEnable] = useState(false);

  const [activeId, setActiveId] = useState<String | null> (null);
  const enableClick = () => {
    setEnable(true);
  };

  const handleSelected = (id: String) => {
    setActiveId(id);
    setEnable(true);
  }

  console.log("props ", props);
  console.log("checklistes ", props.checklists);
  return (
    <>
      <div className="flex w-3/4 h-screen justify-center items-center  m-auto">
        <div className="flex justify-between w-full h-3/4 ">
          <ScrollArea className="w-1/4 h-full rounded-md border p-4">
            {props.checklists.map((checklist: any) => {


              return (
                <LeftBarCard
                  key={checklist._id}
                  checklist={checklist}
                  onClick={() => handleSelected(checklist._id)}
                  activeId={activeId}
                />
              );
            })}
          </ScrollArea>

          <Card className="w-full  p-3 ">
            {enable ? (

              <SelectedItemList
                activeId={activeId}
               
              
              />
            ) : (
              <div className="flex h-full justify-center items-center">
                <span className="flex justify-center items-center text-3xl">
                  &#9786; Please pick a list to check your items &#9786;
                </span>
              </div>
            )}

            {/*    <div className="flex h-full justify-center items-center">
               <span className="flex justify-center items-center text-3xl">&#9786; Please pick  a list to check your items &#9786;</span> 
            </div> */}

            {/*  <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div> */}
          </Card>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    checklists: state.checklists,
  };
};

export default connect(mapStateToProps, { getChecklists })(Checklists);
