import { Html, Head, Main, NextScript } from "next/document";
import NavbarPortfolio from '../components/Navbar';
import { ChakraProvider } from "@chakra-ui/react";


export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <ChakraProvider>
        <body>
          <NavbarPortfolio />
          <Main />
          <NextScript />
        </body>
      </ChakraProvider>
    </Html>
  );
}
