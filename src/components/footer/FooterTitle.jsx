import RightArrow from "../../../public/icons/RightArrow";
import Buttons from "../elements/buttons/Buttons";
import HeadersTexts from "../elements/texts/HeadersTexts";

export default function FooterTitle() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center p-5 bg-costume-natural-silver w-full">
      <div className="w-[30%]">
        <HeadersTexts
          text="Pellentesque suscipit fringilla libero eu."
          fontSize="text-[44px]"
          textColor="text-black"
        />
      </div>
      <Buttons text="Get a Demo" Icon={RightArrow}/>
    </div>
  );
}
