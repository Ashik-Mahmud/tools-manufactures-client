import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Loader from "../../../Components/Loader/Loader";
import TItle from "../../../Components/TItle/TItle";
import CardTeam from "./CardTeam";
const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://tools-manufactures-server-production.up.railway.app/teams`)
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.result);
        setLoading(true);
      });
  }, []);

  return (
    <section className="teams py-20 px-8 sm:px-0">
      <div className="container mx-auto">
        <TItle
          title="Our Expert Technician"
          subTitle="These are main technicians of this company."
        />
        <Fade bottom distance="30px">
          {loading ? (
            <div className="teams-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {teams.map((team) => (
                <CardTeam key={team._id} {...team} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </Fade>
      </div>
    </section>
  );
};

export default Teams;
