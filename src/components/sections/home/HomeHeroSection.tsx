import { Anton } from "next/font/google";
import { Header } from "@/components/layout/Header";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export function HomeHeroSection() {
  return (
    <section className="mx-auto max-w-[1720px] px-[80px] pt-10 pb-16">
      <Header />

      <div className="mt-20 grid grid-cols-1 gap-16 xl:grid-cols-2">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-[#131313] px-5 py-2 text-sm text-zinc-200">
            <span className="h-2.5 w-2.5 rounded-full bg-[#00C566]" />
            Trustindex Rated 4.5
          </div>

          <h1
            className={`${anton.className} text-[120px] font-normal uppercase leading-[0.9] tracking-tight`}
          >
            Security you can trust.
            <span className="block text-[#FFD100]">Vigilance</span>
            <span className="block text-[#FFD100]">you can see.</span>
          </h1>

          <p className="mt-8 max-w-[680px] text-[40px] leading-tight text-zinc-200">
            Elite Armed &amp; Unarmed Security Solutions for a Complex World.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="rounded-md bg-[#FFD100] px-8 py-4 text-base font-semibold text-black">
              Get a Free Security Quote
            </button>
            <button className="rounded-md bg-white px-8 py-4 text-base font-semibold text-black">
              562-554-6883
            </button>
          </div>
        </div>

        <div className="relative min-h-[720px] overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-b from-zinc-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,209,0,0.28),transparent_45%)]" />
          <div className="absolute bottom-16 right-10 rounded-lg border border-[#FFD100]/40 bg-black/40 px-8 py-4 text-5xl font-black tracking-wide text-[#FFD100]">
            SECURITY
          </div>
        </div>
      </div>
    </section>
  );
}
