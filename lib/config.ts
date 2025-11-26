// A2P 10DLC Compliance Website Configuration
// Update this file to change business information across the entire site

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
  useCase: "Text and Voice Communication for A2P Compliant Website",
  messageFrequency: "Based on the use case",

  // Legal Information
  legal: {
    state: "CA",
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
