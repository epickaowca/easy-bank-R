import { FC } from "react";
import Header from "../../components/organisms/header/Header";
import HeroSection from "../../components/organisms/heroSection/HeroSection";
import MainSection from "../../components/organisms/mainSection/MainSection";
import Footer from "../../components/organisms/footer/Footer";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MainSection
        h1="Why choose Easybank"
        p="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."
      />
      <MainSection h1="Latest Articles" postsCase />
      <Footer />
    </div>
  );
};

export default Home;
