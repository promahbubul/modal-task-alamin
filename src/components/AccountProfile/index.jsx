import { RiArrowDownSLine } from "../../assets/icons";
import FieldGroup from "../FieldGroup";

const AccountProfile = () => {
  return (
    <>
      
      <div className=" h-[calc(100%-40.67px)]  scrollbar-hide overflow-auto">
        {/* Avatar */}
        <div className="mt-6 flex flex-row  gap-3 items-end cursor-pointer">
          <div className="w-16 h-16 bg-blue-700 text-white flex justify-center items-center rounded-full">
            <p className="">AC</p>
          </div>
          <div className="text-left">
            <h2 className="font-semibold  text-sm text-blue-700">
              Upload photo
            </h2>
            <p className="text-xs text-gray font-normal mt-1">
              Pick a photo up to 4MB. Your avatar photo will be public
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4 overflow-auto">
          <FieldGroup
            title={"Andrew Cano"}
            label={"Display name"}
            id={"displayName"}
          />
          <FieldGroup
            title={"Andrew Cano"}
            label={"Full name"}
            id={"displayName"}
          />
          <FieldGroup
            title={"Add your address to your account"}
            label={"Address"}
            id={"displayName"}
          />
          <FieldGroup
            title={"Add your phone number to your account"}
            label={"Phone number"}
            id={"displayName"}
          />
          <FieldGroup
            title={"Add your email to your account"}
            label={"Email"}
            id={"displayName"}
          />
          <div className="text-left mt-4 pb-3 border-b border-silver">
            <h2 className="text-xl font-semibold text-black">
              Account Security
            </h2>
          </div>
          <FieldGroup
            title={"Update the password you use for your account  "}
            label={"Password"}
            id={"displayName"}
          />
          <FieldGroup
            title={"Enable MFA Security options at login"}
            label={"Multi-factor authentication"}
            id={"displayName"}
          />
        </div>
      </div>
    </>
  );
};
export default AccountProfile;
