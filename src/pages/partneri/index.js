import Head from "next/head";
import MainPartners from "@/components/Partners/main";


export default function FotoGaleriePage() {

  return (
    <>
      <Head>
        <title> Mý partneři | Realizované instalatérské práce Pavla Kovandy</title>
        <meta name="description" content="Prohlédněte si fotografie z realizovaných instalatérských prací. Kvalitní řemeslo, spolehlivost a profesionální přístup." />
        <meta name="keywords" content="instalatér fotogalerie, instalatérské práce, reference, rozvody vody, topení, odpad, realizace, Písek" />
        <meta name="author" content="Pavel Kovanda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kovanda28.cz/partneri" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kovanda28.cz/partneri" />
        <meta property="og:title" content="Fotogalerie instalatérských prací | Pavel Kovanda" />
        <meta property="og:description" content="Ukázky dokončených instalatérských prací a rekonstrukcí koupelen v Písku a okolí." />
        <meta property="og:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kovanda28.cz/partneri" />
        <meta property="twitter:title" content="Fotogalerie | Pavel Kovanda Instalatér" />
        <meta property="twitter:description" content="Profesionální instalatérské práce v Písku a okolí - prohlédněte si naše reference." />
        <meta property="twitter:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Fotogalerie instalatérských prací Pavla Kovandy",
            "description": "Ukázky dokončených instalatérských prací a rekonstrukcí",
            "url": "https://www.kovanda28.cz/partneri",
            "mainEntity": {
              "@type": "Service",
              "name": "Instalatérské služby",
              "provider": {
                "@type": "Person",
                "name": "Pavel Kovanda"
              }
            }
          })}
        </script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" style={{ overflowX: "hidden" }}>
        <MainPartners />
      </main>
    </>
  );
}
