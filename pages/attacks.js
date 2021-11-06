import AttacksMain from "../components/attacksMain";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function Attacks() {
  var title = "Attacks";
  return (
    <div className="flex flex-col h-screen">
      <Header title={title} />
      <div className="flex flex-row flex-1">
        <Sidebar index={2} />
        <AttacksMain />
      </div>
    </div>
  );
}
