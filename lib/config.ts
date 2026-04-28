// A2P 10DLC Compliance Website Configuration
// Update this file to change business information across the entire site.
//
// Set `useCase` to drive the opt-in flow:
//   - 'CUSTOMER_CARE' → single SMS consent on /contact + standalone /sms-optin page
//   - 'LOW_VOLUME'    → dual consent (transactional + marketing) on /contact only;
//                       /sms-optin redirects to /contact

export const config = {
  // Site Configuration
  site: {
    domain: "a2pcompliantwebsite.com",
    title: "A2P Compliant Website",
    description: "Text and Voice Communication for Real Estate Professionals",
  },

  // Business Identity
  companyName: "A2P Compliant Website LLC",
  businessType: "LLC",
  industry: "Technology Solutions",

  // Contact Information
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
  },
  phone: "(555) 123-4567",
  email: "support@a2pcompliantwebsite.com",
  domain: "a2pcompliantwebsite.com",

  // SMS Service Details
  smsBrand: "A2P Compliant Website",
  // Set to 'CUSTOMER_CARE' or 'LOW_VOLUME' (Twilio's "Low Volume Mixed").
  useCase: "LOW_VOLUME" as "CUSTOMER_CARE" | "LOW_VOLUME",
  customerCareUseCaseDescription:
    "follow-up messages regarding property inquiries, offers, and real estate services",
  messageFrequency: "Varies based on your inquiry",

  // Legal Information
  legal: {
    state: "CA",
    lastUpdated: "April 2026",
  },
} as const;

export const isLvm = () => config.useCase === "LOW_VOLUME";

// Helper functions for common formatting
export const formatAddress = () => {
  return `${config.address.street}\n${config.address.city}, ${config.address.state} ${config.address.zip}`;
};

export const formatFullAddress = () => {
  return `${config.address.street}, ${config.address.city}, ${config.address.state} ${config.address.zip}`;
};

export const getHelpText = () => {
  return "For HELP, reply HELP to any message";
};

export const getStopText = () => {
  return "Text STOP to unsubscribe";
};

// CUSTOMER_CARE: single SMS consent (transactional/customer service only).
export const getSmsConsentLanguage = () => {
  return `By checking, you consent to receive SMS messages from ${config.companyName} related to your property inquiry, including requests for additional details, scheduling, and offer updates related to your submission. Message frequency may vary. Message and data rates may apply. Reply HELP for help or STOP to opt-out.`;
};

// LOW_VOLUME: transactional / informational / customer care opt-in.
export const getTransactionalConsentLanguage = () => {
  return `By checking this box, you agree to receive transactional, informational, and customer care text messages from ${config.companyName} at the number provided. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out and HELP for help.`;
};

// LOW_VOLUME: marketing / promotional opt-in. Includes the TCPA-required
// "Consent is not a condition of purchase." disclosure.
export const getMarketingConsentLanguage = () => {
  return `By checking this box, you agree to receive marketing and promotional text messages from ${config.companyName} at the number provided. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out and HELP for help. Consent is not a condition of purchase.`;
};

export const getTermsConsentLanguage = () => {
  return `By checking, I accept Terms of Service & Privacy Policy.`;
};
