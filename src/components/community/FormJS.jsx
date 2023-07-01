import React, { useRef, useState } from "react";
import { ImageUploadJs, InputBase } from "../../libs";
import { FaFileImage } from "react-icons/fa";

const FormJS = ({ form, setForm }) => {
  return (
    <div className="flex flex-col w-11/12 items-center justify-center gap-3">
      <ImageUploadJs form={form} setForm={setForm} />
      <InputBase
        placeholder="Community Name"
        value={form.cname}
        onChange={(e) => setForm({ ...form, cname: e.target.value })}
      />
      <InputBase
        placeholder="Community Category"
        value={form.cCat}
        onChange={(e) => setForm({ ...form, cCat: e.target.value })}
      />
    </div>
  );
};

export default FormJS;
