import { reserva } from "@prisma/client";
import { createTransporter } from "./config/mailer";

type MailOptions = {
  to: string;
  subject: string;
  reserva: reserva;
  html: string;
};

const sendConfirmationEmail = async (reserva : reserva) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      to: reserva.email,
      subject: "CONFIRMACIÓN",
      reserva,
      html: `
          <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>Confirmación de reserva</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: Arial, sans-serif; font-size: 16px; margin: 0; padding: 0; background-color: #f6f6f6;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding: 20px;">
                    <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                      <tr>
                        <td align="center" style="padding: 20px;">
                          <img src="https://example.com/restaurant-logo.png" alt="Logo del restaurante" style="display: block; width: 100px; height: 100px; border-radius: 50%;">
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding: 0 20px;">
                          <h1 style="font-size: 24px; color: #333; margin: 0;">Confirmación de reserva</h1>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px;">
                          <p style="font-size: 18px; line-height: 1.5;">Estimado/a ${reserva.nombre},</p>
                          <p style="font-size: 18px; line-height: 1.5;">Le confirmamos que hemos recibido su reserva en nuestro restaurante para el día ${reserva.dia} a las ${reserva.hora}.</p>
                          <p style="font-size: 18px; line-height: 1.5;">A continuación, le proporcionamos los detalles de su reserva:</p>
                          <ul style="font-size: 18px; line-height: 1.5; margin: 0 0 20px 0; padding: 0;">
                            <li>Número de personas: ${reserva.personas}</li>
                            <li>Observaciones: ${reserva.mas_info}</li>
                          </ul>
                          <p style="font-size: 18px; line-height: 1.5;">Por favor, compruebe que toda la información es correcta. Si encuentra algún error, por favor póngase en contacto con nosotros lo antes posible.</p>
                          <p style="font-size: 18px; line-height: 1.5;">Le agradecemos su confianza en nuestro restaurante y esperamos darle la bienvenida el${reserva.dia} a las ${reserva.hora}.</p>
                          <p style="font-size: 18px; line-height: 1.5;">Atentamente,</p>
                          <p style="font-size: 18px; line-height: 1.5;">El equipo del Centro Cívico.</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding: 20px;">
                          <p style="font-size: 14px; color: #999;">Este mensaje fue enviado a [dirección de correo electrónico del cliente]. Si no desea recibir más mensajes de este tipo, puede cancelar su suscripción <a href="[enlace de cancelación de suscripción]" style="color: #999; text-decoration: none;">aquí</a>.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  </tr>
              </table>
            </body>
          </html>
      `,
    };

    const info = await transporter?.sendMail(mailOptions);
    console.log(`Message sent: ${info?.messageId}`);
  } catch (error) {
    console.error(error);
  }
};

export async function POST(request: Request) {
  const reserva: reserva = await new Response(request.body).json();

  console.log("*********************************************************************** " + reserva);

  sendConfirmationEmail(reserva);

  return new Response();
}