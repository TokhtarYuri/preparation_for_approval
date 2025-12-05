import './globals.css'
import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata = {
  title: 'Підготовка до апробації з гарантією працевлаштування в Чехії',
  description: 'Повний курс підготовки до апробації: курси мови, теорія, практика, медична термінологія. Експерти-наставники, навчання очно або онлайн, гарантований контракт із клінікою після складання іспиту.',
  keywords: 'апробація лікаря, підготовка до апробації, робота лікарем в Чехії, медична освіта Чехія, нострифікація диплому',
  openGraph: {
    title: 'Підготовка до апробації з гарантією працевлаштування в Чехії',
    description: 'Повний курс підготовки до апробації: курси мови, теорія, практика, медична термінологія.',
    type: 'website',
    locale: 'uk_UA',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <div className="app-container">
          {/* Google Tag Manager */}
          
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-529CXQHB');`}
          </Script>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {children}
        </div>
      </body>
    </html>
  )
}

