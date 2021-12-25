import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="font-nunito uppercase">
      <div className="bg-slate-900 text-white w-full h-20 flex justify-between items-center px-20 mobile:px-0">
        <div className="text-3xl font-bold mobile:text-xl mobile:px-4 cursor-pointer">
          Header
        </div>
        <div className="flex items-center gap-5 mobile:hidden cursor-pointer">
          <p>home</p>
          <p>about</p>
          <p>contact</p>
          <button className="bg-white text-black font-bold rounded-md p-1 uppercase">
            login
          </button>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className="bg-white text-black font-bold rounded-md p-1 uppercase mx-4 pc:hidden tablet:hidden laptop:hidden"
        >
          MENU
        </button>

        {menu === true ? (
          <div
            className="flex flex-col gap-10 items-center pc:hidden tablet:hidden laptop:hidden font-bold
            bg-gray-600 w-3/4 absolute top-20 h-full pt-20 px-10 transition delay-500 duration-1000 ease-in-out"
          >
            <button className="hover:bg-white hover:text-black rounded-md p-1 uppercase w-full text-center">
              home
            </button>
            <button className="hover:bg-white hover:text-black rounded-md p-1 uppercase w-full text-center">
              about
            </button>
            <button className="hover:bg-white hover:text-black rounded-md p-1 uppercase w-full text-center">
              contact
            </button>
            <button className="bg-white text-black font-bold rounded-md p-1 uppercase w-full">
              login
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
