import Instagram from "../../../public/icons/Instagram";
import Logo from "../../../public/icons/logo";
import SocialMedia from "../../../public/icons/SocialMedia";
import Twitter from "../../../public/icons/Twitter";
import YouTube from "../../../public/icons/YouTube";
import BodyTexts from "../elements/texts/BodyTexts";

export default function OutroSection() {
  const Company = ["About us", "Blog", "Contact us", "Pricing", "Testimonials"];
  const Support = [
    "Help center",
    "Terms of service",
    "Legal",
    "Privacy policy",
    "Status",
  ];

  return (
    <div className="bg-[#263238] grid grid-cols-2 gap-3 w-full px-40 py-10">
      <div className="flex flex-col gap-2 w-[45%]">
        <div className="flex items-center gap-2 mb-2">
          <Logo />
          <h2 className="font-bold text-xl text-white">Nexcent</h2>
        </div>
        <BodyTexts
          text="Copyright © 2020 Landify UI Kit."
          textColor="text-white"
          fontSize="text-[11px]"
        />

        <BodyTexts
          text="All rights reserved"
          textColor="text-white"
          fontSize="text-[11px]"
        />

        <div className="flex gap-2 mt-4">
          <p className="rounded-full bg-costume-button-gray flex items-center justify-center p-1 max-w-fit">
            <Instagram />
          </p>
          <p className="rounded-full bg-costume-button-gray flex items-center justify-center p-1 max-w-fit">
            <SocialMedia />
          </p>
          <p className="rounded-full bg-costume-button-gray flex items-center justify-center p-1 max-w-fit">
            <Twitter />
          </p>
          <p className="rounded-full bg-costume-button-gray flex items-center justify-center p-1 max-w-fit">
            <YouTube />
          </p>
        </div>
      </div>

      <div className="text-white w-[55%] grid grid-cols-3 gap-7">
        <div>
          <p className="font-semibold mb-4">Company</p>
          <div className="grid gap-2">
            {Company.map((item, index) => {
              return (
                <BodyTexts
                  key={index} // Added key prop
                  text={item}
                  textColor="text-white"
                  fontSize="text-[11px]"
                />
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-semibold mb-4">Support</p>
          <div className="grid gap-2">
            {Support.map((item, index) => {
              return (
                <BodyTexts
                  key={index} // Added key prop
                  text={item}
                  textColor="text-white"
                  fontSize="text-[11px]"
                />
              );
            })}
          </div>
        </div>
        <div className="w-[230%]">
          <p className="font-semibold mb-4">Stay up to date</p>
          <div class="relative w-full">
            <input
              type="email"
              placeholder="Your email address"
              class="bg-costume-input-box text-gray-300 py-1 pl-3 pr-10 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.4609 0.766873C11.6027 0.908682 11.6508 1.11919 11.5845 1.30848L7.93014 11.7495C7.85943 11.9516 7.67255 12.09 7.45867 12.0987C7.2448 12.1074 7.04727 11.9847 6.96034 11.7891L4.95368 7.2741L0.438691 5.26744C0.243089 5.18051 0.120373 4.98298 0.129099 4.7691C0.137824 4.55523 0.276222 4.36835 0.478257 4.29764L10.9193 0.643276C11.1086 0.577025 11.3191 0.625064 11.4609 0.766873ZM5.97186 6.99421L7.37965 10.1617L9.84329 3.12279L5.97186 6.99421ZM9.10499 2.38449L2.06604 4.84813L5.23357 6.25592L9.10499 2.38449Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
