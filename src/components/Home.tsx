import { motion } from "framer-motion";
import { useContext } from "react";
import { context } from "../App";
import { FlipWords } from "./ui/flip-words";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [
    Theme,
    texttheme,
    lightPlateTheme,
    lightBoderTheme,
    darkPlateTheme,
    darkBoderTheme,
  ]: any = useContext(context);

  return (
    <>
      <div className="flex h-screen relative flex-col gap-5 duration-1000 tracking-wider justify-center text-black dark:text-white items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl"
        >
          hello I'm
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: texttheme }}
          className="text-7xl md:text-8xl text-center duration-1000"
        >
          Krishna Ashok Panchal
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="overflow-hidden text-3xl md:text-4xl mx-auto text-center font-normal text-neutral-600 dark:text-neutral-400"
        >
          a passionate
          <FlipWords words={["Web_Developer", "Software_Developer"]} /> <br />
        </motion.div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "80%" }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ backgroundColor: texttheme }}
          className="w-[80%] h-[1%] rounded-full duration-700"
        ></motion.div>
        <motion.i
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, repeatType: "reverse", repeat: Infinity }}
          className="fa-solid duration-1000 fa-chevrons-down rotate-90 absolute bottom-[10%] text-5xl md:right-[47%]"
          style={{ color: texttheme }}
        ></motion.i>
      </div>

      <motion.div className="px-[5vw] py-[10vh] flex flex-col gap-6">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-4 items-center"
        >
          <h1 className="text-3xl text-black dark:text-white duration-1000">
            Hii !
          </h1>
          <div
            style={{ backgroundColor: texttheme }}
            className="w-[60%] h-1 duration-1000"
          ></div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="dark:text-white text-black flex flex-col rounded-xl gap-2 duration-1000 text-sm md:text-base font-normal p-[2vh] md:p-[1.5vw]"
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
        >
          <div>
            I am{" "}
            <strong style={{ color: texttheme, transitionDuration: "1s" }}>
              Krishna Ashok Panchal
            </strong>
            , I am passionate Full stack developer from Mumbai, India. I love to
            transform ideas into Impactful Solutions with a robust skill sets.
            I've created impactful projects, including a full-stack e-commerce
            website, weather web app, portfolio websites and various animated
            frontend websites.
          </div>
          <div>
            {" "}
            Armed with a Mechanical Engineering background with experience in
            international company. This dual expertise allows me to bridge the
            gap between mechanical design, 3d Modelling, analysis and software
            implementation, ensuring a holistic and integrated approach to
            problem-solving.
          </div>
          <div>
            In the ever-evolving tech landscape, I'm committed to staying
            updated with the latest trends and technologies, ensuring I bring
            the best to every project.
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="dark:text-white text-black text-sm md:text-base rounded-lg duration-1000 font-normal p-[2vh] md:p-[1.5vw]"
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
        >
          My aim is to obtain a challenging position where I can able to utilize
          my skills, and capabilities in fastly growing Software industry can be
          utilized to enhance user experiences and drive business objectives.
        </motion.div>
      </motion.div>
      <div
        style={{
          backgroundColor: Theme === "dark" ? darkPlateTheme : lightPlateTheme,
          borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
        }}
        className="mt-[3%] h-[100%] py-[8vh] flex-wrap flex justify-around text-black dark:text-white duration-1000 font-light items-center"
      >
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
            damping: 6,
          }}
          style={{
            backgroundColor: Theme === "dark" ? "black" : "white",
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[20%] min-w-[150px] h-[60%] border-white border rounded-lg py-8 gap-[3vh] flex flex-col justify-around md:mb-10"
        >
          <div className="text-center text-7xl">
            <i className="fa-duotone fa-arrows-to-circle animate-pulse"></i>
          </div>
          <div className="text-2xl font-semibold text-center animate-pulse">
            Dedication
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
            damping: 6,
          }}
          style={{
            backgroundColor: Theme === "dark" ? "black" : "white",
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[20%] h-[60%] min-w-[150px] border-white border  rounded-lg py-8 gap-[3vh] flex flex-col justify-around md:mt-10"
        >
          <div className="text-center text-7xl">
            <i className="fa-sharp fa-solid fa-head-side-brain animate-pulse"></i>
          </div>
          <div>
            <div className="text-2xl font-semibold text-center animate-pulse">
              Smart work
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
            damping: 6,
          }}
          style={{
            backgroundColor: Theme === "dark" ? "black" : "white",
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[20%] h-[60%] min-w-[150px] border-white border rounded-lg py-8 gap-[3vh] flex flex-col justify-around md:mb-10"
        >
          <div className="text-center text-7xl">
            <i className="fa-regular fa-users-medical animate-pulse"></i>
          </div>
          <div>
            <div className="text-2xl font-semibold text-center animate-pulse">
              Team Player
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
            damping: 6,
          }}
          style={{
            backgroundColor: Theme === "dark" ? "black" : "white",
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[20%] h-[60%] min-w-[150px] border-white border ease-in-out rounded-lg py-8 gap-[3vh] flex flex-col justify-around md:mt-10"
        >
          <div className="text-center text-7xl">
            <i className="fa-solid fa-laptop-mobile animate-pulse"></i>
          </div>
          <div>
            <div className="text-2xl font-semibold text-center animate-pulse">
              tech Updated
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{
          color: texttheme,
        }}
        className="text-6xl py-10 duration-1000"
      >
        <Marquee
          style={{
            fontFamily: "sans-serif",
            WebkitTextStrokeWidth: 2,
            WebkitTextFillColor: Theme === "dark" ? "black" : "white",
          }}
          speed={80}
          className=" h-full overflow-hidden"
        >
          _Web developer from Mumbai, India_
        </Marquee>
        <Marquee
          style={{
            fontFamily: "sans-serif",
            WebkitTextStrokeWidth: 2,
            WebkitTextFillColor: Theme === "dark" ? "black" : "white",
          }}
          speed={80}
          direction="right"
          className="h-full overflow-hidden"
        >
          _Software developer let's work together_
        </Marquee>
      </div>
      <div className="flex h-screen justify-center gap-8 dark:text-white text-black duration-1000 items-center flex-col">
        <div>
          <h1 className="text-3xl text-center">let's start working</h1>
          <h1 className="text-6xl text-center">let's start a new project</h1>
        </div>
        <NavLink to={"/Portfolio/contact"}>
          <button
            style={{ backgroundColor: texttheme }}
            className="px-5 py-3 rounded-xl"
          >
            contact me
          </button>
        </NavLink>
        <motion.div
          initial={{ width: "10%" }}
          animate={{ width: "30%" }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ backgroundColor: texttheme }}
          className="w-[30%] h-[1%] duration-700 "
        ></motion.div>
      </div>
    </>
  );
};

export default Home;
