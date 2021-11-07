import React from "react";
import { useNavigate } from "react-router";
import App from "../Firebase";
import "firebase/auth";

export const Header = () => {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    App.auth()
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-Blue-50 p-6 border-b-2 border-gray">
      <div className="flex items-center flex-shrink-0 text-gray mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Expense Tracker
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="">
        <div>
          <button
            onClick={(e) => logout(e)}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-red-400 border-red-400 hover:border-transparent hover:text-teal-400 hover:bg-red-400 hover:text-white mt-4 lg:mt-0"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};
