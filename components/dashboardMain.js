import Card from "./card";
import Table1 from "./table1";

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
    <div className="w-full h-full bg-gray-400 scroll-y-auto p-8">
      <div className="flex flex-col justify-around  w-full h-full">
        <div className="grid grid-cols-4 gap-4 my-8">
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
              title={"Average Attacks"}
              amount={(AttackData.actived / AttackData.total) * 100}
              pastAmount={Math.floor(
                (AttackData.pastActived / AttackData.pastTotal) * 100,
                -1
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 my-8">
          <div className=" h-72 ">
            <Table1 />
          </div>
          <div className=" h-72 ">
            <Table1 />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-8">
          <div className="w-full h-72 bg-green-300">Latest Attacks</div>
        </div>
      </div>
    </div>
  );
}
