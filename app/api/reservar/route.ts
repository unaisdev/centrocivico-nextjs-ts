import Reserva from "@/components/Reserva";
import { PrismaClient, reserva } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

interface SearchParams {
  key: string;
  fecha: string;
}

function toJson(data: reserva[] | reserva) {
  return JSON.stringify(
    data,
    (_, v) => (typeof v === "bigint" ? `${v}n` : v),
  ).replace(/"(-?\d+)n"/g, (_, a) => a);
}

//https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/prisma-validator
prisma.$use(async (params, next) => {
  // Manipulate params here
  const result = await next(params);
  // See results here
  return result;
});

export async function GET(request: Request) {
  console.log("------------------GET-----------------");

  const { method, body, headers } = request;
  const queryParams = new URL(request.url).searchParams;

  const keyParam = queryParams.get("key");
  const fechaParam = queryParams.get("fecha");

  console.log(
    "(queryParams): KEY: '" + keyParam + "' |||  FECHA:" + fechaParam
  );

  let reservas: reserva[];

  if (keyParam !== undefined && keyParam === "holaquetalestamos") {
    try {
      if (fechaParam !== undefined && fechaParam !== null) {
        reservas = await prisma.reserva.findMany({
          where: {
            dia: {
              endsWith: fechaParam,
            },
          },
        });

        prisma.$disconnect();
      } else {
        reservas = await prisma.reserva.findMany();
        console.log(reservas);
      }

      console.log("RESERVAS list:" + toJson(reservas));

      return new Response(toJson(reservas));
    } catch (error: any) {
      return new Response(JSON.stringify(error.message));
    }
  } else {
    return new Response("method not implemented");
  }
}

export async function POST(request: Request) {
  console.log("------------------POST-----------------");

  const { body, json } = request;

  const response: reserva = await new Response(request.body).json();

  try {
    const newReserva = await prisma.reserva.create({
      data: response,
    });
    console.log("Adding 'reserva':" + toJson(newReserva));
    

    try {
      const mailSend = await axios.post(
        "http://localhost:3000/api/sendMail",
        toJson(newReserva)
      );
      console.log("Response:", mailSend.data);
    } catch (error) {
      console.error("Error:", error);
    }

    return new Response(`${toJson(newReserva)}`);
  } catch (error: any) {
    console.log(error.message);

    return new Response(error.message);
  }
}

export async function PUT(request: Request) {
  console.log("------------------PUT-----------------");

  const { body, json } = request;
  // const data = await request.json()

  const response: reserva = await new Response(request.body).json();

  // console.log(data);
  console.log("Updating 'reserva' ID:" + response.id);
  console.log("Values:" + toJson(response));
  try {
    const newReserva = await prisma.reserva.update({
      where: {
        id: response.id,
      },
      data: response,
    });

    return new Response(`${toJson(newReserva)}`);
  } catch (error: any) {
    return new Response(error.message);
  }
}

export async function DELETE(request: Request) {
  console.log("------------------DELETE-----------------");

  // const data = await request.json()
  const { method, body, headers } = request;
  const queryParams = new URL(request.url).searchParams;

  const keyParam = queryParams.get("key");
  const deleteIdParam = queryParams.get("id");

  // const { id } = await new Response(request.body).json();

  if (keyParam !== undefined && keyParam === "holaquetalestamos") {
    if (deleteIdParam !== undefined && deleteIdParam !== null) {
      const deleteReserva = await prisma.reserva.delete({
        where: {
          id: Number.parseInt(deleteIdParam),
        },
      });
      console.log("delete ID: " + deleteIdParam);

      return new Response(`${deleteReserva}`);
    }
  }
}
