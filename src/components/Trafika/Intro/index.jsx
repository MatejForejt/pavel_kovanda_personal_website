import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


// Simple SplitText with span class
const SplitText = ({ text, variants }) => {
    return text.split("").map((char, index) => {
      return (
        <motion.span 
          key={index}
          className="span"
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={index}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      );
    });
};

const charAnim = {
    initial: { opacity: 0, y: 20 },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.8,
        delay: (i * 0.02) + 0.8,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
    exit: (i) => ({
        opacity: 0,
        y: 20,
        transition: {
        duration: 0.5,
        delay: i * 0.02,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    })
};

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  enter:   { opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: [0.76,0,0.24,1] } },
  exit:    { opacity: 0, y: -30, transition: { duration: 0.8, ease: [0.76,0,0.24,1] } },
};
const sectionAnimX = {
  initial: { opacity: 0, x: -50 },
  enter:   { opacity: 1, x: 0, transition: { delay: 1.2, duration: 0.5, ease: [0.76,0,0.24,1] } },
  exit:    { opacity: 0, x: 50, transition: { duration: 0.5, ease: [0.76,0,0.24,1] } },
};


const headingVariants = {
  initial: {},
  enter:   { transition: { staggerChildren: 0.02, delayChildren: 0.2 } },
  exit:    { transition: { staggerChildren: 0.015 } },
};

export default function IntroTrafika() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])

    return (
        <section className="intro__trafika" ref={containerRef}>  
            <div className="intro__trafika__sticky">
                <div className="intro__trafika__content">
                    <h1>
                        <SplitText text="trafika" variants={charAnim}/>
                    </h1>
                    <motion.div variants={sectionAnim} initial="initial" animate="enter" exit="exit" className="divider"/>
                    <h2>
                        <SplitText text="smrkovická" variants={charAnim}/>
                    </h2>
                    <motion.div variants={sectionAnim} initial="initial" animate="enter" exit="exit" className="divider"/>
                    <div className="subText">
                        <div className="subtext__informations">
                            <motion.ol variants={headingVariants} initial="initial" animate="enter" exit="exit">
                                <motion.p  variants={sectionAnim} initial="initial" animate="enter" exit="exit">KDE NÁS NAJDETE</motion.p>
                                <motion.div  variants={sectionAnim} initial="initial" animate="enter" exit="exit" className="LIdivider"/>
                                <motion.li  variants={sectionAnim} initial="initial" animate="enter" exit="exit">Smrkovická, Písek</motion.li>
                                <motion.li  variants={sectionAnim} initial="initial" animate="enter" exit="exit">+420 725 141 929</motion.li>
                                <motion.li  variants={sectionAnim} initial="initial" animate="enter" exit="exit">kovanda28@seznam.cz</motion.li>
                            </motion.ol>
                            <motion.ol variants={headingVariants} initial="initial" animate="enter" exit="exit">
                                <motion.p  variants={sectionAnim} initial="initial" animate="enter" exit="exit">OTEVÍRACÍ DOBA</motion.p>
                                <motion.div  variants={sectionAnim} initial="initial" animate="enter" exit="exit" className="LIdivider"/>
                                <motion.li  variants={sectionAnim} initial="initial" animate="enter" exit="exit">Po-Pá | 5:00-15:00</motion.li>
                                <motion.li  variants={sectionAnim} initial="initial" animate="enter" exit="exit">So | 7:00-11:00</motion.li>
                                <motion.li  variants={sectionAnim} initial="initial" animate="enter" exit="exit">Ne | zavřeno</motion.li>
                            </motion.ol>
                        </div>
                        <div className="subtext__author">
                            <motion.ol variants={headingVariants} initial="initial" animate="enter" exit="exit">
                                <motion.p variants={sectionAnimX} initial="initial" animate="enter" exit="exit">KONTAKT NA MĚ</motion.p>
                                <motion.div variants={sectionAnimX} initial="initial" animate="enter" exit="exit" className="LIdivider"/>
                                <motion.li variants={sectionAnimX} initial="initial" animate="enter" exit="exit">Pavel Kovanda</motion.li>
                                <motion.li variants={sectionAnimX} initial="initial" animate="enter" exit="exit">+420 602 175 680</motion.li>
                            </motion.ol>
                        </div>
                    </div>
                </div>
                <div className="intro__trafika__bg">
                    <motion.div 
                        className="intro__trafika__background"
                        style={{ scale }}
                    >
                        <motion.div
                            className="intro__trafika__background__container"
                            style={{ y }}
                        >
                            <Image 
                                src='/images/trafika.png'
                                alt="trafika"
                                fill={true}
                                sizes="100vw"
                                quality={100}
                                priority={true}
                            />    
                        </motion.div> 
                    </motion.div>
                </div>
            </div>
        </section>
    )
}