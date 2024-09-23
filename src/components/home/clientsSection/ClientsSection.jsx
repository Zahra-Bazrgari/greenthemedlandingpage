import BodyTexts from "../../elements/texts/BodyTexts";
import HeadersTexts from "../../elements/texts/HeadersTexts";

export default function ClientsSection() {
  const logos = [
    "public/assets/clientsSectionLogos/Logo.png",
    "public/assets/clientsSectionLogos/Logo2.png",
    "public/assets/clientsSectionLogos/Logo3.png",
    "public/assets/clientsSectionLogos/Logo4.png",
    "public/assets/clientsSectionLogos/Logo5.png",
    "public/assets/clientsSectionLogos/Logo6.png",
    "public/assets/clientsSectionLogos/Logo7.png",
  ];

  return (
    <div className="py-6 text-center flex flex-col gap-2 items-center justify-center">
      <HeadersTexts text={"Our Clients"} />
      <BodyTexts text={"We have been working with some Fortune 500+ clients"} />

      <div className="flex justify-around items-center w-full my-7 px-20">
        {logos.map((logo, index) => {
          return <img key={index} src={logo} alt={`logo-${index + 1}`} />;
        })}
      </div>
    </div>
  );
}
