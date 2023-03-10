import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Button/PrimaryButton";

const AllProjects = () => {
  const projects = [
    {
      id: 3,
      Name: "Luxury Suites",
      img: "https://i.ibb.co/VVNNLLQ/Luxury-suites.png",
      imgSort: "https://i.ibb.co/pXRfSSc/luxury-sort.png",
      liveLink: "https://luxury-suites-6b69b.web.app/",
      ClientsLink: "https://github.com/SumiAkter2/Luxury-suites-client",
      ServerLink: "https://github.com/SumiAkter2/luxury-suites-server",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
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
      id: 4,
      Name: "One Step Auto Zone",
      img: "https://i.ibb.co/s5qvqm0/auto-zone.png",
      imgSort: "https://i.ibb.co/HFffsPZ/Best-Tools-Sort.png",
      liveLink: "https://one-step-auto-zone.web.app/",
      ClientsLink:
        "https://github.com/SumiAkter2/one-step-auto-zone-client-site",
      // ServerLink: "https://github.com/SumiAkter2/best-tools-server",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },

    {
      id: 5,
      Name: "BD Garage",
      img: "https://i.ibb.co/1qXDcSz/bd-garage.png",
      imgSort: "https://i.ibb.co/kXR4fDL/BD-Garage-sort.png",
      liveLink: "https://bd-garage.vercel.app/",
      ClientsLink: "https://github.com/SumiAkter2/bd-garage",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem persp",
    },
    {
      id: 16,
      Name: "Best Tools co",
      img: "https://i.ibb.co/DfzMygZ/Best-Tools.png",
      imgSort: "https://i.ibb.co/HFffsPZ/Best-Tools-Sort.png",
      liveLink: "https://best-tools-7262f.web.app/",
      ClientsLink: "https://github.com/SumiAkter2/best-tools-clients",
      ServerLink: "https://github.com/SumiAkter2/best-tools-server",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
    {
      id: 7,
      Name: "IniLabs School",
      img: "https://i.ibb.co/ftkKP6s/inilabs.png",
      imgSort: "https://i.ibb.co/99r5ZJ8/inlab-sort.png",
      liveLink: "https://inilabs-school.web.app/",
      ClientsLink: "https://github.com/SumiAkter2/inilabs-school",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },

    {
      id: 8,
      Name: "Doctors Portal",
      img: "https://i.ibb.co/jVG4xLg/Doctors-portal.png",
      imgSort: "https://i.ibb.co/TYP9W4P/Doctors-sort.png",
      liveLink: "https://doctors-portal-c3669.web.app/",
      ClientsLink: "https://github.com/SumiAkter2/doctors-portal-client",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
    {
      id: 15,
      Name: "The car Land",
      img: "https://i.ibb.co/0FPmBTp/car.png",
      imgSort: "https://i.ibb.co/vcSkmKn/car-sort.png",
      liveLink: "https://the-car-land.web.app/",
      ClientsLink: "https://github.com/SumiAkter2/car-land",
      ServerLink: "https://github.com/SumiAkter2/car-land-server",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
    {
      id: 9,
      Name: "Penguin Fashion",
      img: "https://i.ibb.co/6yVJN9L/Penguin-Fashion.png",
      imgSort: "https://i.ibb.co/pdNt38z/Penguin-sort.png",
      liveLink: "https://splend-medovik-37a66e.netlify.app/",
      ClientsLink: "https://github.com/SumiAkter2/nike-react",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
    {
      id: 10,
      Name: "Bangladesh",
      img: "https://i.ibb.co/bzXMSpB/Bangladesh.png",
      imgSort: "https://i.ibb.co/0Qf1xBC/Bangladesh-sort.png",
      liveLink: "https://fabulous-kitsune-11660e.netlify.app/",
      ClientsLink: "https://github.com/SumiAkter2/Bangladesh",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },

    {
      id: 13,
      Name: "Phone Seeker",
      img: "https://i.ibb.co/jy96hzx/Phone-Seeker.png",
      imgSort: "https://i.ibb.co/5XQbs3k/Phone-sort.png",
      liveLink: "https://loving-snyder-d7906c.netlify.app/",
      ClientsLink: "https://github.com/SumiAkter2/Phone-seeker",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur nisi veritatis totam, exercitationem architecto sit, consectetur tempora voluptate pariatur, ex quod soluta. Ratione dolorem perspiciatis tempore nobis quod consequuntur?",
    },
    {
      id: 14,
      Name: "JavaScript Calculator",
      img: "https://i.ibb.co/0ypJkTr/Calc-sort.png",
      imgSort: "https://i.ibb.co/0ypJkTr/Calc-sort.png",
      liveLink: "https://joyful-vacherin-96c794.netlify.app/",
      ClientsLink: "https://github.com/SumiAkter2/js-calculator",
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
            <div className="cards">
              <div className="cards2">
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
      </div>

      <div className="flex justify-center items-center my-24">
        <Link to="/">
          <PrimaryButton>Back Home</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default AllProjects;
