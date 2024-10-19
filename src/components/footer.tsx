'use client'
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
const router=useRouter();
  return (
    <div className="bg-[#e0e0e0]  h-[469px] flex rounded">
{/* 1st div */}
      <div  className=" w-[650px]  h-[469px] ml-10">
      <h1 className=" pt-6 ml-10 w-[200px]  text-black text-3xl font-bold ">Get in touch </h1>
      <p  className="text-1xl  text-justify w-[600px] mt-3 ml-3 leading-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus  reprehenderit explicabo optio  doloremque quas sitatibus quae asperiores.
      </p>
      <div className='flex space-y-2 mt-10'>
      <MdEmail size={40} className="font-bold  "/><span className="font-bold ml-3 tex-txl font-serif "> xyz@gmail.com</span></div>

      <div className='flex space-y-2'>
      <BsFillTelephoneFill size={40} className="font-bold mt-3"/><span className="ml-3 font-bold tex-txl font-serif"> +9446998</span></div>
      <div className='flex space-y-2'>
      <IoLocationSharp size={40} className="font-bold mt-3"/> <span className="font-bold tex-txl font-serif ml-3">Pakistan ,Karachi </span></div>

      <div className='flex space-y-2'>
      <FaGithub size={40} className="font-bold mt-3"/> <span className="font-bold ml-3 tex-txl font-serif">Github Account </span></div>

      <div className='flex space-y-3'>
      < FaInstagram size={40} color={"pink"} className='bg-[#E4405F] mt-3'/> <span className="ml-3 space-y-3 font-bold tex-txl font-serif">Instagram Account </span></div>

      <div className='flex space-y-3'>
      < FaWhatsapp size={40} className="bg-green-300 mt-3"/> <span className="font-bold tex-txl ml-3  font-serif">Whatsapp </span></div>
      </div>

      {/* 2nd div */}
      <div className="flex flex-col space-y-1 ml-32">
      <label htmlFor="" className="font-bold ml-10  text-2xl text-left mt-6">
          Name
        </label>
        <br />
        <input
          type="text"
          className="border shadow-lg shadow-green-200 ml-10 hover:border-yellow-700 border-black h-17 h-[50px] w-[600px] mb-10 pb-3 "
        />

<label htmlFor="" className="font-bold ml-10 pt-6  text-2xl text-left mt-6">
          Email
        </label>
        <br />
        <input
          type="text"
          className="border shadow-lg ml-10 shadow-green-200  hover:border-yellow-700 border-black h-17 h-[50px] w-[600px] mb-6 "
        />
        <div  className="mt-6 ml-20">
         <button
          onClick={() => router.push("/")}
          className="hover:bg-blue-500 mt-20 p-4 bg-blue-400 w-[200px] rounded-md shadow-lg shadow-gray-500 font-serif border border-gray-500 hover:border-gray-500  font-bold text-3xl bg-gradient-to-tr from-violet-400 via-lime-400 to-amber-400"
        >
          Submit
        </button>
        </div>

         </div>

    </div>
  )
}

export default Footer