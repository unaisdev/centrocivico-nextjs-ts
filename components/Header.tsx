"use client"

import "./header.css";

import logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import { slide as Menu } from 'react-burger-menu'

type Props = {
  scrollTo: {
    handleScrollToInicio: () => void,
    handleScrollToCarta: () => void,
    handleScrollToReservar: () => void,
  };
  scrolled: boolean;
  menuOpen: boolean;
  infoOpen: boolean;
  handleMenuToggle: () => void;
  handleInfoToggle: () => void;
}

const Header = ({ scrollTo, scrolled, menuOpen, infoOpen, handleMenuToggle, handleInfoToggle }: Props) => {


  return (
    <header className={`fixed flex justify-between flex-row-reverse lg:flex-row px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200 ${scrolled ? ` header_scrolled` : ` header_normal`}`} >
      <div className="flex lg:hidden z-40">
        <button onClick={handleMenuToggle} className="flex items-center p-1  text-black hover:text-white hover:border-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
      </div>
      <nav className="hidden lg:flex justify-around items-center flex-row-reverse">
        <ul id="navigation" className="hidden lg:flex justify-center items-center">
          <li>
            <Link className="link-header pl-6 pr-6" onClick={scrollTo.handleScrollToInicio} href="" >
              Inicio
            </Link>
          </li>
          <li>
            <Link className="link-header pl-6 pr-6" onClick={scrollTo.handleScrollToCarta} href="">
              Carta
            </Link>
          </li>
          <li>
            <Link className="link-header pl-6 pr-6" onClick={scrollTo.handleScrollToReservar} href="">
              Reserva
            </Link>
          </li>
        </ul>


      </nav>
      <div className="">
        <Image
          onClick={scrollTo.handleScrollToInicio}
          className={`md:max-w-md relative -mb-72 z-20  ${scrolled ? "small-image" : menuOpen || infoOpen ? "medium-image" : " large-image"}`}
          id="logo"
          src={logo}
          alt="Bar Restaurante Centro Cívico de Allo"
        // style={{
        //   width: "100%",
        //   transform: `scale(${scale}) translateY(${positionY}px)`,
        //   transition: `transform 0.3s ease-in-out`,

        // }}
        />
      </div>

      <div className="hidden sm:flex flex-wrap flex-col-reverse items-start lg:items-end justify-center">
        <div className="hidden sm:flex flex-wrap flex-row-reverse lg:flex-row items-center justify-end text-xxs md:text-sm">
          <strong>629 57 54 68</strong>
          <svg
            className="h-3 w-3 mx-1 lg:h-5 lg:w-5 lg:mx-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            ></path>
          </svg>
        </div>
        <div className="hidden sm:flex flex-wrap flex-row-reverse lg:flex-row items-center justify-end text-xxs md:text-sm">
          <p>centrocivicoallo5@gmail.com</p>
          <svg
            className="h-3 w-3 mx-1 lg:h-5 lg:w-5 lg:mx-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            ></path>
          </svg>
        </div>
        <div className="hidden sm:flex flex-wrap flex-row-reverse lg:flex-row items-center justify-end text-xxs md:text-sm">
          <p style={{ whiteSpace: "nowrap" }}>P.º de la Fuente, 31262 Allo, Navarra</p>
          <svg
            className="h-3 w-3 mx-1 lg:h-5 lg:w-5 lg:mx-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
            ></path>
          </svg>{" "}
        </div>
      </div>

      <div className="flex sm:hidden z-40">
        <button onClick={handleInfoToggle} className="flex items-center p-1  text-black hover:text-white hover:border-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className ="h-6 w-6 bi bi-info" viewBox="0 0 16 16">
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /> </svg>
        </button>
      </div>



      {/* <div id='menu-mobile' className={`overflow-hidden w-full z-10 bg-white 
          ${scrolled ? "pt-24" : menuOpen ? "pt-40" : " pt-40"}
          flex items-center justify-center shadow-xl menu-mobile lg:hidden ${menuOpen ? 'flex' : 'hide hidden opacity-0'} `}>
        <nav className='flex flex-col items-center justify-center '>
          <a onClick={onCartaMobileMenuClick} className='py-4'>CARTA</a>
          <a onClick={onReservarMobileMenuClick} className='py-4'>RESERVAS</a>
          <a className='py-4'>CONTACTO</a>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
