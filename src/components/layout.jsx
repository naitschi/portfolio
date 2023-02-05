import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import NavbarPortfolio from "./Navbar";

export const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <NavbarPortfolio />
      <Box as='main'>{children}</Box>
      <div>Footer</div>
    </div>
  );
};
