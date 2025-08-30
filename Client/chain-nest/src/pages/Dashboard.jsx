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
  return (
    <div className="w-full pt-16">
      <div className="w-[96%] md:w-[95%] mx-auto">
        <h2 className="text-lg md:text-xl lg:text-2xl pt-2">Dashboard</h2>
        <div className="my-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
      </div>
    </div>
  );
};

export default Dashboard;
