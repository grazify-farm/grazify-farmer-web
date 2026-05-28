import LegalPage from "@/components/legal/LegalPage";
import { termsAndConditions } from "@/lib/legal-content";

export default function TermsPage() {
  return <LegalPage {...termsAndConditions} />;
}
