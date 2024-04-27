import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Separator } from "./components/ui/separator";

const Checklists = () => {
  return (
    <>
      <div className="flex w-3/4 h-screen justify-center items-center  m-auto">
        <div className="flex justify-between w-full h-3/4 ">
          <ScrollArea className="w-1/4 h-full rounded-md border p-4">
            <div className="mt-3 hover:cursor-pointer">
              <span> Piknik </span>
              <Separator className="mt-2" />
            </div>
            <div className="mt-3">
              <span> Piknik </span>
              <Separator className="mt-2" />
            </div>
            <div className="mt-3">
              <span> Piknik </span>
              <Separator className="mt-2" />
            </div>
            <div className="mt-3">
              <span> Piknik </span>
              <Separator className="mt-2" />
            </div>
          </ScrollArea>

          <Card className="w-full  p-3 ">

            <div className="flex h-full justify-center items-center">
               <span className="flex justify-center items-center text-3xl">&#9786; Please pick  a list to check your items &#9786;</span> 
            </div>

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

export default Checklists;
