import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
  theme: boolean;
}

const SliderCard: React.FC<Props> = ({ theme }) => {
  const SampleNextArrow = (props: any) => {
    const { classes, className, style, onClick } = props;
    return (
      <div onClick={onClick} className={classes}>
        <IconContext.Provider
          value={{ color: "blue", className: "global-class-name" }}
        >
          <div>
            <FaChevronRight width="6px" height="6px" />
          </div>
        </IconContext.Provider>
      </div>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { classes, className, style, onClick } = props;
    return (
      <div onClick={onClick} className={classes}>
        <IconContext.Provider
          value={{ color: "blue", className: "global-class-name" }}
        >
          <div>
            <FaChevronLeft />
          </div>
        </IconContext.Provider>{" "}
      </div>
    );
  };

  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow classes={"slider-next-btn"} />,
    prevArrow: <SamplePrevArrow classes={"slider-prev-btn"} />,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          variableWidth: false,
        },
      },
    ],
  };

  const playersCollection = [
    {
      player_img: "/img/img1.jpg",
      team_name: "Los Vegas Aviators",
      about_team: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection_type: "Take Flight Collection",
    },
    {
      player_img: "/img/img2.jpg",
      team_name: "Sacramento River Cats",
      about_team: "Sutter Health Park, Sacremento, California",
      collection_type: "Orange Collection",
    },
    {
      player_img: "/img/img1.jpg",
      team_name: "Los Vegas Aviators",
      about_team: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection_type: "Take Flight Collection",
    },
    {
      player_img: "/img/img1.jpg",
      team_name: "Los Vegas Aviators",
      about_team: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection_type: "Take Flight Collection",
    },
    {
      player_img: "/img/img2.jpg",
      team_name: "Sacramento River Cats",
      about_team: "Sutter Health Park, Sacremento, California",
      collection_type: "Orange Collection",
    },
    {
      player_img: "/img/img1.jpg",
      team_name: "Los Vegas Aviators",
      about_team: "Las Vegas Ballpark, Las Vegas, Nevada",
      collection_type: "Take Flight Collection",
    },
  ];

  return (
    <div
      style={{
        background: theme
          ? "linear-gradient(180deg, #F9F8FF 0%, #F3F9FF 100%)"
          : "linear-gradient(180deg, #18282A 0%, #221A2C 100%)",
      }}
      className={`max-w-[360px] lg:max-w-[1240px] mx-auto lg:h-[918px] bg-gradient-to-b from-#18282A from-0% to-#221A2C to-100% relative px-[36px] lg:px-[195px]  lg:pt-[70px]  ${
        theme === false ? "bg-[#292B32]" : "bg-[#F9F8FF]"
      }`}
    >
      {/* Title of Card */}
      <p
        className={`font-bold  text-[22px] xl:text-[50px] leading-[52.5px] text-center ${
          theme === false ? "text-white" : "text-[#000000]"
        }`}
      >
        Collection Spotlight
      </p>
      {/* Description of Card */}
      <div className="mt-[25px] mb-[51px]">
        <p
          className={`font-normal text-[14px] text-center leading-[22.65px]  ${
            theme === false ? "text-white" : "text-[#000000]"
          }`}
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <div className="slider-controller">
        <Slider {...settings}>
          {playersCollection.map((player, idx) => (
            <div
              key={idx}
              className={`px-[15px] pt-[15.92px] pb-[10.17px] gap-x-[36px]`}
            >
              <div
                className={`${
                  theme ? "playerCardLight" : "playerCardDark"
                } px-[15px] pt-[15.92px] pb-[10.17px] gap-x-[36px]`}
              >
                <img
                  src={player.player_img}
                  alt="player_image"
                  width="250px"
                  height="auto"
                />
                <div
                  className={`mx-[2px]  border-stone-400 border-b-2 border-dashed h-4 ${
                    theme === false ? "text-white" : "text-black"
                  }`}
                ></div>
                <div>
                  {/* Team Name */}
                  <p
                    className={`font-medium leading-[26.52px] text-center text-[17px] mt-[20px] ${
                      theme === false ? "text-white" : "text-[#000000]"
                    }`}
                  >
                    {player.team_name}
                  </p>
                  {/* Date of Play */}
                  <div className="flex justify-center mt-[12px]">
                    <p
                      className={`me-[10.57px] text-[14px]  leading-[21px] text-center font-normal ${
                        theme === false ? "text-white" : "text-[#000000]"
                      }`}
                    >
                      OCT 15
                    </p>
                    <span
                      className={`${
                        theme === false
                          ? "border-r-[0.53px] border-white"
                          : "border-r-[0.53px] border-black"
                      }`}
                    ></span>
                    <p
                      className={`ms-[10.57px] me-[10.57px] text-[14px]  leading-[21px] text-center font-normal ${
                        theme === false ? "text-white" : "text-[#000000]"
                      }`}
                    >
                      SUN
                    </p>
                    <span
                      className={`${
                        theme === false
                          ? "border-r-[0.53px] border-white"
                          : "border-r-[0.53px] border-black"
                      }`}
                    ></span>
                    <p
                      className={`ms-[10.57px] text-[14px] leading-[21px]  text-center font-normal ${
                        theme === false ? "text-white" : "text-[#000000]"
                      }`}
                    >
                      4:30PM
                    </p>
                  </div>
                  {/* Address of Play Venue */}
                  <p
                    className={`mt-[18px] text-center text-[14px] font-normal leading-[20.58px] ${
                      theme === false ? "text-[#DFDFDF]" : "text-[#525965]"
                    }`}
                  >
                    {player.about_team}
                  </p>
                  {/* Type of Collection */}
                  <div className="w-full h-[36px] bg-black p-[10px] mt-[10px] mb-[11px]">
                    <p className="text-center text-[12.73px] leading-[15.41px] font-medium text-white">
                      {player.collection_type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCard;
