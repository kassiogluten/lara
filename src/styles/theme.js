import { calc, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    // heading: "CaviarDreams",
    // body: "CaviarDreams",
  },

  colors: {
    azul: "#74bfcb",
    verde: "#228191",
    verdeClaro: "#a5dce5",
  },

  components: {
    Button: {
      baseStyle: {
        _hover: {
          // textDecoration: "underline",
        },
      },
    },
  },

  styles: {
    global: {
      // svg: {
      //   display: "inline",
      //   lineHeight: "1",
      // },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        bg: "url(/bg.jpg), #184259",
        bgSize: "cover",
        // backgroundAttachment: { base: "fixed", md: "inherit" },
        color: "white",
      },
      button: {
        _focus: { outlineColor: "#00000011" },
      },
    },
  },
});
