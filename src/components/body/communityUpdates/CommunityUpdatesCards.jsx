import RightArrowGreen from "../../../../public/icons/RightArrowGreen";


export default function CommunityUpdatesCards(props) {
    return (
      <div className="w-[100%] relative flex flex-col items-center">
        <img src={props.src} alt={props.alt}/>
        <div className="flex flex-col gap-3 px-2 py-3 w-[220.65px] h-[123.55px] absolute bottom-[-40%] bg-costume-natural-silver rounded-md shadow-lg text-center items-center justify-between">
            <p className="font-semibold text-costume-gray text-[14px]">{props.text}</p>
            <p className="font-semibold text-costume-primary flex items-center gap-2 justify-center">Readmore <RightArrowGreen/></p>
        </div>
      </div>
    )
  }