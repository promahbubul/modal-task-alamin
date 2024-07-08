import FieldGroup from "../FieldGroup";

const Organization = () => {
  return (
    <>
      <div className=" h-[calc(100%-40.67px)]  scrollbar-hide overflow-auto">
        <div className="flex flex-col gap-3 mt-4 overflow-auto">
          <FieldGroup
            title={"Andrew Cano"}
            label={"Organization name"}
            id={"orgname"}
          />
          <FieldGroup
            title={"Add your organization address to your account"}
            label={"Organization address"}
            id={"orgaddress"}
          />
          <FieldGroup
            title={"Add your job title to your account"}
            label={"Job title"}
            id={"jobtitle"}
          />
        </div>
      </div>
    </>
  );
};
export default Organization;
