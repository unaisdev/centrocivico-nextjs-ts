import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Head from './head'
import Header from "@/components/Header"
import Reserva from '@/components/Reserva'
import Footer from '@/components/Footer'
import Redes from '@/components/Redes'
import Carousel from '@/components/Carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Reservar() {
  return (
    <>
      <Head />
      <Header />
      <Carousel />
      <Reserva />
      <Redes />
      <Footer />
    </>
  );
}
