import { reserva } from "@prisma/client";
import { createTransporter } from "./config/mailer";

type MailOptions = {
  to: string;
  subject: string;
  reserva: reserva;
  html: string;
};

const sendEmail = async ({to, subject, reserva, html}: MailOptions) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      to,
      subject,
      reserva,
      html
    };

    const info = await transporter?.sendMail(mailOptions);
    console.log(`Message sent: ${info?.messageId}`);
  } catch (error) {
    console.error(error);
  }
};


export async function POST(request: Request) {
  const req = await new Response(request.body).json();

  console.log(req);

  req.reserva = {
    id: BigInt(0),
    dia: "10",
    nombre: "Unai",
    hora: "10:00",
    email: "unaicanales@gmail.com",
    personas: 10,
    telefono: "123-456-7890",
    mas_info: ""
  }
  
  sendEmail(req);


  return new Response(req);
}
