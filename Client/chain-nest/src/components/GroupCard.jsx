const bgColors = [
  "#f59e0b", // amber-400
  "#b45309", // amber-700
  "#2563eb", // blue-600
  "#059669", // green-600
  "#10b981", // emerald-500
  "#6b21a8", // purple-800
  "#db2777", // pink-600
  "#dc2626", // red-600
];

const getColorFromInitials = (initials) => {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash += initials.charCodeAt(i);
  }
  return bgColors[hash % bgColors.length];
};

const GroupCard = ({ members = [] }) => {
  const member = [
    "0x7ab9cf3de2f1ab2c4d8e5f0a3c9b7d2e1f4a5b6c",
    "0x3ec8da1b9f4c2e7a5d0b6f8c3a2e9d1b4c7a8e9f",
    "0x9fd2b6e4ac1d3f8b7a0e2c9b5d3a8e1c6b4f9a2d",
    "0x1ca7e9b3df2a6c0b8e4d5a1c9f3b7d2e8c6a0b4e",
    "0x5be3ad7c1f9b4a2e6c8d0b3a9f5e2c7b1d4a8e6f",
  ];
  return (
    <div className="border border-blue-800 shadow py-2 rounded-xl w-[94%] md:w-full mx-auto">
      <div className="w-[94%] mx-auto">
        <div className="flex items-center justify-between">
          <h3>Community Saving Fund</h3>
          <p className="bg-blue-500 text-white px-3 py-1 rounded-xl text-xs font-semibold">
            Active
          </p>
        </div>
        <p className="text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="">
          <h3 className="font-semibold">Members ({member.length})</h3>
          <div className="mt-3 flex items-center">
            {member.map((member, idx) => {
              // Fallback for missing initials
              const initials =
                member.initials || member.slice(2, 4).toUpperCase();
              const bgColor = getColorFromInitials(initials);
              return (
                <div
                  key={idx}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white  ${
                    idx !== 0 ? "-ml-3" : ""
                  }`}
                  style={{ backgroundColor: bgColor }}
                >
                  <h3 className="text-base font-semibold uppercase">
                    {initials}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="my-2.5 flex items-center gap-2.5">
            <h4 className="font-semibold text-base">Next Contribution: </h4>
            <h4 className="text-xs font-semibold">Due 12th sep 2025 </h4>
          </div>
        </div>
        <button className="w-full my-1 cursor-pointer py-1 rounded-3xl text-white bg-blue-600 hover:bg-blue-700">
          View Detail
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
