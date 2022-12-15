import Head from "next/head";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";
import Home from "./home/index";

export default function Index() {
  return (
    <div>
      <Head>
        <title>My Marvel Universe</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
