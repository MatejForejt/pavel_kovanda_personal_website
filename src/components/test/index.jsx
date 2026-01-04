import Image from "next/image";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const charAnim = {
    initial:{
        y: 30,
        opacity: 0
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: (i * 0.02) + 0.8,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
    exit: (i) => ({
        y: -30,
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: (i * 0.02) + 0.8,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),

}

const SplitWord = ({ text }) => {
    return text.split(" ").map((word, index) => {
        return (
        <motion.span   
            key={index}
            className={styles.word}
            variants={charAnim}
            initial="initial"
            animate="enter"
            exit="exit" 
            custom={index}
        >
            <SplitChar text={word} /> 
        </motion.span>
        );
    });
}

const SplitChar = ({ text }) => {
    return text.split("").map((char, index) => {
        return (
        <motion.span 
            key={index}
            className={styles.char}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
        );
    });
}

export default function TestComponent() {
    const [ isHovered, setIsHovered ] = useState({ state: false, index: null });

    return (
        <div className={styles.TestComponent}>
            <div className={styles.textContent}>
                <div className={styles.textInner}>
                    <h1 onMouseEnter={() => setIsHovered({ state: true, index: 1})} onMouseLeave={() => setIsHovered({ state: false, index: null})}>
                        <SplitWord text="He doesn't mind rought treatment" />
                    </h1>
                    <h3><SplitWord text="IP68 / IP69 Panda tempered glass reinforced construction" /></h3>
                    <p>
                        <SplitWord text="The sides and back of the phone are thoroughly rubberized for increased shock resistance. The display is protected by durable Panda glass
                        The connector are fitted with water and dust caps. The waterproofing of the entire phone meets the stringent IP68 and IP69 standards." />
                    </p>
                    <Link style={{ textDecoration: "line", color: "#ffff" }} href="https://matejforejt.com" className={styles.ctaButton}>LINK ZDE</Link>
                </div>
            </div>
            <div className={styles.imageContent}>
                <div className={styles.overlay}/>
                <Image className={styles.image} src="/testimages/1.webp" alt="test image" fill />
            </div>
        </div>
    )
}