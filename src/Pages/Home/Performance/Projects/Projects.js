import React from "react";
import "./Project.css";
import project1 from "../../../../assets/img/cryptoVest.png";
import project2 from "../../../../assets/img/Luxury suites.png";
import project3 from "../../../../assets/img/blackfit.png";
import PrimaryButton from "../../../Button/PrimaryButton";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      Name: "CryptoVest",
      img: "https://i.ibb.co/S5fDBVJ/crypto-Vest.png",
      imgSort: "https://i.ibb.co/gykBJ1B/Crypto-sort.png",
      liveLink: "https://cryptovest-bd334.web.app/",
      ClientsLink: "https://github.com/SumiAkter2/cryptovest",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
    {
      id: 2,
      Name: "BlackFit",
      img: "https://i.ibb.co/WKdPCNJ/blackfit.png",
      imgSort: "https://i.ibb.co/6yTrfSP/Black-Fit-Sort.png",
      liveLink: "https://blackfit.vercel.app/",
      ClientsLink: "https://github.com/SumiAkter2/blackfit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
    {
      id: 3,
      Name: "Luxury Suites",
      img: "https://i.ibb.co/brH2NsS/Luxury-suites.png",
      imgSort: "https://i.ibb.co/pXRfSSc/luxury-sort.png",
      liveLink: "https://luxury-suites-6b69b.web.app/",
      ClientsLink: "https://github.com/SumiAkter2/Luxury-suites-client",
      ServerLink: "https://github.com/SumiAkter2/luxury-suites-server",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-12">
        Latest Portfolio
      </h1>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto my-12">
        {projects.map((project) => (
          <div key={project.id}>
            <div class="cards">
              <div class="cards2">
                <div className="mx-auto image-wrap p-4">
                  <img src={project.img} alt="project-img" className="" />
                  <div className="mt-6 flex justify-between items-center">
                    <a target="_blank" rel="noreferrer" href={project.liveLink}>
                      {" "}
                      <button className="btn btn-primary btn-outline rounded-full bg-black lg:w-36 w-24">
                        Live
                      </button>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.ClientsLink}
                    >
                      {" "}
                      <button className="btn btn-primary btn-outline rounded-full bg-black lg:w-36 w-24">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className=" ">
          <div class="cards">
            <div class="cards2">
              <div className="mx-auto image-wrap p-4">
                <img src={project2} alt="project-img" className="" />
                <div className="mt-4">
                  <button className="btn bg-black border-0 w-24">Live</button>
                  <button className="btn bg-black border-0 ml-4 w-24">
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div class="cards">
            <div class="cards2">
              <div className="mx-auto image-wrap p-4">
                <img src={project3} alt="project-img" className="" />
                <div className="mt-4 flex justify-around items-center">
                  <button className="btn bg-black border-0 w-24">Live</button>
                  <button className="btn bg-black border-0 ml-4 w-24">
                    Client Code
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex justify-center items-center my-24">
        <Link to="/projects">
          <PrimaryButton>See More Project</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
