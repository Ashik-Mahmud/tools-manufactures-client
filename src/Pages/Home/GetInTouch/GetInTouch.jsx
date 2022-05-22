import React from "react";

const GetInTouch = () => {
  return (
    <div className="container mx-auto z-10 relative">
      <div className="content text-center px-4 py-10 md:py-14  bg-base-300 rounded-lg md:mx-40 mb-[-5rem] shadow-lg">
        <h1 className="text-3xl font-semibold mb-2">Get In Touch</h1>
        <form
          action=""
          className="lg:w-5/12 mx-auto flex items-stretch p-2 my-4 overflow-hidden rounded-full bg-base-100"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-4 outline-none bg-transparent border-none"
          />
          <button className="px-10 bg-success text-white rounded-full">
            Send{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
