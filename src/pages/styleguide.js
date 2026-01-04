import TestComponent from "@/components/test";
import Head from "next/head";

export default function Home() {


  return (
    <>
      <Head>
        <title>Styleguide | Page for style testing</title>
        <meta name="description" content="Styleguide | Page for style testing" />
        <meta name="keywords" content="instalatér, instalatérské práce, voda, topení, odpad, trafika, Písek, Pavel Kovanda" />
        <meta name="author" content="Pavel Kovanda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kovanda28.cz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kovanda28.cz" />
        <meta property="og:title" content="Pavel Kovanda | Instalatérské služby & Trafika Písek" />
        <meta property="og:description" content="Instalatérské práce a trafika v Písku. Vše na jednom místě od Pavla Kovandy." />
        <meta property="og:image" content="https://www.kovanda28.cz/images/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kovanda28.cz" />
        <meta property="twitter:title" content="Pavel Kovanda | Instalatér & Trafika Písek" />
        <meta property="twitter:description" content="Instalatér s letitou praxí a vlastník trafiky v Písku, Jih." />
        <meta property="twitter:image" content="https://www.kovanda28.cz/images/twitter-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pavel Kovanda - Instalatérské služby & Trafika",
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
      <main>
            <TestComponent />
      </main>
    </>
  );
}
