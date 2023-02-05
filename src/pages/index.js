import NavbarPortfolio from "@/components/Navbar";
import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <NavbarPortfolio />
      <Flex height='100vh' alignItems='center' justifyContent={"center"}>
        <Flex direction='column' background='gray.100' p='12' rounded={6}>
          <Heading mb={6}>Login</Heading>
        </Flex>
      </Flex>
    </main>
  );
}
