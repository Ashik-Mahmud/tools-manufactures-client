import React from "react";
import CountUp from "react-countup";
import { BsAward, BsTools } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import Fade from "react-reveal/Fade";
const Statistic = () => {
  return (
    <section>
      <div className="container mx-auto  flex flex-col md:flex-row justify-center pb-10">
        <Fade bottom distance="40px">
          <div className="grid md:stats grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow">
            <div className="stat place-items-center">
              <span className="icon">
                <BsTools className="text-3xl my-3" />
              </span>
              <div className="stat-title">Total Tools</div>
              <div className="stat-value">
                <CountUp end={35} /> Items
              </div>
              <div className="stat-desc">From Start to end time we got.</div>
            </div>
            <div className="stat place-items-center">
              <span className="icon">
                <FaUsers className="text-3xl my-3" />
              </span>
              <div className="stat-title">Customers</div>
              <div className="stat-value text-secondary">
                <CountUp end={200} />
              </div>
              <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>
            <div className="stat place-items-center">
              <span className="icon">
                <BsAward className="text-3xl my-3" />
              </span>
              <div className="stat-title">Got Awards</div>
              <div className="stat-value">
                <CountUp end={15} />
              </div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat place-items-center">
              <span className="icon">
                <GrMoney className="text-3xl my-3" />
              </span>
              <div className="stat-title">Revenue</div>
              <div className="stat-value">
                <CountUp end={12000} />$
              </div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Statistic;
