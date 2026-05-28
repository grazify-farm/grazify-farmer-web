import { LANGUAGES } from "@/lib/site-content";
import ScreenVisual from "@/components/screens/ScreenVisual";
import Reveal from "@/components/common/Reveal";
import { ASSETS } from "@/lib/assets";

export default function LanguageSection() {
  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Language screen */}
          <Reveal className="flex justify-center flex-shrink-0 w-full lg:max-w-[240px]">
            <ScreenVisual
              portraitSrc={ASSETS.screens.language.portrait}
              leftSrc={ASSETS.screens.language.left}
              alt="GraziLink language selection screen — choose from 13+ Indian languages"
              preferred="portrait"
              hoverSwap
              glow
              maxWidth={240}
            />
          </Reveal>

          {/* Text + chips */}
          <Reveal delay={120} className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-[#EAF8F0] text-[#25D366] text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              🌐 13+ Indian languages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202020] mb-4 leading-tight">
              Built for India&apos;s{" "}
              <span className="text-[#25D366]">diverse farming communities</span>
            </h2>
            <p className="text-[#6D6D6D] text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              GraziLink supports 13+ Indian languages, helping farmers use the
              app in the language they are comfortable with.
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="bg-white border border-[#E0E0E0] text-[#202020] text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:border-[#25D366] hover:text-[#25D366] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
