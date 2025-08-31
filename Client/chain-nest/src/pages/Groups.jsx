import { useState } from "react";
import { GroupCard } from "../components";

const Groups = () => {
  const [memberAddresses, setMemberAddresses] = useState([]);
  const handleMemberChange = (index, value) => {
    const updated = [...memberAddresses];
    updated[index] = value;
    setMemberAddresses(updated);
    // setError("");
  };

  const addMemberField = () => {
    setMemberAddresses([...memberAddresses, ""]);
    // setError("");
  };

  const removeMemberField = (index) => {
    const updated = [...memberAddresses];
    updated.splice(index, 1);
    setMemberAddresses(updated);
    // setError("");
  };
  return (
    <div className="w-full pt-16">
      <div className="w-[96%] md:w-[95%] mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800">
          Group Saving
        </h2>
        <div className="flex items-start mt-7 justify-between flex-col-reverse md:flex-row  gap-6 w-full">
          <div className="shadow w-full md:w-[25%] py-2 rounded-lg bg-white">
            <div className="w-[92%] mx-auto">
              <h2 className="text-lg font-semibold">Create New Group</h2>
              <p className="">Start a new collaborative savings group.</p>

              <div className="w-full mt-7">
                <form>
                  <input
                    type="text"
                    placeholder="Group name"
                    className="placeholder:text-black border border-blue-700 px-3 w-full rounded-lg h-8 outline-none"
                  />
                  <textarea
                    type="text"
                    placeholder="Description"
                    className="placeholder:text-black border resize-none border-blue-700 px-3 my-4 w-full rounded-lg h-24 py-1.5 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Target amount"
                    className="placeholder:text-black border border-blue-700 px-3 w-full rounded-lg h-8 outline-none"
                  />
                  <div className="mt-6">
                    <label htmlFor="">Distribution mode</label>
                    <div className="flex items-center mt-2 justify-between">
                      <div className="flex items-center gap-1">
                        <input type="radio" />
                        <label htmlFor="" className="text-sm">
                          Share Equally
                        </label>
                      </div>
                      <div className="flex items-center gap-1">
                        <input type="radio" />
                        <label htmlFor="" className="text-sm">
                          Rotating Disbursement
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium  mb-1 mt-5">
                      Group Members
                    </label>
                    {memberAddresses.map((address, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={address}
                          onChange={(e) =>
                            handleMemberChange(index, e.target.value)
                          }
                          className="flex-1 px-3 py-1 border border-blue-800 rounded focus:outline-none focus:ring"
                          placeholder="0x..."
                          required
                        />
                        {memberAddresses.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMemberField(index)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addMemberField}
                      className="bg-blue-700 hover:bg-blue-900 mt-3 text-white w-full py-1 rounded-lg cursor-pointer"
                    >
                      + Add Member
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[75%] py-3 ">
            <div className=""></div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
