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
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Input,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import { FiSmartphone, FiStar, FiUser } from "react-icons/fi";
import { Botao } from "./Hero";
import Image from "next/image";

export function Footer() {
  return (
    <Flex
      flexDir="column"
      as="section"
      justify="center"
      align="center"
      w="100%"
    >
      <Flex
        pt={20}
        align="center"
        w="full"
        flexDir={{ base: "column-reverse", lg: "row" }}
        justify="center"
      >
        <Image
          quality={90}
          width={700}
          height={995}
          objectFit="contain"
          // flex={{ md: 1 }}
          // w={{ lg: "40%" }}
          // maxW={{ md: 700 }}
          src="/lara-rodape.png"
          alt="Lara"
        />
        <VStack
          maxW={600}
          mt={10}
          p={{ base: 4, md: 8 }}
          flex={1}
          align="start"
        >
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
          <Box alignSelf="center" as="a" href="#FNAME">
            <Botao mt={50} maxW={600}>
              <b>EU QUERO PARTICIPAR</b>
            </Botao>
          </Box>
        </VStack>
      </Flex>

      <Flex
        flexDir="column"
        textAlign="center"
        bg="#74c0cc"
        py={8}
        align="center"
        w="full"
      >
        {/* <Text
          _hover={{ textDecoration: "underline" }}
          as="a"
          href="https://suricatoagencia.com.br"
          target="_blank"
          w="full"
        >
          Feito com ❤️ por Suricato Agência
        </Text> */}
        <Text w="full">
          Todos os direitos reservados à Lara Machado Bonadiman Moreno LTDA,
          2022.
          <br />
          <br />
          Contatos:
          <br />
          Telefone: <a href="tel:(28) 3542-4549">(28) 3542-4549</a>
          <br />
          E-mail: <a href="mailto:lara-machado@hotmail.com">lara-machado@hotmail.com</a>
          <br />
          <br />
          CNPJ: 21.821.783/0001-44
          <br />
          Razão Social: Lara Machado Bonadiman Moreno LTDA
          <br />
          <br />
          <a href="https://cantinhodalara.com.br/politicas-de-privacidade">CLIQUE AQUI para acessar as Políticas de Privacidade</a>.
        </Text>
      </Flex>
    </Flex>
  );
}
