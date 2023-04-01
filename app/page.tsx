'use client'

import Image from 'next/image'
import Carousel from '@/components/Carousel'
import Carta from '@/components/Carta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Redes from '@/components/Redes'
import Reserva from '@/components/Reserva'
import ContactForm from '@/components/ContactForm'
import { useEffect, useRef, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Analytics } from '@vercel/analytics/react'


export default function Home() {
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const cartaRef = useRef<HTMLDivElement | null>(null);
  const reservarRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollPosition = window.scrollY;

      console.log(scrollPosition)

      if (scrollPosition > 0) {
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
    const offsetTop = cartaRef?.current?.offsetTop ?? 0

    console.log("scrolling carta" + offsetTop);

    window.scrollTo({
      top: offsetTop - 150,
      behavior: 'smooth',
    });

  };

  const handleScrollToReservar = () => {

    const offsetTop = reservarRef?.current?.offsetTop ?? 0
    console.log("scrolling reserva" + offsetTop);

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


  function CloseIcon() {
    return (
      <button
        id="my-burger-icon"
        style={{ /* Your custom styles here */ }}
        onClick={handleMenuToggle}
      >
      </button>
    );
  }

  return (
    <>
      <div id="outer-container menu-overlay">
        <Header scrolled={scrolled} scrollTo={{ handleScrollToCarta, handleScrollToReservar, handleScrollToInicio }} menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />

        <Menu
          isOpen={menuOpen}
          onClose={handleMenuToggle}
          burgerButtonClassName='hidden'
          overlayClassName='menu-overlay'
          className="!w-full flex justify-center items-center"
          menuClassName='flex !h-auto flex-row justify-center'
          itemListClassName='flex flex-col justify-center'
          crossButtonClassName='bg-red-800 p-6'

          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}>
          <button className="text-4xl uppercase text-white text-center my-6" onClick={() => { handleScrollToCarta(); handleMenuToggle(); }}>
            Carta
          </button>
          <button className="text-4xl uppercase text-white text-center my-6" onClick={() => { handleScrollToReservar(); handleMenuToggle(); }}>
            Reservar
          </button>
          <button className="text-4xl uppercase text-white text-center my-6" onClick={() => { handleMenuToggle(); }}>
            Contacto
          </button>

        </Menu>
        <main id="page-wrap">


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
        </main>
        <Analytics/>
      </div>
    </>

  )
}
