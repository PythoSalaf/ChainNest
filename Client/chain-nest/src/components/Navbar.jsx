import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white shadow fixed py-3 flex items-center w-full">
      <div className="w-[96%] md:w-[94%] mx-auto flex items-center justify-between">
        <Link className="text-xl font-semibold md:text-2xl lg:text-3xl text-blue-800">
          ChainNest
        </Link>
        <div className="hidden md:flex items-center gap-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/groups">Groups</NavLink>
          <NavLink to="/payments">Payments</NavLink>
        </div>

        <div className="flex relative items-center gap-x-5">
          <button className="rounded-3xl hidden md:block bg-[#247aae] text-white px-8 py-2 cursor-pointer hover:bg-blue-600">
            Sign in
          </button>
          <div
            className="md:hidden relative w-8 h-8 rounded-full cursor-pointer bg-blue-700 text-white flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <MdClose className="size-[70%]" />
            ) : (
              <MdMenu className="size-[70%]" />
            )}
          </div>
        </div>
        {toggle && (
          <div className="absolute block md:hidden left-0 top-14 py-5 bg-white shadow h-[60vh] w-[50%]">
            <div className="w-[90%] mx-auto">
              <div className="flex flex-col">
                <Link
                  to="/"
                  className="text-blue-800 mb-4 text-lg font-semibold"
                >
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="text-blue-800 mb-4 text-lg font-semibold"
                >
                  Dashboard
                </Link>
                <Link
                  to="/groups"
                  className="text-blue-800 mb-4 text-lg font-semibold"
                >
                  Groups
                </Link>
                <Link
                  to="/payments"
                  className="text-blue-800 mb-4 text-lg font-semibold"
                >
                  Payments
                </Link>
                <Link
                  to="/activity"
                  className="text-blue-800 mb-4 text-lg font-semibold"
                >
                  Activity
                </Link>
              </div>
              {/* {isConnected ? (
                <div className="w-full mt-5">
                  <button
                    className="w-full bg-green-900 text-white rounded-lg py-1"
                    onClick={handleMobileDisconnect}
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <div className="w-full mt-5">
                  <appkit-button
                    label="Connect Wallet"
                    class="w-full text-white"
                  />
                </div>
              )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
