import bg from "../media/pc.jpg";
import coder from "../media/programmer.png";
import cv from "../media/cv.pdf";

const Me = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen top font-RaleWay mb-16 bg-cover bg-center bg-fixed "
        style={{
          backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.458), rgba(12, 12, 12, 0.77)), url(${bg})`,
        }}
      >
        <div className="pt-20 p-2 lg:pt-56 ">
          <div className="max-w-lg  rounded-3xl  bg-gray-800 bg-opacity-60 mx-auto flex gap-5 flex-col justify-center items-center p-10">
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                <img className="" src={coder} />
              </div>
            </div>
            <div className="text-center font-extrabold ">
              <span className="text-white text-5xl ">Yair Dorantes</span>
              <div className="text-lg mt-2 capitalize text-gray-200 ">
                full stack developer
              </div>
              <div className="text-lg w-3/4 mt-4 mx-auto">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  className="mx-auto w-8 h-8 text-teal-400 "
                >
                  <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
                </svg>
              </div>
            </div>
            <div className="flex gap-5 items-center cursor-pointer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yair-dorantes-25a74a1a8/"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  className="w-8 h-8 text-white   rounded-md"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a
                href="https://github.com/yairdorantes"
                className="rounded-full"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="w-9 h-9 text-white rounded-full "
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>{" "}
              <a
                href={cv}
                className="rounded-full"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="none"
                  className="w-8 h-8 text-white"
                  viewBox="0 0 15 15"
                  height="1em"
                  width="1em"
                >
                  <path
                    fill="currentColor"
                    d="M4.5 6.995H4v1h.5v-1zm6 1h.5v-1h-.5v1zm-6 1.998H4v1h.5v-1zm6 1.007h.5v-1h-.5v1zm-6-7.003H4v1h.5v-1zM8.5 5H9V4h-.5v1zm2-4.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zm-9 4.495h6v-1h-6v1zm0 2.998l6 .007v-1l-6-.007v1zm0-5.996L8.5 5V4l-4-.003v1zm8 9.003h-10v1h10v-1zM2 13.5v-12H1v12h1zM2.5 1h8V0h-8v1zM13 3.5v10h1v-10h-1zM10.146.854l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;
