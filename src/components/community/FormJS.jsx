import React, { useRef, useState } from "react";
import { Button, CommunityUpload, ImageUploadJs, InputBase } from "../../libs";
import { FaFileImage } from "react-icons/fa";
import { useSelector } from "react-redux";

const FormJS = ({ form, setForm, Submit }) => {
  const c = useSelector((state) => state.community.createStatus);
  const loading = c === "pending";
  return (
    <div className="flex flex-col w-11/12 items-center justify-center gap-3">
      <CommunityUpload form={form} setForm={setForm} />
      <InputBase
        placeholder="Community Name"
        value={form.cname}
        onChange={(e) => setForm({ ...form, cname: e.target.value })}
      />
      <InputBase
        placeholder="About your community"
        value={form.cdesc}
        onChange={(e) => setForm({ ...form, cdesc: e.target.value })}
      />
      <Button
        text="Create"
        isCurrentBg
        onClick={Submit}
        fullWidth
        disabled={loading}
        isLoading={loading}
      />
    </div>
  );
};

export default FormJS;
