/**
 * Legal page content — Privacy Policy and Terms & Conditions.
 * Page files import these constants and pass them to <LegalPage>.
 */

export type LegalSection = {
  heading: string;
  content: string;
};

export type LegalDocument = {
  title:       string;
  lastUpdated: string;
  summary:     string;
  sections:    LegalSection[];
};

/* ── Privacy Policy ─────────────────────────────── */
export const privacyPolicy: LegalDocument = {
  title:       "Privacy Policy",
  lastUpdated: "April 12, 2026",
  summary:
    "This Privacy Policy explains how Grazilink collects, uses, stores, and protects personal information for users in the farmers community.",
  sections: [
    { heading: "Introduction",            content: "Grazilink values your privacy. This Privacy Policy explains what information we collect, why we collect it, how we use it, and the choices available to you when using our application." },
    { heading: "Information We Collect",  content: "When you create or use an account, we may collect your email address, username, and password. You may also provide your phone number and location. Some information may be optional depending on the feature you use." },
    { heading: "Information You Provide", content: "We collect the information you enter directly into the application, including account details, profile details, contact details, and other information you choose to share while using the service." },
    { heading: "How We Use Your Information", content: "We use your information to create and manage your account, authenticate access, personalize your experience, improve services for the farmers community, support communication, enhance security, and provide platform functionality." },
    { heading: "Email Address",           content: "Your email address is used for account creation, login, account-related communication, security verification, and service updates when necessary." },
    { heading: "Username",                content: "Your username is used to identify your account within the application and may be displayed in relevant areas of the service where user identity is needed." },
    { heading: "Password",                content: "Your password is collected to secure your account and authenticate access. Passwords should be stored and handled securely using appropriate security measures and should not be exposed in plain text." },
    { heading: "Phone Number",            content: "If you provide a phone number, it may be used for account support, communication, verification, or user convenience features made available through the application." },
    { heading: "Location Information",    content: "If you provide your location, it may be used to improve relevance, personalize location-based features, and better support services connected to your area and farming community needs." },
    { heading: "Legal Basis and Purpose", content: "We collect and use personal information only for legitimate service-related purposes, including account operation, community support, platform safety, service improvement, and compliance with applicable legal obligations." },
    { heading: "Data Sharing",            content: "We do not share personal information with unauthorized parties. We may share information with service providers or partners only when necessary to operate, maintain, secure, or improve the application, and only under appropriate obligations." },
    { heading: "Data Retention",          content: "We retain personal information for as long as necessary to provide services, maintain your account, resolve disputes, comply with legal obligations, enforce agreements, and support legitimate business operations." },
    { heading: "Data Security",           content: "We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, misuse, disclosure, or alteration. However, no system can guarantee complete security." },
    { heading: "Your Choices",            content: "You may review and update information you provide through available account or profile features. You may also choose whether to provide optional information such as phone number or location where those fields are not mandatory." },
    { heading: "Children's Privacy",      content: "The application is not intended for use by individuals who are not legally permitted to create an account under applicable law. We do not knowingly collect personal information from users where such collection would be prohibited by law." },
    { heading: "Changes to This Policy",  content: "We may update this Privacy Policy from time to time to reflect service changes, legal requirements, or operational improvements. The updated version becomes effective when it is published in the application." },
    { heading: "Contact",                 content: "If you have questions about this Privacy Policy or how your information is handled, contact: grazlink.farm@gmail.com" },
  ],
};

/* ── Terms & Conditions ─────────────────────────── */
export const termsAndConditions: LegalDocument = {
  title:       "Terms & Conditions",
  lastUpdated: "April 12, 2026",
  summary:
    "These Terms & Conditions govern your use of the Grazilink customer application and services created for the farmers community.",
  sections: [
    { heading: "Acceptance of Terms",       content: "By creating an account, accessing, or using the application, you agree to be bound by these Terms & Conditions. If you do not agree, you should not use the application." },
    { heading: "Purpose of the Application",content: "Grazilink is built to support the farmers community by helping users connect with services, information, and opportunities made available through the platform." },
    { heading: "Eligibility",               content: "You must provide accurate information when creating an account and using the application. You are responsible for ensuring that your use of the application complies with applicable laws and regulations." },
    { heading: "Account Registration",      content: "To use certain features, you may be required to create an account using your email address, username, and password. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account." },
    { heading: "User Information",          content: "When using the application, you may provide your email address, username, password, phone number, and location. Phone number and location may be optional in some cases, but when you provide them, you confirm that the information is accurate and belongs to you or that you are authorized to share it." },
    { heading: "Acceptable Use",            content: "You agree not to misuse the application, interfere with its operation, attempt unauthorized access, upload harmful content, impersonate another person, or use the service for fraudulent, abusive, unlawful, or harmful purposes." },
    { heading: "Community Conduct",         content: "Because this application serves the farmers community, users are expected to interact respectfully and responsibly. Harassment, misleading information, abusive language, exploitation, and harmful conduct are not permitted." },
    { heading: "Content and Information",   content: "Information available through the application is provided for general service and community support purposes. While we aim to keep information useful and accurate, we do not guarantee that all content will always be complete, current, or error-free." },
    { heading: "Privacy",                   content: "Your use of the application is also governed by our Privacy Policy. The Privacy Policy explains how we collect, use, store, and protect your personal information." },
    { heading: "Security",                  content: "You are responsible for choosing a secure password and protecting your account access. We may take reasonable steps to protect the platform, but no method of storage or transmission is completely secure." },
    { heading: "Suspension or Termination", content: "We may suspend, restrict, or terminate your access to the application if we believe you have violated these Terms & Conditions, created risk for other users, or used the application in an unlawful or harmful way." },
    { heading: "Service Changes",           content: "We may update, modify, limit, or discontinue any part of the application at any time to improve the service, comply with legal requirements, or support business and community needs." },
    { heading: "Disclaimer",                content: "The application is provided on an as available and as is basis. To the fullest extent permitted by law, we disclaim warranties of any kind, whether express or implied, including suitability, availability, and fitness for a particular purpose." },
    { heading: "Limitation of Liability",   content: "To the fullest extent permitted by law, Grazilink and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the application." },
    { heading: "Changes to These Terms",    content: "We may revise these Terms & Conditions from time to time. Updated versions become effective when published in the application. Continued use of the application after an update means you accept the revised Terms." },
    { heading: "Contact",                   content: "If you have questions about these Terms & Conditions, contact: grazlink.farm@gmail.com" },
  ],
};
