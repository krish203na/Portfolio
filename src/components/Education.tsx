import { motion } from "framer-motion";
import { useContext } from "react";
import { context } from "../App";

const Education = () => {
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
      key={"education"}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      exit={{ x: 100 }}
      className="text-white p-[4vh] md:p-[3vw] h-full"
    >
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center"
      >
        <h1 className="text-3xl text-black dark:text-white duration-1000">
          Education
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[100%] h-1 duration-1000"
        ></div>
      </motion.div>
      <motion.div className="py-[3vw] flex flex-col gap-[1.5vw] text-black dark:text-white">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="font-normal flex gap-[2vw] text-sm p-[2vw] rounded-xl border duration-1000"
        >
          <div>
            <i
              style={{ color: texttheme }}
              className="fa-solid fa-diploma text-xl duration-1000"
            ></i>
          </div>
          <div>
            <div className="text-xl">Bachlor's in Mechanical Engineering</div>
            <div>Mumbai University</div>
            <div>2021 - 2024</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="font-normal flex gap-[2vw] text-sm p-[2vw] rounded-xl border duration-1000"
        >
          <div>
            <i
              style={{ color: texttheme }}
              className="fa-solid fa-diploma text-xl duration-1000"
            ></i>
          </div>
          <div>
            <div className="text-xl">Diploma in Mechanical Engineering</div>
            <div>MSBTE</div>
            <div>2017 - 2020</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="font-normal flex gap-[2vw] text-sm p-[2vw] rounded-xl border duration-1000"
        >
          <div>
            <i
              style={{ color: texttheme }}
              className="fa-solid fa-diploma text-xl duration-1000"
            ></i>
          </div>
          <div>
            <div className="text-xl">HSC</div>
            <div>Maharashtra State board</div>
            <div>2017</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center "
      >
        <h1 className="text-2xl text-black dark:text-white duration-1000 p-[2vw]">
          Cources
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[60%] h-1 duration-1000"
        ></div>
      </motion.div>
      <motion.div className="py-[3vw] flex flex-col gap-[1.5vw] text-black dark:text-white">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="font-normal flex gap-[2vw] text-sm p-[2vw] rounded-xl border duration-1000"
        >
          <div>
            <i
              style={{ color: texttheme }}
              className="fa-sharp fa-solid fa-file-certificate text-xl duration-1000"
            ></i>
          </div>
          <div>
            <div className="text-xl">Full Stack Developer</div>
            <div>JSpider</div>
            <div>2023 - 2024</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="font-normal flex gap-[2vw] text-sm p-[2vw] rounded-xl border duration-1000"
        >
          <div>
            <i
              style={{ color: texttheme }}
              className="fa-sharp fa-solid fa-file-certificate text-xl duration-1000"
            ></i>
          </div>
          <div>
            <div className="text-xl">Diploma in Product design & Analysis</div>
            <div>CADD Center</div>
            <div>2020</div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-4 items-center"
      >
        <h1 className="text-2xl text-black dark:text-white duration-1000 p-[2vw]">
          Experience
        </h1>
        <div
          style={{ backgroundColor: texttheme }}
          className="w-[60%] h-1 duration-1000"
        ></div>
      </motion.div>
      <motion.div className="py-[3vw] flex flex-col text-black dark:text-white gap-[1.5vw]">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="font-normal flex gap-[2vw] text-sm p-[2vw] rounded-xl border duration-1000"
        >
          <div>
            <i
              style={{ color: texttheme }}
              className="fa-solid fa-briefcase text-xl duration-1000"
            ></i>
          </div>
          <div>
            <div className="text-xl">ASB International PVT Ltd</div>
            <div>Machine Engg.</div>
            <div>2020 - 2022</div>
            <p>
              Working as machine engg. in ASB International in Manufacturing
              department
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              Theme === "dark" ? darkPlateTheme : lightPlateTheme,
            borderColor: Theme === "dark" ? darkBoderTheme : lightBoderTheme,
          }}
          className="font-normal flex gap-[2vw] text-sm p-[2vw] rounded-xl border duration-1000 "
        >
          <div>
            <i
              style={{ color: texttheme }}
              className="fa-solid fa-briefcase text-xl duration-1000"
            ></i>
          </div>
          <div>
            <div className="text-xl">Mahindra & Mahindra PVT Ltd (susten)</div>
            <div>Suryamitra trainee</div>
            <div>2019 - 2020</div>
            <p>
              Suryamitra Trainee in Mahindra susten working in Renewable Energy
              Sector
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
