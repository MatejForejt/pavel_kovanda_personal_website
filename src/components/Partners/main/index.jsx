import { useRef, useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image";
import Link from "next/link";


const partners = [
    {
        name: "IRTN.cz",
        href: "https://irtn.cz/",
        src: "/images/IRTNV.png",
        vertical: true,
        index: 0,
    },
    {
        name: "DAVID PETRÁK",
        href: "https://www.firmy.cz/detail/13188967-voda-a-topeni-david-petrak-pisek-budejovicke-predmesti.html",
        src: "/images/dp_h.jpeg",
        vertical: false,
        index: 1,
    }
]
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
    initial: { opacity: 0, y: 20 },
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
      y: -20,
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    })
};

const SplitTextTitle = ({ text, variants }) => {
    return text.split("").map((char, index) => {
        return (
        <motion.span 
            key={index}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={index}
            style={{margin: 0, lineHeight: 1}}
            className="span"
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
        );
    });
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

export default function MainPartners () {
    const [isHovered, setIsHovered] = useState({ active: false, index: 0});
    const [ activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="main__partners">
            <div className="List">
                <div className="title">
                    <h1>
                        <SplitTextTitle text={"MOJI PARTNEŘI"} variants={wordAnim} />
                    </h1>
                </div>
                <motion.div custom={0} variants={sectionsAnim} initial="initial" animate="enter" exit="exit" className="mainDivider"/>
                <div className="list__container">
                    { partners.map((partner) => {
                        const { name, href, index } = partner
                        const isCurrent = isHovered.active && isHovered.index === index
                        return (
                            <motion.div custom={index * 10} variants={sectionsAnim} initial="initial" animate="enter" exit="exit">
                                <ListItem setActiveIndex={setActiveIndex} isActive={isCurrent} key={index} name={name} index={index} href={href} setIsHovered={setIsHovered} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <motion.div custom={15} variants={sectionsAnim} initial="initial" animate="enter" exit="exit" className="Images">
                {partners.map(( partner ) => {
                    const {src, name, vertical, index } = partner
                    return (
                        <ImageComponent isActive={activeIndex} src={src} name={name} vertical={vertical} index={index} />
                    )
                })}
            </motion.div>
        </section>
    )
}

const ListItem = ({ href, name, key, setIsHovered, index, isActive, setActiveIndex }) => {
  const active = true;
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
 

  const animateTo = (x) =>
    controls.start({ x, transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] } });

    const onHoverEnter = async () => {
        clearPendingTimeouts();
        setIsHovered({ active: true, index: index});
        animStateRef.current = "open";
        await animateTo("0%");
    };

    const onHoverLeave = async () => {
        setIsHovered({ active: false, index: index});
        animStateRef.current = "exit";

        await animateTo("100%");
        controls.set({ x: "-100%" });
    };

    useEffect(() => {
        controls.set({ x: "-100%" });
        animStateRef.current = "initial";
        return clearPendingTimeouts;
    }, [controls]);

    return (
        <>
            <Link 
                href={href}
                key={key}
                className="Parnters__list__item__link"
                onMouseEnter={onHoverEnter} 
                onMouseLeave={onHoverLeave}
            >
                <div className="Parnters__list__item__content" onMouseEnter={() => setActiveIndex(index)}>
                    <NameText text={name} isActive={isActive} />
                    <ListLink href={href} isActive={isActive} controls={controls} />
                    <motion.div  
                        initial={{x: "-100%"}}
                        animate={controls}
                        className="background"
                    />
                </div>
                <div className="divider"/>
            </Link>

            <div 
                key={key}
                className="Partners__list__item"
            >
                <div className="Parnters__list__item__content" onMouseEnter={() => setActiveIndex(index)}>
                    <NameText text={name} isActive={isActive} />
                    <ListLink href={href} isActive={active} controls={controls} />
                    <motion.div  
                        initial={{x: "-100%"}}
                        animate={controls}
                        className="background"
                    />
                </div>
                <div className="divider"/>
            </div>
        </>
    )
}


const NameText = ({text, isActive}) => {
    return(
         <div className="Parnters__list__nameText"> 
            <p>
                <SplitText text={text} active={isActive} variants={charAnimStart}/>
            </p>
            <p>
                <SplitText text={text} active={isActive} variants={charAnimEnd}/>
            </p>
        </div>
    )
}

const ListLink = ({href, isActive, controls}) => {
    return (
        <>
            <Link
                href={href}
                className="ListLink__button__link" 
            >
                <div className="ListLink__button__container">
                    <div className="ListLink__button__container__text"> 
                        <p>
                            <SplitText text={"Klikněte pro otevření"} active={isActive} variants={charAnimEnd}/>
                        </p>
                    </div>
                    <div className="ListLink__button__container__arrow">
                        <motion.div
                            variants={arrowAnimEnd}
                            initial="initial"
                            animate={isActive ? "enter" : "exit"}
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
                    className="line"
                    initial={{x: "-100%"}}
                    animate={controls}
                />
            </Link>

            <div
                className="ListLink__button" 
            >
                <div className="ListLink__button__container">
                    <div className="ListLink__button__container__text"> 
                        <p>
                            <SplitText text={"Klikněte pro otevření"} active={isActive} variants={charAnimEnd}/>
                        </p>
                    </div>
                    <div className="ListLink__button__container__arrow">
                        <motion.div
                            variants={arrowAnimEnd}
                            initial="initial"
                            animate={isActive ? "enter" : "exit"}
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
                    className="line"
                    initial={{x: "-100%"}}
                    animate={controls}
                />
            </div>
        </>
    )
}


const ImageComponent = ({ src, vertical = false, name, index, isActive}) => {
  const controls = useAnimationControls();

  useEffect(() => {
    const run = async () => {
      controls.stop();
      if (isActive === index) {
        await controls.set({ y: "-100%" });
        await controls.start({ y: "0%", transition:{ delay: 0.3} });
      } else {
        await controls.start({ y: "100%", transition: { duration: 0.3, ease: [0.6,0.05,-0.01,0.9] }});
        controls.set({ y: "-100%" });
      }
    };
    run();
  }, [isActive, index, controls]);

  return (
    <div key={index} style={{zIndex: index}} className={vertical ? "Images__wrapper__vertical" : "Images__wrapper__horizontal"}>
        <motion.div
            className="Image__container"
            initial={{ y: isActive ? "0%" : "-100%" }}
            animate={controls}
        >
            <Image 
                src={src}
                alt={ `${name} image`}
                sizes="50vw"
                quality={80}
                fill
            />
        </motion.div>
    </div>
  )
}

