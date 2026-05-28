import LegalPage from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/lib/legal-content";

export default function PrivacyPolicyPage() {
  return <LegalPage {...privacyPolicy} />;
}
