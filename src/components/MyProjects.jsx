import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { projects } from "./Projects";
import { useInView } from "react-intersection-observer";
const MyProjects = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [Projects, setProjects] = useState(projects.slice(0, 5));
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [projectSelected, setProjectSelected] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [startArray, setStartArray] = useState(0);
  const [endArray, setEndArray] = useState(5);
  const [cont, setCont] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const createInterval = () => {
    clearInterval(intervalId);
    setNumbers([]);
    setCont(-1);
    const id = setInterval(() => {
      // console.log("xd");
      setCont((prevCont) => {
        const updatedCont = prevCont + 1;
        setNumbers((prevNumbers) => [...prevNumbers, updatedCont]);
        // console.log(updatedCont);
        if (updatedCont > 4) {
          clearInterval(id);
        }
        return updatedCont;
      });
    }, 400);
    setIntervalId(id);
  };
  useEffect(() => {
    inView ? createInterval() : setNumbers([]);
  }, [inView]);

  const nextProjects = () => {
    if (endArray < projects.length) {
      setStartArray(startArray + 5);
      setEndArray(endArray + 5);
    }
  };
  const prevProjects = () => {
    if (startArray >= 5) {
      setStartArray(startArray - 5);
      setEndArray(endArray - 5);
    }
  };
  useEffect(() => {
    const newArray = projects.slice(startArray, endArray);
    setProjects(newArray);
  }, [startArray, endArray]);
  const renderProject = (project, i) => {
    const isSelected = projectSelected === i;
    return (
      <>
        <div
          key={i}
          onClick={() => setProjectSelected(i)}
          style={{
            backgroundImage: `url(${project.image})`,
          }}
          className={`
        relative transition-all duration-300  
        ${isDesktop ? "w-[350px]" : "w-5/6 mb-1 mx-auto"} 
        ${!isSelected && (isDesktop ? " ancho " : "h-[65px]") + " grayscale "} 
         shadow-sm shadow-gray-400 bg-center bg-cover rounded-3xl h-[350px] mb-3
        ${numbers.includes(i) ? "topo opacity-100" : "opacity-0"}
      `}
        >
          {isSelected && (
            <div className="absolute  p-5 h-1/2 w-full rounded-br-3xl rounded-bl-3xl bg-opacity-30 bg-black bottom-0">
              <div className="absolute right-2 top-2 cursor-pointer">
                <a href={project.repo}>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-10 h-10 text-black  rounded-full bg-white"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                </a>
              </div>
              <span className="text-2xl  text-white font-bold">
                {project.name}
              </span>
              <p className="text-white font-FiraCode max-h-10 mb-2 break-words text-md">
                {project.description}
              </p>

              <button className="btn btn-sm absolute bottom-2">Demo</button>
            </div>
          )}
          {!isSelected && !isMobile && (
            <div className="absolute w-full h-full bg-opacity-10 rounded-3xl bg-white">
              <div className="font-bold w-[350px] h-[150px] flex justify-center items-center text-white text-2xl absolute bottom-14 -left-[65px] -rotate-90">
                {project.name}
              </div>
            </div>
          )}
          {isMobile && projectSelected !== i && (
            <div className="absolute w-full h-full bg-opacity-10  rounded-3xl bg-white">
              <div className="font-bold h-full  flex justify-center items-center  text-white text-2xl">
                {project.name}
              </div>
            </div>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      <div
        ref={ref}
        id="section3"
        className="text-3xl font-extrabold text-white mt-24 mb-10"
      >
        Mis proyectos
      </div>
      {/* <div className="fixed top-0 bg-white  text-black">
        is in view?{inView.toString()} {numbers.toString()}
      </div> */}
      <div className="flex gap-4 justify-center">
        {isDesktop && Projects.map(renderProject)}
      </div>

      <div className="mt-20 ">
        {isMobile && Projects.map(renderProject)}
        {inView && (
          <div className="flex gap-3 mt-10 justify-center">
            <button className="shadow__btn" onClick={prevProjects}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-10 h-10"
              >
                <path d="M13.293 6.293L7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
              </svg>
            </button>
            <button className="shadow__btn" onClick={nextProjects}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                // className="w-10 h-6 "
              >
                <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyProjects;
