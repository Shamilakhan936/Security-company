const servicesLeft = [
  "Parking Enforcement",
  "Courtesy Vehicle Patrol",
  "Unarmed Security Guards",
  "Armed Security Guards",
  "Construction Security",
];

const servicesRight = [
  "Loss Prevention",
  "Mobile Security",
  "Event Security",
  "Fire Watch Services",
  "PPO121967",
];

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1720px] border-t border-zinc-800 px-[80px] pt-8 pb-6">
        <p className="text-[clamp(56px,9vw,130px)] leading-none font-black uppercase tracking-tight text-zinc-950">
          Stealth Watch
        </p>

        <div className="mt-7 grid grid-cols-1 gap-10 border-b border-zinc-800 pb-10 lg:grid-cols-[auto_1fr_auto]">
          <div className="grid h-28 w-28 place-items-center rounded-md border border-[#FFD100] text-3xl font-black text-[#FFD100]">
            SW
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[26px] font-semibold text-[#FFD100]">Services</h3>
              <div className="mt-3 grid gap-1 text-sm text-zinc-200">
                {servicesLeft.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[26px] font-semibold text-transparent">Services</h3>
              <div className="mt-3 grid gap-1 text-sm text-zinc-200">
                {servicesRight.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-[320px]">
            <h3 className="text-[26px] font-semibold text-[#FFD100]">Contact Us</h3>
            <p className="mt-2 text-sm text-zinc-100">562-554-6883</p>
            <p className="mt-6 text-sm leading-6 text-zinc-300">
              Stealth Watch Security offers comprehensive protective services for
              property owners.
            </p>
            <button className="mt-6 rounded-md bg-[#FFD100] px-6 py-3 text-sm font-semibold text-black">
              Get a Free Security Quote
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-xs text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <p>@2026 TOP ORGANIC LEADS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <a href="#">TERM AND CONDITIONS</a>
            <span className="text-zinc-600">|</span>
            <a href="#">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
