"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import webprojects from "@/app/data/projects";
import Icons from "@/components/Icons";
import { easeIn, motion } from "framer-motion";

export default function ProjectPage({ params }) {
  const project = webprojects.find((proj) => proj.num === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-8 mb-4">
          {project.title} ({project.category})
        </h1>
        <p className="text-white/60 mb-8">{project.description}</p>

        <div className="mb-8">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {project.image.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96">
                    <Link href={`/projects/${project.num}`}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.4 , ease: easeIn }}
                      >
                        <Image
                          src={img}
                          fill
                          className="object-contain rounded-lg"
                          alt={`${project.title} Image ${index + 1}`}
                        />
                      </motion.div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 " />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 " />
          </Carousel>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <ul className="flex flex-wrap gap-4">
            {project.stack.map((item, index) => (
              <li key={index}>
                <Icons name={item.name} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={project.live}
                  className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                >
                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Live Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={project.github}
                  className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                >
                  <BsGithub className="text-white text-3xl group-hover:text-accent" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub Repository</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}