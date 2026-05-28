import FeatureCard from "./FeatureCard";
import Reveal from "@/components/common/Reveal";
import { FEATURES, FEATURED_FEATURE_TITLE } from "@/lib/site-content";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section heading */}
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#EAF8F0] text-[#25D366] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ✦ 10 powerful features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202020] mb-4">
            Everything farmers need to{" "}
            <span className="text-[#25D366]">connect, learn</span>
            {" "}and grow
          </h2>
          <p className="text-[#6D6D6D] text-lg max-w-2xl mx-auto">
            GraziLink brings the essential tools for modern farmers into one
            simple, easy-to-use community app.
          </p>
        </Reveal>

        {/* Cards — staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 55}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                featured={feature.title === FEATURED_FEATURE_TITLE}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
