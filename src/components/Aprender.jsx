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

export function Aprender() {
  return (
    <Flex
      overflow="hidden"
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
        <Heading fontSize={{ base: 30, xl: 53 }}>
          Nessa jornada online, você vai aprender:
        </Heading>
        <Wrap
          pt={10}
          justify={{ base: "center", md: "space-around" }}
          align="start"
          w="full"
        >
          <Item img="/visao.svg">
            Uma <b>visão de mercado </b>que você <b>nunca</b> teve antes;
          </Item>
          <Item img="/resistente.svg">
            Alongamento <b>fino e resistente</b> que funciona para <b>TODAS </b>
            as clientes;
          </Item>
          <Item img="/clientes.svg">
            <b>Atrair clientes</b> que <b>valorizam</b> o seu trabalho e
            <b> não reclamam</b> por preço
          </Item>
          <Item img="/unhas.svg">
            Alcançar a estrutura <b>*NATURALIDADE*</b> até mesmo em
            <b> unhas difíceis</b>
          </Item>
        </Wrap>
      </Flex>
    </Flex>
  );
}

const Item = ({ img, children }) => (
  <VStack
    p={{ base: 2, md: 4, xl:8 }}
    w="full"
    minW={150}
    maxW={{ base: 175, md: "24vw" }}
  >
    <Image h={{ base: 100, md: 200 }} alt="Icone" src={img} />
    <Text
      fontSize={{ base: 18, md: 22, "2xl": 28 }}
      px={{ md: 4 }}
      sx={{ b: { fontWeight: 700 } }}
    >
      {children}
    </Text>
  </VStack>
);
