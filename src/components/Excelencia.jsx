/* eslint-disable react/no-children-prop */
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Button,
  Wrap,
  Image,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Input,
  Icon,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import { FiSmartphone, FiStar, FiUser } from "react-icons/fi";

export function Excelencia() {
  return (
    <Flex
      bg="whiteAlpha.50"
      as="section"
      justify="center"
      align="center"
      w="100%"
    >
      <Flex
        py={20}
        textAlign="center"
        align="center"
        w="full"
        justify="center"
        flexDir="column"
      >
        <Text sx={{ b: { fontWeight: 700 } }} fontSize={{ base: 36, xl: 46 }}>
          O seu <b>padrão de naturalidade</b> vai <b>mudar completamente!</b>
        </Text>
        <Text sx={{ b: { fontWeight: 700 } }} fontSize={{ base: 36, xl: 46 }}>
          Você vai entender os{" "}
          <b>7 pontos do Padrão de Excelência Lara Machado:</b>
        </Text>
        <Wrap pt={10} justify="center" align="start" w="full">
          <Item img="/unha1.png" title="Paredes laterais retas e simétricas" />
          <Item img="/unha2.png" title="Ponto de tensão natural e sem caimento de ponta" />
          <Item img="/unha3.png" title="Curvatura Estrutal" />
          <Item img="/unha4.png" title="Espessura" />
          <Item img="/unha5.png" title="Coloração" />
          <Item img="/unha6.png" title="Nivelamento" />
          <Item img="/unha7.png" title="Resistência" />
        </Wrap>
      </Flex>
    </Flex>
  );
}

const Item = ({ img, title }) => (
  <VStack p={4} minW={300} w="24vw">
    <Image alt="Icone" src={img} />
    <Heading fontSize={{ base: 24, md: 26, '2xl':30 }} >
      {title}
    </Heading>
  </VStack>
);