import BodyTexts from "../../elements/texts/BodyTexts";
import HeadersTexts from "../../elements/texts/HeadersTexts";

export default function CommunityCards(props){
    return(
        <div className="flex flex-col gap-2 rounded-sm p-6 justify-center items-center text-center shadow-custom w-[208px]">
            <img src={props.icon} alt="logo"/>
            <HeadersTexts text={props.title} fontSize={"text-xl"}/>
            <BodyTexts text={props.description} fontSize={"text-[9px]"}/>
        </div>
    )
}