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
      className={`flex flex-col gap-8 border border-[#EAB308] bg-[#111111] p-8 md:flex-row md:items-start md:gap-12 md:p-12 lg:gap-14 lg:p-14 ${className}`}
    >
      <div className="flex shrink-0 justify-center md:justify-start">
        <CalloutIcon className="h-[120px] w-[72px] text-[#EAB308] md:h-[140px] md:w-[84px]" />
      </div>
      <div className="min-w-0 flex-1 space-y-5 text-[15px] leading-relaxed text-white md:text-base md:leading-7">
        <p>
          In an era of rising uncertainty, &quot;standard&quot; security isn&apos;t
          enough. Your assets, your people, and your peace of mind require a
          security partner who is proactive, professional, and prepared for
          anything. Stealth Watch Security provides premier security guard
          services tailored to the unique needs of businesses, residential
          communities, and high-risk facilities.
        </p>
        <p>
          From high-visibility vehicle patrols to discrete executive protection,
          our mission is to provide an unbreakable line of defense so you can
          focus on what matters most.
        </p>
      </div>
    </div>
  );
}
