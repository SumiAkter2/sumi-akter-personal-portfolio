import React from "react";
import "./Project.css";
import project1 from "../../../../assets/img/cryptoVest.png";
import project2 from "../../../../assets/img/Luxury suites.png";
import project3 from "../../../../assets/img/blackfit.png";

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-5xl text-center font-bold">
        Latest Portfolio
      </h1>

      <div className="  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto my-12">
        <div className=" ">
          <div class="cards">
            <div class="cards2">
              <div className="mx-auto image-wrap p-4">
                <img src={project1} alt="project-img" className="" />
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
      </div>
    </div>
  );
};

export default Projects;
