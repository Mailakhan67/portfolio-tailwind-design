'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

const Hero = () => {
  

  const handleClick =()=>{
    window.open("https://milestone5shareablelink.vercel.app/")
  }
  return (
    <div className=' h-screen bg-[#FFF9F9]'>
      <div className=" flex justify-between items-center  ">
<Image src={'/b-09-512 1.png'} alt="" width={600} height={500} className="ml-20 mt-20"/>
    
  <div className="
   h-[500px] w-[600px] mr-36 mt-20">
      <h1 className=" font-bold text-3xl  font-serif text-center p-3 leading-normal">You Can Download <br /> My CV </h1>
      <p className=" w-[600px] mt-10 leading-normal text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo obcaecati aliquid facilis, animi, quos explicabo amet recusandae vitae!</p>

      
      <button onClick={handleClick} className="text-white ml-44  bg-[#1C5E24] w-[200px] h-[60px] mt-10 text-2xl  rounded-[30px] flex  justify-center items-center">Download Cv </button>
      </div>
     
      </div>
    
    </div>
  )
}

export default Hero
