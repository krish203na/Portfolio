import { motion } from "framer-motion";
import  { useContext } from "react";
import { context } from "../App";

const Project = () => {
  // const languages = [
  //   { img: "/images/java.png", name: "Java", percentage: "85%" },
  //   { img: "/images/javascript.png", name: "JavaScript", percentage: "70%" },
  //   { img: "/images/html.png", name: "HTML", percentage: "90%" },
  //   { img: "/images/css.png", name: "CSS", percentage: "95%" },
  //   { img: "/images/typescript.png", name: "TypeScript", percentage: "70%" },
  // ];

  const [
    Theme,
    texttheme,
    lightPlateTheme,
    lightBoderTheme,
    darkPlateTheme,
    darkBoderTheme,
  ]: any = useContext(context);

  return (
    <div className="text-white p-[3vh] md:p-[3vw] h-full">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center"
      >
        <h1 className="text-3xl text-black dark:text-white duration-1000">
          Projects
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[60%] h-1 duration-1000"
        ></div>
      </motion.div>
      <motion.div className="p-[1.5vh] md:p-[1.5vw] flex justify-center flex-wrap gap-[1.5vw] text-black dark:text-white">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ borderColor: texttheme }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[45%] relative min-w-[300px] min-h-[30vh] h-full border-4 rounded-xl p-[1.5vw] duration-1000 ease-linear"
        >
          <div style={{ color: texttheme }} className="absolute -top-4 -left-2">
            <i className="fa-solid fa-beat-fade fa-trophy-star text-5xl"></i>
          </div>
          <video
            className="w-full rounded-lg"
            autoPlay
            loop
            muted
            controls
            // src="/video/Fashi.mp4"
            src=".\video\Fashi.mp4"
          ></video>
          <div className="flex flex-col items-center py-[2vh] gap-[2.5vh]">
            <h1 className="text-2xl text-center ">Fashi. the Fashion</h1>
            <p className="text-sm text-clip w-full overflow-clip font-light text-center">
              Java Full Stack Project got 🥇 1st Price in project Marathon
            </p>
            <motion.div
              className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
              style={{ background: texttheme }}
            >
              <a
                target="blank"
                className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                href="https://github.com/krish203na/Fashi._for_Fashion"
              >
                source code
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ borderColor: texttheme }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[45%] min-w-[300px] min-h-[30vh] h-full border-4 rounded-xl p-[1.5vw] duration-1000 ease-linear"
        >
          <video
            className="w-full rounded-lg"
            autoPlay
            loop
            muted
            controls
            src=".\video\Weatherify.mp4"
          ></video>
          <div className="flex flex-col items-center py-[2vh] gap-[2.5vh]">
            <h1 className="text-2xl text-center ">Weatherif!</h1>
            <p className="text-sm text-clip w-full overflow-clip font-light text-center">
              🌦️ weather web application developed using the React technology
            </p>
            <div className="w-full flex justify-around">
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://github.com/krish203na/wetherify"
                >
                  source code
                </a>
              </motion.div>
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://krish203na.github.io/wetherify/"
                >
                  Link link
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ borderColor: texttheme }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[45%] min-w-[300px] min-h-[30vh] h-full border-4 rounded-xl p-[1.5vw] duration-1000 ease-linear"
        >
          <video
            className="w-full rounded-lg"
            autoPlay
            loop
            muted
            controls
            src=".\video\PortfolioHomepage.mp4"
          ></video>
          <div className="flex flex-col items-center py-[2vh] gap-[2.5vh]">
            <h1 className="text-2xl text-center ">3D portfolio</h1>
            <p className="text-sm text-clip w-full overflow-clip font-light text-center">
              3D personal Portfolio 💼 developed using React with creative
              animations
            </p>
            <div className="w-full flex justify-around">
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://github.com/krish203na/portpholio"
                >
                  source code
                </a>
              </motion.div>
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://krish203na.github.io/portpholio/"
                >
                  Live link
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ borderColor: texttheme }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[45%] min-w-[300px] min-h-[30vh] h-full border-4 rounded-xl p-[1.5vw] duration-1000 ease-linear"
        >
          <video
            className="w-full rounded-lg"
            autoPlay
            loop
            muted
            controls
            src=".\video\personal.mp4"
          ></video>
          <div className="flex flex-col items-center py-[2vh] gap-[2.5vh]">
            <h1 className="text-2xl text-center ">Personal Portfolio</h1>
            <p className="text-sm text-clip w-full overflow-clip font-light text-center">
              Personal Portfolio 💼 developed using React technology with unique
              design
            </p>
            <div className="w-full flex justify-around">
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://krish203na.github.io/portpholio/"
                >
                  source code
                </a>
              </motion.div>
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://krish203na.github.io/portpholio/"
                >
                  Live link
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ borderColor: texttheme }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="w-[45%] min-w-[300px] min-h-[30vh] h-full border-4 rounded-xl p-[1.5vw] duration-1000 ease-linear"
        >
          <img
            src="./images/wixStudio.png"
            className="w-full rounded-lg"
            alt=""
          />
          <div className="flex flex-col items-center py-[2vh] gap-[2.5vh]">
            <h1 className="text-2xl text-center ">Wix studio clone</h1>
            <p className="text-sm text-clip w-full overflow-clip font-light text-center">
              Wix Studio clone using React with animation using GSAP & Framer
              motion
            </p>
            <div className="w-full flex justify-around">
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://github.com/krish203na/wix_Studio"
                >
                  source code
                </a>
              </motion.div>
              <motion.div
                className={`w-[40%] duration-500 min-h-[30px] h-[10%] font-normal text-md flex justify-center items-center rounded-lg`}
                style={{ background: texttheme }}
              >
                <a
                  target="blank"
                  className="w-full h-full text-center hover:text-white hover:dark:text-black duration-500"
                  href="https://krish203na.github.io/wix_Studio/"
                >
                  Live link
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;
