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
import { Botao } from "./Hero";
import { motion } from "framer-motion";

export function Excelencia() {
  return (
    <Flex
      bg="whiteAlpha.50"
      as="section"
      justify="center"
      align="center"
      w="100%"
      overflow="hidden"
    >
      <Flex
        py={20}
        textAlign="center"
        align="center"
        w="full"
        justify="center"
        flexDir="column"
      >
        <Text
          sx={{ b: { fontWeight: 700 } }}
          fontSize={{ base: 26, md: 30, "2xl": 36 }}
        >
          O seu <b>padrão de naturalidade</b> vai <b>mudar completamente!</b>
        </Text>
        <Text
          sx={{ b: { fontWeight: 700 } }}
          fontSize={{ base: 26, md: 30, "2xl": 36 }}
        >
          Você vai entender os{" "}
          <b>7 pontos do Padrão de Excelência Lara Machado:</b>
        </Text>
        <Wrap pt={10} justify="center" align="start" w="full">
          <Item img="/unha1.png" title="Paredes laterais retas e simétricas" />
          <Item
            img="/unha2.png"
            title="Ponto de tensão natural e sem caimento de ponta"
          />
          <Item img="/unha3.png" title="Curvatura Estrutal" />
          <Item img="/unha4.png" title="Espessura" />
          <Item img="/unha5.png" title="Coloração" />
          <Item img="/unha6.png" title="Nivelamento" />
          <Item img="/unha7.png" title="Resistência" />
        </Wrap>
        <Botao
          animate={{ scale: 0.9 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType:'reverse',
            ease:"easeInOut",
            // repeatDelay: 0.5,
          }}
          mt={50}
          maxW={600}
        >
          <b>EU QUERO PARTICIPAR</b>
        </Botao>
      </Flex>
    </Flex>
  );
}

const Item = ({ img, title }) => (
  <VStack py={8} px={4} minW={300} w="24vw">
    <Image alt="Icone" src={img} />
    <Heading fontSize={{ base: 22, md: 24, "2xl": 30 }}>{title}</Heading>
  </VStack>
);
