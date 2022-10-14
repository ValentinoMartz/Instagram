import React from "react";

const Story = ({ userId, username, avatar }) => {
  return (
    <div>
      <img
        src={avatar}
        alt=""
        className="rounded-full p-[1.5px] border-[3px] border-red-500"
      />
      <p className="text-sx w-[60px] truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
