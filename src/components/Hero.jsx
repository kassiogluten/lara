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
import { motion } from "framer-motion";

export function Hero() {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        align="center"
        w="full"
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
        bgImage="/lara.png"
        bgRepeat="no-repeat"
        bgSize={{ base: "150%", md: "100%", "2xl": "cover" }}
        overflow="hidden"
        //flexDir="column"
      >
        <VStack
          flex={1.5}
          textAlign="center"
          align="center"
          justify="center"
          minH={{ base: "90vw", md: "70vw" }}
        />
        <VStack
          px={4}
          pt="5vw"
          pb={100}
          flex={1}
          textAlign="center"
          align="center"
          justify="center"
          maxW={670}
          spacing={{ base: 10, md: 5, "2xl": 10 }}
        >
          <Heading
            letterSpacing={-2}
            fontWeight={600}
            fontSize={{ base: 24, md: 26, xl: 36, "2xl": 50 }}
          >
            Aprenda a técnica de alongamento <b>*NATURALIDADE*</b> para
            conquistar clientes e se tornar uma Nail Designer valorizada.
          </Heading>

          <Heading
            blendMode="hard-light"
            w="full"
            p={2}
            borderColor="#74bfcb77"
            borderWidth={1}
            letterSpacing={-1}
            fontWeight={700}
            fontSize={{ base: 20, md: 22, xl: 24 }}
          >
            21 a 24 de Março, ao vivo, online e gratuito.
          </Heading>

          <VStack spacing={4} w="full">
            <InputGroup size="lg" borderRadius="full" overflow="hidden">
              <InputLeftElement
                bg="verde"
                pointerEvents="none"
                px={8}
                children={<Icon as={FiUser} color="white" boxSize={30} />}
              />
              <Input
                _hover={{ bg: "azul" }}
                transitionProperty="none"
                borderWidth={0}
                pl={20}
                _focus={{ bg: "verde" }}
                _placeholder={{ color: "white" }}
                color="white"
                bgGradient="linear(to-r,verdeClaro, #53a5bc)"
                variant="filled"
                placeholder="Seu nome"
              />
            </InputGroup>
            <InputGroup size="lg" borderRadius="full" overflow="hidden">
              <InputLeftElement
                bg="verde"
                pointerEvents="none"
                px={8}
                children={<Icon as={FiSmartphone} color="white" boxSize={30} />}
              />
              <Input
                _hover={{ bg: "azul" }}
                transitionProperty="none"
                borderWidth={0}
                pl={20}
                _focus={{ bg: "verde" }}
                _placeholder={{ color: "white" }}
                color="white"
                bgGradient="linear(to-r,verdeClaro, #53a5bc)"
                variant="filled"
                placeholder="Seu melhor telefone"
              />
            </InputGroup>
            <InputGroup size="lg" borderRadius="full" overflow="hidden">
              <InputLeftElement
                bg="verde"
                pointerEvents="none"
                px={8}
                children={<EmailIcon color="white" boxSize={30} />}
              />
              <Input
                _hover={{ bg: "azul" }}
                transitionProperty="none"
                borderWidth={0}
                pl={20}
                _focus={{ bg: "verde" }}
                _placeholder={{ color: "white" }}
                color="white"
                bgGradient="linear(to-r,verdeClaro, #53a5bc)"
                variant="filled"
                placeholder="Seu melhor e-mail"
              />
            </InputGroup>
          </VStack>
          <Botao
            leftIcon={
              <Icon as={FiStar} boxSize={{ base: 51, lg: 71, xl: 81 }} />
            }
          >
            QUERO ATINGIR O PADRÃO
            <br /> <b>NATURALIDADE</b>
          </Botao>
        </VStack>
      </Flex>
    </Flex>
  );
}

export const Botao = (props) => {
  const MotionButton = motion(Button);
  return (
    <MotionButton
      w="full"
      variant="ghost"
      px={4}
      shadow="0 0 30px 10px #c959da"
      _hover={{ shadow: "0 0 30px 10px #331484" }}
      borderRadius="full"
      maxW="full"
      h={{ base: 81, lg: 110, "2xl": 125 }}
      bgGradient="linear(to-r,#c959da,#331484)"
      {...props}
    >
      <Heading
        pl={4}
        fontSize={{ base: 14, lg: 20, xl: 24 }}
        sx={{
          b: {
            fontWeight: 900,
            fontSize: { base: 22, lg: 36, xl: 40 },
          },
        }}
      >
        {props.children}
      </Heading>
    </MotionButton>
  );
};
