'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Carousel from '@/components/Carousel'
import Carta from '@/components/Carta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Redes from '@/components/Redes'
import Reserva from '@/components/Reserva'
import ContactForm from '@/components/ContactForm'
import { useRef } from 'react'

export default function Home() {
  const cartaRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToCarta = () => {
    const offsetTop = cartaRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 150,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header scrollTo={handleScrollToCarta} />
      <Carousel />
      <div ref={cartaRef}>
        <Carta />
      </div>
      <Reserva />
      <Redes />
      <Footer />
    </>
  )
}
