import TermsContent from "@/components/TermsPage"
import Head from "next/head"

export default function PrivacyPolicyPage() {
    return (
        <>
            <Head>
              <title>Ochrana soukromí | Pavel Kovanda</title>
              <meta name="description" content="Ochrana osobních údajů a zásady zpracování dat. Zjistěte, jak Pavel Kovanda chrání vaše soukromí." />
              <meta name="keywords" content="ochrana soukromí, GDPR, zpracování dat, osobní údaje, Pavel Kovanda" />
              <meta name="author" content="Pavel Kovanda" />
              <meta name="robots" content="index, follow" />
              <link rel="canonical" href="https://www.kovanda28.cz/gdpr" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://www.kovanda28.cz/gdpr" />
              <meta property="og:title" content="Ochrana soukromí | Pavel Kovanda" />
              <meta property="og:description" content="Zásady ochrany osobních údajů a zpracování dat." />
              <meta property="og:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://www.kovanda28.cz/gdpr" />
              <meta property="twitter:title" content="Ochrana soukromí | Pavel Kovanda" />
              <meta property="twitter:description" content="Zásady ochrany osobních údajů." />
              <meta property="twitter:image" content="https://www.kovanda28.cz/images/seo/seo.webp" />
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "Ochrana soukromí",
                  "description": "Zásady ochrany osobních údajů Pavel Kovanda",
                  "url": "https://www.kovanda28.cz/gdpr",
                  "publisher": {
                    "@type": "Person",
                    "name": "Pavel Kovanda",
                    "url": "https://www.kovanda28.cz"
                  },
                  "inLanguage": "cs-CZ"
                })}
              </script>
            </Head>
            <main lang="cs">
                <TermsContent />
            </main>
        </>
    )
}