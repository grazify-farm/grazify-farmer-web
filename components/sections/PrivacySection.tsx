import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import { PRIVACY_CARDS } from "@/lib/site-content";

export default function PrivacySection() {
  return (
    <section id="privacy" className="py-20 bg-[#F7F7F7]">
      <Container size="narrow" className="text-center">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202020] mb-4">
            Privacy and security <span className="text-[#25D366]">matter</span>
          </h2>
          <p className="text-[#6D6D6D] text-base md:text-lg mb-10 max-w-2xl mx-auto">
            We respect user privacy and take appropriate steps to protect personal
            information. Users can request deletion of their account and associated
            data at any time.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRIVACY_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div className="bg-white border border-[#D0D0D0] rounded-[2rem] p-6 text-left hover:border-[#25D366] hover:shadow-md transition-all h-full">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-[#202020] mb-2">{card.title}</h3>
                <p className="text-[#6D6D6D] text-sm">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}
