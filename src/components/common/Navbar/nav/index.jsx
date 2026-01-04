import { useEffect, useRef, useState, Easing } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import FooterLink from "../../Buttons/LinkLine";
import Image from "next/image";
import CTAButtonLink from "../../Buttons/CTALink";
import { usePathname } from "next/navigation";
import HashtagButton from "../../Buttons/hashButton";


// WIP: add this exiting animation when using transitions
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

const sectionsAnim = {
    initial: { opacity: 0, y: -50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    },
    exit:{
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    }
};

    
// Nav item animation
const navAnim = {
    visible: (i) => ({
        opacity: 1,
        x: 0, 
        transition: {
            duration: 0.3,
            delay: i * 0.03,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
    hidden: (i) => ({
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.3,
            delay: i * 0.03,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
};

const navItem = {
    visible: (i) => ({
        opacity: 1,
        y: 0, 
        transition: {
            duration: 0.3,
            delay: i * 0.03,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
    hidden: (i) => ({
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.3,
            delay: i * 0.03,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
};


export default function Nav() {
    const [ isHovered, setIsHovered ] = useState(false);
    const pathname = usePathname()
    const [ isActive, setIsActive ] = useState(false);


    const controls = useAnimationControls();
    const timeoutRef = useRef(null);
    const animStateRef = useRef(false);
    const mountedRef = useRef(false);


    const clearPendingTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }

    const animateTo = (x) =>
    controls.start({ x, transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] } });

    const onOpen = async () => {
        clearPendingTimeout();
        setIsActive(true);
        animStateRef.current = "open";
        await animateTo("0%");
    };

    const onClose = async () => {
        setIsActive(false);
        animStateRef.current = "exit";

        await animateTo("100%");
        controls.set({ x: "-100%" });
    };
    

    const onTooggle = async () => {
        if(isActive) {
            await onClose();
        } else {
            await onOpen();
        }
    };

    useEffect(() => {
        mountedRef.current = true;
        setIsActive(false);
        controls.set({ x: "-100%" });
        animStateRef.current = "initial";
        return () => {
            mountedRef.current = false;
            clearPendingTimeout();
        };
    }, [pathname, controls]);
    
    if(pathname === '/') {
        return null
    } else {
        return (
            <>
                <motion.nav 
                    className="nav"
                    variants={sectionsAnim}
                    initial="initial"
                    animate="enter"
                    exit="exit"
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
                            <CTAButtonLink text="SPOJIT SE" href="/kontakt"/>
                        </div>
                    </div>

                    <div className="nav__border"/>
                </motion.nav>

                <motion.nav
                    className="nav__mobile"
                    variants={sectionsAnim}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <CTAButtonLink  text="SPOJIT SE" href="/kontakt" />
                    <HashtagButton classNameFont="Nav__font" className="nav__mobile__open" text="Menu" isActive={isActive} onClick={onTooggle} />
                    <div className="nav__border"/> 
                </motion.nav>
                <motion.div
                    className="nav__mobile__body"
                    animate={controls} 
                    initial={{x: "-100%"}}
                >
                    {navLinks.map((link, index) => {
                        const { title, href } = link;
                        const isActiveRoute = pathname === href;

                        return (
                            <MobileNavItem
                                key={href}
                                index={index}
                                isActiveRoute={isActiveRoute}
                                title={title}
                                href={href}
                            />
                        );
                    })}
                </motion.div>
            </>
        );
    }
}

const MobileNavItem = ({ index, isActiveRoute, title, href }) => {
    const itemRef = useRef(null);
    const inView = useInView(itemRef, { margin: "0px", amount: 0.1 });

    return (
        <motion.div
            ref={itemRef}
            className="nav__mobile__item"
            variants={navItem}
            custom={index + 5}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {index !== 0 && <div className="nav__mobile__divider" />}
            <FooterLink
                isDisabled={isActiveRoute}
                currentPath={isActiveRoute}
                className={`NavSpan ${isActiveRoute ? "active-route-span" : ""}`}
                text={title}
                href={href}
            />
        </motion.div>
    );
};
