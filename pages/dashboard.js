import DashboardMain from "../components/dashboardMain";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  var title = "Dashboard";
  return (
    <div className="flex flex-col h-screen">
      <Header title={title} />
      <div className="flex flex-row flex-1">
        <Sidebar index={1} />
        <DashboardMain />
      </div>
    </div>
  );
}
