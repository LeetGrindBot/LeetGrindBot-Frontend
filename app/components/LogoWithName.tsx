import Image from "next/image";
import Link from "next/link";

export default function LogoWithName() {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="size-8 md:size-10 rounded-full object-cover"
        />
      </Link>
      <h1 className="md:text-lg text-white font-bold">LeetGrindBot</h1>
    </div>
  );
}
