import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Head from './head'
import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Footer from '@/components/Footer'
import Redes from '@/components/Redes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head />
      <Header />

      <Carousel />
      <main className={styles.main}>Página principal</main>
      <Redes />
      <Footer />
    </>
  );
}
