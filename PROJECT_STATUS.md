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
| index.html | ✅ Live | Homepage — city buttons link to landing pages; Team Login link in header |
| about.html | ✅ Live | Team grid, stats bar, value cards; Team Login link in header |
| contact.html | ✅ Live | Hours: Mon–Fri 8AM–5PM, Sat by appt, Sun closed; Team Login in header |
| home-insurance.html | ✅ Live | Full service page with FAQ schema; Team Login in header |
| auto-insurance.html | ✅ Live | Liability truth section, UM/UIM deep dive; Team Login in header |
| life-insurance.html | ✅ Live | Embedded DIME calculator, term vs whole; Team Login in header |
| business-insurance.html | ✅ Live | GL vs BOP comparison; Team Login in header |
| life-insurance-calculator.html | ✅ Live | Standalone calculator page; Team Login in header |
| privacy-policy.html | ✅ Live | Full privacy policy with sidebar TOC |
| terms-of-use.html | ✅ Live | Full terms with sidebar TOC |
| disclaimer.html | ✅ Live | Insurance-specific disclaimer |
| bundle-and-save.html | ✅ Live | Admin cost explainer, bundle combinations |
| additional-coverage.html | ✅ Live | Renters, landlord, motorcycle, boat, VIP/scheduled property |
| umbrella-insurance.html | ✅ Live | Educational, broad, honest about market conditions |
| buford-ga-insurance.html | ✅ Live | City landing page — local SEO, embedded mini form |
| gwinnett-county-insurance.html | ✅ Live | City landing page — local SEO, embedded mini form |
| suwanee-ga-insurance.html | ✅ Live | City landing page — local SEO, embedded mini form |
| team/index.html | ✅ Live | Agent portal dashboard — password protected |
| team/dd-tracker/index.html | ✅ Live | DD & GS Tracker — moved from /team/ |

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

**Team Login link:** Small unobtrusive link (top-left of header, 
rgba(255,255,255,0.4)) on all public pages → links to /team/

---

## Internal Team Portal (/team/)

### Agent Portal Dashboard
- **URL:** thescheiderichagency.com/team/
- **Password protected:** via cPanel Directory Privacy on /team/ folder
  (all subfolders inherit protection automatically)
- **What it shows:**
  - Time-aware greeting
  - Live DD Tracker stats strip (Overdue / Due Soon / Pending counts)
  - 6 tool cards: DD Tracker (live), Hero Profiler (live), 
    Sales Tracker (coming soon), Process Improvement (coming soon),
    Marketing Ideas (coming soon), Resource Library (coming soon)
- **Hero Profiler card:** Agent dropdown selector builds URL with 
  ?agent=[firstname] parameter before launching

### DD & Good Student Discount Tracker
- **URL:** thescheiderichagency.com/team/dd-tracker/
- **Primary user:** Wendy Alaniz (Licensed Customer Service Rep)
- **Database:** Google Sheets
  - Sheet ID: 1GNDONX_yupxaHs4Amxr_7TwX7bJ-3djouayzIzpR79c
  - Sheet name: Scheiderich Agency — DD Tracker
  - Clients tab: 21 columns (id through updatedAt)
  - Config tab: lastUpdated setting
- **Google Cloud project:** DD Tracker
- **API Key:** AIzaSyAqfMT5AKrCEuPChn2YD2MbfT10sG660B8
  (restricted to Sheets API + thescheiderichagency.com domain)
- **Apps Script Web App URL:**
  https://script.google.com/macros/s/AKfycbxxtQwMbJ4PQuqsfSnyF7V-it3sfmfGNtsR_OJBwuQcB-M5gzbdlFj92jSAWE5ge8bD/exec
- **Architecture:** DataLayer object isolated for easy Supabase migration later
- **CORS fix:** All fetch calls use mode: 'no-cors', Content-Type: text/plain
- **Statuses:** Overdue / Due Soon / Pending / Complete (auto-calculated)
  Discount Removed / Archived (manual)
- **Archive/Unarchive:** Full restore with auto status recalculation
- **Inline toggles:** Thank You and Welcome Call — click to toggle,
  auto-stamps date (date only, no time), no modal required
- **Migration:** 31 historical records loaded via localStorage 
  migration (runs once only — localStorage key: migrationComplete)
- **Priority sort:** Overdue → Due Soon → Pending → Complete → 
  Discount Removed → Archived (hidden by default)

### Hero Profiler
- **URL:** hero-profiler.thescheiderichagency.com
- **Hosted on:** Vercel (project: hero-profiler, account: mike-2004s)
- **Repo:** separate GitHub repo — hero-profiler
- **Agent URL pattern:** ?agent=[firstname] 
  e.g. hero-profiler.thescheiderichagency.com?agent=mike
