import { useState } from "react";
import { useCookies } from "react-cookie";
import './cookies.css'

const Cookies = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['acceptedCookies']);
    const [viewCookieMessage, setViewCookieMessage] = useState<boolean>(true)
    // const [viewCookieMessage, setViewCookieMessage] = useState<Boolean>(true)
    const [openDialog, setOpenDialog] = useState<boolean>(true)

    console.log(cookies?.acceptedCookies)

    const handleAcceptClick = () => {
        setCookie('acceptedCookies', true);
        setViewCookieMessage(!viewCookieMessage);
    }

    const handleRejectClick = () => {
        setViewCookieMessage(!viewCookieMessage);
    }

    return (
        <>
            <div className={`${viewCookieMessage ? 'cookies': 'dismiss'} w-full bg-gray-100 fixed bottom-0 z-50 items-center justify-center`}>

                <section className="w-full p-5 lg:px-24 absolute bottom-0 bg-gray-600" x-show="showCookieBanner">
                    <div className="md:flex items-center -mx-3">
                        <div className="md:flex-1 px-3 mb-5 md:mb-0">
                            <p className="text-left md:text-left text-white text-2xs md:text-xs leading-tight md:pr-12">Utilizamos cookies en nuestro sitio web para mejorar su experiencia de navegación y personalizar contenido y anuncios. Al hacer clic en &apos;Aceptar&apos;, usted acepta el uso de cookies en nuestro sitio web. Si no desea aceptar cookies, puede ajustar la configuración de su navegador para rechazarlas. Sin embargo, tenga en cuenta que algunas funciones de nuestro sitio web pueden no funcionar correctamente sin el uso de cookies. Para obtener más información sobre cómo utilizamos las cookies y cómo puede administrarlas, consulte nuestra Política de Cookies en nuestro sitio web.</p>
                        </div>
                        <div className="px-3 text-center">
                            <button id="btn" onClick={handleRejectClick} className="py-2 px-8 bg-red-800 hover:bg-red-900 text-white rounded font-bold text-sm shadow-xl mr-3">RECHAZAR</button>
                            <button id="btn" onClick={handleAcceptClick} className="py-2 px-8 bg-green-400 hover:bg-green-500 text-white rounded font-bold text-sm shadow-xl">ACEPTAR</button>
                        </div>
                    </div>
                </section>
                <dialog open={true} id="cookiesModal" className="h-auto w-11/12 md:w-1/2 bg-white overflow-hidden rounded-md p-0">
                    <div className="flex flex-col w-full h-auto">
                        <div className="flex w-full h-auto items-center px-5 py-3">
                            <div className="w-10/12 h-auto text-lg font-bold">
                                Cookie settings
                            </div>
                            <div className="flex w-2/12 h-auto justify-end">
                                <button className="cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800">
                                    <i className="mdi mdi-close-circle-outline text-2xl"></i>
                                </button>
                            </div>
                        </div>
                        <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                            <div className="flex-1">
                                <p>Strictly necessary cookies</p>
                            </div>
                            <div className="w-10 text-right">
                                <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                            </div>
                        </div>
                        <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                            <div className="flex-1">
                                <p>Cookies that remember your settings</p>
                            </div>
                            <div className="w-10 text-right">
                                <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                            </div>
                        </div>
                        <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                            <div className="flex-1">
                                <p>Cookies that measure website use</p>
                            </div>
                            <div className="w-10 text-right">
                                <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                            </div>
                        </div>
                        <div className="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                            <div className="flex-1">
                                <p>Cookies that help with our communications and marketing</p>
                            </div>
                            <div className="w-10 text-right">
                                <i className="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                            </div>
                        </div>
                        <div className="flex w-full px-5 py-3 justify-end">
                            <button className="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl">Save settings</button>
                        </div>
                    </div >
                </dialog >
            </div>
        </>
    )
}

export default Cookies;