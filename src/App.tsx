import React, { useEffect, useState } from "react";
import "./App.css";
import krish from "./assets/krish.jpg";
import "./components/TheamToggleSwitch/theamToggleSwitchcss.css";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
// import { HoverEvent } from "@tsparticles/engine";
export const context = React.createContext([""]);

function App() {
  // <======================================= Routes ===================================================>

  // <======================================= Routes ===================================================>

  const [texttheme, setTexttheme] = useState("#facc15");
  const [lightPlateTheme, setLightPlateTheme] = useState("#fff7d6");
  const [lightBoderTheme, setLightBoderTheme] = useState("#ffeb9d");
  const [darkPlateTheme, setdarkPlateTheme] = useState("#0c0a09");
  const [darkBoderTheme, setdarkBoderTheme] = useState("#292524");

  const [Theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const onclickEvent = (
    theme: string,
    darkBorderTheme: string,
    darkPlatecolor: string,
    lightBorder: string,
    lightplate: string
  ) => {
    setLightPlateTheme(() => lightplate);
    setdarkBoderTheme(() => darkBorderTheme);
    setTexttheme(() => theme);
    setLightBoderTheme(() => lightBorder);
    setdarkPlateTheme(() => darkPlatecolor);
  };
  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [Theme]);

  const handleThemeSwitch = () => {
    setTheme(Theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <context.Provider
        value={[
          Theme,
          texttheme,
          lightPlateTheme,
          lightBoderTheme,
          darkPlateTheme,
          darkBoderTheme,
        ]}
      >
        <div className="duration-1000 w-full h-[100%] fixed transition-all bg-gradient-to-45 dark:bg-gradient-to-135"></div>
        <div className="w-full duration-1000 transition-all min-h-[600px] h-full flex flex-col items-center lg:flex-row  lg:justify-center lg:items-start md:px-[1vw]">
          {/* <===================================== Profile ========================================> */}
          <div className=" flex items-center sticky top-0 justify-center min-h-[600px] md:min-h-[70%] h-screen w-full lg:w-[25vw]">
            <div className="w-[90%] h-[95%] rounded-lg flex flex-row md:flex-col lg:flex-row justify-center items-end relative">
              <img
                className="lg:h-[37%] md:h-[70%] h-[40%] rounded-2xl absolute md:mr-[3vw] lg:mr-0 mb-[3vh] md:mb-0 lg:top-0 z-10"
                src={krish}
                alt=""
              />
              <div className="bg-[white] lg:min-w-[270px] flex items-start md:items-center lg:items-end lg:justify-center duration-1000 dark:bg-[black] text-black dark:text-white rounded-xl md:h-[90%] h-[100%] w-full py-[2vh]">
                <div className="flex flex-col lg:w-full w-full md:w-[70%] items-center box-border justify-around md:h-[70%] h-[55%] text-center ">
                  <div className="lg:h-[35%] flex flex-col justify-around lg:gap-auto gap-[2vh]">
                    <div className="">
                      <div className="text-4xl md:text-5xl lg:text-3xl font-bold myFont">
                        Krishna Panchal
                      </div>
                      <div
                        className={`p-1 text-black dark:text-white duration-1000 text-2xl md:text-3xl lg:text-lg font-bold rounded-lg`}
                      >
                        Full Stack Developer
                      </div>
                    </div>

                    <div
                      className={`flex justify-around h-full gap-2 items-center lg:text-3xl md:text-5xl text-4xl`}
                    >
                      {/* <div className={` flex justify-center items-center`}> */}
                      <motion.a
                        initial={{ borderColor: "transparent" }}
                        whileHover={{ borderColor: texttheme }}
                        className="border-2 duration-500 rounded-lg flex items-center justify-center w-full h-full"
                        href="https://www.instagram.com/krish_na203/"
                      >
                        <motion.i
                          className="fa-brands fa-instagram "
                          style={{ color: "#ff007b" }}
                        ></motion.i>
                      </motion.a>
                      {/* </div>
                      <div className={` flex justify-center items-center`}> */}
                      <motion.a
                        initial={{ borderColor: "transparent" }}
                        whileHover={{ borderColor: texttheme }}
                        className="border-2 duration-500 rounded-lg flex items-center justify-center w-full h-full"
                        href="https://www.github.com/krish203na"
                      >
                        <i className="fa-brands fa-github"></i>
                      </motion.a>
                      {/* </div>
                      <div className={`flex justify-center items-center`}> */}
                      <motion.a
                        initial={{ borderColor: "transparent" }}
                        whileHover={{ borderColor: texttheme }}
                        className="border-2 duration-500 rounded-lg flex items-center justify-center w-full h-full"
                        href="https://www.linkedin.com/in/krishna-panchal-5426aa271"
                      >
                        <motion.i
                          className="fa-brands fa-linkedin"
                          style={{ color: "#007bff" }}
                        ></motion.i>
                      </motion.a>
                      <motion.a
                        initial={{ borderColor: "transparent" }}
                        whileHover={{ borderColor: texttheme }}
                        className="border-2 duration-500 rounded-lg flex items-center justify-center w-full h-full"
                        href="https://www.linkedin.com/in/krishna-panchal-5426aa271"
                      >
                        <motion.i
                          className="fa-brands fa-square-facebook"
                          style={{ color: "#007bff" }}
                        ></motion.i>
                      </motion.a>
                      {/* </div> */}
                    </div>
                  </div>
                  <motion.div
                    className={`h-[40%] w-[90%] md:max-w-[90%] flex md:hidden truncate text-clip lg:flex flex-col items-center rounded-lg duration-1000 dark:text-white justify-around p-3`}
                    style={{
                      backgroundColor:
                        Theme === "dark" ? darkPlateTheme : lightPlateTheme,
                      border:
                        Theme === "dark" ? darkBoderTheme : lightBoderTheme,
                    }}
                  >
                    <div
                      className={`w-full px-[1vh] gap-[3vw] md:gap-[1vw] flex items-center justify-center rounded-xl text-xl lg:text-xl`}
                    >
                      <div>
                        <motion.i
                          className="fa-regular fa-envelope text-2xl md:text-xl"
                          style={{ color: "#ff0000" }}
                        ></motion.i>
                      </div>{" "}
                      <div>
                        <a
                          target="blank"
                          className="md:text-base w-full hover:underline"
                          href="mailto:krishla203@gmail.com"
                        >
                          krishla203@gmail.com
                        </a>
                      </div>
                    </div>
                    <div
                      className={`w-full px-[1vh] gap-[3vw] md:gap-[1vw] flex items-center justify-center  rounded-xl text-xl lg:text-xl`}
                    >
                      <div>
                        <motion.i
                          className="fa-solid fa-location-dot text-2xl md:text-xl"
                          style={{ color: "#74C0FC" }}
                        ></motion.i>
                      </div>{" "}
                      <div>
                        <a
                          target="blank"
                          className="md:text-base w-full hover:underline"
                          href="https://www.google.com/maps/place/SINGH+IKON+BUILDING/@19.2146607,73.1985079,17z/data=!4m15!1m8!3m7!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNew+York,+NY,+USA!3b1!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2!3m5!1s0x3be7930896020d8d:0x7d1f17f4850193e!8m2!3d19.2146557!4d73.2033788!16s%2Fg%2F11p49k2fwc?entry=ttu"
                        >
                          Mumbai, India
                        </a>
                      </div>
                    </div>
                    <div
                      className={`w-full px-[1vh] gap-[3vw] md:gap-[1vw] flex items-center justify-center  rounded-xl text-xl lg:text-xl`}
                    >
                      <div>
                        <motion.i
                          className="fa-solid fa-phone text-2xl md:text-xl"
                          style={{ color: "#00e604" }}
                        ></motion.i>
                      </div>{" "}
                      <div>
                        <a
                          target="blank"
                          className="md:text-base hover:underline"
                          href="tel:+917038256913"
                        >
                          7038256913
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className={`w-[60%] min-h-[50px] h-[10%] text-xl flex duration-1000 justify-center items-center rounded-xl`}
                    style={{ background: texttheme }}
                  >
                    <a
                      target="_blank"
                      href="/doc/CompleteResume.pdf"
                      download="Krishna_CV"
                      rel="noreferrer"
                      className="w-full h-full flex items-center justify-center hover:text-white duration-500 hover:dark:text-black"
                    >
                      Download CV
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* <===================================== Profile ========================================> */}

          {/* <===================================== Display ========================================> */}
          <div
            className={`flex items-center justify-center h-[100%] mt-[3vh] w-full md:w-[90%] lg:w-[70vw] font-extrabold`}
          >
            {/* <div className="w-[100%] md:hidden bg-[white] flex flex-col duration-1000 dark:bg-[black] gap-[2vh] h-[95%] text-6xl justify-center text-black dark:text-white items-center p-[10vh] rounded-xl z-10">
              <i className="fa-solid fa-rotate fa-spin"></i>
              <p className="text-2xl text-center">view in landscape mode</p>
            </div> */}
            <div
              id="main"
              className="lg:w-[95%] md:block  relative h-[100%] lg:h-[95%] rounded-xl bg-[white] duration-1000 dark:bg-[#171717] lg:overflow-y-scroll overflow-x-hidden"
            >
              <Outlet />
            </div>
          </div>
          {/* <===================================== Display ========================================> */}

          {/* <===================================== Menu ========================================> */}
          <div className=" md:flex sticky top-0 bottom-0 lg:flex-col gap-2 items-center justify-center lg:h-screen w-[100%] lg:w-[6vw]  z-10">
            <div className="lg:bg-[#ffffff42] lg:bg-white lg:dark:bg-black dark:bg-[#00000038] duration-1000 backdrop-blur-md flex flex-col md:flex-row gap-3 md:gap-0 lg:flex-col items-center justify-around h-full py-[1vh] md:h-[95%] sticky md:rounded-xl w-[100%] p-[1vw] lg:p-0">
              <div className="h-[50%] flex lg:flex-col gap-1 duration-1000 justify-around lg:w-full md:w-[60%] w-full items-center text-black dark:text-white text-[1.6rem] hover">
                <NavLink
                  to={"/Portfolio/"}
                  className={"rounded-lg p-[3vw] md:p-0 duration-1000"}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? texttheme : "transparent",
                    };
                  }}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: texttheme,

                      // color: Theme === "dark" ? "black" : "white",
                    }}
                    transition={{ duration: 0.5 }}
                    id="Home"
                    title="Home"
                    className={`group w-full md:w-[4.5vw] h-full md:h-[4.5vw] flex-col rounded-lg flex justify-center items-center text-black`}
                  >
                    <i className="fa-solid fa-address-card text-black dark:text-white duration-1000"></i>
                  </motion.div>
                </NavLink>
                <NavLink
                  to={"/Portfolio/education"}
                  className={"rounded-lg p-[3vw] md:p-0 duration-1000"}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? texttheme : "transparent",
                    };
                  }}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: texttheme,
                      // color: Theme === "dark" ? "black" : "black",
                    }}
                    id="Education"
                    className="w-[4.5vw] h-[4.5vw] rounded-lg flex flex-col gap-1 justify-center items-center"
                  >
                    <i className="fa-solid fa-user-graduate text-black dark:text-white duration-1000"></i>
                  </motion.div>
                </NavLink>
                <NavLink
                  to={"/Portfolio/skill"}
                  className={"rounded-lg p-[3vw] md:p-0 duration-1000"}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? texttheme : "transparent",
                    };
                  }}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: texttheme,
                      // color: Theme === "dark" ? "black" : "black",
                    }}
                    id="Skills"
                    className="w-[4.5vw] h-[4.5vw] rounded-lg flex flex-col justify-center items-center"
                  >
                    <i className="fa-solid fa-screwdriver-wrench text-black dark:text-white duration-1000"></i>
                  </motion.div>
                </NavLink>
                <NavLink
                  to={"/Portfolio/project"}
                  className={"rounded-lg p-[3vw] md:p-0 duration-1000"}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? texttheme : "transparent",
                    };
                  }}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: texttheme,
                      // color: Theme === "dark" ? "black" : "black",
                    }}
                    id="Project"
                    className="w-[4.5vw] h-[4.5vw] rounded-lg flex flex-col justify-center items-center"
                  >
                    <i className="fa-solid fa-briefcase text-black dark:text-white duration-1000"></i>
                  </motion.div>
                </NavLink>
                <NavLink
                  to={"/Portfolio/contact"}
                  className={"rounded-lg p-[3vw] md:p-0 duration-1000"}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? texttheme : "transparent",
                    };
                  }}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: texttheme,
                      // color: Theme === "dark" ? "black" : "black",
                    }}
                    transition={{ duration: 0.5 }}
                    id="Contact"
                    className="w-[4.5vw] h-[4.5vw] rounded-lg flex flex-col justify-center items-center"
                  >
                    <i className="fa-solid fa-address-book duration-1000 text-black dark:text-white"></i>
                  </motion.div>
                </NavLink>
              </div>
              <div
                className={`lg:flex-col h-[30%] flex w-[40%] justify-center duration-1000 items-center gap-5 md:gap-2 text-black dark:text-white`}
              >
                <h1 className="hidden lg:block">Theme</h1>
                <button
                  onClick={() => {
                    onclickEvent(
                      "#16a34a",
                      "#27272a",
                      "#1c1917",
                      "#66ff9e",
                      "#edf6f0"
                    );
                  }}
                  className="bg-[#16a34a] rounded-full w-5 h-5"
                ></button>
                <button
                  onClick={() => {
                    onclickEvent(
                      "#e11d48",
                      "#27272a",
                      "#1c1917",
                      "#ff94a9",
                      "#fff3f5"
                    );
                  }}
                  className="bg-[#e11d48] rounded-full w-5 h-5"
                ></button>
                <button
                  onClick={() => {
                    onclickEvent(
                      "rgb(109,40,217)",
                      "rgb(31,41,55)",
                      "rgb(3,7,18)",
                      "#c39dff",
                      "#f8f4ff"
                    );
                  }}
                  className="bg-[rgb(109,40,217)] rounded-full w-5 h-5"
                ></button>
                <button onClick={handleThemeSwitch} className="text-[#9d1f5e]">
                  <div
                    className={` lg:w-[3vw] lg:h-[3vw] w-10 rounded-full duration-1000 flex justify-center items-center ${
                      Theme === "dark"
                        ? `bg-[white] ${texttheme}`
                        : `bg-[black] ${texttheme}`
                    }`}
                  >
                    {Theme === "dark" ? (
                      <motion.i
                        className="fa-solid fa-stars text-lg lg:text-2xl"
                        style={{ color: "#0052e0" }}
                      ></motion.i>
                    ) : (
                      <motion.i
                        className="fa-solid fa-sun text-lg lg:text-2xl"
                        style={{ color: "#FFD43B" }}
                      ></motion.i>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* <===================================== Menu ========================================> */}
        </div>
        {/* </div> */}
      </context.Provider>
    </>
  );
}

export default App;
