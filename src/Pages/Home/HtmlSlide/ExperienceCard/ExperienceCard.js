import React from "react";
import "./ExperienceCard.css";
const ExperienceCard = () => {
  return (
    <div>
      <div className="m-6 bg-black lg:p-12 p-6 rounded-md">
        <div className="lg:flex justify-center items-center gap-x-6 py-12">
          <div
            className="boxes  my-20 lg:my-0 mx-auto"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="content text-center mt-4">
              <h2>
                <span className="text-3xl font-bold">
                  20+ <br />
                </span>
                Projects Complete
              </h2>
            </div>
          </div>
          <div
            className="boxes  my-20 lg:my-0 mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="content text-center mt-4">
              <h2>
                <span className="text-3xl font-bold">
                  Good <br />{" "}
                </span>{" "}
                Communication Skill
              </h2>
            </div>
          </div>
          <div
            className="boxes  my-20 lg:my-0 mx-auto"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <div className="content text-center mt-4">
              <h2>
                <span className="text-3xl font-bold">
                  100% <br />
                </span>{" "}
                Client Satisfaction
              </h2>
            </div>
          </div>
          <div
            className="boxes  my-20 lg:my-0 mx-auto"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <div className="content text-center mt-4">
              <h2>
                <span className="text-3xl font-bold">
                  2+ <br />{" "}
                </span>{" "}
                Years Experience
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
