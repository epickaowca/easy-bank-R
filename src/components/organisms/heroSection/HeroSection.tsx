import { FC } from "react";
import StyledHeroSection, {
  BgImg,
  Article,
  Picture,
} from "./HeroSection.style";
import Typography from "../../atoms/typography/Typography";
import mockupsImg from "../../assets/image-mockups.png";
import bgMobile from "../../assets/bg-intro-mobile.svg";
import bgDesktop from "../../assets/bg-intro-desktop.svg";

const HeroSection: FC = () => {
  return (
    <StyledHeroSection>
      <Picture>
        <BgImg bgMobile={bgMobile} bgDesktop={bgDesktop} />
        <img src={mockupsImg} alt="heroImage" />
      </Picture>
      <Article>
        <Typography textTag="h1" content="Next generation digital banking" />
        <Typography
          textTag="p"
          content="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
        />
      </Article>
    </StyledHeroSection>
  );
};

export default HeroSection;
