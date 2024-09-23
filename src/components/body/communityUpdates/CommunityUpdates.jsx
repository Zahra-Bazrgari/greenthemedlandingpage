import BodyTexts from "../../elements/texts/BodyTexts";
import HeadersTexts from "../../elements/texts/HeadersTexts";
import CommunityUpdatesCards from "./CommunityUpdatesCards";

export default function CommunityUpdates() {
  const cards = [
    {
      text: "Creating Streamlined Safeguarding Processes with OneRen",
      src: "public/assets/image 18.png",
    },
    {
      text: "What are your safeguarding responsibilities and how can you manage them?",
      src: "public/assets/image 19.png",
    },
    {
      text: "Revamping the Membership Model with Triathlon Australia",
      src: "public/assets/image 20.png",
    },
  ];

  return (
    <div className="mt-10 flex flex-col items-center min-h-[420px]">
      <div className="text-center flex flex-col items-center justify-center">
        <HeadersTexts text="Caring is the new marketing" />
        <div className="mt-2 w-[40%]">
          <BodyTexts text="The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​" />
        </div>
      </div>

      <div className="flex items-center justify-around mt-4 gap-4">
        {cards.map((card, index) => (
          <CommunityUpdatesCards
            key={index}
            src={card.src}
            alt={card.text}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
