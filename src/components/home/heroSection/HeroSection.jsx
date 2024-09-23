import Buttons from "../../elements/buttons/Buttons";
import BodyTexts from "../../elements/texts/BodyTexts";
import HeadersTexts from "../../elements/texts/HeadersTexts";

export default function HeroSection() {
  return (
    <div className="h-svh bg-costume-natural-silver w-full px-20 flex gap-8 justify-center items-center">
      <div className="w-[60%] grid gap-6">
        <HeadersTexts
          text={
            <>
              Lessons and insights{" "}
              <span className="text-costume-primary">from 8 years</span>
            </>
          }
          fontSize="text-6xl"
        />

        <BodyTexts text="Where to grow your business as a photographer: site or social media?" />

        <Buttons text="Register Now" />
      </div>

      <div className="h-[55%]">
        <img
          src="public/assets/Illustration.png"
          className="h-full"
          alt="Illustration"
        />
      </div>
    </div>
  );
}
