// import People1 from "../const/tableData";
import React from "react";
import AttackTable from "./attackTable";
import PaginationSection from "./paginationSection";
const Attacks = [
  {
    name: "Attack 1",
    type: "Normal",
    params: "params 1",
    status: "ON",
    creationDate: "09/11/2020",
  },
  {
    name: "Attack 2",
    type: "Cross-Site Scripting (XSS)",
    params: "params 2",
    status: "OFF",
    creationDate: "12/04/2020",
  },
  {
    name: "Attack 3",
    type: "Injection Attacks",
    params: "params 3",
    status: "OFF",
    creationDate: "12/12/2020",
  },
  {
    name: "Attack 4",
    type: "Zero-Day Attack",
    params: "params 4",
    status: "ON",
    creationDate: "08/11/2020",
  },
  {
    name: "Attack 5",
    type: "DDoS",
    params: "params 5",
    status: "OFF",
    creationDate: "02/02/2020",
  },
  {
    name: "Attack 6",
    type: "Brute Force Attack",
    params: "params 6",
    status: "ON",
    creationDate: "09/03/2020",
  },
];
export default function TargetsMain() {
  return (
    <div className="w-full h-full bg-gray-100 scroll-y-auto p-8">
      <div className="flex flex-col justify-around  w-full h-full">
        <div className="grid grid-cols-1 mt-4">
          <div className=" h-auto ">
            <p className="font-bold text-gray-500 mx-8 p-2">Targets</p>
            <AttackTable data={Attacks} />
          </div>
        </div>
        <PaginationSection />
      </div>
    </div>
  );
}
