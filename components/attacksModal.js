import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(true);
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">New attack</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-100"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="flex items-center text-red h-6 w-6 text-3xl block outline-none focus:outline-none">
                      &times;
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex items-center w-full bg-red-100">
                    <div className="w-28 h-20 bg-green-300 rounded-full"></div>
                    <div className="w-28 h-20 bg-green-300 rounded-full"></div>
                    <div className="w-28 h-20 bg-green-300 rounded-full"></div>
                  </div>
                  <div className="flex bg-blue-300">
                    <span className="text-gray-700 mx-4 mb-24 mt-4">
                      Select Targets
                    </span>
                    <select className="form-select block flex-1 ml-8 mr-40 mt-16 h-12 px-4 rounded outline-none">
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
                  <div className="grid grid-cols-2 gaps-4 flex bg-yellow-300 p-8">
                    <div className="flex items-start justify-start mx-20">
                      <div>
                        <p>Attack Type</p>
                        <p>Resource</p>
                        <p>Service</p>
                        <p>Network</p>
                      </div>
                      <div className="w-4 ml-2">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                      </div>
                      <div>
                        <p>Attack Type</p>
                        <p>Resource</p>
                        <p>Service</p>
                        <p>Network</p>
                      </div>
                    </div>
                    <div className="bg-gray-200 p-8 mr-16">
                      <span className="text-gray-700">Choose Options</span>
                      <div className="mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">
                              Option 1{" "}
                              <span className="text-gray-500">(recommend)</span>
                            </span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 2</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 bg-green-300 p-4">
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
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
