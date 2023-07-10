import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Keyboard, Mousewheel } from "swiper";
import { useEffect, useState } from "react";
import { projects } from "./Projects";
const SliderProjects = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [slidesPerview, setSlidesPerView] = useState(3);
  const handleSlide = (id) => {
    setActiveSlide(id);
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides per view based on the screen width
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Call the resize handler initially and add it to the window's resize event
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={slidesPerview}
          spaceBetween={0}
          centeredSlides={true}
          mousewheel
          modules={[Pagination, Keyboard, Mousewheel]}
          keyboard
          initialSlide={1}
          className="mt-[150px] min-h-[350px] flex "
          onSlideChange={(slide) => handleSlide(slide.activeIndex)}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="">
              {/* <div className={`text-center ${""}`}>{project.name}</div> */}
              <div
                className={`relative group ${
                  slidesPerview === 1 && "w-11/12"
                } ${
                  activeSlide !== project.id - 1
                    ? "grayscale w-9/12 h-56"
                    : " w-10/12  h-64  "
                }  mx-auto mt-10 rounded-lg  bg-cover bg-center transition-all duration-500`}
                style={{
                  backgroundImage: "url(" + project.image + ")",
                }}
              >
                <div className="absolute  bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-70">
                  <h3 className="text-xl text-white font-bold">
                    {project.name}
                  </h3>
                  <p className="mt-2 break-words h-0 opacity-0 overflow-hidden group-hover:h-16 group-hover:opacity-100 text-sm text-gray-300 transition-all duration-700">
                    {project.description}
                  </p>

                  <div className="flex justify-end items-center gap-3">
                    <a href={project.repo}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className={`w-9 h-9  ${
                          activeSlide !== project.id - 1
                            ? "opacity-0"
                            : "text-white"
                        } transition-all duration-500`}
                      >
                        <path
                          d="M20.116 5.901a3.883 3.883 0 00-.26-.31 4.413 4.413 0 00.21-.76 5.284 5.284 0 00-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 00-3.35-.45 12.604 12.604 0 00-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 00-.35 2.77 4.21 4.21 0 00.22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 00-1.12 3.3 7.686 7.686 0 00.04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 00-.77 1.39 4.022 4.022 0 00-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 00-1.834-2.413 1.179 1.179 0 01-.17-.112 1.001 1.001 0 00-.93-.645h-.005a1 1 0 00-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 01.923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098.004.268a1 1 0 001 1H15.026a1 1 0 001-1s.008-3.16.008-3.69a4.024 4.024 0 00-.13-1.09l-.002-.006.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 00-.74-1.293l.012.021-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 00.04-.85 5.23 5.23 0 00-1.11-3.3z"
                          data-name="Brand Logos"
                        />
                      </svg>
                    </a>
                    <a href={""}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className={`w-9 h-9  ${
                          activeSlide !== project.id - 1
                            ? "opacity-0"
                            : "text-white"
                        } transition-all duration-500`}
                      >
                        <path d="M18 10.82a1 1 0 00-1 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h7.18a1 1 0 000-2H5a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3v-7.18a1 1 0 00-1-1zm3.92-8.2a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 000 2h3.59L8.29 14.29a1 1 0 000 1.42 1 1 0 001.42 0L20 5.41V9a1 1 0 002 0V3a1 1 0 00-.08-.38z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center  text-black bg-success w-10 mx-auto rounded-full">
          {activeSlide + 1}/{projects.length}
        </div>
      </div>
    </>
  );
};

export default SliderProjects;
