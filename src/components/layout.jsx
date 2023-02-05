import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import FooterSes from "./footer";
import NavbarPortfolio from "./Navbar";

export const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <NavbarPortfolio />
      <Box as='main'>{children}</Box>
      <FooterSes />
    </div>
  );
};
