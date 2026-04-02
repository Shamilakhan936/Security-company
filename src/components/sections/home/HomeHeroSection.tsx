import Image from "next/image";
import { Anton } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { HomeHeroIntroCard } from "@/components/sections/home/HomeHeroIntroCard";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export function HomeHeroSection() {
  return (
    <section className="mx-auto max-w-[1720px] px-[80px] pt-10 pb-0">
      <Header />

      <div className="relative mt-20 pb-0">
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-[#131313] px-5 py-2 text-sm text-zinc-200">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00C566]" />
              Trustindex Rated 4.5
            </div>

            <h1
              className={`${anton.className} text-[120px] font-normal uppercase leading-[0.9] tracking-tight w-full whitespace-nowrap `}
            >
              Security you can <br />
              trust.
              <span className=" text-[#FFD100]">Vigilance</span>
              <span className="block text-[#FFD100]">you can see.</span>
            </h1>

            <p className="mt-8 max-w-[680px] text-[36px] font-normal leading-tight text-zinc-200">
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

          <div className="relative z-0 min-h-[720px] overflow-visible xl:overflow-hidden">
            <Image
              src="/assets/guard.png"
              alt="Stealth Watch Security professional guard"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
          </div>
        </div>

        <HomeHeroIntroCard className="relative z-20 -mt-10 max-xl:mx-auto max-xl:max-w-3xl xl:absolute xl:bottom-0 xl:left-0 xl:right-0 xl:mt-0 xl:max-w-none" />
      </div>
    </section>
  );
}
