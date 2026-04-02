import { primaryNavItems } from "@/lib/constants/navigation";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="grid h-11 w-11 place-items-center rounded-md border border-[#FFD100] text-xs font-bold text-[#FFD100]">
            SWS
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide">STEALTH WATCH</p>
            <p className="text-xs font-medium tracking-[0.2em] text-[#FFD100]">
              SECURITY
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-zinc-100 lg:flex">
          {primaryNavItems.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
      </div>

      <button className="rounded-md bg-[#FFD100] px-7 py-3 text-sm font-semibold text-black">
        CONTACT US
      </button>
    </header>
  );
}
