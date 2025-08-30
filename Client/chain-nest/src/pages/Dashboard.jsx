const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: "Total Portfolio value",
      amount: "15,250.07",
      detail: "+5.3 from last month",
    },
    {
      id: 2,
      title: "Active Deposits",
      amount: "8",
      detail: "+5.3 from last month",
    },
    {
      id: 3,
      title: "Staked balance",
      amount: "3.5 ETH",
      detail: "APY: 8.7%",
    },
    {
      id: 4,
      title: "Overall APY",
      amount: "9.5%",
      detail: "average across all assets",
    },
  ];
  const tableData = [
    {
      id: 1,
      event: "Deposit Created",
      assets: "USD",
      amount: "100",
      date: "02-08-25",
    },
    {
      id: 2,
      event: "Deposit Created",
      assets: "BTC",
      amount: "0.8",
      date: "02-08-25",
    },
    {
      id: 3,
      event: "Deposit Created",
      assets: "USDC",
      amount: "100",
      date: "02-08-25",
    },
    {
      id: 4,
      event: "Withdraw created",
      assets: "USD",
      amount: "20",
      date: "02-08-25",
    },
    {
      id: 5,
      event: "Staking Reward",
      assets: "ETH",
      amount: "10",
      date: "02-04-25",
    },
    {
      id: 6,
      event: "Group Contribution",
      assets: "USD",
      amount: "100",
      date: "02-08-25",
    },
    {
      id: 7,
      event: "Fund Raising",
      assets: "USD",
      amount: "100",
      date: "02-08-25",
    },
  ];
  return (
    <div className="w-full pt-16">
      <div className="w-[97%] md:w-[95%] mx-auto">
        <h2 className="text-lg md:text-xl lg:text-2xl pt-2">Dashboard</h2>
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">
          {dashboardData.map((item) => (
            <div
              className="w-[95%] md:w-full mx-auto py-2 bg-white shadow rounded-xl"
              key={item.id}
            >
              <div className="w-[90%] mx-auto">
                <h4 className="">{item.title}</h4>
                <h3 className="py-3.5 md:py-4 text-lg md:text-xl font-bold">
                  {item.amount}
                </h3>
                <p className="">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 w-full flex items-start flex-col md:flex-row gap-5 ">
          <div className="w-full md:w-[75%] shadow rounded-xl bg-white py-3">
            <div className="w-[96%] mx-auto">
              <div className="flex items-center justify-between">
                <h2 className="text-base md:text-lg lg:text-xl font-semibold text-blue-700">
                  Recent Activity
                </h2>
                <h2 className="text-sm md:text-base text-blue-700 font-semibold">
                  view all
                </h2>
              </div>
              <div className="w-full mt-5 overflow-x-auto">
                <table className="w-full ">
                  <thead className="">
                    <tr className="text-blue-700 font-semibold">
                      <th className="text-lg border border-blue-700 py-1">
                        S/N
                      </th>
                      <th className="text-lg border border-blue-700 py-1">
                        Event
                      </th>
                      <th className="text-lg border border-blue-700 py-1">
                        Assets
                      </th>
                      <th className="text-lg border border-blue-700 py-1">
                        Amount
                      </th>
                      <th className="text-lg border border-blue-700 py-1">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id}>
                        <td className="text-center border border-blue-700 py-2">
                          {item.id}
                        </td>
                        <td className="text-center border border-blue-700 py-2">
                          {item.event}
                        </td>
                        <td className="text-center border border-blue-700 py-2">
                          {item.assets}
                        </td>
                        <td className="text-center border border-blue-700 py-2">
                          {item.amount}{" "}
                        </td>
                        <td className="text-center border border-blue-700 py-2">
                          {item.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[25%] shadow rounded-xl bg-white py-5 flex items-center flex-col justify-center">
            <h2 className="font-semibold text-base md:text-lg">
              Export statement
            </h2>
            <p className="py-6 text-center text-sm md:text-base font-semibold">
              Download your financial statements in various formats.
            </p>
            <div className="flex flex-col items-center justify-center">
              <button className="my-4 bg-blue-600 text-white px-6 py-1 rounded-3xl font-semibold cursor-pointer hover:bg-blue-800">
                Export CSV
              </button>
              <button className=" bg-blue-600 text-white px-6 py-1 rounded-3xl font-semibold cursor-pointer hover:bg-blue-800">
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
