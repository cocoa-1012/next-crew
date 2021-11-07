// import People1 from "../const/tableData";
import Card from "./card";
import Table1 from "./table1";
const People1 = [
  {
    name: "Adam Cooper",
    title: "Regional Paradigm",
    department: "Optimization",
    role: "Admin",
    email: "adam@crew.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "David Coferfield",
    title: "Regional Paradigm",
    department: "Optimization",
    role: "Developer",
    email: "david@crew.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm",
    department: "Front end",
    role: "Designer",
    email: "jane@crew.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const People2 = [
  {
    name: "Jakub Cabala",
    title: "Regional Paradigm",
    department: "Optimization",
    role: "Admin",
    email: "jakub@crew.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm",
    department: "Optimization",
    role: "Admin",
    email: "jane@crew.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Alex Cooper",
    title: "Regional Paradigm",
    department: "Optimization",
    role: "Admin",
    email: "alex@crew.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];
const People3 = [
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
export default function DashboardMain() {
  return (
    <div className="w-full h-full bg-gray-100 scroll-y-auto p-8">
      <div className="flex flex-col justify-around  w-full h-full">
        <div className="grid grid-cols-4 gap-4 my-4">
          <div className="w-60 h-40 mx-auto">
            <Card
              title={"Total Attacks"}
              amount={AttackData.total}
              pastAmount={AttackData.pastTotal}
            />
          </div>
          <div className="w-60 h-40 mx-auto">
            <Card
              title={"Actived Attacks"}
              amount={AttackData.actived}
              pastAmount={AttackData.pastActived}
            />
          </div>
          <div className="w-60 h-40 mx-auto">
            <Card
              title={"Failed Attacks"}
              amount={AttackData.failed}
              pastAmount={AttackData.pastFailed}
            />
          </div>
          <div className="w-60 h-40 mx-auto">
            <Card
              title={"Average Attacks Rate"}
              amount={(AttackData.actived / AttackData.total) * 100 + "%"}
              pastAmount={
                Math.floor(
                  (AttackData.pastActived / AttackData.pastTotal) * 100,
                  -1
                ) + "%"
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className=" h-72 ">
            <Table1 data={People1} />
          </div>
          <div className=" h-72 ">
            <Table1 data={People2} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-12">
          <div className="w-full h-72">
            <Table1 data={People3} />
          </div>
        </div>
      </div>
    </div>
  );
}
