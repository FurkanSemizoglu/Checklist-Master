import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Separator } from "./components/ui/separator";
import { getChecklists, getSingleChecklist } from "./actions";
import { connect } from "react-redux";
import LeftBarCard from "./MyComponents/LeftBarCard";
import SelectedItemList from "./MyComponents/SelectedItemList";

interface ChecklistItem {
  _id: string;
  title: string;
  // Diğer öğe özellikleri
}

interface singleChecklistItems {
  _id: string;
  title: string;
  items: string[];
  // Diğer öğe özellikleri
}

interface ChecklistsProps {
  checklists: ChecklistItem[];
  checklistItems: singleChecklistItems;
  getChecklists: () => void;
  getSingleChecklist: (id: string) => void;
}

const Checklists: React.FC<ChecklistsProps> = (props) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [enable, setEnable] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);


  const [checklists, setChecklists] = useState<ChecklistItem[]>([]);
 
  useEffect(() => {
    props.getChecklists();
    setChecklists(props.checklists);
    console.log("first checklists", checklists);  
  }, []);

  const handleSelected = (id: string) => {
    const index = selectedItems.indexOf(id);
    if (index === -1) {
      setSelectedItems([...selectedItems, id]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItems(updatedItems);
    }
    setActiveId(id);
    setEnable(true);
    console.log("props.checklisItemsss" ,  props.checklistItems) 
    props.getSingleChecklist(id); // Fixed the method name here
    console.log("props.checklisItemsss" ,  props.checklistItems) 
  };

  console.log(checklists , "Checklists")

  return (
    <>
      <div className="flex w-3/4 h-screen justify-center items-center m-auto">
        <div className="flex justify-between w-full h-3/4">
          <ScrollArea className="w-1/4 h-full rounded-md border p-4">
            {props.checklists?.map((checklist: ChecklistItem) => (
              <LeftBarCard
                key={checklist._id}
                checklist={checklist}
                onClick={() => handleSelected(checklist._id)}
                active={activeId === checklist._id}
                activeId={activeId}
              />
            ))}
          </ScrollArea>

          <Card className="w-full p-3 ">
            {enable ? (
              <SelectedItemList activeId={activeId} />
            ) : (
              <div className="flex h-full justify-center items-center">
                <span className="flex justify-center items-center text-3xl">
                  &#9786; Please pick a list to check your items &#9786;
                </span>
              </div>
            )}
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

export default connect(mapStateToProps, { getChecklists ,getSingleChecklist })(Checklists);
