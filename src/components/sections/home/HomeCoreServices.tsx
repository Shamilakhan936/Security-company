import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

// ─── Types ───────────────────────────────────────────────────────────────────

type SpecialtyItem = {
  label: string;
  text: string;
};

type ServiceCard = {
  id: string;
  image1: { src: string; alt: string };
  image2: { src: string; alt: string };
  title: string;
  /** Normal cards use `description`. The 4th card uses `specialties`. */
  description?: string;
  specialties?: SpecialtyItem[];
  learnMoreHref?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: ServiceCard[] = [
  {
    id: "armed-unarmed",
    image1: { src: "/assets/armed_guards.png", alt: "Armed tactical security guards" },
    image2: { src: "/assets/unarmed_guards.png", alt: "Unarmed corporate security guards" },
    title: "ARMED & UNARMED GUARD SERVICES",
    description:
      "Whether you need a high-deterrence armed presence for high-value assets or a professional unarmed guard for a corporate lobby, we have the right personnel.",
    learnMoreHref: "#",
  },
  {
    id: "mobile-patrol",
    image1: { src: "/assets/patrol_suv.png", alt: "Black security patrol SUV vehicle" },
    image2: { src: "/assets/security_airport_guard.png", alt: "Security agent with radio" },
    title: "MOBILE VEHICLE PATROLS",
    description:
      "Secure large-scale properties, HOAs, and industrial parks with randomized, high-visibility patrols that cover more ground than foot patrols alone.",
    learnMoreHref: "#",
  },
  {
    id: "fire-watch",
    image1: { src: "/assets/security_arrest.png", alt: "Fire watch at hazardous scene" },
    image2: { src: "/assets/security_command_center.png", alt: "Fire watch guard monitoring" },
    title: "FIRE WATCH SERVICES",
    description:
      "Stay compliant and protected. Our certified Fire Watch guards provide 24/7 monitoring when your fire alarm or sprinkler systems are down.",
    learnMoreHref: "#",
  },
  {
    id: "specialized",
    image1: { src: "/assets/security_arrest.png", alt: "Hospital security guard on duty" },
    image2: { src: "/assets/security_airport_guard.png", alt: "Construction site security" },
    title: "SPECIALIZED INDUSTRY SOLUTIONS",
    specialties: [
      { label: "Construction Sites:", text: "Preventing copper theft and equipment vandalism." },
      { label: "Healthcare & Hospitals:", text: "Compassionate, de-escalation-focused security." },
      { label: "Logistics & Warehouses:", text: "Managing access control and preventing shrinkage." },
      { label: "Cannabis Facilities:", text: "Fully compliant security for dispensaries and grow sites." },
    ],
  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

function CardImages({
  image1,
  image2,
}: {
  image1: ServiceCard["image1"];
  image2: ServiceCard["image2"];
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
        <Image
          src={image1.src}
          alt={image1.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 50vw, 25vw"
        />
      </div>
      <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
        <Image
          src={image2.src}
          alt={image2.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 50vw, 25vw"
        />
      </div>
    </div>
  );
}

function ServiceCardComponent({ card }: { card: ServiceCard }) {
  const isSpecialized = Boolean(card.specialties);

  return (
    <div className="flex flex-col gap-5 p-4 sm:p-6 md:p-8 border-[#2a2a2a]">
      {/* Images */}
      <CardImages image1={card.image1} image2={card.image2} />

      {/* Title */}
      <h3 className="text-[#EAB308] text-[18px] font-black uppercase tracking-wide leading-tight">
        {card.title}
      </h3>

      {/* Body — either a paragraph (cards 1–3) or specialty list (card 4) */}
      {isSpecialized ? (
        <ul className="space-y-1">
          {card.specialties!.map((item) => (
            <li key={item.label} className="text-[14px] leading-relaxed text-zinc-300">
              <span className="font-bold text-white">{item.label}</span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[14px] leading-relaxed text-zinc-300 max-w-[400px]">
          {card.description}
        </p>
      )}

      {/* Learn More — only on cards 1–3 */}
      {card.learnMoreHref && (
        <a
          href={card.learnMoreHref}
          className="inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-[#EAB308] hover:text-yellow-300 transition-colors"
        >
          LEARN MORE
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function HomeCoreServices() {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Section Header */}
        <div className="mb-10">
          <h2
            className={`${anton.className} text-[36px] sm:text-[44px] lg:text-[52px] xl:text-[64px] font-normal uppercase leading-tight tracking-tight`}
          >
            OUR CORE SECURITY{" "}
            <span className="text-[#EAB308]">SERVICES</span>
          </h2>
          <p className="mt-2 text-[16px] text-zinc-300">
            We provide a full spectrum of protection across multiple industries.
          </p>
        </div>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-1 divide-y divide-[#2a2a2a] md:grid-cols-2 md:divide-y-0">
          {/* Top row */}
          <div className="border-b border-r-0 border-[#2a2a2a] md:border-b md:border-r">
            <ServiceCardComponent card={services[0]} />
          </div>
          <div className="border-b border-[#2a2a2a]">
            <ServiceCardComponent card={services[1]} />
          </div>

          {/* Bottom row */}
          <div className="border-r-0 border-[#2a2a2a] md:border-r">
            <ServiceCardComponent card={services[2]} />
          </div>
          <div>
            <ServiceCardComponent card={services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
