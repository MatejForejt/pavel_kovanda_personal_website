import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const SplitText = ({ text, active, variants }) => {
    return text.split("").map((char, index) => {
        return (
        <motion.span 
            key={index}
            variants={variants}
            initial="initial"
            animate={active ? "enter" : "exit"} 
            custom={index}
            style={{margin: 0, lineHeight: 1}}
            className="span"
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
        );
    });
};


export default function CTAButtonLink({ text, onClick, href, ref, imageRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const timeoutRef = useRef(null);
  const animStateRef = useRef("initial");
  //I want anim to go on initial left, on hover to center and on leave to right, so this how it ill be created


  const clearPendingTimeouts = () => {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }
 

  const onHoverEnter = () => {
    clearPendingTimeouts();
    setIsHovered(true);
    animStateRef.current = "open";

    controls.start({
      left: "0%",
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    });
  }

  const onHoverLeave = () => {
    setIsHovered(false);
    
    animStateRef.current = "exit";

    controls.start({
      left: "100%",
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }).then(() => {
      if(animStateRef.current === "exit") {
        controls.start({
          left: "-100%",
          // this is adding the delay to the animation that is creating the fallback effect within the anim
          transition: {
            duration: 0
          }
        });
        animStateRef.current = "initial";
      }
    });  
  }

  useEffect(() => {
    controls.set({
      left: "-100%"
    })

    return () => {
      clearPendingTimeouts();
    }
  }, []);

  return (
    <Link
      href={href}
      className="cta__button__link" 
      onMouseEnter={onHoverEnter} 
      onMouseLeave={onHoverLeave}
    >
      <div className="cta__button__container">

        <div className="cta__button__container__text" ref={ref}> 
            <p>
                <SplitText text={text} active={isHovered} variants={charAnimStart}/>
            </p>
            <p>
                <SplitText text={text} active={isHovered} variants={charAnimEnd}/>
            </p>
        </div>
        <div className="cta__button__container__arrow">
            <motion.div
              variants={arrowAnimStart}
              initial="initial"
              animate={isHovered ? "enter" : "exit"}
              className={`arrow__primary__arrow`}
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
              className="arrow__primary__arrow"
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
        className="cta__button__background"
        initial={{left: "-100%"}}
        animate={controls}
      />
    </Link>
  );
}