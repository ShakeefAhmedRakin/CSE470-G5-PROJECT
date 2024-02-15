import { IoMailSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";
import { FaClock } from "react-icons/fa";
// import { sheild } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className='w-full h-60 bg-theme-color flex items-center justify-center flex-col'>
        <div className='flex gap-8 text-white justify-center text-xl font-bold mb-10'>
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Sign Up</p>
          <p>Legal</p>
        </div>
        <div className="flex gap-10 justify-center">

        <IoMailSharp color="yellow" size="2rem"/>  
        <SlCalender color="yellow" size="2rem"/>
        <MdOutlineMessage color="yellow" size="2rem" />
        <FaClock color="yellow" size="2rem"/>
        </div>
      </div>
    </>
  );
};

export default Footer;
