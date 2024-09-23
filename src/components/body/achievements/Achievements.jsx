import BodyTexts from "../../elements/texts/BodyTexts";
import HeadersTexts from "../../elements/texts/HeadersTexts";
import AchievementCards from "./AchievementCards";

export default function Achievements() {
  const cardData = [
    {
      title: "2,245,341",
      description: "Members",
    },
    {
      title: "46,328",
      description: "Clubs",
    },
    {
      title: "828,867",
      description: "Event Bookings",
    },
    {
      title: "1,926,436",
      description: "Payments",
    },
  ];

  return (
    <div className="bg-costume-natural-silver py-12 p-7 flex gap-44 justify-center items-center">
      <div>
        <div className="w-[60%] mb-2">
          <HeadersTexts
            text={
              <>
                Helping a local{" "}
                <span className="text-costume-primary">
                  business reinvent itself
                </span>
              </>
            }
          />
        </div>
        <BodyTexts
          text={"We reached here with our hard work and dedication"}
          textColor={"text-[#18191F]"}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
        {cardData.map((card, index) => {
          return (
            <AchievementCards
              title={card.title}
              description={card.description}
              icon={`public/assets/achievemenstIcons/Icon${index + 1}.png`}
            />
          );
        })}
      </div>
    </div>
  );
}
