import logo from "../../assets/homepage/logo.png";
import search from "../../assets/homepage/search.png";
import global from "../../assets/homepage/global.png";
import signup from "../../assets/homepage/signup.png";
import ui from "../../assets/homepage/ui-spoteditor.png";

const HomePage = () => {
  const category: string[] = [
    "로.맨.틱 데이트 코스!",
    "가성비 굿 하루",
    "액티비티한 하루!",
    "감성충전 미술관 데이트",
    "홀로 독서하는 하루",
    "찐하게 소비한 하루",
    "친구랑 다양하고 알차게 보낸 하루",
  ];

  return (
    <div className="w-[1440px] h-screen bg-red-50">
      <div className="w-full h-[388px] bg-black px-50px">
        <header className="flex justify-between py-5 ">
          <img src={logo} alt="logo" />
          <div className="flex gap-12 w-[222px]">
            <img src={search} alt="search_logo" />
            <img src={global} alt="global_logo" />
            <img
              src={signup}
              alt="signup and signin"
              className="w-[90px] h-[21px]"
            />
          </div>
        </header>
        <div className="flex py-10 h-[325px] gap-7">
          <div className="w-[655px] flex flex-col gap-9">
            <div className="font-pretendard text-32 text-white font-500">
              반가워요!
              <br />
              Spoteditor는{" "}
              <span className="font-semibold">"어디 가서 놀지?"</span> 하고
              고민하는
              <br />
              여러분을 위해 만들어졌어요.
            </div>
          </div>
          <div className="w-[655px] flex flex-col gap-5">
            <img src={ui} alt="ui_spoteditior_description" />
            <div className="flex flex-wrap gap-1.5">
              {category.map((i) => {
                return (
                  <div
                    key={i}
                    className="flex h-8 justify-center items-center text-center px-3.5 py-3 rounded-full border border-[#424448] font-pretendard text-14 text-white w-auto"
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
