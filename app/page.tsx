import Image from 'next/image'
import styles from './page.module.css'
import Carousel from '@/components/Carousel'
import Carta from '@/components/Carta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Redes from '@/components/Redes'
import Reserva from '@/components/Reserva'

export default function Home() {
  return (
    <>
      <Header />

      <Carousel />
      <Carta />
      <Reserva />

      <Redes />
      <Footer />
    </>
  )
}
