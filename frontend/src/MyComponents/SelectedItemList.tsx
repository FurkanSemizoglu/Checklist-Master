import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const SelectedItemList = () => {
  return (
    <div className="flex flex-col h-full justify-between items-center">
      <div className="flex items-center justify-center h-1/4">Ürünler</div>

      <div className="flex h-3/4 justify-between items-start flex-row flex-wrap">
        <div className="items-top  flex space-x-2 p-4">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>

        <div className="items-top  flex space-x-2 p-4">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>

        <div className="items-top  flex space-x-2 p-4">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>

        <div className="items-top  flex space-x-2 p-4">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedItemList;
