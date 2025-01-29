import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's Degree in Computer Science"
            subTitle="Gujarat Technological University (2020 - 2024)"
            result="8.22/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Sheth B.M. High School (2020)"
            result="8.7/10"
            des="GHSEB is the governing body for secondary and higher secondary education in Gujarat, responsible for quality education and conducting board exams for grades 10 and 12."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="iFlair Web Tech - (2024 - Present)"
            result="Ahmedabad"
            des="iFlair's hiring process is an important part of our culture. iFlairians care deeply about their teams and the people who make them up."
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          /> */}
          <ResumeCard
            title="Internship - (Online)"
            subTitle="React js - (2023)"
            result="Ahmedabad "
            des="The Ahmedabad economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education