import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const features = [
  {
    title: "ELITE PERSONNEL",
    description:
      "Many of our team members come from military or law enforcement backgrounds, bringing unmatched discipline and tactical expertise",
  },
  {
    title: "REAL-TIME REPORTING",
    description:
      "Stay informed with our digital reporting system. Get instant alerts, GPS-verified logs, and incident photos straight to your inbox.",
  },
  {
    title: "CUSTOMIZED PROTECTION",
    description:
      "No two properties are the same. We conduct a thorough site assessment to build a security plan that addresses your specific vulnerabilities",
  },
  {
    title: "24/7 RAPID RESPONSE",
    description:
      "Our command center is active around the clock, ensuring that we can deploy resources or emergency guards at a moment's notice",
  },
];

const partners = [
  { name: "GuruNanda", svg: GuruNandaLogo },
  { name: "ATN", svg: ATNLogo },
  { name: "Bedrosians", svg: BedrosiansLogo },
  { name: "Malabar", svg: MalabarLogo },
  { name: "The Z Factor", svg: TheZFactorLogo },
];

function GuruNandaLogo() {
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
      <text x="10" y="28" fontFamily="Georgia, serif" fontSize="20" fontWeight="bold" fill="#1a1a1a">Guru</text>
      <text x="10" y="50" fontFamily="Georgia, serif" fontSize="20" fontWeight="bold" fill="#1a1a1a">Nanda.</text>
    </svg>
  );
}

function ATNLogo() {
  return (
    <svg viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
      {/* A */}
      <path d="M10 50 L25 10 L40 50" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M15 36 L35 36" stroke="#333" strokeWidth="4" strokeLinecap="round"/>
      {/* house on top of A */}
      <path d="M20 18 L25 12 L30 18" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="22" y="18" width="6" height="5" stroke="#333" strokeWidth="2" fill="none"/>
      {/* T */}
      <path d="M50 10 L80 10" stroke="#333" strokeWidth="4" strokeLinecap="round"/>
      <path d="M65 10 L65 50" stroke="#333" strokeWidth="4" strokeLinecap="round"/>
      {/* N */}
      <path d="M90 50 L90 10 L115 50 L115 10" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="10" y="58" fontFamily="Arial, sans-serif" fontSize="7" fill="#666" letterSpacing="1">Anaheim Transportation Network</text>
    </svg>
  );
}

function BedrosiansLogo() {
  return (
    <svg viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
      {/* BB grid icon */}
      <rect x="10" y="8" width="14" height="14" rx="1" stroke="#444" strokeWidth="2.5"/>
      <rect x="26" y="8" width="14" height="14" rx="1" stroke="#444" strokeWidth="2.5"/>
      <rect x="10" y="24" width="14" height="14" rx="1" stroke="#444" strokeWidth="2.5"/>
      <rect x="26" y="24" width="14" height="14" rx="1" stroke="#444" strokeWidth="2.5"/>
      <text x="52" y="28" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#333" letterSpacing="0.5">Bedrosians</text>
      <text x="52" y="44" fontFamily="Arial, sans-serif" fontSize="8" fill="#888" letterSpacing="1.5">TILE &amp; STONE</text>
    </svg>
  );
}

function MalabarLogo() {
  return (
    <svg viewBox="0 0 130 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
      {/* M circle */}
      <circle cx="65" cy="18" r="12" stroke="#444" strokeWidth="2"/>
      <text x="59" y="22" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#444">M</text>
      <text x="30" y="42" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#444" letterSpacing="1">MALABAR</text>
      <text x="25" y="52" fontFamily="Arial, sans-serif" fontSize="7" fill="#888" letterSpacing="0.5">GOLD &amp; DIAMONDS</text>
    </svg>
  );
}

function TheZFactorLogo() {
  return (
    <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
      {/* Stars */}
      {[0,1,2,3,4].map((i) => (
        <text key={i} x={8 + i * 10} y="22" fontSize="10" fill="#333">★</text>
      ))}
      {/* ZIM */}
      <text x="8" y="42" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="900" fill="#222" letterSpacing="1">ZIM</text>
      {/* The Z Factor */}
      <text x="68" y="28" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#333">The</text>
      <text x="68" y="44" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900" fill="#111" letterSpacing="0.5">Z Factor</text>
    </svg>
  );
}

export function HomeWhyStealth() {
  return (
    <div className="bg-white text-black">
      {/* Partner Logos Bar */}
      <div className="border-t border-b border-gray-200">
        <div className="mx-auto max-w-[1720px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
          {/* grid-cols-3 on mobile (hide first/last logo), 5-col on lg+ */}
          <div className="grid grid-cols-3 divide-x divide-gray-200 lg:grid-cols-5">
            {partners.map((partner, i) => {
              const Logo = partner.svg;
              return (
                <div
                  key={partner.name}
                  className={`flex items-center justify-center px-3 py-5 sm:px-6 sm:py-6 md:px-8 ${
                    (i === 0 || i === 4) ? "hidden lg:flex" : ""
                  }`}
                >
                  <Logo />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main WHY STEALTH WATCH Section */}
      <div className="mx-auto max-w-[1720px] px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20 xl:px-[80px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 xl:gap-20">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-start">
            {/* Heading */}
            <h2
              className={`${anton.className} text-[36px] font-normal uppercase leading-tight tracking-tight sm:text-[44px] lg:text-[56px] xl:text-[64px]`}
            >
              WHY STEALTH WATCH{" "}
              <span className="text-[#EAB308]">SECURITY?</span>
            </h2>

            {/* Sub-description */}
            <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-gray-700">
              We don&apos;t just provide &quot;guards&quot;—we provide highly trained
              safety professionals who are committed to your protection.
            </p>

            {/* Features List */}
            <div className="mt-6 space-y-5 md:mt-10 md:space-y-7">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-[15px] font-black uppercase tracking-wide text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-1 max-w-[440px] text-[15px] leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="flex flex-col gap-4">
            {/* Large top image */}
            <div className="relative w-full overflow-hidden rounded-md" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/assets/security_arrest.png"
                alt="Security professionals making an arrest at night"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>

            {/* Two smaller bottom images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full overflow-hidden rounded-md" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/assets/security_command_center.png"
                  alt="Security command center with surveillance monitors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <div className="relative w-full overflow-hidden rounded-md" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/assets/security_airport_guard.png"
                  alt="Security guard at airport"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
