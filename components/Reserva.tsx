
import { Reserva } from "../interfaces/Reserva"
import "./global.css"
import bg from '../public/images/brick.jpg'


interface Props {
    reserva: Reserva
}

const Reserva = () => {
    // const [hours, setHours] = useState(Number);
    // const [minutes, setMinutes] = useState(Number);
    // const [startDate, setStartDate] = useState(
    //     setHours(setMinutes(new Date(), 30), 16)
    // );

    return (
        <>
            <section
                style={
                    {
                        backgroundImage: `url(${bg.src})`,
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center"
                    }
                }
                className="flex w-full flex-wrap items-center justify-between">
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    <form >

                        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white mr-auto rounded-2xl shadow-md border-slate">
                            <div className="flex">
                                <h1 className="font-bold uppercase text-5xl">Reserva con <br /> nosotros</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-5 mt-5">
                                <input className="w-full md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="nombre" type="text" placeholder="Nombre *" required />
                                <input className="w-full md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="telefono" type="text" placeholder="Teléfono *" required />
                                <input className="w-full col-span-1 md:col-span-1 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="personas" type="number" placeholder="¿Cuántos? *" required />
                            </div>
                            <div className="grid grid-cols-2 gap-5 md:grid-cols-6 mt-5">

                                <input className="w-full md:col-start-2 col-span-1 md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="dia" type="date" placeholder="" required />
                                {/* <DatePicker
                                    locale="es"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    excludeTimes={[
                                        setHours(setMinutes(new Date(), 0), 17),
                                        setHours(setMinutes(new Date(), 30), 18),
                                        setHours(setMinutes(new Date(), 30), 19),
                                        setHours(setMinutes(new Date(), 30), 17),
                                    ]}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                /> */}
                                <input className="w-full md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="hora" type="time" list="times" step="3600000" placeholder="Hora:" required />
                            </div>
                            <div className="my-4">
                                <textarea placeholder="¿Cualquier cosa a comentar sobre la reserva? Carrito de bebé, silla de ruedas..." className="w-full h-16 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="flex my-2 w-1/2 lg:w-1/4">
                                <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-yellow-600 text-gray-100 p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline">
                                    RESERVAR
                                </button>
                            </div>
                        </div>

                        <div
                            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto shadow-2xl bg-yellow-500 rounded-2xl">
                            <div className="flex flex-col text-white">
                                <h1 className="font-bold text-neutral-900 uppercase text-4xl my-4">Encantados de atenderte</h1>
                                <p className="text-neutral-100">Nuestra principal especialidad es cocinar, pero la segunda es tratar a los clientes como si estuviesen en casa. <br />
                                    <br />Para cualquier duda sobre la reserva, estaremos encantados de resolverla mediante nuestro correo electrónico o el número de telefono: <strong> 943612043 </strong>
                                </p>
                                <a href="/contacto" className="uppercase text-sm text-center font-bold tracking-wide my-4 bg-yellow-600 text-gray-100 p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline">
                                    CONTACTAR
                                </a>
                                {/* 
                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <div className="flex flex-col">
                                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Main Office</h2>
                                        <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                                    </div>
                                </div>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <div className="flex flex-col">
                                        <i className="fas fa-phone-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Call Us</h2>
                                        <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                                        <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                                    </div>
                                </div>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                        <i className="fab fa-facebook-f text-blue-900" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                        <i className="fab fa-linkedin-in text-blue-900" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </form>

                </div>

            </section>
        </>
    );
}

export default Reserva;