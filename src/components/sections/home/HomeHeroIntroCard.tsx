import Image from "next/image";
type HomeHeroIntroCardProps = {
  className?: string;
};

function CalloutIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="8"
        y="4"
        width="74"
        height="132"
        rx="37"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="45" cy="48" r="22" stroke="currentColor" strokeWidth="3" />
      <circle cx="45" cy="48" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="45" cy="48" r="3" fill="currentColor" />
      <path
        d="M20 88h50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M25 102c10 18 30 18 40 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HomeHeroIntroCard({ className = "" }: HomeHeroIntroCardProps) {
  return (
    <div
      className={`flex flex-row items-start gap-4 border rounded-t-[6px] border-[#EAB308] border-b-0 bg-[#111111] p-4 sm:gap-6 sm:p-6 md:gap-10 md:p-[30px] lg:gap-14 lg:p-[60px] xl:p-[80px] ${className}`}
    >
      <div className="flex shrink-0">
        <Image src="/assets/icons/calloutIcon.png" alt="check" width={28} height={28} className="h-[40px] w-[28px] text-[#EAB308] sm:h-[50px] sm:w-[36px] md:h-[60px] md:w-[42px] lg:h-[78px] lg:w-[54px]" />
      </div>
      <div className="min-w-0 flex-1 space-y-3 leading-relaxed text-white">
        <p className="text-[13px] font-light font-[Barlow] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px]">
          In an era of rising uncertainty, &quot;standard&quot; security isn&apos;t
          enough. Your assets, your people, and your peace of mind require a
          security partner who is proactive, professional, and prepared for
          anything. Stealth Watch Security provides premier security guard
          services tailored to the unique needs of businesses, residential
          communities, and high-risk facilities.
        </p>
        <p className="text-[13px] font-light font-[Barlow] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px]">
          From high-visibility vehicle patrols to discrete executive protection,
          our mission is to provide an unbreakable line of defense so you can
          focus on what matters most.
        </p>
      </div>
    </div>
  );
}
