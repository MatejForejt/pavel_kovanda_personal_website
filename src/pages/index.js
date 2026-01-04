import Head from "next/head";
import MainIntro from "@/components/Main/Intro";

export default function Home() {


  return (
    <>
      <Head>
        <title>Pavel Kovanda | Instalatérské služby & Trafika</title>
        <meta name="description" content="Kvalitní a spolehlivé instalatérské služby v Písku a okolí. Navštivte také mou oblíbenou trafiku s širokou nabídkou tiskovin a tabákových výrobků." />
        <meta name="keywords" content="instalatér, instalatérské práce, voda, topení, odpad, trafika, Písek, Pavel Kovanda" />
        <meta name="author" content="Pavel Kovanda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kovanda28.cz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kovanda28.cz" />
        <meta property="og:title" content="Pavel Kovanda | Instalatérské služby & Trafika Písek" />
        <meta property="og:description" content="Instalatérské práce a trafika v Písku. Vše na jednom místě od Pavla Kovandy." />
        <meta property="og:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kovanda28.cz" />
        <meta property="twitter:title" content="Pavel Kovanda | Instalatér & Trafika Písek" />
        <meta property="twitter:description" content="Instalatér s letitou praxí a vlastník trafiky v Písku, Jih." />
        <meta property="twitter:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pavel Kovanda - Instalatérské služby & Trafika",
            "image": "https://www.kovanda28.cz/images/seo/seo.webp",
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
      <main className="main" style={{ overflowX: "hidden" }}>
        <MainIntro />
      </main>
    </>
  );
}
