import Head from "next/head";
import IntroTrafika from "@/components/Trafika/Intro";
import TrafikaMain from "@/components/Trafika/Main";


export default function TrafikaPage() {

  return (
    <>
      <Head>
        <title>Trafika Pavel Kovanda | Noviny, Časopisy & Tabákové výrobky</title>
        <meta name="description" content="Navštivte naši trafiku v Písku s širokou nabídkou tiskovin, tabákových výrobků a doplňkového sortimentu. Hlasujte o nových produktech na Facebooku!" />
        <meta name="keywords" content="trafika, noviny, časopisy, tabák, cigarety, doutníky, losy, jízdenky, Písek" />
        <meta name="author" content="Pavel Kovanda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kovanda28.cz/trafika" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kovanda28.cz/trafika" />
        <meta property="og:title" content="Trafika Pavel Kovanda | Noviny & Tabákové výrobky" />
        <meta property="og:description" content="Kompletní sortiment novin, časopisů a tabákových výrobků v Písku. Hlasujte o nových produktech!" />
        <meta property="og:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kovanda28.cz/trafika" />
        <meta property="twitter:title" content="Trafika Pavel Kovanda | Písek" />
        <meta property="twitter:description" content="Veškerý sortiment tiskovin a tabákových výrobků. Hlasujte o nových produktech na našem Facebooku!" />
        <meta property="twitter:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pavel Kovanda - Instalatérské služby & Trafika - Trafika Page",
            "image": "https://www.kovanda28.cz/images/logo.jpg",
            "url": "https://www.kovanda28.cz",
            "telephone": "+420602175680",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jablonského 402/18",
              "addressLocality": "Písek",
              "postalCode": "39701",
              "addressCountry": "CZ"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "priceRange": "$",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61557461697885"
            ]
          })}
        </script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" lang="cs">
        <IntroTrafika />
        <TrafikaMain />
      </main>
    </>
  );
}
