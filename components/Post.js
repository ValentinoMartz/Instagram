import React from "react";
import Image from "next/image";
import dots from "../assets/dots.png";
import comment from "../assets/comment.png";
import message from "../assets/message.png";
import save from "../assets/save.png";
import hearth from "../assets/hearth.png";

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
        <div className="">
          <img src={postPhoto.src} alt="" />
        </div>
        <div className="m-3">
          {/* Bottons */}
          <div className="">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div className="Btn">
                  <Image src={hearth} />
                </div>
                <div className="Btn">
                  <Image src={comment} />
                </div>
                <div className="Btn">
                  <Image src={message} />
                </div>
              </div>

              <div className="Btn">
                <Image src={save} />
              </div>
            </div>

            <div className="mt-2 customfont">
              <p>72,117 likes</p>
            </div>
          </div>
          {/* Caption */}
          <div className="flex items-center mt-2">
            <p className="customfont mr-2 whitespace-nowrap">{username}</p>
            <p className="truncate">{caption}</p>
          </div>
          {/* Comments */}
          {/* Input */}
        </div>
      </div>
    </div>
  );
};

export default Post;
