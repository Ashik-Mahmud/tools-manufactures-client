import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaBootstrap,
  FaCss3,
  FaFacebook,
  FaFigma,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJsonwebtokens,
  SiMaterialui,
  SiMongodb,
  SiNetlify,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import useTitle from "../../Hooks/useTitle";
const Portfolios = () => {
  useTitle("Portfolios");
  return (
    <section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden shadow">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://i.ibb.co/gm4HgZ9/Facebook-Cover-Photo.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 overflow-hidden rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/270779248_1059411514630422_1502740216790297003_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE7K83QnJoIcbsHi4fjaF1H4GrASY0x1eTgasBJjTHV5NFLSI-c9Y9LfNw6apPvU_RiCSWoTs7XpTV_pDVb13VN&_nc_ohc=KMfqtExouJwAX8imHHU&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AT8DEsqIRRPuQcLk4mvycmalHpqgWRW2-au2pjSimMXyaQ&oe=628D8C32"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Ashik Mahmud
                  </h2>
                  <small>ashikmamud187@gmail.com</small>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Hey! I am passionate web developer and MERN Specialist. I
                    already did lot of projects using modern web technologies.
                    And I am quick learner to ready to grab all the latest
                    technologies.
                  </p>
                  <div className="btn-groups flex items-center gap-2 my-3">
                    <a
                      href="https://web.facebook.com/ashikmahmud187/"
                      target={"_blank"}
                      className="btn btn-outline btn-sm btn-circle"
                      rel="noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://github.com/Ashik-Mahmud"
                      target={"_blank"}
                      className="btn btn-outline btn-sm btn-circle"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ashik-mahmud-1510421b0/"
                      target={"_blank"}
                      className="btn btn-outline btn-sm btn-circle"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="education">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <span className="w-12 h-1 bg-primary block  mx-auto md:mx-0"></span>
                  <div className="school mt-3">
                    <p className="text-medium">
                      SHAMIM & SHAKIL TECHNICAL COLLEGE
                    </p>
                    <small className="text-slate-400 uppercase">
                      HSC (Department of Science) Session - 2020-2021
                    </small>
                    <p>Gobindhagonj, Gaibanda</p>
                  </div>
                </div>
                <div className="skills py-2">
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <span className="w-12 h-1 bg-primary block  mx-auto md:mx-0"></span>
                  <div className="skill-set flex flex-wrap gap-5 my-5">
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <AiFillHtml5 />
                      <span>HTML</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <FaCss3 />
                      <span>CSS3</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiJavascript />
                      <span>JavaScript</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiFirebase />
                      <span>Firebase</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <FaReact />
                      <span>React</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiReactrouter />
                      <span>React Router</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiTailwindcss />
                      <span>Tailwind</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <FaBootstrap />
                      <span>Bootstrap</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiMaterialui />
                      <span>Material UI</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <FaNodeJs />
                      <span>NodeJs</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiExpress />
                      <span>NodeJs</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiMongodb />
                      <span>MongoDB</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiJsonwebtokens />
                      <span>Json Web Token</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <FaStripe />
                      <span>Payment Method (Stipe)</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <FaFigma />
                      <span>Figma</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <SiNetlify />
                      <span>Netlify</span>
                    </div>
                    <div className="text-center shadow p-2 rounded flex justify-cener items-center flex-col cursor-pointer">
                      <FaGithub />
                      <span>Github</span>
                    </div>
                  </div>
                </div>

                <div className="projects">
                  <h3 className="text-lg font-semibold">Projects</h3>
                  <span className="w-12 h-1 bg-primary block  mx-auto md:mx-0"></span>
                  <div className="project-content my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="project shadow rounded p-3">
                      <h3 className="text-lg">Blog Application</h3>
                      <div className="flex justify-around items-center my-2 text-sm text-primary">
                        <a
                          href="https://blog-app-4c053.web.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live
                        </a>
                        <a
                          href="https://github.com/Ashik-Mahmud/nodejs-blogs-app-with-mongodb"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Client
                        </a>
                        <a
                          href="https://github.com/Ashik-Mahmud/nodejs-blogs-app-with-mongodb-server"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Server
                        </a>
                      </div>
                      <ul className="text-sm flex flex-wrap gap-1">
                        <li className="bg-base-200 p-1 rounded text-xs">
                          react
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          react router
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          firebase
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          mongodb
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          express
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">etc</li>
                      </ul>
                    </div>
                    <div className="project shadow rounded p-3">
                      <h3 className="text-lg">Volunteers App</h3>
                      <div className="flex justify-around items-center my-2 text-sm text-primary">
                        <a
                          href="https://volunteers-app-5f121.web.app/"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Live
                        </a>
                        <a
                          href="https://github.com/Ashik-Mahmud/volunteer-app-with-nodejs"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Client
                        </a>
                        <a
                          href="https://github.com/Ashik-Mahmud/volunteeer-app-server"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Server
                        </a>
                      </div>
                      <ul className="text-sm flex flex-wrap gap-1">
                        <li className="bg-base-200 p-1 rounded text-xs">
                          react
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          react router
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          firebase
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          mongodb
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          express
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">etc</li>
                      </ul>
                    </div>
                    <div className="project shadow rounded p-3">
                      <h3 className="text-lg">Guiter Buying App</h3>
                      <div className="flex justify-around items-center my-2 text-sm text-primary">
                        <a href="/" target={"_blank"}>
                          Live
                        </a>
                        <a
                          href="https://github.com/Ashik-Mahmud/react-guiter-shop-app"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          Client
                        </a>
                        <a
                          href="/"
                          title="Used Firebase Server"
                          className="disabled pointer-events-none text-slate-400"
                          target={"_blank"}
                        >
                          Firebase
                        </a>
                      </div>
                      <ul className="text-sm flex flex-wrap gap-1">
                        <li className="bg-base-200 p-1 rounded text-xs">
                          react
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          react router
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          firebase
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          mongodb
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">
                          express
                        </li>
                        <li className="bg-base-200 p-1 rounded text-xs">etc</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  className="text-blue-500 inline-flex items-center"
                  target="_blank"
                  href="https://github.com/Ashik-Mahmud"
                  rel="noreferrer"
                >
                  Get all the projects
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolios;
