import "./footer.css"


const Footer = () => {
    return (
        <>
            <footer aria-label="Site Footer" className="bg-gray-100 border-t-gray-800">
                <div className="relative mx-auto max-w-screen-xl px-2 py-2 ">
                    

                    <div className="py-2 lg:flex lg:items-center lg:justify-center">
                        <div>
                            <p
                                className="max-w-md text-center leading-relaxed text-gray-500 text-xs md:text-sm"
                            >
                               Copyright 2023 © <strong>Bar Restaurante Centro Cívico de Allo</strong>


                            </p>
                            <p
                                className="max-w-md text-center leading-relaxed text-gray-500 text-xs md:text-sm"
                            >
                                <strong>Gure Ametsa</strong> | <span className="text-xxs md:text-xs">diseñado por</span>  <a href="http://github.io/unaisdev">Unai Canales</a>


                            </p>
                        </div>

                    </div>

                    
                </div>
            </footer>
        </>
    );
}

export default Footer;