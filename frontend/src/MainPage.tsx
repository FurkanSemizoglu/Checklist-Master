import React from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center gap-5">
      <Link to="/checkLists" className="h-[400px] w-[400px]">
        <Card className="h-full flex justify-center items-center   shadow-lg bg-[#54AAD2] hover:scale-105 transition-transform duration-300 hover:bg-[##43A3CF]">
          <CardHeader>
            <CardTitle>Show my list of checklists</CardTitle>
            <CardDescription>You can see list of your checklists</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link to="/newCheckList" className="h-[400px] w-[400px]">
        <Card className="h-full flex justify-center items-center shadow-lg hover:scale-105 transition-transform duration-300" style={{ backgroundColor: "#4bab78" }}>
          <CardHeader>
            <CardTitle>Add new checklist list</CardTitle>
            <CardDescription>You can add your own checklists</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default MainPage;
