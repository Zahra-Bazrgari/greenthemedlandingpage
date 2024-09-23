import Achievements from "./achievements/achievements";
import Calender from "./calender/Calender";
import CommunityUpdates from "./communityUpdates/CommunityUpdates";
import Customers from "./customers/Customers";
import Unlock from "./unlock/unlock";

export default function Body() {
    return (
      <div>
        <Unlock />
        <Achievements />
        <Calender />
        <Customers />
        <CommunityUpdates />
      </div>
    );
  }
  