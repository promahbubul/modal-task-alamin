import { accountModalSideNav } from "../../constant/account-profile-modal-constant";

const LeftArea = ({ setRightSideContent, rightSideContent }) => {
  console.log(rightSideContent);

  const handleTyp = (type) => {
    setRightSideContent(type);
  };
  return (
    <div className="w-4/12 p-1 ">
      {/* Profile */}
      <div className="border border-gray flex flex-row justify-start gap-2  rounded-lg p-2">
        <div className="">
          <div className="bg-blue-700 flex justify-center items-center font-semibold text-white w-10 h-10 rounded-full">
            <p className="">AC</p>
          </div>
        </div>
        <div className=" text-left">
          <h3 className="text-base font-medium text-black">Andrew Cano</h3>
          <p className="text-sm text-gray font-normal">andrewcano@gmail.com</p>
        </div>
      </div>
      {/* SideNav */}
      <nav className="text-left flex flex-col mt-4">
        {accountModalSideNav.map((item) => (
          <button
            onClick={() => handleTyp(item.type)}
            
            className=" py-2 px-4 flex flex-row group items-center gap-2 text-black  rounded-md hover:bg-blue-700/10 hover:text-blue-600 font-semibold text-base "
            key={item.key}
          >
            <div className="text-gray group-hover:text-blue-600">
              {item.icon()}
            </div>
            <p className="">{item.title}</p>
          </button>
        ))}
      </nav>
    </div>
  );
};
export default LeftArea;
