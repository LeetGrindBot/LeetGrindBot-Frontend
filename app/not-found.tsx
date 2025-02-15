import { StandaloneShineButton } from "@/components/ui/StandaloneShineButton";
import Title from "@/components/ui/Title";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center">
      <Title
        title="Désolé, nous ne n’avons pas trouvé la page que vous recherchez."
        smallText="404"
      />
      <Link href="/" className="mt-12">
        <StandaloneShineButton className="" icon={<Home className="size-5" />}>
          Retourner à l&apos;accueil
        </StandaloneShineButton>
      </Link>
    </div>
  );
}
