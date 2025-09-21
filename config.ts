// A2P 10DLC Compliance Website Configuration
// Update this file to change business information across the entire site

export const config = {
  // Business Identity
  companyName: "Reply Smart LLC",
  businessType: "LLC",
  industry: "Technology Solutions",

  // Contact Information
  address: {
    street: "801 S Miami Ave 3410",
    city: "Miami",
    state: "NY",
    zip: "33130",
    country: "USA",
  },
  phone: "703-919-9426",
  email: "support@replysmart.ai",
  domain: "replysmart.ai",

  // SMS Service Details
  smsBrand: "Reply Smart",
  useCase: "Text and Voice Communication for Real Estate Professionals",
  messageFrequency: "Based on the use case",

  // Legal Information
  legal: {
    state: "Miami FL",
    lastUpdated: "September 2025",
  },
} as const;

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

export const getOptInLanguage = () => {
  return `If you wish to receive SMS text messages from ${
    config.companyName
  }, please fill out this form.

By completing this form, you give consent to "${
    config.smsBrand
  }" to send SMS text messages for ${
    config.useCase
  } according to our Terms and Conditions and Privacy Policy.

Message frequency varies. Standard message and data rates may apply.
${getHelpText()}.
${getStopText()}.`;
};

export const getConsentCheckboxText = () => {
  return `Check this box to consent to receiving SMS text messages from ${config.smsBrand}`;
};
