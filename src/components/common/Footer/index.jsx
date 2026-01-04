import { forwardRef} from "react";
import FooterLink from "../Buttons/LinkLine";
import { usePathname } from "next/navigation";


const footerLinksSub = [
    {
        text: "cookies",
        href: "/cookies",
    },
    {
        text: 'o ochraně soukromí',
        href: '/gdpr',
    }
]



const Footer = forwardRef((props, ref ) => {
    const pathaname = usePathname();
    return (
        <footer className="footer" ref={ref}>
            <div className="footer__links">
                <div className="footer__links__contents">
                    <div className="footer__links__creator">
                        <FooterLink text="Design a vývoj: Matěj Forejt" href="https://www.matejforejt.com"/>
                    </div>
                    <div className="footer__links__title">
                        <h2>
                            KOVANDA PAVEL
                        </h2>
                    </div>
                    <div className="footer__links__sublinks">
                        {footerLinksSub.map((link, index) => {
                            const { text, href } = link;
                            const isActiveRoute = pathaname === href;
                                return (
                                <FooterLink key={index} text={text} href={href} className={`${isActiveRoute ? 'active-route-span' : ''}`} />
                                )
                            }
                        )}
                    </div>
                </div>
                <div className="divider"/>
                <div className="footer__links__copyright">
                    <p>Pavel Kovanda © 2025 - Všechna práva vyhrazena</p>
                </div>
            </div>
        </footer>
    )
})

export default Footer;

