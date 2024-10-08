"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setcopied] = useState("");

  const handleCopy = () => {
    setcopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>{
      setcopied(" ");
    },3000)
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex-justify-between items-center gap-3 cursor-pointer">
          <Image
            src={post?.creator?.image}
            alt="User_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-gray-900">
            {post?.creator?.username}
          </h3>
          <p className="font-inter text-sm text-gray-500 ">
            {post?.creator?.email}
          </p>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="font-satoshi my-4 text-sm text-gray-700">{post.prompt}</p>
      <p 
        className="font-inter text-sm  blue_gradient cursor-pointer"
        onClick={() => {handleTagClick && handleTagClick(post?.tag)}}
      >
        {post?.tag}
      </p>
    </div>
  );
};

export default PromptCard;
