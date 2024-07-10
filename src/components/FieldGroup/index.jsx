/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiPencil } from "../../assets/icons";

const FieldGroup = ({
  label,
  title,
  id,
  edit,
  setEdit,
  handleAccountInfo,
  inputValue,
}) => {
  const [updateData, setUpdateData] = useState(title);
  const handleData = (e) => {
    e.preventDefault();
    const data = e.target[0].value;
    // e.preventDefault()

    handleAccountInfo(id, data);
    setEdit(false);
    console.log(e);
  };
  return (
    <>
      {edit ? (
        <div className="border border-blue-700 p-2 rounded-md">
          <div
            onClick={() => setEdit(false)}
            className="bg-black/50 opacity-0 fixed inset-y-0 inset-x-0 z-10"
          ></div>
          <div className="flex  flex-row justify-between items-center relative z-30 bg-white ">
            {/* Info */}
            <div className="text-left">
              <label
                className="text-black text-left  font-medium text-sm"
                htmlFor={id}
              >
                {label}
              </label>
              <p
                className="text-xs font-normal  text-gray text-left leading-loose"
                id={id}
              >
                {updateData}
              </p>
            </div>
            {/* Icons */}
            {/* <div className="">
              <button className=" rounded-md border p-2 border-silver2 text-gray">
                <HiPencil className="cursor-pointer" />
              </button>
            </div> */}
          </div>
          <form
            onSubmit={handleData}
            className=" relative z-30 rounded-md bottom-0 shadow-lg bg-white border border-blue-700 p-1  gap-2 flex flex-row items-center"
          >
            <input
              onChange={(e) => setUpdateData(e.target.value)}
              type="text"
              defaultValue={inputValue}
              name={id}
              className="border border-silver2 p-1 outline-none rounded-md w-full"
              id={id}
            />
            <div className="w-7/12">
              <button
                onClick={() => setEdit(false)}
                className="py-1 px-2 rounded-md border border-silver2"
              >
                Skip
              </button>
              <input
                type="submit"
                value="Save & Next"
                className="py-1 px-2 rounded-md  text-white ml-2 bg-blue-600 "
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center relative">
          {/* Info */}
          <div className="text-left">
            <label
              className="text-black text-left  font-medium text-sm"
              htmlFor={id}
            >
              {label}
            </label>
            <p
              className="text-xs font-normal  text-gray text-left leading-loose"
              id={id}
            >
              {title}
            </p>
          </div>
          {/* Icons */}
          <div className="">
            <button
              onClick={() => setEdit(true)}
              className=" rounded-md border p-2 border-silver2 text-gray"
            >
              <HiPencil className="cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default FieldGroup;
