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
import { useRef, useState } from 'react'

export default function Home() {
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const cartaRef = useRef<HTMLDivElement | null>(null);
  const reservarRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToCarta = () => {
    console.log("scrolling");

    const offsetTop = cartaRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 150,
      behavior: 'smooth',
    });
  };

  const handleScrollToReservar = () => {
    console.log("scrolling");

    const offsetTop = reservarRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 150,
      behavior: 'smooth',
    });
  };

  const handleScrollToInicio = () => {
    console.log("scrolling");

    const offsetTop = inicioRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 150,
      behavior: 'smooth',
    });
  };


  return (
    <>
      <Header scrollTo={{ handleScrollToCarta, handleScrollToReservar, handleScrollToInicio }} />
      <div ref={inicioRef}>

        <Carousel />

      </div>
      <div ref={cartaRef}>
        <Carta />
      </div>
      <div ref={reservarRef}>
        <Reserva />

      </div>
      <Redes />
      <Footer />
    </>
  )
}
