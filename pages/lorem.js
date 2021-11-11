import Header from "../components/header";
import LoremMain from "../components/loremMain";
import Sidebar from "../components/sidebar";

export default function Lorem() {
  var title = "Lorem";
  return (
    <div className="flex flex-col h-screen">
      <Header title={title} />
      <div className="flex flex-row flex-1">
        <Sidebar index={4} />
        <LoremMain />
      </div>
    </div>
  );
}
