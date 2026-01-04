import {motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const charAnimStart = {
    initial: { opacity: 1, y: 0 },
    enter: (i) => ({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    }),
    exit: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    })
};
  
const charAnimEnd = {
    initial: { opacity: 0, y: 20 },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.3,
        delay: i * 0.02,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }),
    exit: (i) => ({
        opacity: 0,
        y: 20,
        transition: {
        duration: 0.3,
        delay: i * 0.02,
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    })
};


const arrowAnimStart = {
    initial: { opacity: 1, x: 0, y: 0 }, // Add y: 0 for consistency
    enter: {
        opacity: 0,
        y: -20,
        x: 0, // Explicitly set x to 0
        transition: {
            duration: 0.2,
            delay: 0.25, // Start after last word
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    },
    exit: {
        opacity: 1,
        y: 0,
        x: 0, // Explicitly set x to 0
        transition: {
            duration: 0.2,
            delay: 0.1
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }
};

const arrowAnimEnd = {
    initial: { opacity: 0, x: 0, y: 0 }, // Remove the x: 20 offset here
    enter: {
        opacity: 1,
        y: 0,
        x: 0, // Explicitly set x to 0
        transition: {
            duration: 0.2,
            delay: 0.3, // Start after last word
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    },
    exit: {
        opacity: 0,
        y: 20,
        x: 0, 
        transition: {
            duration: 0.2,
            delay: 0.1
        },
        ease: [0.6, 0.05, -0.01, 0.9]
    }
};

const SplitText = ({className, text, active, variants }) => {
    return text.split("").map((char, index) => {
        return (
        <motion.span 
            key={index}
            variants={variants}
            initial="initial"
            animate={active ? "enter" : "exit"} 
            custom={index}
            style={{margin: 0, lineHeight: 1}}
            className={className}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
        );
    });
};


const FooterLink = ({ className, text, href, key, ref, currentPath, imageRef, isDisabled }) => {
    const [isHovered, setIsHovered] = useState(false);

    const controls = useAnimationControls();
    const timeoutRef = useRef(null);
    const animStateRef = useRef(false);
    const mountedRef = useRef(false);


    const pathname = usePathname()

    const clearPendingTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }

    const animateTo = (x) =>
    controls.start({ x, transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] } });

    const onHoverEnter = async () => {
        clearPendingTimeout();
        setIsHovered(true);
        animStateRef.current = "open";

        if (currentPath) {
            await controls.set({ x: "-100%" }); // sync
        }
        await animateTo("0%");
    };

    const onHoverLeave = async () => {
        setIsHovered(false);
        animStateRef.current = "exit";

        if (currentPath) {
            await animateTo("100%");
            await animateTo("0%");
        } else {
            await animateTo("100%");
            controls.set({ x: "-100%" });
        }
    };

    useEffect(() => {
        mountedRef.current = true;
        setIsHovered(false);
        controls.set({ x: currentPath || pathname === href ? "0%" : "-100%" });
        animStateRef.current = currentPath ? "open" : "initial";
        return () => {
            mountedRef.current = false;
            clearPendingTimeout();
        };
    }, [currentPath, controls, pathname]);
  return (
    isDisabled ? (
        <div 
            className="footer__links__creator__link"
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
            key={key}
        >
            <div className="footer__links__creator__link__container">
                <div className="footer__links__creator__link__container__text" ref={ref}>
                    <p>
                        <SplitText text={text} className={className} active={isHovered} variants={charAnimStart}/>
                    </p>
                    <p>
                        <SplitText text={text} className={className} active={isHovered} variants={charAnimEnd}/>
                    </p>
                </div>
                <div className="footer__links__creator__link__container__arrow">
                    <motion.div
                        variants={arrowAnimStart}
                        initial="initial"
                        animate={isHovered ? "enter" : "exit"}
                        className={`arrow__primary__arrow ${className}`}
                        ref={imageRef}
                    >
                        <Image 
                            src='/icons/Arrow.svg'
                            alt="arrow"
                            width={40}
                            height={40}
                            sizes="5vw"
                            quality={100}
                            priority={true}
                            className="img"
                        />
                    </motion.div>
                    <motion.div
                        variants={arrowAnimEnd}
                        initial="initial"
                        animate={isHovered ? "enter" : "exit"}
                        className={`arrow__primary__arrow ${className}`}
                    >
                        <Image 
                            src='/icons/Arrow.svg'
                            alt="arrow"
                            width={40}
                            height={40}
                            sizes="5vw"
                            quality={100}
                            priority={true}
                            className="img"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div 
                className={`line ${className}`} 
                initial={{x: "-100%"}}
                animate={controls}
            />
        </div>
    ) : (
        <Link 
            href={href}
            className="footer__links__creator__link"
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
            key={key}
            
        >
            <div className="footer__links__creator__link__container">
                <div className="footer__links__creator__link__container__text" ref={ref}>
                    <p>
                        <SplitText text={text} className={className} active={isHovered} variants={charAnimStart}/>
                    </p>
                    <p>
                        <SplitText text={text} className={className} active={isHovered} variants={charAnimEnd}/>
                    </p>
                </div>
                <div className="footer__links__creator__link__container__arrow">
                    <motion.div
                        variants={arrowAnimStart}
                        initial="initial"
                        animate={isHovered ? "enter" : "exit"}
                        className={`arrow__primary__arrow ${className}`}
                        ref={imageRef}
                    >
                        <Image 
                            src='/icons/Arrow.svg'
                            alt="arrow"
                            width={40}
                            height={40}
                            sizes="5vw"
                            quality={100}
                            priority={true}
                            className="img"
                        />
                    </motion.div>
                    <motion.div
                        variants={arrowAnimEnd}
                        initial="initial"
                        animate={isHovered ? "enter" : "exit"}
                        className={`arrow__primary__arrow ${className}`}
                    >
                        <Image 
                            src='/icons/Arrow.svg'
                            alt="arrow"
                            width={40}
                            height={40}
                            sizes="5vw"
                            quality={100}
                            priority={true}
                            className="img"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div 
                className={`line ${className}`} 
                initial={{x: "-100%"}}
                animate={controls}
            />
        </Link>
    )
  );
};


export default FooterLink;
 
