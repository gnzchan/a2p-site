# A2P 10DLC Compliance Website Requirements

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

**Mandatory Opt-In Language:**

Consent checkbox with language covering:
- Company name
- SMS use case description
- "Message frequency varies"
- "Message & data rates may apply"
- "Reply STOP to opt out, HELP for assistance"
- Links to Terms of Service and Privacy Policy

**Form Fields:**

- Full Name (required)
- Phone Number (required, validated)
- Email Address (required)
- Property Details (required, textarea)
- Consent Checkbox (unchecked by default, required to submit)

### 3. Privacy Policy (`/privacy-policy`)

- Data collection and usage
- **Required**: "Mobile information will NOT be shared with third parties for marketing purposes"
- A2P 10DLC Compliance section
- Contact information for privacy concerns
- Last Updated date

### 4. Terms of Service (`/terms`)

- SMS messaging terms
- Opt-out rights
- A2P 10DLC Compliance section
- Service limitations
- Last Updated date

### 5. Contact Page (`/contact`)

- Complete business information (company name, address, phone, email)
- Contact form with optional SMS consent checkbox
- Form submittable without SMS consent

## Compliance Requirements

### Opt-In Form Rules

- **SMS Opt-In page**: Consent checkbox required to submit
- **Contact page**: SMS consent is optional (form submits without it)
- **Placement**: Opt-in language must be right above/below the form collecting lead data
- **Checkbox**: Must be unchecked by default

### Required Disclosures

1. Brand/Company name
2. Use case description
3. "Message and data rates may apply"
4. Message frequency disclosure
5. Customer care info ("Reply HELP for assistance")
6. "Reply STOP to opt out"
7. Links to Terms of Service and Privacy Policy

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
