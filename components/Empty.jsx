import { emptybox } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Empty = ({ message = "No Data" }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={emptybox}
        alt=""
        width={70}
        height={70}
        sizes="100vw"
        className="object-cover"
      />
      <p>{message}</p>
    </div>
  );
};

export default Empty;
