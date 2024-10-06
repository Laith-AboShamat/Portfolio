"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaPython, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiFlutter, SiFirebase } from 'react-icons/si';

const icons = [
  { icon: <FaHtml5 />, name: "HTML5", id: "html5", desc: "A markup language for creating web pages and web applications." },
  { icon: <FaCss3 />, name: "CSS3", id: "css3", desc: "The style sheet language used for describing the presentation of a document written in HTML." },
  { icon: <FaJs />, name: "JavaScript", id: "js", desc: "A high-level, versatile programming language that conforms to the ECMAScript specification." },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", id: "tailwind", desc: "A utility-first CSS framework for building custom designs." },
  { icon: <FaReact />, name: "React.js", id: "react", desc: "A JavaScript library for building user interfaces." },
  { icon: <FaNodeJs />, name: "Node.js", id: "node", desc: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
  { icon: <SiExpress />, name: "Express", id: "express", desc: "A minimal and flexible Node.js web application framework." },
  { icon: <SiMongodb />, name: "MongoDB", id: "mongodb", desc: "A document-based, distributed database built for modern application developers." },
  { icon: <SiNextdotjs />, name: "Next.js", id: "nextjs", desc: "A React framework for production with hybrid static and server rendering." },
  { icon: <FaFigma />, name: "Figma", id: "figma", desc: "A collaborative interface design tool." },
  { icon: <SiFlutter />, name: "Flutter", id: "flutter", desc: "An open-source UI software development kit created by Google." },
  { icon: <SiFirebase />, name: "Firebase", id: "firebase", desc: "A platform developed by Google for creating mobile and web applications." },
  { icon: <FaPython />, name: "Python", id: "python", desc: "A high-level programming language for general-purpose programming." },
  { icon: <FaAws />, name: "AWS", id: "aws", desc: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services." },
];

const Icons = () => {
  const [selectedId, setSelectedId] = useState(null);
  
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedId]);

  return (
    <section className="xl:mt-8">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-wrap justify-center">
          {icons.map((item) => (
            <div key={item.id} className="flex items-center justify-center w-20 p-2">
              <motion.div
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
              key={selectedId}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center p-4"
            >
              <motion.div
                className="bg-gray-900 rounded-lg shadow-lg flex flex-col items-center gap-2 max-w-sm w-full p-4 sm:p-6"
                style={{ width: '100%', maxWidth: '400px' }}
              >
                <div className="text-5xl text-accent">
                  {icons.find((icon) => icon.id === selectedId)?.icon}
                </div>
                <h2 className="text-2xl text-white text-center">
                  {icons.find((icon) => icon.id === selectedId)?.name}
                </h2>
                <p className="text-md text-gray-300 text-center mt-2">
                  {icons.find((icon) => icon.id === selectedId)?.desc}
                </p>
                <button 
                  onClick={() => setSelectedId(null)} 
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Icons;
