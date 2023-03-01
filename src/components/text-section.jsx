import React from "react";
import PropTypes from "prop-types";
import { Container, VStack, Heading, Text } from "@chakra-ui/react";

const TextSection = (props) => {
  return (
    <div className='text-section'>
      <Container maxW={"6xl"} mt={10}>
        <Heading marginBottom={10} as='h2'>
          Who am I
        </Heading>
        <Text as='p' fontSize='lg'>
          Hello, my name is Sebastian Schieck, and I am a full stack developer
          with deep skills in JavaScript and PHP. I am passionate about using
          technology to solve complex problems and build innovative solutions.
          Currently, I am working at e-fork in Dresden, where I have been since
          2014.
        </Text>
        <Text as='p' fontSize='lg'>
          Throughout my career, I have completed various successful projects
          that have enabled me to hone my skills and build my portfolio. I am
          particularly proud of my work developing a complex e-commerce platform
          for a client that required custom features and integrations with
          different payment gateways. Another project that stands out is the
          development of a secure online voting system for a non-profit
          organization that needed a reliable and efficient way to conduct
          elections.
        </Text>
        <Text as='p' fontSize='lg'>
          As a full stack developer, I possess a strong understanding of both
          front-end and back-end development. I am skilled in HTML, CSS, and
          JavaScript for building dynamic user interfaces, while also proficient
          in PHP and MySQL for server-side development. My experience working
          with APIs and web services allows me to integrate different systems
          and ensure seamless communication between them.
        </Text>
        <Text as='p' fontSize='lg'>
          I am always looking for new challenges and opportunities to grow my
          skills as a developer. If you are interested in learning more about my
          work or have a project you would like to discuss, please feel free to
          reach out to me through my LinkedIn profile or email. Thank you for
          considering me for your development needs.
        </Text>
      </Container>
    </div>
  );
};

TextSection.propTypes = {};

export default TextSection;
