// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, reserva } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<reserva[] | { message: string }>
) {
  const { method, body, headers, query } = req;
  let querie = "";

  console.log(query);
  switch (method) {
    case "GET":
      let reservas;

      if (query.key !== undefined && query.key === "holaquetalestamos") {
        try {
          if (query.fecha !== undefined) {
            const fecha = query.fecha.toString();
            console.log(fecha + "GET Request");

            reservas = await prisma.reserva.findMany({
              where: {
                dia: {
                  endsWith: fecha,
                },
              },
            });

            console.log("get dia" + reservas);
          } else {
            reservas = await prisma.reserva.findMany();
            console.log(reservas);
          }

          // let getResponse = await conn.query(querie, value);

          return res.status(200).json(reservas);
        } catch (error: any) {
          return res.status(400).json(error.message);
        }
      } else {
        return res.status(400).json({ message: "method not implemented" });
      }

    case "POST":
      const { nombre, personas, dia, hora, telefono, email } = body;

      try {
        const newReserva = await prisma.reserva.create({
          data: body,
        });

        console.log(newReserva);
        return res.status(200).json({ message: `ok post ${body.nombre}` });
      } catch (error: any) {
        return res.status(400).json(error.message);
      }

    case "DELETE":
      if (query.key !== undefined && query.key === "holaquetalestamos") {
        if (query.id !== undefined) {
          const id = parseInt(query.id.toString());

          const deleteReserva = await prisma.reserva.delete({
            where: {
              id: id,
            },
          });
        }
      }

      return res.status(200).json({ message: "DELETE Reserva" });

    default:
      return res.status(400).json({ message: "Method not allowed" });
  }
}
