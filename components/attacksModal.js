import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AdminTeamID, mainAPIURL } from "../config/api";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [opt, setOpt] = useState(0);
  const [topState, setTopState] = useState(0);
  const [fieldVal1, setFieldVal1] = useState("");
  const [fieldVal2, setFieldVal2] = useState("");
  const [fieldVal0, setFieldVal0] = useState("");
  const secondStep = () => {
    if (topState == 1 || topState == 3) {
      setTopState(2);
      setFieldVal0("");
      setFieldVal1("");
      setFieldVal2("");
    }
  };
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
  useEffect(() => {
    if (topState == 2)
      if (
        opt == 2 &&
        fieldVal1 !== "" &&
        fieldVal2 !== "" &&
        fieldVal0 !== ""
      ) {
        setTopState(3);
      } else if (opt !== 2 && fieldVal1 !== "" && fieldVal0 !== "") {
        setTopState(3);
      }
  }, [opt, topState, fieldVal1, fieldVal2, fieldVal0]);
  return (
    <>
      <button
        className="ml-16 bg-purple-700 rounded px-8 py-3 text-white font-bold uppercase hover:bg-purple-500"
        onClick={() => setShowModal(true)}
      >
        New Attack
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed mt-28 inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full mx-full ml-48 mr-8">
              <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between px-8 py-2 border-b border-solid border-blueGray-400 rounded-t">
                  <h3 className="text-3xl font-semibold">New attack</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-100"
                    onClick={() => {
                      setShowModal(false);
                      setTopState(0);
                    }}
                  >
                    <span className="flex items-center text-red h-6 w-6 text-3xl block outline-none focus:outline-none">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className=" bg-white p-2 shadow rounded-md">
                    <div className="grid grid-cols-3 px-4 py-0 border-2 border-gray-200 rounded-md flex items-center w-full">
                      <div className="flex justify-between items-center cursor-pointer mr-4">
                        {topState == 0 && (
                          <div className="flex items-center px-2">
                            <div className="flex items-center justify-center border-2 border-blue-600 text-blue-600 font-semibold w-8 h-8 rounded-full">
                              01
                            </div>
                            <p className="font-semibold ml-4 text-blue-600">
                              Select Target
                            </p>
                          </div>
                        )}
                        {topState !== 0 && (
                          <div className="flex items-center h-full px-2 py-0">
                            <div className="flex items-center justify-center bg-blue-600 text-white w-8 h-8 rounded-full">
                              ✔
                            </div>
                            <p className="font-semibold ml-4">Select Target</p>
                          </div>
                        )}
                        <Image
                          src={"/step-arrow.png"}
                          width="20"
                          height="70"
                          alt="logo"
                          className="w-48 sm:w-56 md:w-64 cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between items-center cursor-pointer mr-4">
                        {topState == 0 && (
                          <div className="flex items-center px-2">
                            <div className="flex items-center justify-center border-2 border-gray-400 text-gray-400 font-semibold w-8 h-8 rounded-full">
                              02
                            </div>
                            <p className="font-semibold ml-4 text-gray-500">
                              Select attack category & type
                            </p>
                          </div>
                        )}
                        {topState == 1 && (
                          <div className="flex items-center px-2">
                            <div className="flex items-center justify-center border-2 border-blue-600 text-blue-600 font-semibold w-8 h-8 rounded-full">
                              02
                            </div>
                            <p className="font-semibold ml-4 text-blue-600">
                              Select attack category & type
                            </p>
                          </div>
                        )}
                        {(topState == 2 || topState == 3) && (
                          <div className="flex items-center h-full px-2">
                            <div className="flex items-center justify-center bg-blue-600 text-white w-8 h-8 rounded-full">
                              ✔
                            </div>
                            <p className="font-semibold ml-4">
                              Select attack category & type
                            </p>
                          </div>
                        )}
                        <Image
                          src={"/step-arrow.png"}
                          width="20"
                          height="70"
                          alt="logo"
                          className="w-48 sm:w-56 md:w-64 cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between items-center cursor-pointer mr-4">
                        {topState == 2 && (
                          <div className="flex items-center px-2">
                            <div className="flex items-center justify-center border-2 border-blue-600 text-blue-600 font-semibold w-8 h-8 rounded-full">
                              03
                            </div>
                            <p className="font-semibold ml-4 text-blue-600">
                              Completing the required params
                            </p>
                          </div>
                        )}
                        {(topState == 1 || topState == 0) && (
                          <div className="flex items-center px-2">
                            <div className="flex items-center justify-center border-2 border-gray-400 text-gray-400 font-semibold w-8 h-8 rounded-full">
                              03
                            </div>
                            <p className="font-semibold ml-4 text-gray-500">
                              Completing the required params
                            </p>
                          </div>
                        )}
                        {topState == 3 && (
                          <div className="flex items-center h-full px-2">
                            <div className="flex items-center justify-center bg-blue-600 text-white w-8 h-8 rounded-full">
                              ✔
                            </div>
                            <p className="font-semibold ml-4">
                              Completing the required params
                            </p>
                          </div>
                        )}
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 shadow py-2 my-2 rounded-md flex">
                    <span className="text-gray-700 mx-4 mb-20 mt-2">
                      Select Targets
                    </span>
                    <select
                      className="form-select block flex-1 ml-8 mr-40 mt-12 h-12 px-4 rounded outline-none shadow"
                      onChange={() => setTopState(1)}
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="hidden"
                      ></option>
                      {targetLists.length !== 0 &&
                        targetLists.map((targetList, index) => (
                          <option key={index}>{targetList}</option>
                        ))}
                    </select>
                  </div>
                  <div className="bg-gray-100 rounded-md shadow grid grid-cols-2 gaps-4 flex p-4">
                    <div className="flex flex-col items-start justify-start mx-20 my-12">
                      <label className="inline-flex items-center mb-6">
                        <input
                          type="radio"
                          name="opt"
                          value="1"
                          onClick={() => setOpt(1)}
                        />
                        <span className="ml-2">State</span>
                      </label>

                      <label className="inline-flex items-center mb-6">
                        <input
                          type="radio"
                          name="opt"
                          value="2"
                          onClick={() => setOpt(2)}
                        />
                        <span className="ml-2">Resource</span>
                      </label>

                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="opt"
                          value="3"
                          onClick={() => setOpt(3)}
                        />
                        <span className="ml-2">Network</span>
                      </label>
                    </div>
                    {opt == 1 && (
                      <div className="bg-white rounded-md shadow p-8 mr-16">
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="state"
                              value="4"
                              onClick={() => secondStep()}
                            />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                Process Killer
                              </span>
                              <span className="ml-2 text-xs">
                                App should be resilient to process killer
                              </span>
                            </div>
                          </label>
                        </div>
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="state"
                              value="5"
                              onClick={() => secondStep()}
                            />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                Rowhammer Attack
                              </span>
                              <span className="ml-2 text-xs">
                                try to force memory corruption using the
                                rowhammer memory
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    )}
                    {opt == 2 && (
                      <div className="bg-white rounded-md shadow py-4 px-8 mr-16">
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="state"
                              value="4"
                              onClick={() => secondStep()}
                            />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">CPU Attack</span>
                              <span className="ml-2 text-xs">
                                App should be resilient to CPU Attack
                              </span>
                            </div>
                          </label>
                        </div>
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="state"
                              value="5"
                              onClick={() => secondStep()}
                            />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                Memory Stress
                              </span>
                              <span className="ml-2 text-xs">
                                Virtual Memory Chaos
                              </span>
                            </div>
                          </label>
                        </div>
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="state"
                              value="6"
                              onClick={() => secondStep()}
                            />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">I/O Attack</span>
                              <span className="ml-2 text-xs">
                                I/O Stress Attack
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    )}
                    {opt == 3 && (
                      <div className="bg-white rounded-md shadow p-8 mr-16">
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="state"
                              value="4"
                              onClick={() => secondStep()}
                            />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                Network stress test
                              </span>
                              <span className="ml-2 text-xs">
                                Mixed network chaos
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-100 rounded-md shadow my-2 grid grid-cols-3 p-4">
                    {opt == 1 && (
                      <div>
                        <div className="flex flex-row items-center justify-between py-2">
                          <p className="mx-8">PROCSS_NAME</p>
                          <input
                            type="text"
                            value={fieldVal0}
                            className="h-8 px-4 outline-none rounded shadow"
                            onChange={(e) => setFieldVal0(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between py-2">
                          <p className="mx-8">URL</p>
                          <input
                            type="text"
                            value={fieldVal1}
                            className="h-8 px-4 outline-none rounded shadow"
                            onChange={(e) => setFieldVal1(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                    {opt == 2 && (
                      <div>
                        <div className="flex items-center justify-between py-2">
                          <p className="mx-8">URL</p>
                          <input
                            type="text"
                            value={fieldVal0}
                            className="h-8 px-4 outline-none rounded shadow"
                            onChange={(e) => setFieldVal0(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <p className="mx-8">load</p>
                          <input
                            type="text"
                            value={fieldVal1}
                            className="h-8 px-4 outline-none rounded shadow"
                            onChange={(e) => setFieldVal1(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <p className="mx-8">time</p>
                          <input
                            type="text"
                            value={fieldVal2}
                            className="h-8 px-4 outline-none rounded shadow"
                            onChange={(e) => setFieldVal2(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                    {opt == 3 && (
                      <div>
                        <div className="flex items-center justify-between py-2">
                          <p className="mx-8">URL</p>
                          <input
                            type="text"
                            value={fieldVal0}
                            className="h-8 px-4 outline-none rounded shadow"
                            onChange={(e) => setFieldVal0(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <p className="mx-8">time</p>
                          <input
                            type="text"
                            value={fieldVal1}
                            className="h-8 px-4 outline-none rounded shadow"
                            onChange={(e) => setFieldVal1(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-end px-6 pb-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white rounded-lg bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-700 mr-8"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setTopState(0);
                    }}
                  >
                    Submit
                  </button>
                  <button
                    className="text-white rounded-lg bg-gray-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-700"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setTopState(0);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
