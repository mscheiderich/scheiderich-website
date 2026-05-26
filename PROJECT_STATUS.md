# The Scheiderich Agency — Website Build Status
**Last Updated:** May 26, 2026
**Domain:** thescheiderichagency.com
**VPS:** Bluehost cPanel · IP: 50.6.200.218
**GitHub:** github.com/mscheiderich/scheiderich-website (public repo)
**Local Path:** C:\Users\msche\Documents\scheiderich-website
**Deployment:** VS Code + Claude Code → GitHub → cPanel Git Version Control → Pull or Deploy

---

## Tech Stack
- Pure HTML / CSS / JS — no frameworks, no build process
- Fonts: Lora (headings) + DM Sans (body) via Google Fonts
- Forms: Formspree Ajax (endpoint: mgoqnelq)
- Reviews: Elfsight (app ID: f875a4c0-055c-4184-a2b9-a0be6fa40c15)
- Maps: Google Maps embed (60 W Park St, Buford GA 30518)
- Email marketing: MailerLite
- DNS: GoDaddy → Cloudflare nameservers → A record to VPS
- **ALL DNS changes must be made in Cloudflare, never at GoDaddy**

---

## Design Tokens
```css
--navy:      #1e3148;
--navy-lt:   #e8edf4;
--orange:    #d9682a;
--orange-h:  #bf5821;
--bg:        #f6f4f1;
--bg-w:      #ffffff;
--bg-s:      #eeebe6;
--text:      #1c2330;
--muted:     #5f6b79;
--border:    #dedad4;
--btn-h:     48px;
--btn-px:    28px;
```

### Button System (enforced on all pages)
```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; padding: 0 28px; border-radius: 8px;
  font-size: 14px; font-weight: 600; border: 2px solid transparent;
}
```

---

## Contact & Agency Info
- **Phone:** 770-268-4418
- **Agency email:** info@gahomeinsuranceexperts.com
- **Mike direct:** mike@gahomeinsuranceexperts.com
- **Address:** 60 W Park St, Buford, GA 30518
- **Medium:** medium.com/@mscheiderich

---

## Social Media Links (added to all page footers May 26, 2026)
- **Facebook:** https://www.facebook.com/ScheiderichAgency/
- **LinkedIn:** https://www.linkedin.com/company/thescheiderichagency
- **Instagram:** https://www.instagram.com/scheiderichagency

---

## Team (correct order for all photo grids)
| Name | Title |
|------|-------|
| Mike Scheiderich | Agency Principal |
| Crissy Shatzel | Office Manager · Licensed Insurance Agent |
| Iris Salgado | Licensed Insurance Agent · Bilingual EN/ES |
| Mark Hill | Licensed Insurance Agent |
| Wendy Alaniz | Licensed Customer Service Rep · Bilingual EN/ES |
| Scott Kesler | Licensed Insurance Agent |

**Image files in repo root:**
`logo.png` · `mike-hero.jpeg` · `mike-scheiderich.png` · `crissy-shatzel.png` · `iris-salgado.png` · `mark-hill.png` · `wendy-alaniz.png` · `scott-kesler.png`

---

## Compliance Rules
- CAN say "Allstate" and "Mike is an Allstate agent"
- CANNOT use Allstate logos, slogans ("You're in good hands"), "mayhem" references
- The Scheiderich Agency must always be the primary brand
- Every change affecting data collection, analytics, forms, calculators, or legal exposure → update privacy-policy.html, terms-of-use.html, and/or disclaimer.html in the same commit

---

## Pages Built & Deployed ✅

| File | Status | Notes |
|------|--------|-------|
| index.html | ✅ Live | Homepage — city buttons updated to link to new landing pages |
| about.html | ✅ Live | Team grid, stats bar, value cards |
| contact.html | ✅ Live | Hours updated: Mon–Fri 8AM–5PM, Sat by appt, Sun closed |
| home-insurance.html | ✅ Live | Full service page with FAQ schema |
| auto-insurance.html | ✅ Live | Liability truth section, UM/UIM deep dive |
| life-insurance.html | ✅ Live | Embedded DIME calculator, term vs whole comparison |
| business-insurance.html | ✅ Live | GL vs BOP comparison |
| life-insurance-calculator.html | ✅ Live | Standalone calculator page |
| privacy-policy.html | ✅ Live | Full privacy policy with sidebar TOC |
| terms-of-use.html | ✅ Live | Full terms with sidebar TOC |
| disclaimer.html | ✅ Live | Insurance-specific disclaimer |
| bundle-and-save.html | ✅ Live | Admin cost explainer, bundle combinations |
| additional-coverage.html | ✅ Live | Renters, landlord, motorcycle, boat, VIP/scheduled property |
| umbrella-insurance.html | ✅ Live | Educational, broad, honest about market conditions |
| buford-ga-insurance.html | ✅ Live | City landing page — local SEO, embedded mini form |
| gwinnett-county-insurance.html | ✅ Live | City landing page — local SEO, embedded mini form |
| suwanee-ga-insurance.html | ✅ Live | City landing page — local SEO, embedded mini form |
| team/index.html | ✅ Committed | Internal DD & GS Tracker — password protected at /team/ |

---

## Navigation Structure

```
Home | Auto | Life | More Coverage ▾ | About | Contact    [Get a Quote]
                          ↓
                   Business Insurance
                   Bundle & Save
                   Additional Coverage
                   Umbrella Insurance
```

---

## Internal Team Portal (/team/)

