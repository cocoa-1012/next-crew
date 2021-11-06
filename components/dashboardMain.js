export default function DashboardMain() {
  return (
    <div className="w-full h-full bg-gray-400 scroll-y-auto p-8">
      <div className="flex flex-col justify-around  w-full h-full">
        <div className="grid grid-cols-4 gap-4 my-8">
          <div className="w-60 h-40 bg-red-300 mx-auto">Lorem Ipsum</div>
          <div className="w-60 h-40 bg-red-300 mx-auto">Lorem Ipsum</div>
          <div className="w-60 h-40 bg-red-300 mx-auto">Lorem Ipsum</div>
          <div className="w-60 h-40 bg-red-300 mx-auto">Lorem Ipsum</div>
        </div>
        <div className="grid grid-cols-2 gap-8 my-8">
          <div className=" h-72 bg-blue-300">Targets</div>
          <div className=" h-72 bg-blue-300">TBD</div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-8">
          <div className="w-full h-72 bg-green-300">Latest Attacks</div>
        </div>
      </div>
    </div>
  );
}
