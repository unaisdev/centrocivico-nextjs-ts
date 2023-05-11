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
      {isSubmitting ? (
        <>
          <>
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white mr-auto rounded-2xl shadow-md border-slate">
              <div className="flex justify-center">
                <div role="status">
                  <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>

            </div>


          </>

        </>
      ) : isSubmitted ? (
        <>
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white mr-auto rounded-2xl shadow-md border-slate">
            <div className="flex flex-col">
              <h1 className="font-bold uppercase text-5xl">Solicitud de reserva enviada!</h1>
              <br />

              <p>Estimado(a) <strong>{formValues.nombre},</strong></p>
              <br />
              <p>Nos complace informarle que su reserva ha sido realizada correctamente. A continuación, le proporcionamos los detalles de su reserva:</p>
              <br />
              <p><strong>Fecha:</strong> {formValues.dia}</p>
              <p><strong>Hora:</strong> {formValues.hora}</p>
              <p><strong>Cantidad de personas:</strong> {formValues.personas}</p>
              <br />
              <p>Le recordamos que estos son los datos de su reserva y le recomendamos que los tenga a mano al momento de su visita. Además, le pedimos que verifique su correo electrónico, ya que hemos enviado una confirmación de reserva detallada que podrá presentar al llegar.</p>
              <br />
              <p>En <strong>Bar Restaurante Centro Cívico</strong>, estamos comprometidos a brindarle un servicio excepcional y esperamos darle la bienvenida en su visita. Si tiene alguna pregunta o necesita realizar cambios en su reserva, no dude en ponerse en contacto con nuestro equipo de atención al cliente. Estaremos encantados de ayudarle en todo lo que podamos.</p>
              <br />
              <p>¡Gracias por elegirnos y esperamos brindarle una experiencia inolvidable!</p>
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
                    P.º de la Fuente,
                  </p>
                  <p className="text-neutral-900">
                    31262 Allo, Navarra
                  </p>
                  <p className="text-neutral-900">
                    Tel: 628 18 20 22
                  </p>
                  <p className="text-neutral-900">
                    centrocivicoallo5@gmail.com

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
      ) : (
        <>
          <div className="w-5/8 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-white mr-auto rounded-2xl shadow-md border">
            <div className="flex">
              <h1 className="font-bold uppercase text-xl md:text-5xl">Reserva con nosotros</h1>
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
                    P.º de la Fuente,
                  </p>
                  <p className="text-neutral-900">
                    31262 Allo, Navarra
                  </p>
                  <p className="text-neutral-900">
                    Tel: 628 18 20 22
                  </p>
                  <p className="text-neutral-900">
                    centrocivicoallo5@gmail.com

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
      )
      }

    </form >
  );
}

export default ReservaForm;


