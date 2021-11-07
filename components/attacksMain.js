// import People1 from "../const/tableData";
import AttackTable from "./attackTable";
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
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="ml-16 bg-purple-700 rounded px-8 py-3 text-white font-bold uppercase hover:bg-purple-500">
            New Attack
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-4">
          <div className=" h-auto ">
            <AttackTable data={Attacks} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="w-full h-auto">
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
            />

            <div className="flex items-center justify-center mb-4">
              <button
                className="
                  bg-purple-500
                  text-white
                  hover:bg-purple-700 hover:text-white
                  active:bg-purple-700
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  rounded-l
                  outline-none
                  focus:outline-none
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                <i className="fas fa-angle-double-left"></i>
              </button>
              <button
                className="
                  bg-purple-500
                  text-white
                  hover:bg-purple-700 hover:text-white
                  active:bg-purple-700
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  outline-none
                  focus:outline-none
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                <i className="fas fa-angle-left"></i>
              </button>
              <button
                className="
                  bg-purple-500
                  text-white
                  hover:bg-purple-700 hover:text-white
                  active:bg-purple-700
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  outline-none
                  focus:outline-none
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                1
              </button>
              <button
                className="
                  bg-purple-500
                  text-white
                  hover:bg-purple-700 hover:text-white
                  active:bg-purple-700
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  outline-none
                  focus:outline-none
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                2
              </button>
              <button
                className="
                  bg-purple-500
                  text-white
                  hover:bg-purple-700 hover:text-white
                  active:bg-purple-700
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  outline-none
                  focus:outline-none
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                3
              </button>
              <button
                className="
                  bg-purple-500
                  text-white
                  hover:bg-purple-700 hover:text-white
                  active:bg-purple-700
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  outline-none
                  focus:outline-none
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                <i className="fas fa-angle-right"></i>
              </button>
              <button
                className="
                  bg-purple-500
                  text-white
                  hover:bg-purple-700 hover:text-white
                  active:bg-purple-700
                  font-bold
                  uppercase
                  text-xs
                  px-4
                  py-2
                  rounded-r
                  outline-none
                  focus:outline-none
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                <i className="fas fa-angle-double-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
