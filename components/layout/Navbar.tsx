"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GooglePlayButton from "@/components/common/GooglePlayButton";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/site-content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 pointer-events-none">

      <nav
        className="glass-nav max-w-6xl mx-auto rounded-full px-5 py-3 flex items-center justify-between pointer-events-auto"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="relative z-[1] flex items-center gap-2.5"
          aria-label={`${SITE.appName} home`}
        >
          <Image
            src={ASSETS.logo.icon}
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 flex-shrink-0"
            aria-hidden="true"
            priority
          />
          <div className="hidden sm:flex flex-col justify-center leading-none gap-[3px]">
            <Image
              src={ASSETS.logo.wordmark}
              alt={SITE.appName}
              width={110}
              height={20}
              priority
            />
            <span className="text-[10px] text-[#6D6D6D] font-medium tracking-wide">
              by{" "}
              <span className="text-[#25D366] font-semibold">
                {SITE.companyName}
              </span>
            </span>
          </div>
        </Link>

        <ul className="relative z-[1] hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-[#505050] hover:text-[#25D366] hover:bg-[rgba(37,211,102,0.10)] transition-all duration-200 font-semibold px-3 py-2 rounded-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative z-[1] hidden md:block">
          <GooglePlayButton variant="navbar" />
        </div>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="relative z-[1] md:hidden p-2.5 rounded-full hover:bg-[#EAF8F0] transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className={`w-5 h-0.5 bg-[#202020] mb-1.5 transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-[#202020] mb-1.5 transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-[#202020] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="glass-dropdown md:hidden mt-2 max-w-6xl mx-auto rounded-[1.5rem] px-5 py-5 pointer-events-auto">
          <ul className="flex flex-col mb-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center text-[#202020] hover:text-[#25D366] hover:bg-[rgba(37,211,102,0.08)] transition-all duration-200 font-semibold py-2.5 px-3 rounded-xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <GooglePlayButton
            variant="footer"
            label="Download on Google Play"
            className="w-full justify-center"
          />
        </div>
      )}
    </header>
  );
}
