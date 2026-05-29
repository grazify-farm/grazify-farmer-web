import Link from "next/link";
import Container from "@/components/common/Container";
import { SITE } from "@/lib/constants";
import type { LegalDocument } from "@/lib/legal-content";

export default function LegalPage({
  title,
  lastUpdated,
  summary,
  sections,
}: LegalDocument) {
  return (
    <main className="bg-[#F7F7F7] min-h-screen">

      <div className="bg-[#EAF8F0] pt-24 pb-12 px-4 border-b border-[#D8F0E6]">
        <Container size="narrow" className="px-0">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#25D366] text-sm font-semibold mb-6 hover:underline"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {SITE.appName}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[#202020] mb-2">{title}</h1>
          <p className="text-[#6D6D6D] text-sm font-medium">Last updated: {lastUpdated}</p>
          <p className="text-[#9D9D9D] text-xs mt-1">
            {SITE.appName} is operated as a product of{" "}
            <span className="text-[#25D366] font-semibold">{SITE.companyName}</span>.
          </p>
        </Container>
      </div>

      <Container size="narrow" className="py-12">
        <div className="bg-white border border-[#D0D0D0] rounded-[1.5rem] p-6 mb-10 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#25D366] text-lg" aria-hidden="true">📋</span>
            <h2 className="font-bold text-[#202020] text-base">Summary</h2>
          </div>
          <p className="text-[#6D6D6D] text-sm leading-relaxed">{summary}</p>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div
              key={section.heading}
              className="bg-white border border-[#EBEBEB] rounded-[1.25rem] p-6 shadow-sm hover:border-[#D0D0D0] transition-colors"
            >
              <h2 className="text-base font-bold text-[#202020] mb-2.5 flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EAF8F0] text-[#25D366] text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {section.heading}
              </h2>
              <p className="text-[#6D6D6D] text-sm leading-relaxed pl-8">{section.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
