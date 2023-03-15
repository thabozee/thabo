import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-5">
      <div className="sm:ml-4">
        <img
          src="/thabo.jpg"
          alt=""
          className="w-32 h-32 object-cover border-4 border-orange-500"
        />
      </div>
      <div className="">
        <div className="lg:text-3xl font-bold text-2xl ">Thabo Khabele</div>
        <div className="text-base">
          A Passionate Father and A Software Engineer
        </div>
      </div>
    </div>
  );
};

export default Profile;
