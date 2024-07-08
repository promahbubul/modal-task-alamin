import { RiArrowDownSLine } from "react-icons/ri";
import AccountProfile from "../AccountProfile";
import Organization from "../Organization";
import Preferences from "../Preferences";

const RightArea = ({ rightSideContent, setRightSideContent }) => {
  return (
    <div className="w-8/12 border-l border-l-silver p-4 ">
      {/* Header */}
      <div className="flex flex-row items-center justify-between pb-4 border-b border-b-silver">
        {rightSideContent === "account" ? (
          <h2 className="">Account & Profile</h2>
        ) : rightSideContent === "organization" ? (
          <h2 className="">Organization</h2>
        ) : (
          <h2 className="">Preferences</h2>
        )}
        {rightSideContent === "account" ? (
          <div className="flex flex-row items-center gap-2 cursor-pointer ">
            <div className="w-2 h-2 rounded-full bg-green-500  "></div>
            <span className="">Active</span>
            <RiArrowDownSLine className="text-gray" />
          </div>
        ) : (
          ""
        )}
      </div>
      {rightSideContent === "account" ? (
        <AccountProfile />
      ) : rightSideContent === "organization" ? (
        <Organization />
      ) : rightSideContent === "preferences" ? (
        <Preferences />
      ) : (
        <AccountProfile />
      )}
    </div>
  );
};
export default RightArea;
