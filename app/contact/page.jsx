"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@radix-ui/react-select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: "(+972) 595 338 729",
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: "aboshamatlaith@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Address',
    description: "Jesr Titi, Nablus, Palestine",
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{opacity: 1, 
      transition:{delay: 2.4, duration:0.4, ease:"easeIn"},
      }} className="py-6">
        <div className="container mx-auto">
          <div>
            <div>
            <form>form</form>
            </div>
            <div>info</div>
          </div>
        </div>

      </motion.section>
  )
}

export default Contact