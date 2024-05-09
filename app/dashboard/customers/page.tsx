'use client'
import Skeleton from "@/components/skeleton/Skeleton";
import { DummyUserData } from "@/utils/data";
import { UserDataI } from "@/utils/interface";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const UserCard = dynamic(() => import("@/components/customerCard/UserCard"), {
  ssr: false,
  loading: () => <Skeleton />,
});

const Customers = () => {
  const [search, setSearch] = useState<string>('')
  const [userData, setUserData] = useState<UserDataI[]>(DummyUserData)

  useEffect(() => {
    if (search.length > 2) {
      FetchSearchData()
    }else{
      setUserData(DummyUserData)
    }
  }, [search])
  
  const FetchSearchData = () => {
    const data = DummyUserData.filter(user => {
      return user.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) || user.age.toString().startsWith(search.toLocaleLowerCase()) || user.email.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) || user.address.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    })
    setUserData(data)
  }

  return (
    <section>
      <div className="my-5 flex justify-end">
        <input
          type="text"
          className="px-5  py-2 bg-transparent outline-none border border-gray-700 rounded-xl md:w-1/2"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {userData?.map((user) => {
          return <UserCard userData={user} key={Math.random()}/>;
        })}
      </div>
    </section>
  );
};

export default Customers;
