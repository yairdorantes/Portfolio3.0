import { useEffect, useState } from "react";
import { stack } from "./icons";
import { useInView } from "react-intersection-observer";

const Stack = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [numbers, setNumbers] = useState([]);

  const [intervalId, setIntervalId] = useState(null);
  const createInterval = () => {
    let cont = -1;
    clearInterval(intervalId);
    setNumbers([]);
    const id = setInterval(() => {
      // console.log("xd");
      cont++;
      setNumbers((prevNumbers) => [...prevNumbers, cont]);

      console.log(cont);
      //TODO depends of icons' length
      if (cont > 10) {
        clearInterval(id);
      }
    }, 500);
    setIntervalId(id);
  };
  // useEffect(() => {
  //   createInterval();
  // }, []);
  useEffect(() => {
    console.log(inView);
    inView && createInterval();
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        className="flex mt-10 select-none cursor-pointer gap-4 mx-auto justify-center flex-wrap max-w-lg"
      >
        {stack.map((tech, i) => (
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.878), rgba(12, 12, 12, 0.917)), url(${tech.img})`,
            }}
            key={i}
            className={` bg-center bg-cover my-shadow   ${
              numbers.includes(i) ? "jello-horizontal " : "opacity-100"
            }  shadow-sm shadow-[#ffffff2b] w-36 text-white py-3 font-bold flex gap-3 items-center p-2 rounded-xl`}
          >
            <div>
              <img
                className={`w-12 ${numbers.includes(i) && ""} ${
                  tech.name === "MongoDB" && "w-5"
                } `}
                src={tech.img}
                alt=""
              />
            </div>
            <div className={`${numbers.includes(i) ? "" : ""}`}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default Stack;
