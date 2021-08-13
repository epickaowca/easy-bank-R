import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    media: {
      tablet: "@media only screen and (min-width: 768px)";
      desktop1000: "@media only screen and (min-width: 1000px)";
      desktop: "@media only screen and (min-width: 1200px)";
      desktop1600: "@media only screen and (min-width: 1600px)";
    };
    colors: {
      headingText: "#2D314D";
      primary: "#FAFAFA";
      secondary: "#F3F4F6";
    };
  }
}
