const ReservaForm = () => {
    return (
        <div className="">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white mr-auto rounded-2xl shadow-md border-slate">
                <div className="flex flex-row justify-center">
                    <h1 className="font-bold uppercase text-3xl">RESERVA TU MESA</h1>
                </div>
                <div className="grid grid-cols-10">
                    <input type="checkbox" className="grid-span-1"></input>
                    <input type="checkbox" className="grid-span-1"></input>
                    <input type="checkbox" className="grid-span-1"></input>
                    <input type="checkbox" className="grid-span-1"></input>
                    <input type="checkbox" className="grid-span-1"></input>
                    <input type="checkbox" className="grid-span-1"></input>
                    <input type="checkbox" className="grid-span-1"></input>
                </div>
            </div>

            <div
                className="w-full lg:w-2/6 px-8 py-12 ml-auto shadow-2xl bg-yellow-500 rounded-2xl">
                <div className="flex flex-col text-white">
                    <h1 className="font-bold text-neutral-900 uppercase text-4xl my-4">Encantados de atenderte</h1>
                    <p className="text-neutral-100">Nuestra principal especialidad es cocinar, pero la segunda es tratar a los clientes como si estuviesen en casa. <br />
                        <br />Para cualquier duda sobre la reserva, estaremos encantados de resolverla mediante nuestro correo electrónico o el número de telefono: <strong> 943612043 </strong>
                    </p>
                    <a href="/contacto" className="uppercase text-sm text-center font-bold tracking-wide my-4 bg-yellow-600 text-gray-100 p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline">
                        CONTACTAR
                    </a>

                </div>
            </div>
        </div>
    )
}

export default ReservaForm;