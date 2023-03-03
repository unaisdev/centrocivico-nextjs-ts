import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Head from './head'
import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Footer from '@/components/Footer'
import Redes from '@/components/Redes'
import Reserva from '@/components/Reserva'
import Carta from '@/components/Carta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head />
      <Header />

      <Carousel />
      <Carta />
      <Reserva />

      <Redes />
      <Footer />
    </>
  );
}
