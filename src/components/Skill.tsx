import { useContext } from "react";
import { context } from "../App";
import { motion } from "framer-motion";
// import { GradientType } from "@tsparticles/engine";

const Skill = () => {
  const [
    Theme,
    texttheme,
    // lightPlateTheme,
    // lightBoderTheme,
    // darkPlateTheme,
    // darkBoderTheme,
  ]: any = useContext(context);

  console.log(Theme)

  const languages = [
    { img: "src/assets/images/java.png", name: "Java", percentage: "85%" },
    { img: "src/assets/images/javascript.png", name: "JavaScript", percentage: "75%" },
    { img: "src/assets/images/html.png", name: "HTML", percentage: "90%" },
    { img: "src/assets/images/css.png", name: "CSS", percentage: "95%" },
    { img: "src/assets/images/typescript.png", name: "TypeScript", percentage: "75%" },
  ];

  const frameworks = [
    { img: "src/assets/images/react.png", name: "React" },
    { img: "src/assets/images/spring.png", name: "Spring" },
    { img: "src/assets/images/mysql.png", name: "MySQL" },
    { img: "src/assets/images/nodejs.png", name: "nodeJS" },
    { img: "src/assets/images/hibernate.png", name: "Hibernate" },
    { img: "src/assets/images/tailwind.png", name: "Tailwind" },
    { img: "src/assets/images/bootstrap.png", name: "Bootstrap" },
    { img: "src/assets/images/framermotion.png", name: "Framer Motion" },
    { img: "src/assets/images/gsap.png", name: "GSAP" },
    { img: "src/assets/images/threejs.png", name: "ThreeJS" },
    { img: "src/assets/images/spline.png", name: "Spline" },
    { img: "src/assets/images/git.png", name: "git" },
    { img: "src/assets/images/github.png", name: "Github" },
  ];

  return (
    <div className="text-white p-[3vw] h-full">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center"
      >
        <h1 className="text-3xl text-black dark:text-white duration-1000">
          Skills
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[60%] h-1 duration-1000"
        ></div>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center "
      >
        <h1 className="text-2xl text-black dark:text-white duration-1000 p-[2vw]">
          Languages
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[60%] h-1 duration-1000"
        ></div>
      </motion.div>
      <motion.div className="p-[3vw] flex justify-center flex-wrap gap-[1.5vw] text-black dark:text-white">
        {languages.map((e, i) => {
          return languageCard(e.img, e.name, e.percentage, i.toString());
        })}
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center "
      >
        <h1 className="text-2xl text-black dark:text-white duration-1000 p-[2vw]">
          Framework and Libraries
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[40%] h-1 duration-1000"
        ></div>
      </motion.div>
      <motion.div className="p-[3vw] flex justify-center items-center flex-wrap overflow-visible gap-[2vw] lg:gap-[2vw] text-black dark:text-white">
        {frameworks.map((e, i) => {
          return skillCard(e.img, e.name, i.toString());
        })}
      </motion.div>
      {/* <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center "
      >
        <h1 className="text-2xl text-black dark:text-white duration-1000 p-[2vw]">
          Professional skills
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[40%] h-1 duration-1000"
        ></div>
      </motion.div> */}
      {/* <motion.div className="p-[3vw] flex justify-center items-center flex-wrap gap-[2vw] lg:gap-[2vw] text-black dark:text-white">
        <div className="relative w-[20vw] h-[20vw]">
          <div style={{borderColor:"",borderRadius:"100%"}} className="w-full h-full absolute border-8"></div>
          <div style={{backgroundColor:texttheme,borderRadius:"100% 100% 0 0"}} className="w-full h-full absolute "></div>
          <div className="w-1/2 h-1/2 absolute top-0 right-0"></div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Skill;

const skillCard = (img: string, name: string, i: string) => {
  const [
    Theme,
    texttheme,
    lightPlateTheme,
    lightBoderTheme,
    darkPlateTheme,
    darkBoderTheme,
  ]: any = useContext(context);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      key={i}
      style={{
        backgroundColor: Theme === "dark" ? darkPlateTheme : lightPlateTheme,
        borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
      }}
      whileHover={{ borderColor: texttheme }}
      className="border-[3px] flex flex-col justify-center items-center text-center p-[1vw] rounded-xl"
    >
      <img className="w-[80px] text-center min-w-[80px]" src={img} alt="" />
      {name}
    </motion.div>
  );
};

const languageCard = (
  img: string,
  name: string,
  percentage: string,
  i: string
) => {
  const [
    Theme,
    texttheme,
    lightPlateTheme,
    lightBoderTheme,
    darkPlateTheme,
    darkBoderTheme,
  ]: any = useContext(context);

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: Theme === "dark" ? darkPlateTheme : lightPlateTheme,
        borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
      }}
      whileHover={{ borderColor: texttheme }}
      // initial={{width:"100px"}}
      // whileHover={{width:"20vw"}}
      // transition={{duration:1}}
      className="flex h-[8vw] w-[25vw] group items-center gap-[1vw] border-[3px] p-[1vw] rounded-xl"
    >
      <img className="w-[6vw] min-w-[80px]" src={img} alt="" />
      <div className="w-full duration-1000">
        <div className="">
          <div>{name}</div>
          <motion.div
            initial={{ width: "10%" }}
            whileInView={{ width: "100%" }}
            className="h-2 duration-1000 bg-gray-300 dark:bg-gray-700 rounded-full"
          >
            <div
              style={{ backgroundColor: texttheme, width:percentage }}
              className="w-[85%] h-2 rounded-full duration-1000"
            ></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
