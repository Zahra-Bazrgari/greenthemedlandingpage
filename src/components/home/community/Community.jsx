import BodyTexts from "../../elements/texts/BodyTexts";
import CommunityCards from "./CommunityCards";
import HeadersTexts from "../../elements/texts/HeadersTexts";

export default function Community() {
  const cardData = [
    {
      title: "Membership Organisations",
      description: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className="text-center flex flex-col gap-2 items-center justify-center">
      <HeadersTexts text={"Manage your entire community in a single system"} />
      <BodyTexts text={"Who is Nextcent suitable for?"} />

      <div className="flex justify-around items-center text-center gap-40 px-40 mt-4">
        {cardData.map((card, index) => {
          return (
            <CommunityCards 
              key={index}
              title={card.title} 
              description={card.description} 
              icon={`public/assets/communityCardsIcons/Icon${index + 1}.png`}
            />
          );
        })}
      </div>
    </div>
  );
}
