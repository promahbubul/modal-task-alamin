import { useState } from "react";
import FieldGroup from "../FieldGroup";
import organizationData from "../../constant/organization.constractor";

const Organization = () => {
  const [orgData, setOrgData] = useState(organizationData);
  const [orgNameEdit, setOrgNameEdit] = useState(false);
  const [orgAddressEdit, setOrgAddressEdit] = useState(false);
  const [jobTitleEdit, setJobTitleEdit] = useState(false);

  const handleOrgInfo = (id, data) => {
    orgData[id] = data;
    setOrgData(orgData);
  };
  return (
    <>
      <div className=" h-[calc(100%-40.67px)] p-4 scrollbar-hide  ">
        <div className="flex flex-col gap-3 mt-4 = ">
          <FieldGroup
            handleAccountInfo={handleOrgInfo}
            edit={orgNameEdit}
            setEdit={setOrgNameEdit}
            inputValue={organizationData.orgName}
            title={orgData.orgName || "Andrew Cano"}
            label={"Organization name"}
            id={"orgName"}
          />
          <FieldGroup
            handleAccountInfo={handleOrgInfo}
            edit={orgAddressEdit}
            inputValue={organizationData.orgAddress}
            setEdit={setOrgAddressEdit}
            title={
              orgData.orgAddress ||
              "Add your organization address to your account"
            }
            label={"Organization address"}
            id={"orgAddress"}
          />
          <FieldGroup
            handleAccountInfo={handleOrgInfo}
            inputValue={organizationData.jobTitle}
            edit={jobTitleEdit}
            setEdit={setJobTitleEdit}
            title={orgData.jobTitle || "Add your job title to your account"}
            label={"Job title"}
            id={"jobTitle"}
          />
        </div>
      </div>
    </>
  );
};
export default Organization;
