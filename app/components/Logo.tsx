import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={40}
        className="size-8 md:size-10 rounded-full"
      />
    </Link>
  );
}
