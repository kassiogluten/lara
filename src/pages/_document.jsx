/* eslint-disable @next/next/no-css-tags */
import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
