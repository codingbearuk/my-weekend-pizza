import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

config();

const sendEmail = (
  email: string,
  subject: string,
  template: (email: string, status?: string) => string,
  status?: string
) => {
  console.info(email, subject, status);

  const message = {
    from: `My Weekend Pizza <${process.env.EMAIL}>`,
    to: `${email}`,
    subject: subject,
    html: status ? template(email, status) : template(email),
  };

  const transport = createTransport({
    service: 'zoho',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transport.sendMail(message, err => {
    if (err) console.error(err);
  });

  transport.close();
};

export default sendEmail;
