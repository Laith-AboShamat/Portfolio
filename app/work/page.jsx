"use client";

import {motion} from 'framer-motion';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';


const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam cum a cumque molestias perferendis quaerat natus expedita incidunt, totam explicabo illo beatae ab! Ipsum mollitia vero corrupti eum earum sed.',
    stack: [{name: 'Html 5'},{name: 'Css 3'},{name: 'JavaScript'},],
    image: '/',
  },
  
  

]


const Work = () => {
  return (
    <div>Work</div>
  )
}

export default Work