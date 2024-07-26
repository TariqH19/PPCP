import React from "react";

const TopNavbar = () => {
  return (
    <div>
      <div className={`mb-4 lg:px-32 bg-black text-white`}>
        <div className="py-4 mx-4 flex justify-between  ">
          <a href="/" className="pt-2 text-2xl font-bold">
            Student Services
          </a>

          <div className="flex space-x-4 ml-4 pt-2">
            <a href="/" className=" hover:text-gray-300">
              Home
            </a>
            <a href="/supports" className=" hover:text-gray-300">
              Supports
            </a>
            <a href="/articles" className=" hover:text-gray-300">
              Articles
            </a>
            <a href="/sos" className=" hover:text-gray-300">
              Emergency
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
