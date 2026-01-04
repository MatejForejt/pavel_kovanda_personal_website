import { detectNavBGColor, detectNavImageColor, detectNavSpanColor } from "@/lib/detectBGcolor";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useGlobalContext } from "@/context/globalContext";
import FooterLink from "../../Buttons/LinkLine";
import Image from "next/image";
import CTAButtonLink from "../../Buttons/CTALink";
import { usePathname } from "next/navigation";


const navLinks = [
    {
        title: 'DOMOV',
        href: '/',
    },
    {
        title: 'VODOMĚRY',
        href: '/vodomery',
    },
    {
        title: 'BMT',
        href: '/bmt',
    },
    {
        title: 'RTN',
        href: '/rtn',
    },
    {
        title: 'TRAFIKA',
        href: '/trafika',
    },
    {
        title: 'KONTAKT',
        href: '/kontakt',
    },
    {
        title: 'PARTNEŘI',
        href: '/partneri',
    }
];

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

const text = {
    initial: { y: 0 },
    enter: (i) => ({
        x: 20 * (i * 0.5),
        transition: {
            duration: 0.3 * (i + 1) * 0.5,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
    exit: (i) => ({
        x: 0,
        transition: {
            duration: 0.3 * (i + 1) * 0.5,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    })
}

    
// Nav item animation
const navAnim = {
    visible: (i) => ({
        opacity: 1,
        x: 0, 
        transition: {
            duration: 0.3,
            delay: i * 0.03,
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }),
    hidden: (i) => ({
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.3,
            delay: i * 0.03,
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }),
};


export default function HomeNav() {
    const [ isHovered, setIsHovered ] = useState(false);
    const pathname = usePathname()
    return (
        <>
            <motion.nav 
                className="homeNav"
                variants={sectionsAnim}
                initial="initial"
                animate="enter"
                exit="exit"
                custom={20}
            >
                <div className="navbar__content">
                    <div className="navbar__links">
                        {navLinks.map((link, index) => {
                            const { title, href } = link;
                            const isActiveRoute = pathname === href;
                            
                            return (
                                <motion.div 
                                    className="nav__item" 
                                    key={index}
                                    variants={navAnim}
                                    custom={index}
                                >
                                    {index !== 0 && <div className="nav__divider"/>}
                                    <FooterLink isDisabled={isActiveRoute ? true : false} currentPath={isActiveRoute} className={`span ${isActiveRoute ? 'active-route-span' : ''}`}  text={title} href={href} key={index}/>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div className="nav__divider"/>
                    <div 
                        className="nav__cta"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div 
                            className="nav__cta__text" 
                            
                        >
                            <motion.h4 custom={2} variants={text} initial="initial" animate={isHovered ? "enter" : "exit"} className="logo">KONTAKTUJTE MĚ</motion.h4>
                            <motion.div custom={1} variants={text} initial="initial" animate={isHovered ? "enter" : "exit"} className="nav__cta__text__icon">
                                <Image 
                                    src="/icons/arrow-right.svg"
                                    alt="Arrow Right"
                                    width={24}
                                    height={24}
                                    className="img"
                                />
                            </motion.div>
                        </div>
                        <CTAButtonLink text="SPOJIT SE" href="/kontakt" />
                    </div>
                </div>

                <div className="nav__border"/>
            </motion.nav>
        </>
    );
}