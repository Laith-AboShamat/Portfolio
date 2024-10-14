"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiFlutter, SiMongodb, SiFirebase, SiExpress,} from "react-icons/si";

const about = {
  title: 'About me',
  description: 'Experienced Full Stack Developer skilled in ReactJS, Tailwind, Next.js, and MERN stack. Proficient with AWS services, focusing on responsive design and optimized performance.',
  info: [
    {
      fieldName: "Name",
      filedValue: "Laith AboShamat",
    },
    {
      fieldName: "Phone",
      filedValue: "(+972) 595338729",
    },
    {
      fieldName: "Experince",
      filedValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      filedValue: "Palestinian",
    },
    {
      fieldName: "Freelance",
      filedValue: "Avaliable",
    },
    {
      fieldName: "Name",
      filedValue: "Laith AboShamat",
    },
    {
      fieldName: "Languages",
      filedValue: "English, Arabic",
    },
    
  ]
};

const experince = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Freelance Frontend Developer with expertise in HTML, CSS, JavaScript, ReactJS, and Tailwind. Trained in AWS at Pathtech, focused on delivering responsive and high-quality websites.",
  items: [
    {
      company: "PaliNetwork",
      postion: "Front-End Developer & UI/UX design",
      duration: "2024 - Present"
    },
    {
      company: "Spotline",
      postion: "Accounting Manager",
      duration: "2024 - Present"
    },
    {
      company: "PathTech",
      postion: "Full Stack Developer",
      duration: "2023 - 2024"
    },
    {
      company: "Freelance",
      postion: "Freelance Web Developer",
      duration: "2022 - 2023"
    },
    {
      company: "Nablus Municipality",
      postion: "Business Intelligence (BI) Analyst",
      duration: "2021"
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Bachelor’s in IT from NNU, with additional training in AWS, MERN, Flutter, and React. Committed to continuous learning for modern development.",
  items: [
    {
      insititution: "PathTech",
      degree: "Full Stack Developer Intern",
      duration: "2024",
    },
    {
      insititution: "Online Course",
      degree: "AWS Fundamentals Specialization",
      duration: "2024",
    },
    {
      insititution: "PathTech",
      degree: "MERN Stack Developer Trainee",
      duration: "2024",
    },
    {
      insititution: "NNU",
      degree: "Bachelor in Information Technology",
      duration: "2023",
    },
    {
      insititution: "Online Course",
      degree: "Flutter & Firebase Masterclass",
      duration: "2023",
    },
    {
      insititution: "Online Course",
      degree: "React from zero to hero",
      duration: "2022",
    }, 
    {
      insititution: "Online Course",
      degree: "Responsive Website : Code with HTML, CSS, and JavaScript.",
      duration: "2022",
    },   
  ],
};

const skills = {
  title: "My Skills",
  description: "Solid foundation in web and mobile development with expertise in HTML, CSS, JavaScript, React.js, Tailwind, Node.js, Next.js, and AWS.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <SiExpress/>,
      name: "Express",
    },
    {
      icon: <SiMongodb/>,
      name: "Mongodb",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
    {
      icon: <SiFlutter/>,
      name: "Flutter",
    },
    {
      icon: <SiFirebase/>,
      name: "Firebase",
    },
    {
      icon: <FaPython/>,
      name: "Python",
    },
    {
      icon: <FaAws/>,
      name: "Amazon Web Services",
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition:{delay:2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>

              <div className="mix-h-[70vh] w-full">

                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">
                      {experince.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {experince.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experince.items.map((item, index)=>{
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounder-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">
                                {item.duration}
                              </span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.postion}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent">
                                  
                                </span>
                                <p className="text-white/60">
                                  {item.company}
                                </p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">
                      {education.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index)=>{
                          return (
                            <li key={index} className="bg-[#232329] h-[184px] py-4 px-10 rounder-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">
                                {item.duration}
                              </span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.degree}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent">
                                  
                                </span>
                                <p className="text-white/60">
                                  {item.insititution}
                                </p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px] mb-[20px]">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">
                          {skills.title}
                        </h3>
                        <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                          {skills.description}
                        </p>
                        
                        <ul className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                          {skills.skillList.map((skill, index)=>{
                            return (
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                      <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                        {skill.icon}
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">
                                        {skill.name}
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">
                      {about.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index)=>{
                        return(
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4" >
                            <span className="text-white/60">
                              {item.fieldName}
                            </span>
                            <span className="text-xl">
                              {item.filedValue}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs> 
          </div>
    </motion.div>
  )
}

export default Resume;
