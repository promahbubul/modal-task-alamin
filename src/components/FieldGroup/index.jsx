import { HiPencil } from "../../assets/icons";

const FieldGroup = ({ label, title, id }) => {
  return (
    <div className="flex flex-row justify-between items-center">
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
        <button className=" rounded-md border p-2 border-silver2 text-gray">
          <HiPencil className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};
export default FieldGroup;
