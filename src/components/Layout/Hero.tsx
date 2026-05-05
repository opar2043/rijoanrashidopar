"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 lg:px-12 py-20 bg-[#212428] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF014F]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#FF014F]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16 z-10">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 order-2 md:order-1"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-[#FF014F] text-sm md:text-base font-semibold tracking-[4px] uppercase"
            >
              Welcome to my world
            </motion.span>
            
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Hello, I'm <br />
              <span className="text-[#FF014F] drop-shadow-[0_0_15px_rgba(255,1,79,0.3)]">Rijoan Rashid Opar</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-200"
            >
              <span>a</span>
              <span className="text-white relative">
                Fullstack Developer
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF014F]" />
              </span>
            </motion.div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            I'm a passionate and skilled Fullstack Developer specializing in React. 
            As a dedicated student, I continuously enhance my skills to build dynamic, 
            user-friendly, and visually appealing web applications. I thrive on creating 
            seamless digital experiences and staying updated with the latest web technologies.
          </p>

          <div className="flex flex-col xl:flex-row gap-12 pt-8">
            {/* Social Links Section */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-[3px] text-gray-400 font-bold">Find me in</h3>
              <div className="flex gap-5">
                {[
                  { Icon: FaFacebook, href: "#" },
                  { Icon: FaTwitter, href: "#" },
                  { Icon: FaLinkedin, href: "#" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -8, backgroundColor: "#FF014F", color: "#fff" }}
                    className="w-14 h-14 bg-gradient-to-br from-[#1e2125] to-[#23272b] rounded-xl shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] flex items-center justify-center text-gray-400 transition-all duration-300"
                  >
                    <social.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-[3px] text-gray-400 font-bold">Best skill on</h3>
              <div className="flex gap-5">
                {[
                  { name: "React", img: "⚛️" },
                  { name: "Next.js", img: "N" },
                  { name: "Tailwind", img: "🌊" }
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#1e2125] to-[#23272b] rounded-xl shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] flex items-center justify-center text-[#FF014F] text-xl font-bold cursor-default"
                  >
                    {skill.img}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image Placeholder Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative group">
            {/* Main Image Frame with Neumorphic effect */}
            <div className="relative w-[500px] h-[550px] md:w-[500px] md:h-[550px] bg-gradient-to-br from-[#1e2125] to-[#23272b] rounded-2xl shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] overflow-hidden border border-white/5 flex items-center justify-center">
              
              {/* Placeholder Content */}
              <div className="flex flex-col items-center gap-4 text-gray-700 select-none">
              <Image 
              src={'https://i.ibb.co.com/0RRRHY6p/opar2.jpg'}
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              >

              </Image>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF014F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>


          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;