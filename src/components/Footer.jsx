import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <div className=" bg-primary">
      <p className="text-center text-[20px] font-sans py-2">
        <span className="text-[#FFD700]">Mankind</span>
        <span className="text-blue-500">4dev</span>. All rights Reserved. &copy;{" "}
        {/* {date.getFullYear()} */} 2022
      </p>
    </div>
  );
}
