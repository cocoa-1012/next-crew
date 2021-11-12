// import People1 from "../const/tableData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AdminTeamID, mainAPIURL } from "../config/api";
import PaginationSection from "./paginationSection";
import TargetTable from "./targetTable";

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
    if (targetLists.length == 0) {
      if (targetData.length == 0) {
        sendGetRequest();
      } else {
        targetData.results.map((item) => tempTargetData.push(item.name));
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
