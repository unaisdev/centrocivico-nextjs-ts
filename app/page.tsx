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
import { slide as Menu } from 'react-burger-menu'

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
    const btn = document.querySelector('#react-burger-menu-btn');
    if (btn) {
      btn.classList.add('no-styles');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollPosition = window.scrollY;

      console.log(scrollPosition)

      if (scrollPosition > 60) {
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


  function BurgerIcon() {
    return (
      <button
        id="my-burger-icon"
        style={{ /* Your custom styles here */ }}
        onClick={handleMenuToggle}
      >
        Open Menu
      </button>
    );
  }

  return (
    <div id="outer-container">

      <Menu
        isOpen={menuOpen}
        onClose={handleMenuToggle}
        burgerButtonClassName='hidden'
        className="!w-full flex justify-center items-center"
        menuClassName='flex !h-auto flex-row justify-center'
        itemListClassName='flex flex-col justify-center'
        crossButtonClassName='bg-red-800'
        pageWrapId={ "page-wrap" }
        outerContainerId={"outer-container"}>

        <a className="text-4xl uppercase text-white text-center my-6 " href="#" onClick={() => { handleMenuToggle(); handleScrollToCarta(); }}>
          Carta
        </a>
        <a className="text-4xl uppercase text-white text-center my-6" href="#" onClick={() => { handleMenuToggle(); handleScrollToReservar(); }}>
          Reservar
        </a>
        <a className="text-4xl uppercase text-white text-center my-6" href="#" onClick={() => { handleMenuToggle(); }}>
          Contacto
        </a>

      </Menu>

      <Header scrolled={scrolled} scrollTo={{ handleScrollToCarta, handleScrollToReservar, handleScrollToInicio }} menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />
      <div id="page-wrap">

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

    </div>
  )
}
