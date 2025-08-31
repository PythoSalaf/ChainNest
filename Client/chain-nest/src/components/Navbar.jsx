import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState("");

  const ConnectBtn = async () => {
    try {
      setIsConnecting(true);
      setConnectionError("");
      
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        setConnectionError("MetaMask is not installed. Please install MetaMask to connect your wallet.");
        return;
      }
      
      // Request account access
      const _accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      
      if (_accounts.length > 0) {
        setAccounts(_accounts);
        console.log("Wallet connected successfully:", _accounts[0]);
      } else {
        setConnectionError("No accounts found. Please make sure your wallet is unlocked.");
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
      
      if (error.code === 4001) {
        setConnectionError("Connection rejected. Please approve the connection request in your wallet.");
      } else if (error.code === -32002) {
        setConnectionError("Connection request pending. Please check your wallet.");
      } else {
        setConnectionError("Failed to connect wallet. Please try again.");
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const DisconnectBtn = () => {
    setAccounts([]);
    setConnectionError("");
    console.log("Wallet disconnected");
  };

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
          {connectionError && (
            <div className="absolute top-12 right-0 bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm max-w-xs z-50">
              {connectionError}
              <button 
                className="ml-2 text-red-500 hover:text-red-700"
                onClick={() => setConnectionError("")}
              >
                ×
              </button>
            </div>
          )}
          
          {/* Show connect button when not connected */}
          {accounts.length === 0 && (
            <button 
              className={`rounded-3xl hidden md:block bg-[#247aae] hover:bg-blue-600 text-white px-8 py-2 cursor-pointer transition-colors ${
                isConnecting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={ConnectBtn}
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </button>
          )}
          
          {/* Show address and disconnect button when connected */}
          {accounts.length > 0 && (
            <div className="hidden md:flex items-center gap-x-3">
              <div className="flex items-center bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-mono text-green-700">
                  {accounts[0].slice(0, 6)}...{accounts[0].slice(-4)}
                </span>
              </div>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer"
                onClick={DisconnectBtn}
              >
                Disconnect
              </button>
            </div>
          )}
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
