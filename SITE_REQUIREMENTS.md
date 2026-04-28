# A2P 10DLC Compliance Website Requirements

This template supports two A2P 10DLC campaign types — pick one via `useCase` in `lib/config.ts`:

- **`CUSTOMER_CARE`** — Customer Care campaign. Customer-service-only SMS (appointment confirmations, scheduling updates, property inquiry follow-ups, support). No marketing or promotional messaging. Single SMS consent on `/contact`, plus a standalone `/sms-optin` page for explicit opt-ins.
- **`LOW_VOLUME`** — Low Volume Mixed campaign (Twilio's "Low Volume Mixed"). Sends BOTH transactional/customer care SMS AND marketing/promotional SMS to opted-in users. Dual consent (transactional + marketing) on `/contact`. No standalone `/sms-optin` page (route redirects to `/contact`).

The active use case is set at the top of `lib/config.ts`:

```ts
useCase: "LOW_VOLUME" as "CUSTOMER_CARE" | "LOW_VOLUME"
```

The site renders the correct opt-in flow, navigation, and consent language automatically based on this flag.

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

### 2. Contact (`/contact`) — Primary opt-in destination

**Form fields:** name, email, phone, subject, message (matching the schema both use cases share).

**Consent checkboxes — `CUSTOMER_CARE` mode:**

1. **SMS Consent** — single, optional checkbox covering customer-service SMS (unchecked by default).
2. **Terms & Privacy** — agreement to Terms and Privacy Policy (unchecked by default).

Form is submittable without checking either consent box.

**Consent checkboxes — `LOW_VOLUME` mode:**

1. **Transactional / Customer Care Consent** — optional, unchecked by default.
2. **Marketing / Promotional Consent** — optional, unchecked by default. Includes the TCPA-required "Consent is not a condition of purchase." disclosure.
3. **Terms & Privacy** — agreement to Terms and Privacy Policy.

Form is submittable without checking any consent box.

### 3. SMS Opt-In (`/sms-optin`) — `CUSTOMER_CARE` only

**Two separate consent checkboxes (both required to submit):**

1. **SMS Consent** — consent to receive customer service SMS messages (unchecked by default)
2. **Terms & Privacy** — agreement to Terms of Service and Privacy Policy (unchecked by default)

**Form Fields:**

- Full Name (required)
- Phone Number (required, validated)
- Email Address (required)
- Property Details (required, textarea)

In `LOW_VOLUME` mode this route redirects to `/contact`. The "SMS Opt-In" navigation link is also hidden from the header.

### 4. Privacy Policy (`/privacy-policy`)

- Data collection and usage
- **Required**: "Mobile information will NOT be shared with third parties for marketing purposes"
- A2P 10DLC Compliance section
  - In `LOW_VOLUME` mode: covers both transactional and marketing SMS, separated by consent
- Contact information for privacy concerns
- Last Updated date

### 5. Terms of Service (`/terms`)

- SMS messaging terms
  - `CUSTOMER_CARE`: customer-service focus
  - `LOW_VOLUME`: covers both transactional and marketing, with explicit mention of separate consents and the "Consent is not a condition of purchase" requirement on marketing
- Opt-out rights
- A2P 10DLC Compliance section
- Service limitations
- Last Updated date

## Compliance Requirements

### Consent Checkbox Rules

- **Checkboxes must be unchecked by default**, regardless of mode.
- **SMS consent and Terms/Privacy are separate** — never bundled.
- **`LOW_VOLUME` only**: transactional and marketing consents must be **separate** checkboxes (never bundled).
- Submit button text reads "Submit" in both modes.

### Required Disclosures

1. Brand/Company name
2. Use case description (customer service for `CUSTOMER_CARE`; both transactional and marketing categories for `LOW_VOLUME`)
3. "Message and data rates may apply"
4. Message frequency disclosure
5. Customer care info ("Reply HELP for assistance")
6. "Reply STOP to opt out"
7. Links to Terms of Service and Privacy Policy (in Terms checkbox)
8. **`LOW_VOLUME` only**: "Consent is not a condition of purchase." on the marketing checkbox.

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

All business information is centralized in `lib/config.ts`. Update this file to customize the site for your business.

For Lovable-based site generation, two prompt variants are provided:

- `public/lovable-prompt-customer-care.txt` + `public/guidelines-customer-care.txt` — generate a customer-care site.
- `public/lovable-prompt-lvm.txt` + `public/guidelines-lvm.txt` — generate a Low Volume Mixed site.

Pick the pair matching your campaign use case.
