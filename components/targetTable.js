/* eslint-disable @next/next/no-img-element */
import TargetViewModal from "./targetViewModal";
export default function AttackTable(data) {
  console.log("targetTable Data:", data.data);
  var targetData = data.data.results;
  return (
    <div className="flex flex-col bg">
      <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Owner
                  </th>
                  <th
                    scope="col"
                    className="pl-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              {targetData && (
                <tbody className="bg-white divide-y divide-gray-200">
                  {targetData.map((item, index) => (
                    <tr key={item.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 max-w-screen-sm overflow-x-hidden">
                          {item.owner}
                        </div>
                      </td>
                      <td className="px-12 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <TargetViewModal item={item} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
