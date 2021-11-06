const Data = {
  title: "Total Attacks",
  score: 0,
};
export default function Card(data) {
  return (
    <div className="shadow-md rounded-md bg-white">
      <div className="p-5">
        <h5 className="text-lg font-semibold mb-2">{data.title}</h5>
        <p className="text-purple-600 font-bold text-2xl mb-4 text-right">
          {data.amount}{" "}
          <span className="text-gray-400 text-lg">
            from Last <span className="text-green-300">{data.pastAmount}</span>
          </span>
        </p>
        <div className="flex items-center justify-around">
          <p className="text-green-600 bg-gray-200 rounded-xl text-center px-2">
            rate{" "}
            <span className="font-bold text-red-600">
              {Math.floor((data.amount / data.pastAmount) * 100)}%
            </span>
          </p>
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
        "
            type="button"
          >
            Detail &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
