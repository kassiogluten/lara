/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-css-tags */
import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJ4ZBZN');`,
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2636386719786077');
fbq('track', 'PageView')`,
            }}
          ></script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=2636386719786077&ev=PageView&noscript=1"
            />
          </noscript>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(e,a,t,i){function n(){setTimeout((function(){e.bindFields(e.blId,e.trackFields)}),1500)}if(e.blDataLayer=e.blDataLayer||{nome:void 0,email:void 0,documento:void 0},e.blId="BL-621942a7670c877f74549d57-D6P5",e.trackFields=[{nome:"FNAME"},{email:"EMAIL"}],e.Tracker)n();else{var o=a.getElementsByTagName("script")[0],r=a.createElement("script");r.async=!0,r.src="https://static.buzzlead.com.br/tracker.js",r.onload=n,o.parentNode.insertBefore(r,o)}}(window,document);`,
            }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-691846205"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-691846205');`,
            }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153282122-1"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-153282122-1');`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(l,d,t,r,c,k){
              if(!l.lt){l.lt=l.lt||{_c:[]};
              c=d.getElementsByTagName('head')[0];
              k=d.createElement('script');k.async=1;
              k.src=t;c.appendChild(k);}
              l.ltq = l.ltq || function(k,v){l.lt._c.push([k,v])};
              
              ltq('init', '4hy-4')
              })(window,document,'//tag.ltrck.com.br/lt16464.js');`,
            }}
          />
           */}

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NJ4ZBZN"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}
