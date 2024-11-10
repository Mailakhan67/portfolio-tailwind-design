'use client';
import Image from "next/image"
import {useState,useEffect} from "react"

const Header = () => {
  const [name, setName]=useState("Front-end Developer")
  const names = ['Front-end Developer', 'UI/UX Designer', 'Client-Side developer', 'Web Designer', 'Interactive Developer'];

    const changeName=()=>{
    const currentIndex= names.indexOf(name);
console.log(currentIndex);
const nextIndex=(currentIndex + 1) % names.length
setName(names[nextIndex])
         }

  return (
      <section className='h-[697px]  mx-auto shadow-lg shadow-slate-100'>
      <div className='bg-[#FFF9F9]  max-w-7xl flex flex-col lg:items-center  items-center justify-between h-full mx-auto lg:flex-row px-4 sm:px-6 sm:gap-6 md:gap-6 md:px-8 xl:px-4 gap-20 lg:gap-0 mt-[200px]'>

        <div className="w-[429px] 
h-[343.5px]  flex flex-col gap-5 ">
<h1 className="text-[64px] font-bold text-[#000000] leading-normal text-pretty" data-aos="flip-left">Limitless Creativity</h1>

<p className="text-[20px] text-[#000000] gap-6  font-bold font-serif text-4xl" data-aos="flip-left"> I'm a <p className='text-4xl text-red-600'> {name} </p> </p>
<button onClick={changeName} className="rounded-full w-[220px] h-[60.21px] mt-3 p-3 text-[20px] font-bold bg-[#964E27] gap-10 text-[#ffffff]" data-aos="flip-left">Click me</button>
</div> 
{/* IMAGE */}
<Image src={'/img1 1.png'} alt='Alien' width={514} height={513} data-aos="flip-left"/>
         </div>
      </section>
  )
}

  export default Header

