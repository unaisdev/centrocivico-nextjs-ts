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
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const cartaRef = useRef<HTMLDivElement | null>(null);
  const reservarRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollPosition = window.scrollY;

      console.log(scrollPosition)

      if (scrollPosition > 30) {
        setScrolled(true);

      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
      <Header scrolled={scrolled} scrollTo={{ handleScrollToCarta, handleScrollToReservar, handleScrollToInicio }} />
      <div className={`${scrolled ? 'page_scrolled' : 'page_normal'}`} >
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
      </div>

    </>
  )
}
