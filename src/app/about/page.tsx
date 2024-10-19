import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='flex justify-between mt-[200px]'>
      <div className=''>  <Image src={'/aboutImage.jpeg'} alt='' width={1000} height={700}/></div>
    <div className=" h-screen py-10 px-5 mt-14">
      <h2 className="text-6xl font-bold text-center mb-5">About Me</h2>
      <p className="text-lg text-gray-700 mb-4 mt-6">
        Hi, I'm <span className="font-semibold">Shumaila Khan</span>, a passionate web developer with a focus on creating user-friendly and visually appealing websites.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        I specialize in web development using modern frameworks like Next.js, with a strong focus on responsive design using Tailwind CSS.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        I have worked on multiple projects, including creating a beauty salon website and a personal portfolio, showcasing my ability to transform ideas into functional and beautiful designs.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        My goal is to continuously grow as a developer, taking on challenging projects that push my creativity and technical skills.
      </p>
      <p className="text-lg text-gray-700">
        Feel free to reach out to me if you’d like to discuss a project or just want to connect!
      </p>
      <div className='h-[200px]'></div>
    </div>
    </div>
  );
};

export default AboutUs;
