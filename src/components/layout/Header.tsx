import Image from "next/image";
import { primaryNavItems } from "@/lib/constants/navigation";

export function Header() {
  return (
    <header className="flex flex-wrap items-center gap-[152px] justify-between">
      <div className="relative h-11 w-[180px] shrink-0">
        <Image
          src="/assets/logo.png"
          alt="Stealth Watch Security"
          fill
          className="object-contain object-left"
          priority
          sizes="180px"
        />
      </div>

      <nav className="hidden items-center gap-8 text-sm text-zinc-100 lg:flex">
        {primaryNavItems.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="shrink-0 rounded-md bg-[#FFD100] px-7 py-3 text-sm font-semibold text-black"
      >
        CONTACT US
      </button>
    </header>
  );
}
