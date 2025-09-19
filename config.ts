// A2P 10DLC Compliance Website Configuration
// Update this file to change business information across the entire site

export const config = {
  // Business Identity
  companyName: "Acme Solutions LLC",
  businessType: "LLC",
  industry: "Technology Solutions",

  // Contact Information
  address: {
    street: "123 Business Ave, Suite 100",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  phone: "(555) 123-4567",
  email: "support@acmesolutions.com",
  domain: "acmesolutions.com",

  // SMS Service Details
  smsBrand: "Acme Alerts",
  useCase: "order updates and promotional offers",
  messageFrequency: "1-3 messages per week",

  // Sample Messages
  sampleMessages: [
    {
      id: 1,
      type: "Order Update",
      message:
        "Hi! Your order #12345 has shipped. Track at acme.com/track. Reply STOP to unsubscribe.",
      frequency: "Per order",
    },
    {
      id: 2,
      type: "Promotional Offer",
      message:
        "Acme Solutions: 20% off your next purchase! Use code SAVE20. Reply STOP to unsubscribe.",
      frequency: "Weekly",
    },
    {
      id: 3,
      type: "Appointment Reminder",
      message:
        "Your appointment with Acme Solutions is tomorrow at 2 PM. Reply STOP to unsubscribe.",
      frequency: "Per appointment",
    },
    {
      id: 4,
      type: "Service Update",
      message:
        "Acme Solutions: Your service request has been completed. Thank you for choosing us! Reply STOP to unsubscribe.",
      frequency: "Per service",
    },
    {
      id: 5,
      type: "Account Notification",
      message:
        "Acme Solutions: Your account has been updated successfully. Reply STOP to unsubscribe.",
      frequency: "As needed",
    },
  ],

  // Business Hours
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },

  // Legal Information
  legal: {
    state: "New York",
    lastUpdated: "December 2024",
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
  return `For HELP, text ${config.phone}`;
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
