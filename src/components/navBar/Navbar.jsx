import Logo from "../../../public/icons/logo";
import RightArrow from "../../../public/icons/RightArrow";
import Buttons from "../elements/buttons/Buttons";

export default function Navbar() {
  return (
    <div className="flex py-2 px-20 items-center justify-between fixed z-10 w-full bg-white">
      <div className="flex items-center justify-between gap-2">
        <Logo />
        <h2 className="font-bold text-xl">Nexcent</h2>
      </div>
      <CreateButton />
    </div>
  );
}

function CreateButton() {
  const buttons = [
    "Home",
    "Features",
    "Community",
    "Blog",
    "Pricing",
    "Register Now",
  ];

  return (
    <div className="flex">
      {buttons.map((btn) => {
        const isRegisterNow = btn === "Register Now";

        return isRegisterNow ? (
          <Buttons key={btn} text={btn} Icon={RightArrow} />
        ) : (
          <Buttons key={btn} text={btn} bg="bg-white" textColor="text-costume-d-gray" />
        );
      })}
    </div>
  );
}

