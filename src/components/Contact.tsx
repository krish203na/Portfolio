import { useContext } from 'react'
import { context } from '../App';
import { motion } from 'framer-motion';

const Contact = () => {

  const [
    Theme,
    texttheme,
    // lightPlateTheme,
    // lightBoderTheme,
    // darkPlateTheme,
    // darkBoderTheme,
  ]: any = useContext(context);

console.log(Theme)

  return (
    <div className="text-black duration-1000 dark:text-white flex flex-col md:flex-row p-[3vh] md:p-[3vw] h-[95vh]">
      <motion.div
        initial={{ x: -60 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-1/2 md:h-full  flex flex-col gap-[3vh] justify-center"
      >
        <div className=" text-8xl">Get in touch</div>

        <div className=" text-4xl">
          Let's make{" "}
          <span style={{ color: texttheme }} className="duration-1000">
            something great{" "}
          </span>
          Together
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 60 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center md:justify-start h-full"
      >
        <div className="flex flex-col justify-around w-[90%] overflow-hidden md:w-full h-[50%]">
          <a
            target="blank"
            href="mailto:krishla203@gmail.com"
            style={{ color: texttheme }}
            className="flex hover:underline gap-[1vw] duration-1000 justify-center items-center text-2xl md:text-3xl font-normal"
          >
            <i className="fa-regular fa-envelope"></i>
            <h1 className="hover:underline">krishla203@gmail.com</h1>
          </a>
          <div className="flex flex-wrap w-full">
            <div className="w-full flex gap-[3vw] justify-around">
              <a
                target="blank"
                href="https://www.github.com/krish203na"
                className="flex hover:underline gap-[1vh] md:gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-github"></i>
                <h1>Github</h1>
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/krish_na203/"
                className="flex hover:underline gap-[1vh] md:gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
            </div>
            <div className="w-full flex gap-[3vw] justify-around">
              <a
                target="blank"
                href="https://www.linkedin.com/in/krishna-panchal-5426aa271"
                className="flex hover:underline gap-[1vh] md:gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </a>
              <a
                target="blank"
                href="https://www.facebook.com/profile.php?id=100012123313731"
                className="flex hover:underline gap-[1vh] md:gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-facebook"></i>Facebook
              </a>
            </div>
          </div>
          <a href="tel:+"></a>
          <a
            target="blank"
            style={{ color: texttheme }}
            href="tel:+917038256913"
            className="text-2xl duration-1000 hover:underline flex gap-[1vh] md:gap-[1vw] items-center justify-center font-normal"
          >
            <i className="fa-brands fa-whatsapp hover:underline"></i>+91
            7038256913
          </a>
        </div>
        <form action=""></form>
      </motion.div>
    </div>
  );
}

export default Contact
