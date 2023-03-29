
import { Reserva } from "../interfaces/Reserva"
import "./global.css"
import bg from '../public/images/brick.jpg'
import ContactForm from "./ContactForm"
import ReservaForm from "./ReservaForm"


interface Props {
    reserva: Reserva
}

const Reserva = () => {
    // const [hours, setHours] = useState(Number);
    // const [minutes, setMinutes] = useState(Number);
    // const [startDate, setStartDate] = useState(
    //     setHours(setMinutes(new Date(), 30), 16)
    // );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // procesa los datos del formulario aquí

        // redirige al usuario a la página con sus datos

    };


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
                    <ReservaForm />
                </div>
            </section>
        </>
    );
}

export default Reserva;