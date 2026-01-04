import Head from "next/head";
import FotoGalerie from "@/components/FotoGalerie";
import { useGlobalContext } from "@/context/globalContext";


export default function FotoGaleriePage() {
  const { firstLoad } = useGlobalContext();
  
    const links = [
    {
      name: "VODOMĚRY",
      href: "/vodomery"
    },
    {
      name: "BMT",
      href: "/bmt"
    }
  ]
  const images = [
    {
      src: '/images/galerie/RTN/1.webp',
      alt: 'rtn1',
      name: 'Montáž RTN',
      description: 'Rozdělovač Topných Nákladů',
      vertical: true
    },
    {
      src: '/images/galerie/RTN/2.webp',
      alt: 'rtn2',
      name: 'Montáž RTN',
      description: 'Rozdělovač Topných Nákladů',
      vertical: true
    },
    {
      src: '/images/galerie/RTN/3.webp',
      alt: 'rtn3',
      name: 'Montáž RTN',
      description: 'Rozdělovač Topných Nákladů',
      vertical: true
    },
    {
      src: '/images/galerie/RTN/4.webp',
      alt: 'rtn4',
      name: 'Montáž RTN',
      description: 'Rozdělovač Topných Nákladů',
      vertical: true
    },
    {
      src: '/images/galerie/RTN/5.webp',
      alt: 'rtn5',
      name: 'Montáž RTN',
      description: 'Rozdělovač Topných Nákladů',
      vertical: true
    },
    {
      src: '/images/galerie/RTN/6.webp',
      alt: 'rtn6',
      name: 'Montáž RTN',
      description: 'Rozdělovač Topných Nákladů',
      vertical: true
    },
    {
      src: '/images/galerie/RTN/7.webp',
      alt: 'rtn7',
      name: 'Montáž RTN',
      description: 'Rozdělovač Topných Nákladů',
      vertical: true
    },
  ]

  const title = "RTN - Rozdělovač Topných Nákladů"
  const desc  = "Indikátor spotřeby tepla na radiátoru pro spravedlivé rozúčtování v domě. Pro domácnosti lepší přehled o vytápění a možnost řídit náklady, pro správce a firmy přesnější data, méně reklamací a rychlejší vyúčtování."

  return (
    <>
      <Head>
        <title>RTN | Realizované instalatérské práce Pavla Kovandy</title>
        <meta name="description" content="Prohlédněte si fotografie z realizovaných instalatérských prací. Kvalitní řemeslo, spolehlivost a profesionální přístup." />
        <meta name="keywords" content="instalatér fotogalerie, instalatérské práce, reference, rozvody vody, topení, odpad, realizace, Písek" />
        <meta name="author" content="Pavel Kovanda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kovanda28.cz/rtn" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kovanda28.cz/rtn" />
        <meta property="og:title" content="Fotogalerie instalatérských prací | Pavel Kovanda" />
        <meta property="og:description" content="Ukázky dokončených instalatérských prací a rekonstrukcí koupelen v Písku a okolí." />
        <meta property="og:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kovanda28.cz/rtn" />
        <meta property="twitter:title" content="Fotogalerie | Pavel Kovanda Instalatér" />
        <meta property="twitter:description" content="Profesionální instalatérské práce v Písku a okolí - prohlédněte si naše reference." />
        <meta property="twitter:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Fotogalerie instalatérských prací Pavla Kovandy",
            "description": "Ukázky dokončených instalatérských prací a rekonstrukcí",
            "url": "https://www.kovanda28.cz/rtn",
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
      <main className="main">
        <FotoGalerie title={title} desc={desc} images={images} links={links}/>
      </main>
    </>
  );
}
