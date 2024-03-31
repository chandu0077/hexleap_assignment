import { useEffect, useState } from "react";

interface Props {
  theme: boolean;
}

const player_details = [
  {
    player_img: "img/player1.png",
    player_name: "Sacremento River Cats",
    no_of_events: "48",
    sport_type: "Baseball",
  },
  {
    player_img: "img/player2.png",
    player_name: "Las Vegas Aviators",
    no_of_events: "28",
    sport_type: "Baseball",
  },
  {
    player_img: "img/player3.png",
    player_name: "New Jersey Devils",
    no_of_events: "15",
    sport_type: "Ice Hockey",
  },
  {
    player_img: "img/player4.png",
    player_name: "Las Vegas Aviators",
    no_of_events: "28",
    sport_type: "Baseball",
  },
  {
    player_img: "img/player1.png",
    player_name: "Sacremento River Cats",
    no_of_events: "48",
    sport_type: "Baseball",
  },
  {
    player_img: "img/player2.png",
    player_name: "Las Vegas Aviators",
    no_of_events: "28",
    sport_type: "Baseball",
  },
  {
    player_img: "img/player3.png",
    player_name: "New Jersey Devils",
    no_of_events: "15",
    sport_type: "Ice Hockey",
  },
  {
    player_img: "img/player4.png",
    player_name: "Las Vegas Aviators",
    no_of_events: "28",
    sport_type: "Baseball",
  },
];

const HeaderCard: React.FC<Props> = ({ theme }) => {
  console.log("theme", theme);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [allPlayers, setAllPlayers] = useState(player_details);

  useEffect(() => {
    seeMore
      ? setAllPlayers(player_details)
      : setAllPlayers(player_details.filter((el, i) => i < 4));
  }, [seeMore]);

  console.log("seeMore", seeMore);
  console.log("player_details", player_details);

  return (
    <>
      <div
        className={`max-w-[1240px] mx-auto h-auto lg:h-auto  mb-[35px] ${
          theme === false ? "bg-[#292B32]" : "bg-[#F7F7F8]"
        }`}
      >
        <h2
          className={`headerTitle w-[min-content] mb-[25px] border-b-[2px] border-[#738FFF] ${
            theme === false ? "text-white" : "text-[#000000]"
          } p-0 text-[24px] font-bold Poppins`}
        >
          Sports
        </h2>
        <div
          className={`headerCard lg:flex ${
            seeMore ? "flex-wrap gap-[12px]" : "gap-x-[14px]"
          } lg:mb-[50px]`}
        >
          {allPlayers.map((player, idx) => {
            return (
              <div
                key={idx}
                className={`mb-[12px] xl:m-0  max-w-[237px] h-auto  p-[10px] ${
                  theme === false ? "bg-[#3b3e47]" : "bg-[#FFFFFF]"
                }`}
              >
                {/* Image */}
                <img
                  className="w-[217px]"
                  src={player.player_img}
                  alt="player"
                />
                {/* Title */}
                <div className="mt-[14.69px] mx-[10px] mb-[16px]">
                  <p
                    className={`font-medium text-[17px] leading-[20.57px] ${
                      theme === false ? "text-white" : "text-[#000000]"
                    } `}
                  >
                    {player.player_name}
                  </p>
                </div>

                {/* Details */}
                <div
                  className={`flex gap-[40px] max-w-[218.4px] h-auto  ps-[10px] pe-[10px] pt-[12px] pb-[11px] ${
                    theme === false ? "bg-[#292b32]" : "bg-[#F7F7F8]"
                  }`}
                >
                  <div>
                    <p
                      className={`mb-[12px] font-normal text-[12px] leading-[14px] ${
                        theme === false ? " text-[#DFDFDF]" : "text-[#525965]"
                      }`}
                    >
                      Total Events
                    </p>
                    <p
                      className={`font-medium text-[14px] leading-[16.94px] ${
                        theme === false ? "text-white" : "text-[#000000]"
                      }`}
                    >
                      {player.no_of_events}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`mb-[12px]  font-normal text-[12px] leading-[14px] ${
                        theme === false ? "text-[#DFDFDF]" : "text-[#525965]"
                      }`}
                    >
                      Sport
                    </p>
                    <p
                      className={`font-medium text-[14px] leading-[16.94px] ${
                        theme === false ? "text-white" : "text-[#525965]"
                      }`}
                    >
                      {player.sport_type}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className={`mb-[12px] xl:m-0 max-w-[237px] lg:max-w-[237px] h-auto p-[10px]  ${
              theme === false ? "bg-[#3b3e47]" : "bg-[#FFFFFF]"
            }`}
          >
            <div>
              <img
                src="img/ad.jpg"
                className="w-[217px] h-[218px]"
                alt="ad-poster"
              />
              <div className="pt-[28px] ">
                <p
                  className={`font-semibold text-[20px] xl:text-[20px] leading-[24.2px] ${
                    theme === false ? "text-white" : "text-[#222D3A]"
                  }`}
                >
                  Advertisement title
                </p>
                <p
                  className={`text-[16px] xl:text-[12.8px] mt-[8px] mb-[12px] leading-[19px]  font-normal ${
                    theme === false ? "text-[#DFDFDF]" : "text-[#525965]"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, nihil ex repellendus vero adipisci nostrum numquam
                  veritatis deleniti eveniet mollitia! Vero sunt repellendus
                  similique dicta eveniet accusamus excepturi porro autem!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button
            onClick={() => setSeeMore((prevState) => !prevState)}
            className="mb-[14px] w-[124px] h-[46px] text-[14px] leading-[25.89px] font-semibold text-white rounded-[3px] bg-[#2C9CF0]"
          >
            {seeMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </>
  );
};
export default HeaderCard;
