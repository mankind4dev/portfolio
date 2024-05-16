import React, { useEffect } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github, mylogo4 } from "../assets";

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: [
        "A FrontEnd Developer",
        "A Website Developer",
        "An APP Developer",
        "An iOS Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    };
    const typed = new Typed(".text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-[580px] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFD700]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#F1E5AC]`}>
            Hi, I'm <span className="text-[#F1E5AC]">Mankind4dev.</span>
          </h1>
          <h1 className={`${styles.heroText}  sx:text-[10px]`}>
             <span className={`${styles.text} text`}></span>
          </h1>
          <img src={mylogo4} alt="Mankind"/>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      {/*  <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center link'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.dev 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div> */}
    </section>
  );
};

export default Hero;
