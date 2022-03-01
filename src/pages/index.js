import Head from "next/head";
import { Aprender } from "../components/Aprender";
import { Excelencia } from "../components/Excelencia";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lara Machado</title>
        <meta property="og:title" content="Lara Machado" />
        <meta name="description" content="Nail Designer de Valor" />
        <meta property="og:description" content="Nail Designer de Valor" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Hero />
      <Aprender/>
      <Excelencia/>
      <Footer/>
    </>
  );
}