### DD & Good Student Discount Tracker
- **URL:** thescheiderichagency.com/team/
- **Password protected:** via cPanel Directory Privacy on /team/ folder
- **Primary user:** Wendy Alaniz (Licensed Customer Service Rep)
- **Database:** Google Sheets
  - Sheet ID: 1GNDONX_yupxaHs4Amxr_7TwX7bJ-3djouayzIzpR79c
  - Sheet name: Scheiderich Agency — DD Tracker
  - Clients tab: 21 columns (id through updatedAt)
  - Config tab: lastUpdated setting
- **Google Cloud project:** DD Tracker
- **API Key:** AIzaSyAqfMT5AKrCEuPChn2YD2MbfT10sG660B8 (restricted to Sheets API + domain)
- **Apps Script Web App URL:** https://script.google.com/macros/s/AKfycbxxtQwMbJ4PQuqsfSnyF7V-it3sfmfGNtsR_OJBwuQcB-M5gzbdlFj92jSAWE5ge8bD/exec
- **Architecture:** DataLayer object isolated at top of script for easy migration to Supabase later
- **Status logic:** Auto-calculated (Overdue/Due Soon/Pending/Complete) — only Discount Removed is manual
- **Priority sort:** Overdue → Due Soon → Pending → Complete → Discount Removed

### Planned Team Portal Modules (not yet built)
- [ ] Sales & Referral Tracker with 3-level attribution and gamification leaderboard
- [ ] Process Improvement submission form (anonymous)
- [ ] Marketing Ideas submission form (attributed, bonus-eligible)
- [ ] Resource links dashboard (shared docs, PPT folder, external tools)

---

## Life Insurance Calculator
- **Live at:** thescheiderichagency.com/life-insurance-calculator.html
- **Also embedded in:** life-insurance.html
- **Old Vercel subdomain:** lifecalculator.thescheiderichagency.com (still live)
- **Medium profile link** needs updating from old subdomain to new URL — still pending

---

## Pending Tasks

### IMMEDIATE (next session)
- [ ] Test DD Tracker live at thescheiderichagency.com/team/ — add test client, verify Google Sheet populates
- [ ] Fix CORS issue if Apps Script POST fails from live domain (one-line fix ready)
- [ ] Update Medium profile link from old Vercel subdomain to new calculator URL
- [ ] Fix DD Tracker header title: "DD & GS Tracker" → "Defensive Driving & Good Student Discount Tracker"

### CITY PAGES — NEXT TO BUILD
- [ ] atlanta-ga-insurance.html
- [ ] cumming-ga-insurance.html
- [ ] lawrenceville-ga-insurance.html
- [ ] gainesville-ga-insurance.html
- [ ] insurance-review.html (standalone page — currently links to contact.html)
- [ ] new-homebuyer-insurance.html

### NAVIGATION & INTERNAL LINKS
- [ ] Add internal links from home/auto pages to umbrella-insurance.html
- [ ] Add internal link from home-insurance.html gaps section to additional-coverage.html

### TEAM PORTAL — NEXT MODULES
- [ ] Sales & Referral Tracker (needs detailed metrics spreadsheet from Mike first)
- [ ] Process improvement + marketing idea submission pages
- [ ] Resource links dashboard

### THIRD-PARTY & INTEGRATIONS
- [ ] Elfsight Google Reviews widget — needs Google Business Profile connected in Elfsight dashboard
- [ ] Confirm Formspree notification email set to info@gahomeinsuranceexperts.com in dashboard
- [ ] Google Analytics setup (already covered broadly in privacy policy)
- [ ] DIIB analytics setup (same — already covered in privacy policy)

### LEGAL PAGES
- [ ] Review all three legal pages with an attorney (recommended — not required to launch)

---

## Deployment Workflow (every time)

1. Make changes locally in C:\Users\msche\Documents\scheiderich-website\
2. Give Claude Code the commit prompt
3. Go to cPanel → Git Version Control → Manage → Pull or Deploy
4. Verify live at thescheiderichagency.com

### Standard Claude Code Commit Prompt Pattern
"Commit all changed files with message '[description]' and push to GitHub."

---

## Formspree
- Endpoint: mgoqnelq (all city pages use this same endpoint)
- Hidden source field on each city page identifies lead origin: _source
- Current plan: Free (1 form, 50 submissions/month)
- Upgrade to Basic ($10/mo) if lead volume exceeds 50/month

---

## Content Philosophy (applied to all pages)
1. **Personal service is #1** — not an 800 number, come to our office, real agents
2. **Honest about rates** — maximize value at reasonable price, never overpromise
3. **Educational/informational tone** — written for AI search authority, not just keywords
4. **Local Georgia specifics** — Georgia law, Georgia drivers, Georgia homeowners throughout
5. **Never overpromise** — no guaranteed savings, no carrier-specific claims beyond approved

---

## SEO Structure
- Every service page: H1 → H2 → H3 hierarchy, FAQPage schema, InsuranceAgency schema
- City pages: LocalBusiness schema, BreadcrumbList, FAQPage schema
- Calculator page: WebApplication schema
- Legal pages: indexed but not schema-marked
- Internal linking: service pages cross-link to related coverage and bundle page
- All calculator links: point to /life-insurance-calculator.html (not Vercel subdomain)

---

## Umbrella Insurance — Special Note
Market conditions are actively evolving. Page is intentionally broad — no carrier names, no specific dollar minimums. When Allstate brings back umbrella product later in 2026, update umbrella-insurance.html with current requirements. DO NOT add specific minimums until product is confirmed stable.

---

## VIP / Scheduled Personal Property — Key Differentiator
Written as standalone policy (not homeowners endorsement). Key benefits to always mention:
1. Claim on VIP policy does NOT appear on homeowners claims history
2. More flexible deductible options than endorsement allows
3. Full appraised value coverage vs. homeowners category caps

---

*This file lives in the project root. Update it whenever pages are added, tasks completed, or site direction changes.*
