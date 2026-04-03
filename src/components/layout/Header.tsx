"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { primaryNavItems } from "@/lib/constants/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative h-9 w-[140px] shrink-0 sm:h-11 sm:w-[180px]">
          <Image
            src="/assets/logo.png"
            alt="Stealth Watch Security"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 640px) 140px, 180px"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-100 lg:flex xl:gap-8">
          {primaryNavItems.map((item) => (
            <a
              key={item}
              href="#"
              className="whitespace-nowrap transition-colors hover:text-[#FFD100]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Contact Us — hidden on mobile, visible on tablet+ */}
          <button
            type="button"
            className="hidden rounded-md bg-[#FFD100] px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:block lg:px-7 lg:py-3"
          >
            CONTACT US
          </button>

          {/* Hamburger — visible on tablet and below */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-zinc-700 bg-[#1a1a1a] transition-colors hover:border-zinc-500 lg:hidden"
          >
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile / Tablet Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}
      />

      {/* Drawer — slides in from RIGHT */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-[#111111] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
          <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col overflow-y-auto py-4">
          {primaryNavItems.map((item, i) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-zinc-800/60 px-6 py-4 text-[15px] font-medium text-zinc-200 transition-colors hover:bg-zinc-800/50 hover:text-[#FFD100]"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="text-xs text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </a>
          ))}
        </div>

        {/* Contact Us in drawer */}
        <div className="mt-auto border-t border-zinc-800 px-6 py-6">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-md bg-[#FFD100] py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            CONTACT US
          </button>
        </div>
      </nav>
    </>
  );
}
