import { useContext } from 'react'
import { context } from '../App';

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
    <div className="text-white flex p-[3vw] h-screen">
      <div className="w-1/2 h-full  flex flex-col gap-[3vh] justify-center">
        <div className=" text-8xl">Get in touch</div>

        <div className=" text-4xl">
          Let's make <span style={{color:texttheme}}>something great </span>
          Together
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex flex-col justify-around h-[50%]'>
          <a
            href="mailto:krishla203@gmail.com"
            style={{ color: texttheme }}
            className="flex gap-[1vw] items-center text-3xl font-normal"
          >
            <i className="fa-regular fa-envelope"></i>
            <h1 className="hover:underline">krishla203@gmail.com</h1>
          </a>
          <div className="flex flex-wrap w-full">
            <div className="w-full flex gap-[3vw] justify-around">
              <a
                href=""
                className="flex gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-github"></i>
                <h1>Github</h1>
              </a>
              <a
                href=""
                className="flex gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
            </div>
            <div className="w-full flex gap-[3vw] justify-around">
              <a
                href=""
                className="flex gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </a>
              <a
                href=""
                className="flex gap-[1vw] items-center text-xl font-normal"
              >
                <i className="fa-brands fa-facebook"></i>Facebook
              </a>
            </div>
          </div>
          <a href="" className='text-2xl'>
            <i className="fa-brands fa-whatsapp"></i>+91 7038256913
          </a>
        </div>
        <form action=""></form>
      </div>
    </div>
  );
}

export default Contact
