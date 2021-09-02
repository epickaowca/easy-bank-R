import { FC } from "react";
import StyledHeroSection, {
  BgImg,
  Article,
  Picture,
  StyledImg,
} from "./HeroSection.style";
import Typography from "../../atoms/typography/Typography";
import mockupsImg from "../../../assets/image-mockups.png";
import bgMobile from "../../../assets/bg-intro-mobile.svg";
import bgDesktop from "../../../assets/bg-intro-desktop.svg";
import Button from "../../atoms/button/Button";

const HeroSection: FC = () => {
  return (
    <StyledHeroSection>
      <div>
        <Picture>
          <BgImg bgMobile={bgMobile} bgDesktop={bgDesktop} />
          <StyledImg src={mockupsImg} alt="heroImage" />
        </Picture>
        <Article>
          <div>
            <Typography
              textTag="h1"
              content="Next generation digital banking"
            />
            <Typography
              textTag="p"
              content="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
            />
            <Button content="Request Invite" />
          </div>
        </Article>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
