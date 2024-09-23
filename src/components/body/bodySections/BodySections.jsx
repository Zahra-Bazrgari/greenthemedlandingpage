import RightArrow from "../../../../public/icons/RightArrow";
import Buttons from "../../elements/buttons/Buttons";
import BodyTexts from "../../elements/texts/BodyTexts";
import HeadersTexts from "../../elements/texts/HeadersTexts";

export default function BodySections(props) {
  return (
    <div className={`flex justify-center items-center ${props.paddingX ? props.paddingX : "px-16"} py-10 gap-16`}>
      <img src={props.Url} alt="Icon" />
      <div className="flex flex-col gap-5 max-w-fit w-[40%]">
        {props.title && (
          <div className="w-[70%]">
            <HeadersTexts text={props.title} />
          </div>
        )}

        <div className={props.textWidth ? props.textWidth : "w-[90%]"}>
          <BodyTexts text={props.description} fontSize={props.textSize ? props.textSize : "text-xs"} />

          {props.name && (
            <div className="mt-4">
              <span className="block text-green-600 font-bold text-lg">{props.name}</span>
              {props.organization && (
                <span className="block text-gray-500 text-sm">{props.organization}</span>
              )}
            </div>
          )}
        </div>

        {props.buttonText && <Buttons text={props.buttonText} />}

        {props.showIcons && (
          <div className="flex justify-between items-center gap-4 mt-6">
            {props.logos && props.logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className="w-8 h-8" />
            ))}
            <button className="flex items-center text-green-600 font-bold">
              Meet all customers
              <RightArrow className="ml-2" stroke="color-green-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
