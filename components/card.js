const Data = {
  title: "Total Attacks",
  score: 0,
};
export default function Card(data) {
  return (
    <div className="shadow-md rounded-xl bg-white">
      <div className="p-5">
        <h5 className="text-lg text-gray-600 font-semibold mb-2">
          {data.title}
        </h5>
        <p className="text-gray-700 font-bold text-2xl mb-4 text-right">
          {data.amount}{" "}
          <span className="text-gray-400 text-lg">
            from Last {data.pastAmount}
          </span>
        </p>
        <div className="flex items-center">
          {data.title !== "Average Attacks Rate" && (
            <p className="text-gray-500 text-center px-4">
              rate{" "}
              <span className="font-bold text-gray-600">
                {Math.floor((data.amount / data.pastAmount) * 100)}%{" "}
                {Math.floor(data.amount / data.pastAmount) * 100 > 1 ? (
                  <span>&#8593;</span>
                ) : (
                  <span>&#8595;</span>
                )}
              </span>
            </p>
          )}
          <button
            className="
          bg-purple-500
          text-white
          active:bg-purple-600
          font-bold
          text-xs
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
          ml-auto
        "
            type="button"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
