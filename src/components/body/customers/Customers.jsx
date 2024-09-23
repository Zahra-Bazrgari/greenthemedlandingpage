import BodySections from "../bodySections/BodySections";

export default function Customers() {
  const logos = [
    "public/assets/clientsSectionLogos/Logo.png",
    "public/assets/clientsSectionLogos/Logo2.png",
    "public/assets/clientsSectionLogos/Logo3.png",
    "public/assets/clientsSectionLogos/Logo4.png",
    "public/assets/clientsSectionLogos/Logo5.png",
    "public/assets/clientsSectionLogos/Logo6.png"
  ];

  return (
    <div className="bg-costume-natural-silver">
      <BodySections
        description={
          "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
        }
        Url={"public/assets/image 9.png"}
        textWidth="w-full"
        textSize="text-[14px]"
        paddingX="px-0"
        name="Tim Smith"
        organization="British Dragon Boat Racing Association"
        logos={logos}
        showIcons={true}
      />
    </div>
  );
}
