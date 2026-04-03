import Image from "next/image";
import { Anton } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { HomeHeroIntroCard } from "@/components/sections/home/HomeHeroIntroCard";
import { HomeWhyStealth } from "@/components/sections/home/HomeWhyStealth";
import { HomeCoreServices } from "@/components/sections/home/HomeCoreServices";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export function HomeHeroSection() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1720px] px-4 pt-6 pb-0 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        <Header />

        <div className="relative mt-10 pb-0 md:mt-16 xl:mt-20">
          {/* Two-column on xl, single-column below */}
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-16">

            {/* ── Left: Text Content ──────────────────────────── */}
            <div className="flex flex-col justify-center">

              {/* Trustindex badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-[#131313] px-3 py-3 text-sm text-zinc-200 sm:gap-3 sm:px-[10px]">
                <div className="inline-flex items-center gap-1.5">
                  <Image
                    src="/assets/icons/checkIcon.png"
                    alt="check"
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] sm:h-[28px] sm:w-[28px]"
                  />
                  <h2 className="text-[18px] font-medium sm:text-[24px]">Trustindex</h2>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-[#242424] px-3 py-[5px]">
                  <p className="text-[14px] font-medium sm:text-[18px]">Rated 4.5</p>
                  <div className="inline-flex items-center gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src="/assets/icons/star.png"
                        alt="star"
                        width={20}
                        height={20}
                        className="h-4 w-4 sm:h-[22px] sm:w-[22px]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* H1 */}
              <h1
                className={`${anton.className} text-[52px] font-normal uppercase leading-[0.9] tracking-tight
                  sm:text-[72px]
                  md:text-[90px]
                  lg:text-[108px]
                  xl:text-[120px]
                  w-full`}
              >
                Security you can <br />
                trust.
                <span className="text-[#FFD100]">Vigilance</span>
                <span className="block text-[#FFD100]">you can see.</span>
              </h1>

              {/* Subheading */}
              <p className="mt-5 max-w-[600px] text-[18px] font-normal leading-snug text-zinc-200 sm:text-[24px] md:text-[30px] xl:text-[36px]">
                Elite Armed &amp; Unarmed Security Solutions for a Complex World.
              </p>

              {/* CTA Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FFD100] px-5 py-3.5 text-[15px] font-semibold text-black sm:w-auto sm:px-[24px] sm:py-4 sm:text-[18px]">
                  Get a Free Security Quote
                  <Image
                    src="/assets/icons/arrowRight.png"
                    alt="arrow"
                    width={16}
                    height={12}
                    className="h-[11px] sm:h-[12px]"
                  />
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3.5 text-[15px] font-semibold text-black sm:w-auto sm:px-8 sm:py-4 sm:text-[18px]">
                  <Image
                    src="/assets/icons/phone.png"
                    alt="phone"
                    width={18}
                    height={18}
                    className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
                  />
                  562-554-6883
                </button>
              </div>
            </div>

            {/* ── Right: Guard Image ──────────────────────────────
                On mobile/tablet it sits below; on XL it's side-by-side.
                On mobile it's naturally constrained by column width.    */}
            <div className="relative flex justify-center xl:block xl:overflow-hidden">
              <Image
                src="/assets/guard.png"
                alt="Stealth Watch Security professional guard"
                className="max-h-[500px] w-auto object-contain object-bottom sm:max-h-[600px] md:max-h-[700px] xl:max-h-none xl:w-full"
                width={706}
                height={912}
                priority
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Intro card — full width */}
          <HomeHeroIntroCard className="mt-6 xl:mt-0 xl:max-w-none" />
        </div>
      </section>

      <HomeWhyStealth />
      <HomeCoreServices />
    </>
  );
}
