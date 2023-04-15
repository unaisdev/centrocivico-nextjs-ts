"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Reserva } from '@/interfaces/Reserva';
import moment from 'moment';
import { log } from 'console';

const horaA = moment('13:00', 'HH:mm');
const horaApertura = horaA.format('h:mm A');

const horaC = moment('15:30', 'HH:mm');
const horaCierre = horaC.format('h:mm A');

const toJsonInputs = (data: Reserva): string => {
  const json = `{
    "nombre": "${data.nombre}",
    "telefono": "${data.telefono}",
    "personas": ${data.personas},
    "dia": "${data.dia}",
    "hora": "${data.hora}",
    "email": "${data.email}",
    "mas_info": "${(data.mas_info || '').replace(/\n/g, '\\u000A')}"
  }`;
  return json;
};

function convertDateFormat(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

function ReservaForm() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<Reserva>({
    nombre: '',
    email: '',
    dia: moment().format('YYYY-MM-DD'),
    hora: moment().format('HH:mm'),
    personas: 0,
    telefono: '',
    mas_info: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);


    formValues.dia = convertDateFormat(formValues.dia);

    setTimeout(async () => {
      try {
        const response = await fetch('/api/reservar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: toJsonInputs(formValues),
        }).then(response => {
          console.log(toJsonInputs(formValues));
          console.log(response);

          //  router.push('/confirmacion', );

          setIsSubmitted(true)

          if (!response.ok) {
            throw new Error('Error al enviar el formulario');
          }
        });


      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }, 1000)

  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      {isSubmitted ? (
        <>
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white mr-auto rounded-2xl shadow-md border-slate">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Solicitud de reserva enviada!</h1>
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

            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-5/8 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white mr-auto rounded-2xl shadow-md border">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Reserva con <br /> nosotros</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-5 mt-5">
              <input className="w-full md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="nombre" autoComplete='name' type="text" placeholder="Nombre *" value={formValues.nombre} onChange={handleInputChange} required />
              <input className="w-full col-span-1 md:col-span-1 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="personas" type="number" placeholder="¿Cuántos? *" value={formValues.personas} onChange={handleInputChange} required max="20" />
              <input className="w-full md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="telefono" autoComplete='tel-national' type="text" placeholder="Nº de teléfono *" value={formValues.telefono} onChange={handleInputChange} />
              <input className="w-full md:col-span-3 md:col-start-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="email" autoComplete='email' type="text" placeholder="email@gmail.com *" value={formValues.email} onChange={handleInputChange} required />


            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-6 mt-5">

              <input className="w-full col-span-1 md:col-start-2 md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="dia" type="date" min={formValues.dia} value={formValues.dia} onChange={handleInputChange} required />

              <input className="w-full col-span-1 md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="hora" type="time" min={'13:00'} max={'15:30'} placeholder="¿Cuántos? *" value={formValues.hora} onChange={handleInputChange} required />
            </div>
            <div className="my-4">
              <textarea value={formValues.mas_info} onChange={handleInputChange} name="mas_info" placeholder="¿Cualquier cosa a comentar sobre la reserva? Carrito de bebé, silla de ruedas..." className="w-full h-16 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
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
              <h1 className="font-bold text-neutral-900 uppercase text-4xl my-4">Dónde estamos</h1>
              <iframe className="rounded-md mb-8" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11753.632045704275!2d-2.0215937!3d42.5678616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd507713f1b4997f%3A0xb4060da504aff80c!2sBAR%20RESTAURANTE%20CENTRO%20C%C3%8DVICO%20DE%20ALLO!5e0!3m2!1ses!2ses!4v1681580686617!5m2!1ses!2ses" loading="lazy"></iframe>
              <div className="grid grid-cols-2 gap-10">
                <div className=' col-span-1'>
                  <p className="text-neutral-900">
                    Higer Bidea, 6,
                  </p>
                  <p className="text-neutral-900">
                    20280 Hondarribia
                  </p>
                  <p className="text-neutral-900">
                    Tel: 943 64 27 12
                  </p>
                  <p className="text-neutral-900">
                    arrokaberri@arrokaberri.es
                  </p>
                  <p className="text-neutral-900">
                    <strong> 943612043 </strong>
                  </p>
                </div>
                {/* <a href="#" className="col-span-1 p-4 flex justify-center items-center uppercase text-sm text-center font-bold tracking-wide  bg-yellow-600 text-gray-100 rounded-lg w-full 
              focus:outline-none hover:bg-yellow-800 focus:shadow-outline">
                  CONTACTAR
                </a> */}
              </div>
              



            </div>
          </div>
        </>
      )}

    </form>
  );
}

export default ReservaForm;


