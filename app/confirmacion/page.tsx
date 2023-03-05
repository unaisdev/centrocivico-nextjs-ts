"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Head from './head'
import Header from "@/components/Header"
import Reserva from '@/components/Reserva'
import Footer from '@/components/Footer'
import Redes from '@/components/Redes'
import Carousel from '@/components/Carousel'
import { NextPageContext } from 'next/types'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

function DatosDeUsuario() {
  const router = useRouter();


  
  return (
    <div>
      {/* otros datos del usuario */}
    </div>
  );
}

export default function Confirmacion() {
  return (
    <>
      <Head />
      <Header />
      <Carousel />
      
      <Carousel />
      <Carousel />
      <div>

      </div>
      <Footer />
    </>
  );
}