- **Agent values:** mike, crissy, iris, mark, wendy, scott
- **Old domain removed:** hero-profiler.gahomeinsuranceexperts.com
- **Environment variables:** stored in Vercel (GOOGLE_CLIENT_ID, 
  GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN)
- **Note:** Cannot be moved to VPS — requires Vercel serverless 
  functions. Keep on Vercel permanently.

### Planned Team Portal Modules (not yet built)
- [ ] Sales & Referral Tracker — 3-level attribution (industry → 
      company → partner), gamification leaderboard, real-time display
      NOTE: Mike needs to provide metrics spreadsheet before build
- [ ] Process Improvement submission form (anonymous submissions)
- [ ] Marketing Ideas submission form (attributed, bonus-eligible)
- [ ] Resource Library (shared docs, PPT folder, external tool links)

---

## Life Insurance Calculator
- **Live at:** thescheiderichagency.com/life-insurance-calculator.html
- **Also embedded in:** life-insurance.html
- **Old Vercel subdomain:** lifecalculator.thescheiderichagency.com (still live)
- **Medium profile link** needs updating from old subdomain to new URL — STILL PENDING

---

## Pending Tasks

### IMMEDIATE (next session)
- [ ] Verify Team Login link rendering correctly on all public pages
- [ ] Verify dashboard live stats strip loading DD Tracker data
- [ ] Verify Hero Profiler agent dropdown builds correct URL
- [ ] Update Medium profile link from lifecalculator.thescheiderichagency.com
      to thescheiderichagency.com/life-insurance-calculator.html
- [ ] Test DD Tracker add/edit/delete on live site with Wendy

### CITY PAGES — NEXT TO BUILD
- [ ] atlanta-ga-insurance.html
- [ ] cumming-ga-insurance.html
- [ ] lawrenceville-ga-insurance.html
- [ ] gainesville-ga-insurance.html
- [ ] insurance-review.html (standalone page — currently links to contact.html)
- [ ] new-homebuyer-insurance.html

### NAVIGATION & INTERNAL LINKS
- [ ] Add internal links from home/auto pages to umbrella-insurance.html
- [ ] Add internal link from home-insurance.html gaps section 
      to additional-coverage.html

### TEAM PORTAL — NEXT MODULES
- [ ] Sales & Referral Tracker 
      PREREQUISITE: Mike provides metrics/tracking spreadsheet first
- [ ] Process improvement + marketing idea submission pages
- [ ] Resource library page

### THIRD-PARTY & INTEGRATIONS
- [ ] Elfsight Google Reviews widget — needs Google Business Profile 
      connected in Elfsight dashboard
- [ ] Confirm Formspree notification email set to 
      info@gahomeinsuranceexperts.com in dashboard
- [ ] Google Analytics setup
- [ ] DIIB analytics setup

### LEGAL PAGES
- [ ] Review all three legal pages with an attorney (recommended)

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
- Hidden _source field on each city page identifies lead origin
- Current plan: Free (1 form, 50 submissions/month)
- Upgrade to Basic ($10/mo) if lead volume exceeds 50/month

---

## Content Philosophy (applied to all pages)
1. **Personal service is #1** — not an 800 number, real agents, come to our office
2. **Honest about rates** — maximize value, never overpromise
3. **Educational/informational tone** — written for AI search authority
4. **Local Georgia specifics** — Georgia law, Georgia drivers, Georgia homeowners
5. **Never overpromise** — no guaranteed savings, no carrier-specific claims

---

## SEO Structure
- Every service page: H1 → H2 → H3, FAQPage schema, InsuranceAgency schema
- City pages: LocalBusiness schema, BreadcrumbList, FAQPage schema
- Calculator page: WebApplication schema
- Legal pages: indexed, no schema
- Team portal: noindex, nofollow
- Internal linking: service pages cross-link to related coverage and bundle page
- All calculator links: /life-insurance-calculator.html (not Vercel subdomain)

---

## Umbrella Insurance — Special Note
Market conditions actively evolving. Page intentionally broad — no carrier 
names, no specific minimums. Update umbrella-insurance.html when Allstate 
brings back umbrella product later in 2026. DO NOT add minimums until confirmed.

---

## VIP / Scheduled Personal Property — Key Differentiator
Standalone policy (not homeowners endorsement). Always mention:
1. Claim does NOT appear on homeowners claims history
2. More flexible deductible options than endorsement allows
3. Full appraised value vs. homeowners category caps

---

## Cloudflare DNS — Active Subdomains
| Subdomain | Points To | Purpose |
|-----------|-----------|---------|
| thescheiderichagency.com | 50.6.200.218 (VPS) | Main website |
| hero-profiler.thescheiderichagency.com | cname.vercel-dns.com | Hero Profiler app |
| lifecalculator.thescheiderichagency.com | Vercel (old) | Old calculator — no redirect needed |

---

*This file lives in the project root. Update whenever pages are added, 
tasks completed, or site direction changes.*
