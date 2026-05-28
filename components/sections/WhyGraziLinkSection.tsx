import Reveal from "@/components/common/Reveal";
import { WHY_POINTS } from "@/lib/site-content";

export default function WhyGraziLinkSection() {
  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-4xl mx-auto px-4">

        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#202020] mb-4">
            Why farmers choose{" "}
            <span className="text-[#25D366]">GraziLink</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHY_POINTS.map((point, i) => (
            <Reveal key={point} delay={i * 55}>
              <div className="flex items-start gap-3 bg-white border border-[#D0D0D0] rounded-3xl p-4 hover:border-[#25D366] transition-all h-full">
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#202020] text-sm font-medium leading-relaxed">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
