import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import nseLogo from "../../assets/nseLogo.svg";
import BtnList from "./BtnList";

 function Nav() {
  const [price, setPrice] = useState(21000);
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center  px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <button className="w-auto p-2 h-2">
              <IoIosArrowBack />
            </button>
          </span>

          <img src={nseLogo} width={"25px"} />
          <span>
            <h4 className=" font-bold text-lg">NIFTY 50</h4>
            <p>{price}</p>
          </span>
        </div>
        <BtnList />
      </div>
    </div>
  );
}

export default Nav