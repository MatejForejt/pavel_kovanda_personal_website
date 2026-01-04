import HashtagButton from "@/components/common/Buttons/hashButton";
import CTAButton from "@/components/common/Buttons/CTA";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import FooterLink from "@/components/common/Buttons/LinkLine";


const charAnim1 = {
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
      y: 50,
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
      ease: [0.6, 0.05, -0.01, 0.9]
    })
};


const imageAnim = {
    initial: {
        opacity: 1,
        scale: 1,
        y: 0,
    },
    enter: {
        opacity: 1,
        scale: 1,
        y: 0,
    }
}

const contactInfo = [
    {
        title: 'Provozovatel',
        text: 'Pavel Kovanda',
    },
    {
        title: 'naše adresa',
        text: 'Jablonského 402/18, 397 01 Písek ',
    },
    {
        title: 'telefonní číslo',
        phone: '+420 602 175 680',
    },
    {
        title: 'můj email',
        email: 'kovanda28@seznam.cz'
    }
]

const SplitText = ({ text, variants }) => {
    return text.split("").map((char, index) => {
        return (
        <motion.span 
            key={index}
            variants={variants}
            initial="initial"
            animate='enter'
            exit='exit'
            custom={index}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
        );
    });
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        predloha: '',
        phone: '',
        message: ''
    });
    const [ selectedHashtags, setSelectedHashtags ] = useState([]);

    const handleHashtagClick = (hashtag, isSelected) => {
        if(isSelected) {
            setSelectedHashtags(prev => [...prev, hashtag]);
        } else {
            setSelectedHashtags(prev => prev.filter(item => item !== hashtag));
        }
    }

    const handleSubmit = async (e) => {
        if (e) e.preventDefault(); 
        
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Vyplňte prosím povinná pole: jméno, email a zprávu");
            return;
        }
        
        // Zobrazíme notifikaci o probíhajícím odesílání
        const loadingToast = toast.loading("Odesílání zprávy...");

        try {

            const requestData = {
                ...formData,
                hashtags: selectedHashtags
            }
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            
            const data = await response.json();
            
            if (data.success) {
                toast.success("Email byl úspěšně odeslán!", {
                    id: loadingToast,
                    description: "Děkujeme za váš dotaz. Brzy se vám ozveme."
                });                
                
                setFormData({
                    name: '',
                    email: '',
                    predloha: '',
                    phone: '',
                    message: ''
                });
                setSelectedHashtags([]);
            } else {
                toast.error(`Chyba: ${data.message}`, {
                    id: loadingToast
                });            }
        } catch (error) {
            console.error('Chyba při odesílání:', error);
            toast.error("Nastala chyba při odesílání emailu.", {
                id: loadingToast,
                description: "Zkuste to prosím později nebo nás kontaktujte telefonicky."
            });
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <motion.section
            className="contact"
            initial="initial"
            animate="enter"
            variants={ imageAnim}
        >
            <div className="title">
                <h1>
                    <SplitText text="KONTAKTNÍ FORMA" variants={charAnim1} />
                </h1>
                <h1>
                    <SplitText text="INFORMACE" variants={charAnim1} />
                </h1>
            </div>
            <div className="forms">
                <motion.div custom={0} variants={sectionsAnim} initial='initial' animate="enter" exit="exit" className="contact__form__container">
                    <div className="contact__form">
                        <form>
                            <div className="contact__form__input__fullname">
                                <div className="contact__form__input__fullname__name">
                                    <label htmlFor="fullname">Jméno a Příjmení :</label>
                                    <input type="text" id="fullname" name="fullname" placeholder="Vaše celé jméno" onChange={handleInputChange} value={formData.name}/>
                                </div>
                            </div>
                            <div className="contact__form__input__inputs">
                                <div className="contact__form__input__inputs__email">
                                    <label htmlFor="email">E-mail :</label>
                                    <input type="email" id="email" name="email" placeholder="Váš e-mail" onChange={handleInputChange} value={formData.email}/>
                                </div>
                                <div className="contact__form__input__inputs__phone">
                                    <label htmlFor="phone">Tel. číslo :</label>
                                    <div className="phone__input">
                                        <select
                                            name="countryCode"
                                            defaultValue="+420"
                                            aria-label="Kód země"
                                            onChange={handleInputChange}
                                            value={formData.predloha}
                                        >
                                            <option value="+420">+420</option>
                                            <option value="+421">+421</option>
                                            <option value="+49">+49</option>
                                            <option value="+43">+43</option>
                                            {/* add more */}
                                        </select>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Vaše tel. číslo"
                                            onChange={handleInputChange}
                                            value={formData.phone}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="contact__form__input__message">
                                <label className="label" htmlFor="message">Vaše zpráva :</label>
                                <textarea id="message" name="message" placeholder="Zde napište svou zprávu" onChange={handleInputChange} value={formData.message}/>
                                <div className="contact__form__input__message__hashtag">
                                    <HashtagButton 
                                        text="#instalace" 
                                        onClick={() => handleHashtagClick("#instalace", !selectedHashtags.includes("#instalace"))}
                                        isActive={selectedHashtags.includes("#instalace")}
                                    />
                                    <HashtagButton 
                                        text="#trafika" 
                                        onClick={() => handleHashtagClick("#trafika", !selectedHashtags.includes("#trafika"))}
                                        isActive={selectedHashtags.includes("#trafika")}
                                    />
                                    <HashtagButton 
                                        text="#dotaz" 
                                        onClick={() => handleHashtagClick("#dotaz", !selectedHashtags.includes("#dotaz"))}
                                        isActive={selectedHashtags.includes("#dotaz")}
                                    />
                                </div>
                            </div>
                            <div className="contact__form__input__send">
                                <div className="contact__form__input__send__gdpr">
                                    <p>
                                        S kliknutím na tlačítko  “poslat” souhlasíte se zpracováním
                                        vašich osobních informací a GDPR 
                                    </p>
                                    <FooterLink className="spanSubLink" href="/gdpr" text={"Více informací"} key={"kontakt link to gdpr page"} />
                                </div>
                                <div className="contact__form__send__button">
                                    <CTAButton ctaText="Poslat →" onClick={handleSubmit}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </motion.div>

                <div className="contact__info">

                    <motion.div custom={5} variants={sectionsAnim} initial='initial' animate="enter" exit="exit" className="contact__info__wrapper">
                        {contactInfo.map((item, index) => {
                            const { title, text, phone, email } = item;
                            return (
                                <div className="contact__info__item" key={index}>
                                    <h3>{title}</h3>
                                    {text && <p>{text}</p>}
                                    {phone && <FooterLink className="a" text={phone} href={`tel:${phone.replace(/\s+/g, '')}`} />}
                                    {email && <FooterLink className="a" text={email} href={`mailto:${email}`} />}
                                </div>
                            );
                        })}
                    </motion.div>
                    <motion.div custom={10} variants={sectionsAnim} initial='initial' animate="enter" exit="exit" className="contact__form__header">
                        <div className="contact__form__header__contact">
                            <div className="contact__form__header__contact__title">
                                <h4>chcete se <br /> spojit ihned?</h4>  
                                <h4 className="tablet">chcete se spojit ihned?</h4>  
                                <FooterLink className="phone" text="+420 602 175 680" href={"tel:+420 602 175 680"}/>
                            </div>
                            <div className="divider" />
                            <div className="contact__form__header__contact__text">
                                <p>
                                    Zavovolejte nám | 9-17 | Po - Ne
                                </p>
                                <div className="divider"/>
                                <p>
                                    Nebo použijte e-mail formu
                                </p>
                            </div>
                        </div>

                        <div className="contact__form__header__intro">
                            <h4>
                                Pokud si nejste jisti nebo máte jakýkoliv dotaz, 
                                kontaktujte nás přímo, abychom Vám 
                                mohli co nejrychleji pomoci.
                            </h4>
                            <CTAButton ctaText="ZAVOLAT →" href="tel:+420 602 175 680" LinkActive={true} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}