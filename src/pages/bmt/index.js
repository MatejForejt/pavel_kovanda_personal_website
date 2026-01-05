import Head from "next/head";
import FotoGalerie from "@/components/FotoGalerie";


export default function FotoGaleriePage() {
  const links = [
    {
      name: "VODOMĚRY",
      href: "/vodomery"
    },
    {
      name: "RTN",
      href: "/rtn"
    }
  ]
  const images = [
    {
      src: '/images/galerie/BMT/1.webp',
      alt: 'bmt1',
      name: 'Montáž BMT',
      description: 'Bytový Měřič Tepla',
      vertical: false
    },
    {
      src: '/images/galerie/BMT/2.webp',
      alt: 'bmt2',
      name: 'Montáž BMT',
      description: 'Bytový Měřič Tepla',
      vertical: true
    },
    {
      src: '/images/galerie/BMT/3.webp',
      alt: 'bmt3',
      name: 'Montáž BMT',
      description: 'Bytový Měřič Tepla',
      vertical: true
    },
    {
      src: '/images/galerie/BMT/4.webp',
      alt: 'bmt4',
      name: 'Montáž BMT',
      description: 'Bytový Měřič Tepla',
      vertical: false
    },
    {
      src: '/images/galerie/BMT/5.webp',
      alt: 'bmt5',
      name: 'Montáž BMT',
      description: 'Bytový Měřič Tepla',
      vertical: false
    },
    {
      src: '/images/vertical.png',
      alt: 'horizontal',
      name: 'horizontal',
      description: 'smrkovická',
      vertical: true
    },
    {
      src: '/images/vertical.png',
      alt: 'horizontal',
      name: 'horizontal',
      description: 'smrkovická',
      vertical: true
    },
    {
      src: '/images/vertical.png',
      alt: 'horizontal',
      name: 'horizontal',
      description: 'smrkovická',
      vertical: true
    },
    {
      src: '/images/vertical.png',
      alt: 'horizontal',
      name: 'horizontal',
      description: 'smrkovická',
      vertical: true
    },
    {
      src: '/images/vertical.png',
      alt: 'horizontal',
      name: 'horizontal',
      description: 'smrkovická',
      vertical: true
    }
  ]

  const desc = "Jednotka přesně měřící spotřebu tepla v bytě. Pro domácnosti kontrolovaný užívné teplé užitkové vody a kontrola nákladů pro firmy transparentní data, méně sporů a rychlejkší proces rozúčtování. "
  

  const title = "BMT - Bytový Měřič Tepla"

  return (
    <>
      <Head>
        <title>BMT | Realizované instalatérské práce Pavla Kovandy</title>
        <meta name="description" content="Prohlédněte si fotografie z realizovaných instalatérských prací. Kvalitní řemeslo, spolehlivost a profesionální přístup." />
        <meta name="keywords" content="instalatér fotogalerie, instalatérské práce, reference, rozvody vody, topení, odpad, realizace, Písek" />
        <meta name="author" content="Pavel Kovanda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kovanda28.cz/fotogalerie" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kovanda28.cz/bmt" />
        <meta property="og:title" content="Fotogalerie instalatérských prací | Pavel Kovanda" />
        <meta property="og:description" content="Ukázky dokončených instalatérských prací a rekonstrukcí koupelen v Písku a okolí." />
        <meta property="og:image" content="https://www.kovanda28.cz/images/bmt-og.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kovanda28.cz/bmt" />
        <meta property="twitter:title" content="Fotogalerie | Pavel Kovanda Instalatér" />
        <meta property="twitter:description" content="Profesionální instalatérské práce v Písku a okolí - prohlédněte si naše reference." />
        <meta property="twitter:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Fotogalerie instalatérských prací Pavla Kovandy",
            "description": "Ukázky dokončených instalatérských prací a rekonstrukcí",
            "url": "https://www.kovanda28.cz/bmt",
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
        <FotoGalerie  title={title} desc={desc} images={images} links={links}/>
      </main>
    </>
  );
}
