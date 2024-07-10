import { useState } from "react";
import { RiArrowDownSLine } from "../../assets/icons";
import FieldGroup from "../FieldGroup";
import accountInfoData from "../../constant/accountInfo.constant";

const AccountProfile = () => {
  const [accountInfo, setAccountInfo] = useState(accountInfoData);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [fullNameEdit, setFullNameEdit] = useState(false);
  const [addressEdit, setAddressEdit] = useState(false);
  const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  // const [displayEdit, setDisplayEdit] = useState(false);

  const handleAccountInfo = (id, data) => {
    accountInfo[id] = data;
    setAccountInfo(accountInfo);
  };

  console.log(accountInfo);
  return (
    <>
      <div className=" h-[calc(100%-40.67px)]  scrollbar-hide overflow-auto p-4">
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
        <div className="flex flex-col gap-3 mt-4 ">
          <FieldGroup
            handleAccountInfo={handleAccountInfo}
            edit={displayEdit}
            setEdit={setDisplayEdit}
            inputValue={accountInfo.displayName}
            title={accountInfo.displayName || "Add your display name"}
            label={"Display name"}
            id={"displayName"}
          />
          <FieldGroup
            handleAccountInfo={handleAccountInfo}
            edit={fullNameEdit}
            setEdit={setFullNameEdit}
            title={accountInfo.fullName || "Add your Full name"}
            label={"Full name"}
            id={"fullName"}
            inputValue={accountInfo.fullName}
          />
          <FieldGroup
            handleAccountInfo={handleAccountInfo}
            edit={addressEdit}
            setEdit={setAddressEdit}
            title={accountInfo.address || "Add your address to your account"}
            label={"Address"}
            id={"address"}
            inputValue={accountInfo.address}
          />
          <FieldGroup
            handleAccountInfo={handleAccountInfo}
            edit={phoneNumberEdit}
            setEdit={setPhoneNumberEdit}
            title={
              accountInfo.phoneNumber || "Add your phone number to your account"
            }
            label={"Phone number"}
            id={"phoneNumber"}
            inputValue={accountInfo.phoneNumber}
          />
          <FieldGroup
            handleAccountInfo={handleAccountInfo}
            edit={emailEdit}
            setEdit={setEmailEdit}
            title={accountInfo.email || "Add your email to your account"}
            label={"Email"}
            id={"email"}
            inputValue={accountInfo.email}
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
