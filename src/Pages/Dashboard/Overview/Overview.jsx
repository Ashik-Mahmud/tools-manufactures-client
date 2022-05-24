import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Overview = () => {
  useTitle("Dashboard");
  return (
    <div className="p-5 grid place-items-center min-h-[80vh]">
      <img
        src="https://www.hrinasia.com/wp-content/uploads/2016/08/Top-Four-Common-Onboarding-Mistakes-to-Avoid.png"
        alt="welcomeImage"
        className="md:max-w-lg"
      />
    </div>
  );
};

export default Overview;
