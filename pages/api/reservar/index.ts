// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body, headers, query } = req;
  let querie = "";

  console.log(method);
  console.log(body);

  switch (method) {
    case "GET":
      if (query.key !== undefined && query.key === "holaquetalestamos") {
        querie = "SELECT * FROM public.reserva ORDER BY id ASC;";
        try {
          let getResponse = await conn.query(querie);

          return res.status(200).json(getResponse.rows);
        } catch (error: any) {
          return res.status(400).json(error.message);
        }
      } else {
        return res.status(400).json({ message: "method not implemented" });
      }

    case "POST":
      const { nombre, personas, dia, hora, telefono, email } = body;

      querie =
        "INSERT INTO public.reserva(nombre, personas, dia, hora, telefono, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;";
      const values = [nombre, personas, dia, hora, telefono, email];

      try {
        let postResponse = await conn.query(query, values);

        return res.status(200).json(postResponse.rows[0]);
      } catch (error: any) {
        return res.status(400).json(error.message);
      }

    case "DELETE":
      return res.status(200).json({ message: "DELETE Reserva" });

    default:
      return res.status(400).json({ message: "Method not allowed" });
  }
}
