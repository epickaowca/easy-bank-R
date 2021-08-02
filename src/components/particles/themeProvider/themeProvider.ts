import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  media: {
    tablet: "@media only screen and (min-width: 768px)",
    desktop: "@media only screen and (min-width: 1200px)",
  },
  colors: {
    headingText: "#2D314D",
    primary: "#FAFAFA",
    secondary: "#F3F4F6",
  },
};

export { myTheme };
