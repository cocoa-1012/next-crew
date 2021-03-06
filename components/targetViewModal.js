import React, { useState } from "react";

export default function AttacksViewModal(data) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="ml-16 bg-pink-500 rounded px-8 py-3 text-white font-bold uppercase hover:bg-purple-500"
        onClick={() => setShowModal(true)}
      >
        Details Modal show up
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed mt-28 inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full mx-full ml-48 mr-8">
              <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between px-8 py-2 border-b border-solid border-blueGray-400 rounded-t">
                  <h3 className="text-3xl font-semibold">Target Detail</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-100"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <span className="flex items-center text-red h-6 w-6 text-3xl block outline-none focus:outline-none">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="bg-gray-100 rounded-md shadow my-2 grid grid-cols-2 p-4">
                    <div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4 text-justify">id</p>
                          <p className="text-right">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.id}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">agentId</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.agentId}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">agentInstalled</p>
                          <p>:</p>
                        </div>
                        <p className="py-2 mx-4 whitespace-pre-wrap text-left">
                          {data.item.agentInstalled}
                        </p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">architecture</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.architecture}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">cores</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.cores}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">owner</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.owner}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">platform</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.platform}</p>
                      </div>
                      <div className="flex hover:bg-gray-200 items-center">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4 whitespace-pre-wrap text-left">
                            platform Version
                          </p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4 whitespace-pre-wrap text-left">
                          {data.item.platformVersion}
                        </p>
                      </div>
                      <div className="flex hover:bg-gray-200 items-center">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4 whitespace-pre-wrap text-left">
                            ram
                          </p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.ram}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">created</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.created}</p>
                      </div>
                      <div className="flex hover:bg-gray-200 items-center">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4 whitespace-pre-wrap text-left">
                            hostname
                          </p>
                          <p>:</p>
                        </div>
                        <p className="py-2 mx-4 whitespace-pre-wrap text-left">
                          {data.item.hostname}
                        </p>
                      </div>

                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">ip</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4 whitespace-pre-wrap text-left">
                          {data.item.ip}
                        </p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">mac</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.mac}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">monitoringUrl</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.monitoringUrl}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">name</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.name}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">processor</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.processor}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">public ip</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.public_ip}</p>
                      </div>
                      <div className="flex hover:bg-gray-200">
                        <div className="flex flex-row justify-between items-center py-2 w-28">
                          <p className="mx-4">secret</p>
                          <p className="p-0">:</p>
                        </div>
                        <p className="py-2 mx-4">{data.item.secret}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end px-6 pb-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white rounded-lg bg-gray-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-700"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
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
