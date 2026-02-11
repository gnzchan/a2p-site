# A2P 10DLC Compliance Website Requirements

## Campaign Type: Customer Care

This site template is configured for the **Customer Care** A2P 10DLC campaign type. SMS messages are limited to customer service purposes (appointment confirmations, scheduling updates, property inquiry follow-ups, customer support). No marketing or promotional messaging.

## Deployment Requirements (Not Site Development)

- **HTTPS**: Site must use `https://` protocol (deployment configuration)
- **Domain**: Must match legal company name (domain registration)
- **Contact Consistency**: Site contact info must match form details and EIN letter (deployment verification)
- **Email Domain**: Business email domain must match website domain (email setup)
  - Example: `https://company.com/` → `support@company.com`

## Required Pages

### 1. Homepage (`/`)

- Business overview and branding
- Contact information prominently displayed

### 2. SMS Opt-In Page (`/sms-optin`)

**Two separate consent checkboxes (both required to submit):**

1. **SMS Consent** — consent to receive customer service SMS messages (unchecked by default)
2. **Terms & Privacy** — agreement to Terms of Service and Privacy Policy (unchecked by default)

**Form Fields:**

- Full Name (required)
- Phone Number (required, validated)
- Email Address (required)
- Property Details (required, textarea)

### 3. Privacy Policy (`/privacy-policy`)

- Data collection and usage
- **Required**: "Mobile information will NOT be shared with third parties for marketing purposes"
- A2P 10DLC Compliance section
- Contact information for privacy concerns
- Last Updated date

### 4. Terms of Service (`/terms`)

- SMS messaging terms (customer service focus)
- Opt-out rights
- A2P 10DLC Compliance section
- Service limitations
- Last Updated date

### 5. Contact Page (`/contact`)

- Complete business information (company name, address, phone, email)
- Contact form with optional SMS consent (2 checkboxes, both optional)
- Form submittable without checking either consent box

## Compliance Requirements

### Consent Checkbox Rules

- **SMS Opt-In page**: Both checkboxes required to submit
- **Contact page**: Both checkboxes optional (form submits without them)
- **Checkboxes**: Must be unchecked by default
- **SMS consent and Terms/Privacy are separate** — never bundled into one checkbox

### Required Disclosures

1. Brand/Company name
2. Use case description (customer service, not marketing)
3. "Message and data rates may apply"
4. Message frequency disclosure
5. Customer care info ("Reply HELP for assistance")
6. "Reply STOP to opt out"
7. Links to Terms of Service and Privacy Policy (in Terms checkbox)

## Business Information Required (Website Only)

- Official business name (matches legal entity)
- Complete address (street, city, state, ZIP, country)
- Business type (LLC, Corp, etc.)
- Industry classification

## Design Requirements

- Mobile responsive (including working mobile navigation menu)
- Professional appearance
- Clear navigation
- Fast loading
- Brand consistency

## Configuration

All business information is centralized in `lib/config.ts`. Update this file to customize the site for your business. See `public/guidelines.txt` for the full A2P 10DLC compliance checklist and `public/lovable-prompt.txt` for generating an equivalent frontend through Lovable.
