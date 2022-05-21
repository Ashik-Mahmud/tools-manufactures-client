import React from "react";
import TItle from "../../../Components/TItle/TItle";
import CardTeam from "./CardTeam";

const Teams = () => {
  return (
    <section className="teams py-10 px-8 sm:px-0">
      <div className="container mx-auto">
        <TItle
          title="Our Expert Technician"
          subTitle="These are main technicians of this company."
        />
        <div className="teams-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CardTeam
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LBelZyWa8Xq_eK63AywofqMWRL86WK6d7-pVbpds71Vj671COXGeEGYlfJBinrI6HQ0&usqp=CAU"
            }
          />
          <CardTeam
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lb9w0o4zMMjlynPVnGHFbuzjjPMUbql6CvyeSeDOUt8UIBTVyYybBfSpMgfmfeywvHo&usqp=CAU"
            }
          />
          <CardTeam
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8RLDBtnUXeREKH-LkeaJ4pl16Kx89vO8pVE5SLuasnS8MtbQSvHa6HFK43Kaf2SaaVc&usqp=CAU"
            }
          />
          <CardTeam
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jo_f9CO2hXbj2_Hbc_fvYkk0ii-M1h6xOxlGMO3qi3osvgt9CLxrqnsYYLD5KxaVU1s&usqp=CAU"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Teams;
