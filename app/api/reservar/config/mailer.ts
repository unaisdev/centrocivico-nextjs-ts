import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import dotenv from "dotenv";

dotenv.config()

export const createTransporter = async () => {
  try {
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        auth: {
          user: process.env.GOOGLE_EMAIL_ADDRESS,
          pass: process.env.GOOGLE_EMAIL_PASSWORD,
        },
      })
    );
    return transporter;
  } catch (error) {
    console.error(error);
  }
};
