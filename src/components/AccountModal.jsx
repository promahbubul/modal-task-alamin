import { useState } from "react";
import LeftArea from "./LeftArea";
import RightArea from "./RightArea";

const AccountModal = ({ setShowModal }) => {
  const [rightSideContent, setRightSideContent] = useState("account");
  return (
    <div className="flex justify-center items-center w-full h-screen fixed top-0 left-0 border-2 border-red-500">
      <div
        onClick={() => setShowModal(false)}
        className="bg-black/30 fixed inset-y-0 inset-x-0"
      ></div>
      <div className="w-1/2 h-[90%]  bg-white  z-10  rounded-lg flex flex-row ">
        {/* left */}
        <LeftArea
          setRightSideContent={setRightSideContent}
          rightSideContent={rightSideContent}
        />
        {/* Right */}
        <RightArea
          rightSideContent={rightSideContent}
          setRightSideContent={setRightSideContent}
        />
      </div>
    </div>
  );
};
export default AccountModal;
