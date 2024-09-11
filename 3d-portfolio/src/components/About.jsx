/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
// import Tilt from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../style';
import { services } from '../constants';
import {fadeIn, textVariant} from "../utils/motion";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
const ServiceCard =({index,title,icon})=>{
  return (
   <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.5* index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div option={{
          max:45,
          scale:1,
          speed:450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        
        
      </div>
    </motion.div>
   </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}> Introduction</p>
      <h2 className={styles.sectionHeadText}> Overview.</h2>
      
    </motion.div>
    <motion.p variants={("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I'm Sunny Raj, a Frontend Developer with a strong command of HTML, CSS, and JavaScript,
     and specialized expertise in React and Tailwind CSS. I excel at building responsive and
      visually appealing user interfaces that prioritize performance and usability. 
      My experience with Tailwind CSS allows me to create sleek, maintainable designs 
      efficiently, while my proficiency in React enables me to develop dynamic, 
      component-based applications. I'm committed to staying updated with the latest 
      trends and best practices in web development, ensuring that my work not only meets
       but exceeds modern standards for both aesthetics and functionality.



    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index}{...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper (About,"about")