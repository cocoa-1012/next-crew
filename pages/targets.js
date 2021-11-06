import Header from "../components/header";
import Sidebar from "../components/sidebar";
import TargetsMain from "../components/targetsMain";

export default function Targets() {
  var title = "Targets";
  return (
    <div className="flex flex-col h-screen">
      <Header title={title} />
      <div className="flex flex-row flex-1">
        <Sidebar index={3} />
        <TargetsMain />
      </div>
    </div>
  );
}
