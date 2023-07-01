import React from "react";

const PasswordInput = ({
  value,
  onChange,
  className,
  required,
  type,
  placeholder,
}) => {
  return (
    <>
      <input
        type={type}
        className={`p-3 ${className} rounded-lg ${
          required.length < 4 ? "focus:border-red-500" : "focus:border-sky-500"
        } font-semibold focus:border-2  outline-none`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {required.length < 4 ? (
        <span className="font-sofia text-red-500 text-sm">
          {required && <> * please enter a min of 4 password</>}
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default PasswordInput;
