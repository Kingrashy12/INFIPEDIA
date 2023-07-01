import React from "react";
import { InputBase } from "../../libs";

const UpdatedForm = ({ user, setUser }) => {
  return (
    <div className="flex flex-col w-11/12 items-center justify-center gap-3">
      <InputBase
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <InputBase
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <InputBase
        placeholder="Bio"
        value={user.bio}
        onChange={(e) => setUser({ ...user, bio: e.target.value })}
      />
    </div>
  );
};

export default UpdatedForm;
