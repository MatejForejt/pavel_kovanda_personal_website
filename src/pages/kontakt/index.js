import Head from "next/head";
import Contact from "@/components/Main/Contact";
import { useGlobalContext } from "@/context/globalContext";



export default function ContactPage() {

  const { firstLoad } = useGlobalContext();
  return (
    <>
      <Head>
        <title>Kontakt | Pavel Kovanda - Instalatér & Trafika</title>
        <meta name="description" content="Kontaktujte Pavla Kovandu pro instalatérské práce v Písku a okolí. Rychlá reakce, profesionální přístup a férové ceny." />
        <meta name="keywords" content="kontakt instalatér, kontakt trafika, telefon, email, adresa, Písek, Pavel Kovanda" />
        <meta name="author" content="Pavel Kovanda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kovanda28.cz/kontakt" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kovanda28.cz/kontakt" />
        <meta property="og:title" content="Kontakt | Pavel Kovanda" />
        <meta property="og:description" content="Potřebujete instalatéra nebo hledáte trafiku v Písku? Kontaktujte Pavla Kovandu." />
        <meta property="og:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kovanda28.cz/kontakt" />
        <meta property="twitter:title" content="Kontakt | Pavel Kovanda" />
        <meta property="twitter:description" content="Instalatérské služby a trafika v Písku - kontaktní informace." />
        <meta property="twitter:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Kontaktní stránka Pavel Kovanda",
            "url": "https://www.kovanda28.cz/contact",
            "mainEntity": {
              "@type": "Person",
              "name": "Pavel Kovanda",
              "telephone": "+420602175680",
              "email": "kovanda28@seznam.cz",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jablonského 402/18",
                "addressLocality": "Písek",
                "postalCode": "39701",
                "addressCountry": "CZ"
            },
            }
          })}
        </script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" style={{ overflowX: "hidden" }}>
        <Contact />
      </main>
    </>
  );
}
