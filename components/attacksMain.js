// import People1 from "../const/tableData";
import React from "react";
import AttacksModal from "./attacksModal";
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
export default function AttacksMain() {
  return (
    <div className="w-full h-full bg-gray-100 scroll-y-auto p-8">
      <div className="flex flex-col justify-around  w-full h-full">
        <div className="flex flex-row justify-between items-start px-12 py-12 my-4 bg-white rounded-lg shadow">
          <p className="rounded text-gray-700 flex-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <AttacksModal />
        </div>
        <div className="grid grid-cols-1 mt-4">
          <div className=" h-auto ">
            <p className="font-bold text-gray-500 mx-8 p-2">Attacks</p>
            <AttackTable data={Attacks} />
          </div>
        </div>
        <PaginationSection />
      </div>
    </div>
  );
}
