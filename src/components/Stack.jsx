import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { projects } from "./Projects";

const MyProjects = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [projectSelected, setProjectSelected] = useState(-1);

  return (
    <>
      {projects.map((project, i) => (
        <div
          key={i}
          onClick={() => setProjectSelected(i)}
          style={{
            backgroundImage: `url(${project.image})`,
          }}
          className={`h-[350px] ${
            isMobile ? "w-5/6 mb-1 mx-auto" : "w-[315px] m-10"
          } ${
            projectSelected === i
              ? ""
              : isMobile
              ? "h-[65px]"
              : "w-[155px] grayscale"
          } relative border-2 border-gray-800 bg-center bg-cover rounded-3xl`}
        >
          {projectSelected === i && (
            <div className="absolute bg-white p-5 h-1/2 w-full rounded-br-3xl rounded-bl-3xl bg-opacity-20 bottom-0">
              <div className="absolute right-2 top-2">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="w-10 h-10 text-black"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </div>
              <span className="text-2xl text-white font-bold">
                {project.name}
              </span>
              <p className="text-white mt-3">{project.description}</p>
              <button className="btn btn-sm mt-5">Demo</button>
            </div>
          )}
          {projectSelected !== i && !isMobile && (
            <div className="absolute w-full h-full bg-opacity-10 rounded-3xl bg-white">
              <div className="font-bold w-[350px] h-[150px] flex justify-center items-center text-white text-2xl absolute bottom-14 -left-[65px] -rotate-90">
                hello world this is
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MyProjects;
