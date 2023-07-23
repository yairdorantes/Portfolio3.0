import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import cv from "../media/cv.pdf";
const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  //   const isDesktop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    const body = document.querySelector("body");
    if (!isVisible) {
      body.classList.remove("overflow-hidden");
      body.classList.add("overflow-auto");
    } else {
      body.classList.remove("overflow-auto");
      body.classList.add("overflow-hidden");
    }
  }, [isVisible]);

  return (
    <>
      {isMobile && (
        <div
          className="fixed top-4 right-4 z-20 "
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.854 2.854a.5.5 0 00-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 10-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 00.708.708L7.5 8.207l4.646 4.647a.5.5 0 00.708-.708L8.207 7.5l4.647-4.646z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      )}
      <div
        className={`fixed  transition-all duration-300  text-white font-bold text-xl flex  ${
          isMobile
            ? isVisible
              ? "flex-col text-3xl capitalize  top-0  right-0 justify-around items-center bg-white bg-opacity-40  z-10 w-full h-full"
              : "flex-col top-0 capitalize justify-around items-center bg-white bg-opacity-40  z-10 w-full h-full -right-full"
            : "right-10 top-5 z-10 gap-10 capitalize"
        }  `}
      >
        <a
          href="#home"
          onClick={() => isMobile && setIsVisible(false)}
          className={`cursor-pointer ${
            isMobile
              ? "h-1/4 bg-blue-600 bg-opacity-80 w-full flex justify-center items-center"
              : ""
          }   `}
        >
          Inicio
        </a>
        <a
          href="#skills"
          onClick={() => isMobile && setIsVisible(false)}
          className={`cursor-pointer ${
            isMobile
              ? "h-1/4 bg-teal-600 bg-opacity-80 w-full flex justify-center items-center"
              : ""
          }`}
        >
          Habilidades
        </a>

        <a
          href="#portfolio"
          onClick={() => isMobile && setIsVisible(false)}
          className={`cursor-pointer ${
            isMobile
              ? "h-1/4 bg-rose-600 bg-opacity-80 w-full flex justify-center items-center"
              : ""
          }`}
        >
          Portafolio
        </a>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => isMobile && setIsVisible(false)}
          className={`cursor-pointer ${
            isMobile
              ? "h-1/4 bg-yellow-600 bg-opacity-80 w-full flex justify-center items-center"
              : ""
          }`}
        >
          CV
        </a>
      </div>
    </>
  );
};

export default Menu;
