import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../hooks/api";

const Input = ({ required, className, value, onChange, type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        className={`${className} p-3 rounded-lg ${
          required.includes("@")
            ? "focus:border-sky-500"
            : "focus:border-red-500"
        } font-semibold focus:border-2 outline-none`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {required.includes("@") ? (
        ""
      ) : (
        <span className="font-sofia text-red-500 text-sm">
          {required && <> * please enter a valid email *</>}
        </span>
      )}
    </>
  );
};

export default Input;
