
import { Reserva } from "../interfaces/Reserva"
import "./global.css"
import bg from '../public/images/brick.jpg'
import ContactForm from "./ContactForm"
import ReservaForm from "./ReservaForm"

const ReservaContainer = () => {
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

export default ReservaContainer;