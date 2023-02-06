import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import FooterSes from "./footer";
import Intro from "./intro";
import NavbarPortfolio from "./Navbar";

export const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <NavbarPortfolio />
      <Intro />
      <Box as='main'>{children}</Box>
      <FooterSes />
    </div>
  );
};
