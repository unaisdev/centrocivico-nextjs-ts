
import { useRef } from 'react';
import './carta.css'

const Carta = () => {

    return (
        <section id="carta" className="module">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <div className="module-header wow fadeInUp animated">
                        <h2 className="module-title">ENTRANTES</h2>
                        <h3 className="module-subtitle">Para hacer hambre o quitártela</h3>
                    </div>
                </div>

                <div className="flex flex-col w-full md:grid md:grid-cols-2 items-top md:flex-row md:justify-around">

                    <div className="p-4  w-full sm:px-16 md:px-42 md:col-span-1 ">

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bola Picante / Queso</h4>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">1,20 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-1">
                                    <h4 className="menu-title">Gabardinas</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <div className="menu-label">Nuevo</div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">1,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Croquetas caseras</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">1,20 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Rabas o calamares rebozados</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Patatas bravas al estilo de la Hortelana</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">4,50 €</h4>
                                </div>
                            </div>
                        </div>


                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Alitas</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-1">
                                    <h4 className="menu-title">Lollypops</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <div className="menu-label">Recomendado</div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,70 €</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="p-4 w-full sm:px-16 md:px-42 md:col-span-1 ">

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Ensalada de frutos de mar</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">6,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Chipirones a la plancha encebollados</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">6,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Patacones con guacamole y hogao</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">4,60 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Ensalada de bonito con viruta de Txangurro</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">7,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Salteado de hongos con huevo escalfado</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">7,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Esparragos trigueros a la brasa sobre ibérico y viruta de
                                        parmesano</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">4,60 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Cebiche de Txitxarron</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,50 €</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="flex flex-row justify-center ">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="devider">
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full sm:grid md:grid-cols-3 items-top md:flex-row md:justify-around">

                    <div className="p-4 w-full sm:px-16 md:px-42 md:col-span-1 ">

                        <div className="flex justify-center">
                            <div className="col-sm-12 ">
                                <div className="module-header wow fadeInUp animated">
                                    <h2 className="module-title">BOCADILLOS</h2>
                                    <h3 className="module-subtitle">Entre pan y pan</h3>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bocadillo de jamón asado</h4>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,80 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bocadillo de confit desmechado</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <div className="menu-label">Nuevo</div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,90 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bocadillo de pollo a la brasa</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">4,50 €</h4>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="p-4 w-full sm:px-16 md:px-42 md:col-span-1 ">
                        <div className="flex justify-center">
                            <div className="module-header wow fadeInUp animated">
                                <h2 className="module-title">HAMBURGUESAS</h2>
                                <h3 className="module-subtitle">Entre pan y pan redondo</h3>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">De champis con queso Roquefort</h4>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">6,70 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-1">
                                    <h4 className="menu-title">De Foie y cebolla caramelizada</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <div className="menu-label"><i className="bi bi-fire"></i>
                                    </div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">8,30 €</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="p-4 w-full sm:px-16 md:px-42 md:col-span-1 ">
                        <div className="flex justify-center">
                            <div className="module-header wow fadeInUp animated">
                                <h2 className="module-title">SANDWICHES</h2>
                                <h3 className="module-subtitle">Ligero con salsa</h3>
                            </div>
                        </div>


                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Sandwich de pollo gratinado</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,50 €</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col w-full sm:grid md:grid-cols-2 items-top md:flex-row md:justify-around">

                    <div className="p-4 w-full sm:px-16 md:px-42 md:col-span-1 ">

                        <div className="flex justify-center">
                            <div className="col-sm-12 ">
                                <div className="module-header wow fadeInUp animated">
                                    <h2 className="module-title">PESCADOS</h2>
                                    <h3 className="module-subtitle">Que hace en el agua... nada</h3>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bacalao confitado en grasa de pato sobre piperrada de tomate</h4>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">9,80 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-1">
                                    <h4 className="menu-title">Brochetas de Rape y Langostinos sobre salsa de Mostaza</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <div className="menu-label"><i className="bi bi-fire"></i>
                                    </div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">8,30 €</h4>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="p-4 w-full sm:px-16 md:px-42 md:col-span-1 ">
                        <div className="flex justify-center">
                            <div className="module-header wow fadeInUp animated">
                                <h2 className="module-title">CARNES</h2>
                                <h3 className="module-subtitle">Para los amantes de la carne</h3>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Pluma ibérica a la brasa</h4>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">14,50 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-1">
                                    <h4 className="menu-title">Txuletón a la brasa</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <div className="menu-label"><i className="bi bi-fire"></i>
                                    </div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">47 €/Kg</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Magret de pato a la brasa</h4>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">9,80 €</h4>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                {/* 
                <div className="row d-flex justify-content-center ">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="devider">
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row justify-center">

                    <div className="col-sm-4 p-3">

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-sm-12 ">
                                    <div className="module-header wow fadeInUp animated">
                                        <h2 className="module-title">BOCADILLOS</h2>
                                        <h3 className="module-subtitle">Entre pan y pan</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bocadillo de jamón asado</h4>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,80 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bocadillo de confit desmechado</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <div className="menu-label">Nuevo</div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">5,90 €</h4>
                                </div>
                            </div>
                        </div>

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-span-2">
                                    <h4 className="menu-title">Bocadillo de pollo a la brasa</h4>
                                    <div className="menu-detail"></div>
                                </div>
                                <div className="col-span-1 menu-price-detail">
                                    <h4 className="menu-price">4,50 €</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-4 p-3">

                       
                    </div>

                    <div className="col-sm-4 p-3">

                        

                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="devider">
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row justify-center">

                    <div className="col-sm-6 p-3">

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">
                                <div className="col-sm-12 ">
                                    <div className="module-header wow fadeInUp animated">
                                        <h2 className="module-title">PESCADOS</h2>
                                        <h3 className="module-subtitle">Entre pan y pan</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                    </div>

                    <div className="col-sm-6 p-3">

                        <div className="menu">
                            <div className="grid grid-cols-3 items-center">

                                <div className="col-sm-12">
                                    <div className="module-header wow fadeInUp animated">
                                        <h2 className="module-title">CARNES</h2>
                                        <h3 className="module-subtitle">Para los amantes de la carne</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                       


                    </div>

                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="devider">
                        </div>
                    </div>
                </div> */}


                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="devider">
                        </div>
                    </div>
                </div>

                <div className="w-full">

                    <div className="menu">
                        <div className="module-header wow fadeInUp animated">
                            <h2 className="module-title">POSTRES CASEROS</h2>
                            <h3 className="module-subtitle">... y qué buenos!</h3>
                        </div>
                    </div>

                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="devider">
                        </div>
                    </div>
                </div>


            </div>
        </section >
    )
}

export default Carta;