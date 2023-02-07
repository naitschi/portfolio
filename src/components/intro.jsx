import React from "react";
import PropTypes from "prop-types";
import {
  Heading,
  Box,
  Grid,
  GridItem,
  Flex,
  ButtonGroup,
  Spacer,
  Button,
} from "@chakra-ui/react";

const Intro = (props) => {
  return (
    <Grid gap={4} templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={12}>
        <Flex
          minWidth="max-content"
          justifyContent={"flex-start"}
          alignItems="center"
        >
          <Box p="12">
            <Heading size="md">Who am I?</Heading>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

Intro.propTypes = {};

export default Intro;
