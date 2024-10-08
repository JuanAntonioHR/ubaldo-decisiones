import { Inter } from "next/font/google";
// import "./globals.css";
import 'bootswatch/dist/lumen/bootstrap.min.css';

import InfoFooter from "./components/Footer";
import { FormProvider } from "./context/FormContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Decisiones",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </head>
        <body className={inter.className}>
          <FormProvider>
            {children}
          </FormProvider>
          <InfoFooter />
        </body>
    </html>
  );
}
