"use client"
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const handleDownload = () => {
  const fileUrl = "/resume/Laith AboShamat CV.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Laith_AboShamat_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full mb-[-20px]">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-center">Software Developer</span>
            <h1 className="h1 mb-6 ">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Laith AboShamat</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I excel at crafting responsive web applications and mobile
              solutions, proficient in React, MERN, Next.js, AWS, and UI/UX
              Design.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transtion-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
