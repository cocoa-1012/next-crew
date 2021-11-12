// import People1 from "../const/tableData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AdminTeamID, mainAPIURL } from "../config/api";
import PaginationSection from "./paginationSection";
import TargetTable from "./targetTable";

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
  const [targetData, setTargetData] = useState([]);
  const [targetLists, setTargetLists] = useState([]);
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        mainAPIURL + "/api/v1/teams/" + AdminTeamID + "/targets/"
      );
      setTargetData(resp.data);
      targetData.results.map((item) => tempTargetData.push(item.name));
    } catch (err) {
      console.error(err);
    }
  };
  var tempTargetData = [];
  useEffect(() => {
    console.log("targetLists", targetLists);
    if (targetLists.length == 0) {
      if (targetData.length == 0) {
        sendGetRequest();
      } else {
        targetData.results.map((item) => tempTargetData.push(item.name));
        console.log("TargetData.results", targetData.results, tempTargetData);
        setTargetLists(tempTargetData);
      }
    }
  });
  return (
    <div className="w-full h-full bg-gray-100 scroll-y-auto p-8">
      <div className="flex flex-col justify-around  w-full h-full">
        <div className="grid grid-cols-1 mt-4">
          <div className=" h-auto ">
            <p className="font-bold text-gray-500 mx-8 p-2">Targets</p>
            {targetData && <TargetTable data={targetData} />}
          </div>
        </div>
        <PaginationSection />
      </div>
    </div>
  );
}
