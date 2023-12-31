import { useEffect, useState } from "react";
import { stack } from "./icons";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Stack = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [numbers, setNumbers] = useState([]);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [intervalId, setIntervalId] = useState(null);
  const createInterval = () => {
    let cont = -1;
    clearInterval(intervalId);
    setNumbers([]);
    const id = setInterval(() => {
      cont++;
      setNumbers((prevNumbers) => [...prevNumbers, cont]);
      console.log(cont);
      //TODO depends of icons' length
      if (cont > 10) {
        clearInterval(id);
      }
    }, 700);
    setIntervalId(id);
  };

  useEffect(() => {
    inView && createInterval();
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        id="skills"
        className={`bottom text-3xl font-RaleWay   text-white font-extrabold pt-24 mb-10 ${
          inView ? "expand-top" : "opacity-0"
        } text-center  `}
      >
        Habilidades{" "}
      </div>
      <div className="flex  select-none  gap-4 mx-auto justify-center flex-wrap w-full lg:w-1/2 ">
        {stack.map((tech, i) => (
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.831), rgba(12, 12, 12, 0.917)), url(${tech.img})`,
            }}
            key={i}
            className={` lg:w-60 text-lg lg:h-32 bg-center bg-cover my-shadow   ${
              numbers.includes(i) && "jello-horizontal"
            }  shadow-sm shadow-[#ffffff2b] w-40 text-white py-3 font-bold flex gap-3 items-center p-2 rounded-xl`}
          >
            <div>
              <img
                className={`w-12 ${tech.name === "MongoDB" && "w-5"} `}
                src={tech.img}
                alt=""
              />
            </div>
            <div>{tech.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stack;
