import { motion} from "framer-motion";
import Galery from "./galery";


// Main component 
export default function FotoGalerie({images = [], title, desc, links = []}) {
    return (
        <section className="fotoGalerie">
            <Intro title={title} desc={desc}/>

            <div className="divider__container">
                <p>
                    <SplitWords variants={wordAnim} text="↓ FOTOGALERIE ↓" />
                </p>
                <motion.div className="divider" initial="initial" animate="enter" exit="exit" variants={sectionsAnim} custom={2}/>
            </div>

            <Galery products={images} links={links}/>
        </section>
    );
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

const SplitWords = ({ text, variants }) => {
    const words = text.split(" ");
    return words.map((word, index) => {
        return (
        <span className="word__container">
            <motion.span 
                key={index}
                className="word"
                variants={variants}
                initial="initial"
                animate='enter'
                exit="exit"
                custom={index}
            >
                {word}{index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
        </span>
        );
    })
}

const Intro = ({ title, desc}) => {

    
    return (
        <div className="text__container">
            <div className="title">
                <h1>
                    <SplitWords text={title} variants={wordAnim} />
                </h1>
            </div>
            <motion.div className="divider" initial="initial" animate="enter" exit="exit" variants={sectionsAnim} custom={1}/>
            <div className="desc">
                <p>
                    <SplitWords text={desc} variants={wordAnim} />
                </p>
            </div>
        </div>
    )
}
