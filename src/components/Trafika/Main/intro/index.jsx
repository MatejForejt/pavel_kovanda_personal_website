import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { useState } from "react";
import CTAButtonLink from "@/components/common/Buttons/CTALink";

const wordAnim = {
    initial: { 
        opacity: 0, 
        y: 20 
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            delay: i * 0.02,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
}

const titleAnim = {
    initial: (i) => ({ 
        opacity: 0, 
        y: i * -20, 
        x: 0
    }),
    enter: (i) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.2,
            delay: i * 0.08,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
}


const SplitWords = ({ text, variants }) => {
    const words = text.split(" ");
    return words.map((word, index) => {
        return (
        <motion.span 
            key={index}
            className="word"
            variants={variants}
            initial="initial"
            whileInView="enter"
            custom={index}
        >
            {word}{index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
        );
    })
}

export default function Intro() {
    return (
        <section className="intro__main__trafika">
            <div className="intro__main__trafika__text">
                <div className="intro__main__trafika__text__title">
                    <h3>
                        <SplitWords text="podívejte se na naše facebookové stránky" variants={titleAnim} />
                    </h3>
                    <div className="divider"/>
                    <div className="intro__main__trafika__content">
                        <div className="intro__main__trafika__content__text">
                            <p>
                                <SplitWords text="NEBO se zapojte se do naši ankety a hlasujte, jaký nový produkt naši trafice budete chtít jako další." variants={wordAnim} />
                            </p>
                        </div>
                        <div className="intro__main__trafika__content__links">
                            <CTAButtonLink text="HLASOVAT" href="https://www.facebook.com/profile.php?id=61557461697885"/>
                            <CTAButtonLink text="FACEBOOK" href="https://www.facebook.com/profile.php?id=61557461697885"/>
                        </div>
                    </div>
                </div>
                <div className="intro__main__trafika__text__link">
                    <Link href="https://www.facebook.com/profile.php?id=61557461697885"
                    >
                        <Image 
                            src='/icons/grommet-icons_facebook.svg'
                            alt="facebook"
                            width={250}
                            height={250}
                        />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61557461697885"
                    >
                        <Image 
                            src='/icons/el_facebook.svg'
                            alt="facebook"
                            width={250}
                            height={250}
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}