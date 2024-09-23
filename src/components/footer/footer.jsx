import FooterTitle from "./FooterTitle";
import OutroSection from "./OutroSection";

export default function Footer() {
    return (
        <div className="mt-5 flex flex-col items-center">
            <FooterTitle />
            <OutroSection />
        </div>
    )
  }