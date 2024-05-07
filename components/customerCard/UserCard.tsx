import { UserDataI } from "@/utils/interface";
import Image from "next/image";
import React from "react";



const UserCard = ({ userData }: {userData: UserDataI}) => {
  return (
    <div className="h-36 w-80  max-md:w-full p-4 rounded-xl border border-gray-800 flex items-center gap-5">
      <div>
        <Image
          src={userData?.picture}
          alt=""
          className="rounded-xl"
          width={80}
          height={80}
        />
      </div>
      <div className="w-full text-md">
        <p className="font-bold text-2xl">{userData?.name}</p>
        <p className="text-md">{userData?.email}</p>
        <p className="flex gap-8 font-light text-xs">
          <span>Age: {userData?.age}</span>{" "}
          <span>Gender: {userData?.gender}</span>
        </p>
        <p className="font-light text-xs mt-2">{userData?.registered}</p>
      </div>
    </div>
  );
};

export default UserCard;
