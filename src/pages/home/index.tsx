import MainFooter from "../../components/Footer/MainFooter";
import MainHeader from "../../components/Header/MainHeader";
import HomePageIntroContent from "../../feature/homepage/HomePageIntroContent";
import SortByPopularity from "../../feature/homepage/SortByPopularity";
import YouCanBeSpecialEditor from "../../feature/homepage/YouCanBeSpecialEditor";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-white">
      <MainHeader />
      <HomePageIntroContent />
      <div className="flex flex-col w-full h-[2720px] mt-16 px-50px bg-white">
        <SortByPopularity />
        <YouCanBeSpecialEditor />
        <div className="w-full h-[1524px] bg-red-400 "></div>
      </div>
      <MainFooter />
    </div>
  );
};

export default HomePage;
