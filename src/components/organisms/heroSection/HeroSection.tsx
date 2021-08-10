import { FC } from "react";
import StyledHeroSection from "./HeroSection.style";
import Typography from "../../atoms/typography/Typography";

const HeroSection: FC = () => {
  return (
    <StyledHeroSection>
      <div>
        <Typography textTag="h1" content="Next generation digital banking" />
        <Typography
          textTag="p"
          content="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
        />
      </div>
      <div>
        <div></div>
        <img />
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
