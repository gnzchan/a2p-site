# A2P 10DLC Compliant Website Template

A Next.js template for businesses sending SMS messages under A2P 10DLC regulations. Fork this repo, update `config.ts`, and deploy.

## Quick Start

1. **Fork this repository**
2. **Clone your fork**
3. **Install dependencies**: `bun install`
4. **Update `config.ts`** with your business info
5. **Run**: `bun dev`
6. **Deploy** to Vercel

## Configuration

Edit `config.ts`:

```typescript
export const config = {
  companyName: "Your Company LLC",
  businessType: "LLC",
  industry: "Your Industry",
  phone: "(555) 123-4567",
  email: "support@yourcompany.com",
  domain: "yourcompany.com",
  smsBrand: "Your Brand Alerts",
  useCase: "order updates and promotional offers",
  messageFrequency: "1-3 messages per week",
  address: {
    street: "123 Your Street",
    suite: "Suite 100",
    city: "Your City",
    state: "NY",
    zip: "10001",
    country: "United States",
  },
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM EST",
    saturday: "10:00 AM - 4:00 PM EST",
    sunday: "Closed",
  },
  legal: {
    lastUpdated: "December 1, 2024",
  },
};
```

## Pages Included

- **Homepage** - Business overview
- **SMS Opt-In** - Compliant opt-in form
- **Sample Messages** - SMS examples
- **Privacy Policy** - A2P compliant
- **Terms of Service** - SMS terms
- **Contact** - Business contact info

## A2P 10DLC Compliance

✅ Explicit opt-in consent  
✅ Required disclosures (frequency, rates, opt-out)  
✅ Business name in messages  
✅ "Reply STOP to unsubscribe"  
✅ "Text HELP for help"  
✅ Privacy protection statement

## Tech Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS + shadcn/ui
- Bun (or npm/yarn)

## Deployment

**Vercel (recommended)**: Connect GitHub repo → Deploy

**Other platforms**: Any Next.js-compatible platform

## Pre-Deployment Checklist

- [ ] Update all info in `config.ts`
- [ ] Domain matches business name
- [ ] HTTPS enabled
- [ ] Contact info consistent
- [ ] Legal review of privacy policy/terms

## Resources

- [Twilio A2P 10DLC Guide](https://www.twilio.com/docs/messaging/a2p-10dlc)
- [CTIA Guidelines](https://www.ctia.org/)
- [Next.js Docs](https://nextjs.org/docs)

## Legal Disclaimer

This template provides a starting point for A2P 10DLC compliance. Consult legal counsel for your specific use case.

---

**Need help?** Check `SITE_REQUIREMENTS.md` for detailed compliance requirements.
