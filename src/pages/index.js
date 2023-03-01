import GridListWithHeading from "@/components/grid-list";
import NavbarPortfolio from "@/components/Navbar";
import TextSection from "@/components/text-section";
import SimpleThreeColumns from "@/components/three-column-grid";
import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <section className='body home'>
      <TextSection />
      <SimpleThreeColumns />
      <GridListWithHeading />
    </section>
  );
}
