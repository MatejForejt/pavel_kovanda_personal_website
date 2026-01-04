import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { PrivacySections } from "@/constants/cookiesTerms";

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


const SplitText = ({ text, variants }) => {
    return text.split("").map((char, index) => {
      return (
        <motion.span 
          key={index}
          className="span"
          variants={variants}
          initial="initial"
          animate="enter"
          custom={index}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      );
    });
};

const SplitWords = ({ text, variant }) => {
    return text.split(' ').map((word, index, array) => {
        return (
            <motion.span
                key={index}
                variants={variant}
                initial="initial"
                animate='enter'
                custom={index}
            >
                {word}{index < array.length - 1 ? ' ' : ''}
            </motion.span>
        );
    });
}


export default function TermsContent() {
    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = useRef([]);

    const handleLinkClick = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
    
            for (let i = 0; i < sectionRefs.current.length; i++) {
                const section = sectionRefs.current[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top + window.scrollY;
                    const sectionBottom = sectionTop + rect.height;
    
                    if (sectionTop <= scrollPosition && sectionBottom > scrollPosition) {
                        setActiveSection(PrivacySections[i].id); // FIXED: Use PrivacySections instead
                        break;
                    }
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="TermsContent">
            <div className="cover">
                <div className="cover__header">
                    <h1>
                        <SplitText text="VŠE O OCHRANĚ A" variants={ wordAnim} />
                    </h1>
                    <h1>
                        <SplitText text="POUŽITÍ VAŠICH ÚDAJŮ" variants={ wordAnim} />
                    </h1>
                </div>
                <div className="cover__desc">
                    <p>
                        <SplitWords text="Detaily a všechny podrobné informace" variant={wordAnim} />
                    </p>
                </div>
            </div>

            <div className="info__content">
                <nav className="info__page__navbar">
                    <div className="info__page__stickyBar">
                        <h3>Obsah</h3>
                        <ul className="info__page__ul">
                            {PrivacySections.map((section, i) => (
                                <li className="info__page__li" key={i}>
                                    <motion.div
                                        className="info__page__dot"
                                        animate={{ backgroundColor: activeSection === section.id ? '#00F0FF' : '#22272d' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.a
                                        href={`#${section.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(section.id);
                                        }}
                                        animate={{ opacity: activeSection === section.id ? 0.6 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {section.title}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <section className="info__block__main">
                    {PrivacySections.map((section, i) => (
                        <div key={i} className="info__block__section" ref={el => sectionRefs.current[i] = el}>
                            <h2 id={section.id}>{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}