import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [opt, setOpt] = useState(0);
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
              {/*content*/}
              <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-8 py-2 border-b border-solid border-blueGray-400 rounded-t">
                  <h3 className="text-3xl font-semibold">New attack</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-100"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="flex items-center text-red h-6 w-6 text-3xl block outline-none focus:outline-none">
                      &times;
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="bg-gray-100 shadow p-4 rounded-md flex items-center w-full">
                    <div className="w-24 h-16 bg-white shadow rounded-full"></div>
                    <h1 className="text-4xl px-4">&#10230;</h1>
                    <div className="w-24 h-16 bg-white shadow rounded-full"></div>
                    <h1 className="text-4xl px-4">&#10230;</h1>
                    <div className="w-24 h-16 bg-green-300 shadow rounded-full"></div>
                    <h1 className="text-4xl px-4">&#10230;</h1>
                  </div>
                  <div className="bg-gray-100 shadow py-2 my-2 rounded-md flex">
                    <span className="text-gray-700 mx-4 mb-20 mt-2">
                      Select Targets
                    </span>
                    <select className="form-select block flex-1 ml-8 mr-40 mt-12 h-12 px-4 rounded outline-none shadow">
                      <option
                        value=""
                        disabled
                        selected
                        className="hidden"
                      ></option>
                      <option>https://example1.com</option>
                      <option>https://example2.com</option>
                      <option>https://example3.com</option>
                      <option>https://example4.com</option>
                      <option>https://example5.com</option>
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
                      <div className="bg-white rounded-md shadow py-4 px-8 mr-16">
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input type="radio" name="state" value="4" />
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
                            <input type="radio" name="state" value="5" />
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
                            <input type="radio" name="state" value="6" />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                I/O Stress Attack
                              </span>
                              <span className="ml-2 text-xs">
                                IO device Chaos
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    )}
                    {opt == 2 && (
                      <div className="bg-white rounded-md shadow p-8 mr-16">
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input type="radio" name="state" value="4" />
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
                            <input type="radio" name="state" value="5" />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                Rowhammer Attack
                              </span>
                              <span className="ml-2 text-xs">
                                rowhammer memory
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
                            <input type="radio" name="state" value="4" />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                Network Killer
                              </span>
                              <span className="ml-2 text-xs">
                                App should be resilient to network killer
                              </span>
                            </div>
                          </label>
                        </div>
                        <div className="py-2">
                          <label className="inline-flex items-center">
                            <input type="radio" name="state" value="5" />
                            <div className="flex flex-col ml-2">
                              <span className="ml-2 font-bold">
                                network Attack
                              </span>
                              <span className="ml-2 text-xs">
                                network memory
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-100 rounded-md shadow my-2 grid grid-cols-3 p-4">
                    <div>
                      <div className="flex items-center jutify-between py-2">
                        <p className="mx-8">Field#1</p>
                        <input
                          type="text"
                          className="h-8 px-4 outline-none rounded shadow"
                        />
                      </div>
                      <div className="flex items-center jutify-between py-2">
                        <p className="mx-8">Field#2</p>
                        <input
                          type="text"
                          className="h-8 px-4 outline-none rounded shadow"
                        />
                      </div>
                      <div className="flex items-center jutify-between py-2">
                        <p className="mx-8">Field#3</p>
                        <input
                          type="text"
                          className="h-8 px-4 outline-none rounded shadow"
                        />
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 pb-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white rounded-lg bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-700 mr-8"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                  <button
                    className="text-white rounded-lg bg-gray-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-700"
                    type="button"
                    onClick={() => setShowModal(false)}
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
