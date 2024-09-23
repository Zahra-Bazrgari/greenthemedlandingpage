import BodyTexts from "../../elements/texts/BodyTexts";
import HeadersTexts from "../../elements/texts/HeadersTexts";

export default function AchievementCards(props) {
  return (
    <div className="flex gap-2">
      <div>
        <img src={props.icon} alt="logo" />
      </div>
      <div>
        <HeadersTexts text={props.title} fontSize={"text-xl"} />
        <BodyTexts text={props.description} fontSize={"text-[11px]"} />
      </div>
    </div>
  );
}
