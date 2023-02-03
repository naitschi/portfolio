import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Flex height='100vh' alignItems='center' justifyContent={"center"}>
      <Flex direction='column' background='gray.100' p='12' rounded={6}>
        <Heading mb={6}>Login</Heading>
      </Flex>
    </Flex>
  );
}
