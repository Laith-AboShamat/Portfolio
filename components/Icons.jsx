"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaPython, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiFlutter, SiFirebase } from 'react-icons/si';

const icons = [
  { icon: <FaHtml5 />, name: "HTML5", id: "html5" },
  { icon: <FaCss3 />, name: "CSS3", id: "css3" },
  { icon: <FaJs />, name: "JavaScript", id: "js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", id: "tailwind" },
  { icon: <FaReact />, name: "React.js", id: "react" },
  { icon: <FaNodeJs />, name: "Node.js", id: "node" },
  { icon: <SiExpress />, name: "Express", id: "express" },
  { icon: <SiMongodb />, name: "MongoDB", id: "mongodb" },
  { icon: <SiNextdotjs />, name: "Next.js", id: "nextjs" },
  { icon: <FaFigma />, name: "Figma", id: "figma" },
  { icon: <SiFlutter />, name: "Flutter", id: "flutter" },
  { icon: <SiFirebase />, name: "Firebase", id: "firebase" },
  { icon: <FaPython />, name: "Python", id: "python" },
  { icon: <FaAws />, name: "AWS", id: "aws" },
];

const Icons = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="mt-8">
      <div className="container mx-auto">
        {/* Create a wrapper to group icons in rows of three */}
        <div className="flex flex-wrap justify-center gap-6">
          {icons.map((item, index) => (
            <div key={item.id} className="flex items-center justify-center w-1/3 p-2">
              <motion.div
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
                className="w-12 h-12 text-primary bg-accent rounded-full flex items-center justify-center text-3xl cursor-pointer"
              >
                {item.icon}
              </motion.div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-gray-900 rounded-lg shadow-lg flex items-center gap-4"
            >
              <div className="text-4xl text-accent">
                {icons.find((icon) => icon.id === selectedId)?.icon}
              </div>
              <h2 className="text-xl text-white">
                {icons.find((icon) => icon.id === selectedId)?.name}
              </h2>
              <button onClick={() => setSelectedId(null)} className="ml-auto bg-red-500 text-white px-3 py-1 rounded">
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Icons;
