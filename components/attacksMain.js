// import People1 from "../const/tableData";
import Table1 from "./table1";
const People1 = [
  {
    name: "Adam Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "David Coferfield",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Developer",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Front end",
    role: "Designer",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jakub Cabala",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];
const AttackData = {
  total: 125,
  actived: 80,
  failed: 45,
  pastTotal: 130,
  pastActived: 73,
  pastFailed: 57,
};
export default function AttacksMain() {
  return (
    <div className="w-full h-full bg-gray-100 scroll-y-auto p-8">
      <div className="flex flex-col justify-around  w-full h-full">
        <div className="flex flex-row justify-between items-start px-6 py-12 my-4 bg-white rounded shadow">
          <p className="p-4 rounded text-gray-700 flex-1">
            LoremLore mLoremLoremLoremLoremLo remLoremLoremLore mLoremLor
            emLoremLo remLoremLo remLoremLoremLo remLore mLoremLo remLoremL
            oremLoremLoremLoremLo remLoremLore mLoremLoremLoremLoremLoremLorem
            LoremLo remLor emLoremLoremLoremLoremLo remLoremLore
            mLoremLoremLoremLoremLoremLore mLoremLoremLoremLorem LoremLore
            mLoremLoremLoremLoremLo remLoremLoremLore mLoremLor emLoremLo
            remLoremLo remLoremLoremLo remLore mLoremLo remLoremL
            oremLoremLoremLoremLo remLoremLore mLoremLoremLoremLoremLoremLorem
            LoremLo remLor emLoremLoremLoremLoremLo remLoremLore
            mLoremLoremLoremLoremLoremLore mLoremLoremLoremLorem LoremLore
            mLoremLoremLoremLoremLo remLoremLoremLore mLoremLor emLoremLo
            remLoremLo remLoremLoremLo remLore mLoremLo remLoremL
            oremLoremLoremLoremLo remLoremLore mLoremLoremLoremLoremLoremLorem
            LoremLo remLor emLoremLoremLoremLoremLo remLoremLore
            mLoremLoremLoremLoremLoremLore mLoremLoremLoremLorem LoremLore
            mLoremLoremLoremLoremLo remLoremLoremLore mLoremLor emLoremLo
            remLoremLo remLoremLoremLo remLore mLoremLo remLoremL
            oremLoremLoremLoremLo remLoremLore mLoremLoremLoremLoremLoremLorem
            LoremLo remLor emLoremLoremLoremLoremLo remLoremLore
            mLoremLoremLoremLoremLoremLore mLoremLoremLoremLorem
          </p>
          <button className="ml-10 bg-purple-700 rounded px-8 py-4 text-white font-bold uppercase hover:bg-purple-500">
            Click
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-4">
          <div className=" h-auto ">
            <Table1 data={People1} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
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
