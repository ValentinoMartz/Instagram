import React from "react";
import Image from "next/image";
import dots from "../assets/dots.png";

const Post = ({ username, profilePic, postPhoto, caption }) => {
  return (
    <div>
      <div className="border rounded-lg my-3">
        {/* Header */}
        <div className="flex items-center p-3">
          <div className="flex items-center w-full">
            <div className="h-8 w-8 mr-3">
              <img src={profilePic.src} alt="" className="rounded-full" />
            </div>
            <div className="">
              <p className="font-semibold text-sm">{username}</p>
              <p className="text-sm">Original Audio</p>
            </div>
          </div>
          <div className="h-6 w-6">
            <Image src={dots} />
          </div>
        </div>
        {/* Photo */}

        {/* Bottons */}
        {/* Caption */}
        {/* Comments */}
        {/* Input */}
      </div>
    </div>
  );
};

export default Post;
