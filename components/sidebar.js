/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
export default function Sidebar(data) {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <nav className="flex flex-col bg-purple-900 w-40 h-full">
      <div className="mt-10 mb-4">
        <ul className="mx-4">
          <li className="cursor-pointer">
            <Link href="/dashboard">
              <div
                className={classNames(
                  data.index == 1
                    ? "bg-gray-100 text-gray-700 font-bold"
                    : "text-gray-100",
                  "mb-2 px-4 py-4 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-200  hover:font-bold rounded rounded-lg"
                )}
              >
                <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                    ></path>
                  </svg>
                </span>
                <a>
                  <span className="ml-2">Dashboard</span>
                </a>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/attacks">
              <div
                className={classNames(
                  data.index == 2
                    ? "bg-gray-100 text-gray-900 font-bold"
                    : "text-gray-100",
                  "mb-2 px-4 py-4 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-200  hover:font-bold rounded rounded-lg"
                )}
              >
                <span>
                  <svg
                    className="fill-current h-5 w-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <a>
                  <span className="ml-2">Attacks</span>
                </a>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/targets">
              <div
                className={classNames(
                  data.index == 3
                    ? "bg-gray-100 text-gray-900 font-bold"
                    : "text-gray-100",
                  "mb-2 px-4 py-4 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-200  hover:font-bold rounded rounded-lg"
                )}
              >
                <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                        2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                        00-2-2h-1V1m-1 11h-5v5h5v-5z"
                    ></path>
                  </svg>
                </span>
                <a>
                  <span className="ml-2">Targets</span>
                </a>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/lorem">
              <div
                className={classNames(
                  data.index == 4
                    ? "bg-gray-100 text-gray-900 font-bold"
                    : "text-gray-100",
                  "mb-2 px-4 py-4 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-200  hover:font-bold rounded rounded-lg"
                )}
              >
                <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                        4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                        9v2h-4v-2h4m2-2h-8v6h8v-6z"
                    ></path>
                  </svg>
                </span>
                <a>
                  <span className="ml-2">Lorem</span>
                </a>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
