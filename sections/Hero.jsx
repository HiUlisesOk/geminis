"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`sm:px-8 px-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-[10]">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          GEMINIS
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>PRO</h1>
          <div className={styles.heroDText} />
        </motion.div>
      </div>

      <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="absolute left-0 top-0 right-0 w-full md:-mt-[20px] z-[0] -mt-[12px]">
        <div className="absolute w-full h-[300px] hero-gradient z-[0] -top-[30px]" />
        <img
          src="/plumasMagenta.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover z-0 relative" />

        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10px">
          <a href="#explore">
            <img src="/stamp2.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
          </a>
        </div>


      </motion.div>
    </motion.div>

  </section >
);

export default Hero;

