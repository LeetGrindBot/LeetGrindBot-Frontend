import Image from "next/image";
import Link from "next/link";

export default function LogoWithName() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="size-8 rounded-full object-cover md:size-10"
        />
        <h1 className="font-bold text-white md:text-lg">LeetGrindBot</h1>
      </div>
    </Link>
  );
}
