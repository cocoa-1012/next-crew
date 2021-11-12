import axios from "axios";
import React, { useEffect, useState } from "react";
import { mainAPIURL, TeamID } from "../config/api";
import AttacksModal from "./attacksModal";
import AttackTable from "./attackTable";
import PaginationSection from "./paginationSection";

export default function AttacksMain() {
  const [attackList, setAttackList] = useState([]);
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(
        mainAPIURL + "/api/v1/teams/" + TeamID + "/attacks"
      );
      setAttackList(resp.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (attackList.length == 0) {
      sendGetRequest();
    }
  });

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
            {attackList.length !== 0 && <AttackTable data={attackList} />}
          </div>
        </div>
        <PaginationSection />
      </div>
    </div>
  );
}
