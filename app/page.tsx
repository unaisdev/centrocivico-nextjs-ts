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
  const [menuOpen, setMenuOpen] = useState(false);
  const cartaRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToCarta = () => {
    const offsetTop = cartaRef?.current?.offsetTop ?? 0

    window.scrollTo({
      top: offsetTop - 150,
      behavior: 'smooth',
    });
  };

  const openMobileMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
  }

  return (
    <>
      <Header scrollTo={handleScrollToCarta} onMobileMenuOpen={openMobileMenu} />
      {menuOpen ? (
        <div id='menu-mobile' className='absolute overflow-hidden w-full h-2/4 z-10 bg-white flex items-center justify-center'>
          <nav className='flex flex-col items-center justify-center pt-10'>
            <div className='py-4'>CARTA</div>
            <div className='py-4'>RESERVAS</div>
            <div className='py-4'>CONTACTO</div>
          </nav>
        </div>
      ) : (<>
        <Carousel />
        <div ref={cartaRef}>
          <Carta />
        </div>
        <Reserva />
        <Redes />
        <Footer />
      </>
      )}

    </>
  )
}
