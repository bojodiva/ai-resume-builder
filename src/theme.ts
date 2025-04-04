import { extendTheme } from "@chakra-ui/react";


const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  }

const theme = extendTheme({
  colors: {
    primary: "#00538C",  // Light Blue
    accent: "#FEBE10",   // Yellow
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#E1EBEE",  
        color: "#2D3748",
      },
    },
  },
});

export default theme;
