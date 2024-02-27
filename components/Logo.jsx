import { cyberpunk, cyberpunktext } from "@/assets/images";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        className="h-auto w-[2rem] object-cover sm:w-[3rem]"
        src={cyberpunk}
        alt=""
        width={0}
        height={0}
        priority={true}
        sizes="100vw"
      />
      <Image
        className="h-auto w-[6rem] sm:w-[7rem]"
        src={cyberpunktext}
        alt=""
        width={0}
        height={0}
        priority={true}
        sizes="100vw"
      />
    </div>
  );
};

export default Logo;
