import HomeNav from "@/components/common/homeNav/nav";
import { useGlobalContext } from "@/context/globalContext";
import { useScroll, useTransform, motion} from "framer-motion";
import { useRef } from "react";

const SplitText = ({ text, variants }) => {
    return text.split("").map((char, index) => {
        return (
        <motion.span 
            key={index}
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

const SplitWords = ({ text, variants }) => {
    const words = text.split(" ");
    return words.map((word, index) => {
        return (
        <motion.span 
            key={index}
            className="word"
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={index}
        >
            {word}{index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
        );
    })
}


const wordAnim = {
    initial: { opacity: 0, y: 40 },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: (i * 0.02) + 1,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    }),
    exit: (i) => ({
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    })
};

const sectionsAnim = {
    initial: { opacity: 0, y: 50 },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: (i * 0.02) + 0.8,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    }),
    exit: (i) => ({
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    })
};

const charAnim = {
    initial: {
        y: 30,
        opacity: 0
    },
    enter: (i) => ({
        y: 0, // No animation on touch devices
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            delay: (i * 0.025) + 0.8
        }
    }),
    exit: (i) => ({
        y: -30,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            delay: i * 0.025
        }
    })
}

export default function MainIntro () {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  return (
    <section className="main__intro" ref={containerRef}>
        <div className="intro__text__content">
            <div className="title">
                <h1>
                    <span className="outer__span">
                        <SplitText variants={charAnim} text={"Pavel"}/>
                    </span>
                    <motion.div 
                        variants={sectionsAnim}
                        custom={10}
                        initial="initial"
                        animate="enter"
                        exit="exit" 
                        className="divider"
                    />
                    <span className="outer__span">
                        <SplitText variants={charAnim} text={"Kovanda"}/>
                    </span>
                    <motion.div 
                        variants={sectionsAnim}
                        custom={15}
                        initial="initial"
                        animate="enter"
                        exit="exit" 
                        className="divider"
                    />
                </h1>
            </div>
            <div className="desc">
                <p>
                    <span className="outer__span">
                        <SplitWords text={"PŘESNOST NENÍ STYL. JE TO STANDARD."} variants={wordAnim}/>
                    </span> 
                    <br /> <br />
                    <span className="outer__span">
                        <SplitWords text={"UŽ PŘES 10 LET SE VĚNUJI MONTÁŽÍM A SERVISU VODOMĚRŮ, RTN A BMT — RYCHLE, ČISTĚ A TAK, ABY VĚCI FUNGOVALY DLOUHODOBĚ."} variants={wordAnim}/>
                    </span>
                </p>
            </div>
        </div>

        <HomeNav />
    </section>
  );
};