import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";
import GooglePlayButton from "@/components/common/GooglePlayButton";
import Reveal from "@/components/common/Reveal";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";
import { FOOTER_LINKS } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-[#EEEEEE] pt-14 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          <Reveal className="max-w-sm">
            <div className="flex items-center gap-3 mb-1">
              <Image
                src={ASSETS.logo.icon}
                alt={SITE.appName}
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <div className="flex flex-col leading-none gap-[3px]">
                <span className="font-bold text-xl text-white">{SITE.appName}</span>
                <span className="text-[11px] text-[#6D6D6D]">
                  {SITE.attribution}
                </span>
              </div>
            </div>
            <p className="text-[#6D6D6D] text-sm leading-relaxed mb-5 mt-4">
              {SITE.appName} is a farmer community app by{" "}
              <span className="text-[#25D366] font-semibold">{SITE.companyName}</span>{" "}
              for communication, knowledge sharing, crop scanning and farm-related updates.
            </p>
            <GooglePlayButton variant="footer" />
          </Reveal>

          <Reveal delay={80}>
            <h3 className="font-bold mb-4 text-xs text-[#6D6D6D] uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#6D6D6D] text-sm hover:text-[#25D366] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="font-bold mb-4 text-xs text-[#6D6D6D] uppercase tracking-widest">
              Contact Us
            </h3>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="flex items-center gap-2 text-[#6D6D6D] text-sm hover:text-[#25D366] transition-colors font-medium break-all"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {SITE.supportEmail}
            </a>
          </Reveal>

        </div>

        <div className="border-t border-[#2E2E2E] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6D6D6D] text-sm text-center sm:text-left">
            © 2026 {SITE.companyName}.{" "}
            <span className="text-[#505050]">{SITE.legalCredit}.</span>
          </p>
          <div className="flex items-center gap-1.5 text-[#6D6D6D] text-xs">
            <span>Made with</span>
            <span className="text-[#25D366]" aria-hidden="true">♥</span>
            <span>for Indian farmers</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
