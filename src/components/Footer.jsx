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
  Divider,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import { FiSmartphone, FiStar, FiUser } from "react-icons/fi";

export function Footer() {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        pt={20}
        align="center"
        w="full"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Image w={{ md: "50%" }} src="/lara-rodape.png" alt="Lara" />
        <VStack maxW={600} mt={10} p={8} flex={1} align="start">
          <Text fontSize={{ base: 16, md: 22 }}>Quem é</Text>
          <Heading fontSize={{ base: 40, md: 60 }} fontWeight={900}>
            Lara Machado ?
          </Heading>
          <Box
            w="full"
            h={0.5}
            bgGradient="linear(to-r, transparent, #fff 10%,#fff 90%, transparent)"
          />
          <Text fontSize={{ base: 16, md: 22 }} py={4}>
            Muito além da técnica, Lara tem como maior propósito a valorização
            da profissão e acredita que todas as profissionais, Nail Designers e
            Manicures, vieram para prosperar.{" "}
          </Text>
          <Text pb={20} fontSize={{ base: 16, md: 22 }}>
            Lara Machado é referência em Naturalidade e já ensinou sua técnica
            para milhares de alunos em mais de 30 países. Além disso, criou a
            marca de produtos Lara, que contém formulação exclusiva e é
            específica para alongamentos naturais. Criou a técnica Fibra Selada
            (patente requerida no INPI) que revolucionou o mercado de
            alongamentos de fibra.{" "}
          </Text>
          <Button variant="ghost"
            w="full"
            fontWeight={800}
            fontSize={{base:26, md:30, xl:36}}
            borderRadius="full"
            h={{ base: 86, xl: 120 }}
            bgGradient="linear(to-t, verde 20%, verdeClaro 150%)"
            _hover={{bgGradient:"linear(to-b, verde, verdeClaro 150%)"}}

          >
            EU QUERO PARTICIPAR
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
}
