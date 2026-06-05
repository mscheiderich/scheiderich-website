# The Scheiderich Agency — Project Status
**Last Updated:** May 29, 2026
**Session:** Community Involvement Page + Sitewide Integration

---

## Agency & Contact Info

| Field | Value |
|---|---|
| Agency Name | The Scheiderich Agency |
| Owner | Mike Scheiderich (pronounced "shy-der-ick") |
| Address | 60 W Park St, Buford, GA 30518 |
| Phone | 770-268-4418 |
| Agency Email | info@gahomeinsuranceexperts.com |
| Mike Direct | mike@gahomeinsuranceexperts.com |
| Allstate Email | mscheiderich@allstate.com |
| Website | thescheiderichagency.com |
| GitHub | github.com/mscheiderich/scheiderich-website |
| Local Path | C:\Users\msche\Documents\scheiderich-website |

---

## Team Members

| Name | Button Label |
|---|---|
| Mike Scheiderich | Mike S. |
| Crissy Shatzel | Crissy S. |
| Iris Salgado | Iris S. |
| Mark Hill | Mark H. |
| Wendy Alaniz | Wendy A. |
| Scott Kesler | Scott K. |
| Natalie Fowler | Natalie F. |

---

## Design Tokens

| Token | Value |
|---|---|
| --navy | #1e3148 |
| --orange | #d9682a |
| --bg | #f6f4f1 |
| --bg-w | #ffffff |
| --text | #1c2330 |
| --muted | #5f6b79 |
| --border | #dedad4 |
| Heading Font | Lora (serif) |
| Body Font | DM Sans |

---

## Compliance Rules

- Never use Allstate slogans, trademarks, or "You're in good hands"
- Never use Allstate logos or brand-implying language
- The Scheiderich Agency must always be the primary brand
- Can reference "Allstate" and identify Mike as an Allstate agent
- **NEW — event photos:** any photo used on the site must be free of Allstate
  branding. Current event gear (tent, tablecloth, bottles) is all Allstate-
  branded, which makes most event photos unusable as-is. See Pending Tasks for
  the fix (agency-branded banner/flag).

---

## Infrastructure

| Tool | Role | Notes |
|---|---|---|
| VS Code + Claude Code | Primary dev environment | All file edits and git ops |
| GitHub Desktop | Repo management | mscheiderich account |
| Bluehost VPS | Website hosting | IP: 50.6.200.218 |
| cPanel Git Version Control | Deployment | Pull from GitHub to server |
| Cloudflare | DNS management | ALL DNS changes here, never GoDaddy |
| GoDaddy | Domain registration only | Never touch DNS here |
| Vercel | Life calculator + Hero Profiler hosting | Separate repos |
| Formspree | Website contact forms | Endpoint: mgoqnelq |
| Elfsight | Google reviews widget | Not yet connected |
| MailerLite | Email marketing | Not yet set up |
| Google Sheets | Backend data for portal tools | |
| Google Apps Script | API layer for portal tools | |

**Critical workflow rule:** All git operations and code changes delivered as
Claude Code prompts to paste into VS Code. Every session ends with git push.
Never manual terminal commands.

---

## Claude Code — Permission Setup (to stop approving every command)

To avoid clicking "Yes" on every step (and getting stuck when walking away):

1. **Git command prompts:** when the approval box appears, choose **"Yes, and
   don't ask again"** (not plain Yes). This saves the rule permanently for this
   project. Do it once each for `git add`, `git commit`, `git push`.
2. **File-edit prompts:** press **Shift + Tab** to switch to **"accept edits"**
   mode, which auto-accepts edits for the session.
3. **Optional one-time setup:** type `/permissions` in Claude Code and add
   Allow rules for `git add *`, `git commit *`, `git push *`.
4. **Do NOT use** the "skip all permissions" / bypass / `--dangerously-skip-
   permissions` mode — it removes all guardrails and is unsafe on a repo that
   deploys to the live site.

---

## Deployment Workflow

1. Make changes via Claude Code prompts in VS Code
2. Claude Code commits and pushes to GitHub
3. Log into cPanel → Git Version Control → Pull
4. Hard-refresh the live page (**Ctrl + Shift + R**) to bypass browser cache
5. Changes are live

**New-file gotcha:** brand-new files (images, new pages) show a **"U"
(Untracked)** marker in VS Code and are NOT included by a normal commit. They
must be `git add`-ed first or they won't deploy. If a new file isn't showing
live, this is the first thing to check.

**Case-sensitivity gotcha:** the server is Linux and case-sensitive. A file
named `Natalie.jpg` will NOT match a reference to `natalie.jpg`, even though
Windows treats them as identical. Keep all filenames and references lowercase.

---

## Public Website — All Pages

### Complete ✅
| File | Page |
|---|---|
| index.html | Homepage |
| about.html | About the Agency |
| contact.html | Contact / Quote Request |
| home-insurance.html | Home Insurance |
| auto-insurance.html | Auto Insurance |
| life-insurance.html | Life Insurance |
| business-insurance.html | Business Insurance |
| life-insurance-calculator.html | Life Insurance Calculator |
| bundle-and-save.html | Bundle & Save |
| additional-coverage.html | Additional Coverage |
| umbrella-insurance.html | Umbrella Insurance |
| insurance-review.html | Insurance Review |
| community.html | Community Involvement ✅ NEW |
| buford-ga-insurance.html | Buford, GA |
| gwinnett-county-insurance.html | Gwinnett County |
| suwanee-ga-insurance.html | Suwanee, GA |
| lawrenceville-ga-insurance.html | Lawrenceville, GA |
| atlanta-ga-insurance.html | Atlanta, GA |
| cumming-ga-insurance.html | Cumming, GA |
| gainesville-ga-insurance.html | Gainesville, GA |
| georgia-insurance.html | Statewide Georgia |
| privacy-policy.html | Privacy Policy |
| terms-of-use.html | Terms of Use |
| disclaimer.html | Disclaimer |

### Images in Root (no images folder — all assets sit in root)
| File | Use |
|---|---|
| the-bean-logo.png | The Bean logo (transparent PNG) — Community page + teasers |
| natalie.jpg | Natalie portrait — Meet Natalie section |
| (plus existing: logo.png, mike-hero.jpeg, mike-scheiderich.png, mark-hill.png, scott-kesler.png, etc.) | |

### Navigation Structure
```
Home | Auto | Life | More Coverage ▾ | About | Contact    [Get a Quote]
                          ↓
                   Insurance Review   ← First item
                   ──────────────────
                   Business Insurance
                   Bundle & Save
                   Additional Coverage
                   Umbrella Insurance
```
- **Community** is intentionally NOT in the top nav.
- **Community** link added to the FOOTER on all public root pages.
- **"In Our Community" teaser band** added to index.html and about.html
  (logo + short copy + link to community.html).

---

## Community Page (community.html) — Structure

Built this session. Section order (this is the template for adding future
community content):

1. **Hero** — navy gradient (`135deg, #1e3148 → #2c4a66`), white H1
   "Community Involvement," thin orange accent line, intro paragraph.
2. **Our Partnership with the Brightside Forever Foundation** (white) — The
   Bean logo in a white card, intro copy, link to brightsidecafebuford.com/the-bean.
3. **Employment stat callout** (off-white band) — 22.7% vs 65.5%, sourced to
   Brightside Forever Foundation.
4. **Meet Natalie** (white, two-column feature) — photo (natalie.jpg) + three
   paragraphs + pull-quote with her quote. Featured by **first name only; no
   diagnosis mentioned** (privacy + framing decision).
5. **Bring The Bean to Your Business** (navy band) — recruitment pitch to other
   local businesses + 3-icon row (Hiring Guidance / Mentorship / Access to
   Candidates) + links to The Bean and the Brightside mission page.
6. **Around the Community** (off-white) — expandable EVENT CARD grid. **This is
   where new events get added.** Seeded with one card:
   - **Buford Spring Festival** — Silver Sponsor, presented by the Buford
     Business Alliance. Links to https://visitbuford.com/
   - Copy uses "**regularly**" (not "monthly") to avoid overpromising a cadence.

**No "Get a Quote" CTA on this page** — it's a trust/community page, not a
conversion page. Its jobs are (a) build trust and (b) recruit other Buford
businesses into The Bean.

**Verify live after next cPanel pull:** footer Community link sitewide, the two
teaser bands (index + about), and Natalie's photo + quote — these were the last
items built this session.

---

## Brightside / The Bean — Reference

- **Brightside Forever Foundation** — Buford nonprofit focused on special-
  abilities employment. 554 W Main St, Buford (blocks from the agency).
- **The Bean (Brightside Empower Ability Network)** — program that trains/
  mentors local businesses to hire from a candidate waiting list; members get
  a logo for web/door use. The Scheiderich Agency is a listed member, and The
  Bean's site links back to thescheiderichagency.com (reciprocal local link).
- **Natalie** — introduced through The Bean, interviewed, then hired to run the
  agency's social media.

---

## Team Portal — File Structure

```
/team/
  index.html                           ← Portal dashboard (shared team login)
  dd-tracker/
    index.html                         ← DD & GS Tracker ✅ Live
  process-improvement/
    index.html                         ← Submission form + team board ✅ Live
  marketing-ideas/
    index.html                         ← Submission form + team board ✅ Live
  admin/
    index.html                         ← Admin Hub selector page ✅ Live
    process-improvement/
      index.html                       ← Process Improvement admin ✅ Live
    marketing/
      index.html                       ← Marketing Ideas admin ✅ Live
```

---

## Team Portal — Tools Status

| Tool | Status | Notes |
|---|---|---|
| DD & GS Tracker | ✅ Live | Google Sheets backend |
| Hero Profiler | ✅ Live | Vercel — hero-profiler.thescheiderichagency.com |
| Process Improvement | ✅ Live | Anonymous, team board, admin panel |
| Marketing Ideas | ✅ Live | Named, bonus-eligible, team board, admin panel |
| Admin Hub | ✅ Live | Selector page at /team/admin/ |
| Sales & Referral Tracker | ⏳ Pending | Waiting on Mike's metrics spreadsheet |
| Resource Library | ⏳ Pending | Not started |

---

## Google Apps Scripts

| Script | Deployment URL |
|---|---|
| DD Tracker | https://script.google.com/macros/s/AKfycbxxtQwMbJ4PQuqsfSnyF7V-it3sfmfGNtsR_OJBwuQcB-M5gzbdlFj92jSAWE5ge8bD/exec |
| Process Improvement | https://script.google.com/macros/s/AKfycbz_1XOHxoV9aH62NzFMlG2nxzb-jVpGBd3VqTLY6Yn_WuoSZWAhL8xOHrH91OCOZdzb/exec |
| Marketing Ideas | https://script.google.com/macros/s/AKfycbypR3WvAhTfIl7t-Mx_Nn5g0c2L5M3daSbVJwDCbZ-nIbHKRrSqQjagOHzQvKH8Awc/exec |

**All Google Sheets stored in:** Google Drive → `Scheiderich Agency — Backend Data` folder

### Sheet Tab Names (must match exactly)
| Sheet | Tab Name |
|---|---|
| Process Improvement | Submissions |
| Marketing Ideas | Ideas |

### Sheet Header Rows
**Process Improvement — Submissions tab (columns A–H):**
`ID | Submitted At | Category | Urgency | Submission | Status | Admin Notes | Updated At`

**Marketing Ideas — Ideas tab (columns A–H):**
`ID | Submitted At | Agent Name | Category | Idea | Status | Admin Notes | Updated At`

---

## Process Improvement Tool

- **Submission form:** `/team/process-improvement/` — fully anonymous
- **Team board:** Same page — shows Acknowledged/In Progress/Resolved/Shared items only
- **Admin panel:** `/team/admin/process-improvement/` — password protected
- **Categories:** Process Inefficiency, Product Gap, Technology Suggestion, Communication Issue, Client Experience, General Idea
- **Urgency levels:** Critical, High, Medium, Low
- **Statuses:** New → Acknowledged → In Progress → Resolved → Shared with Allstate
- **Email notifications:** mike@gahomeinsuranceexperts.com on each submission
- **Export:** CSV download in admin panel

---

## Marketing Ideas Tool

- **Submission form:** `/team/marketing-ideas/` — named, bonus-eligible
- **Team board:** Same page — shows Acknowledged and above only
- **Admin panel:** `/team/admin/marketing/` — password protected
- **Categories:** Social Media, Events & Community, Referral Programs, Client Retention, Digital Marketing, New Market / Audience, General Idea
- **Statuses:** New → Acknowledged → In Progress → Selected for Bonus → Implemented
- **Email notifications:** mike@gahomeinsuranceexperts.com with agent name
- **Export:** CSV download in admin panel

---

## Admin Hub

- **URL:** `/team/admin/`
- **Purpose:** Selector landing page for all admin panels
- **Current cards:** Process Improvement ✅, Marketing Ideas ✅, Sales Tracker (coming soon), Resource Library (coming soon)
- **Password protection:** Must be set in cPanel Directory Privacy

---

## Formspree

- **Endpoint:** mgoqnelq
- **Used on:** All public contact/quote forms + Insurance Review form
- **Hidden `_source` field:** Identifies lead origin page

### Pending Formspree Tasks
- [ ] Verify notification email → info@gahomeinsuranceexperts.com in dashboard
- [ ] Enable hCAPTCHA spam filtering
- [ ] Set custom email domain via Cloudflare DNS

---

## Separate Hosted Tools

| Tool | URL | Hosting | Repo |
|---|---|---|---|
| Life Insurance Calculator | lifecalculator.thescheiderichagency.com | Vercel | life-insurance-calculator |
| Hero Profiler | hero-profiler.thescheiderichagency.com | Vercel | hero-profiler (mike-2004s account) |

**Life Calculator update point:** ARTICLES array in index.html — only `url` field needs updating per card as Medium articles publish.

---

## Medium Content Strategy

| Article | Status |
|---|---|
| How Much Life Insurance Do I Need (DIME method) | ✅ Published + integrated into calculator |
| Articles 2–5 | ⏳ Pending — cards point to medium.com/@mscheiderich until published |

---

## Architecture Notes

- **Pure HTML** — no WordPress, no build tool
- **Header/footer:** Duplicated across all pages. NOTE: the footer has now been
  hand-edited across 20+ pages twice (community link + earlier work). Converting
  header/footer to JS includes is now a HIGH priority — it turns this kind of
  sitewide change into one edit in one file.
- **Legal pages:** Any change affecting data collection, third-party tools,
  analytics, forms, or calculators must trigger update to privacy-policy.html,
  terms-of-use.html, and/or disclaimer.html simultaneously. (Community page work
  added only outbound links + images — no new data collection — so no legal
  update was required.)
- **DNS:** All changes in Cloudflare. Never touch GoDaddy nameservers.
- **Google Drive MCP:** Active — intercepts filesystem queries. Specify "local
  project folder" or use Claude Code directly when accessing local files.
- **New files:** must be `git add`-ed (watch for the "U" marker in VS Code).
- **Filenames:** lowercase, server is case-sensitive.
- **Verifying changes:** cPanel pull, then hard-refresh (Ctrl+Shift+R) — browser
  cache will otherwise show the old page.

---

## Pending Tasks — Priority Order

### First thing next session (verify)
- [ ] Confirm footer Community link, the index + about teaser bands, and
      Natalie's photo + quote are all live (pull + hard refresh)

### Immediate (security)
- [ ] Password protect `/team/admin/` in cPanel Directory Privacy
- [ ] Password protect `/team/admin/process-improvement/` in cPanel
- [ ] Password protect `/team/admin/marketing/` in cPanel

### High priority (saves repeated effort)
- [ ] Convert header/footer to JS includes (one session, all pages)

### Next Build Session
- [ ] Sales & Referral Tracker — Mike provides metrics spreadsheet first
- [ ] Resource Library page — `/team/resource-library/`
- [ ] Update life calculator Medium article links as articles publish
- [ ] Add new community event cards to community.html as events happen

### Real-world (not code)
- [ ] Order a Scheiderich-Agency-branded table banner / feather flag so future
      event photos are usable (current photos are all Allstate-branded)

### Third-Party Setup
- [ ] Elfsight — connect Google Business Profile
- [ ] Google Analytics — install tracking code
- [ ] DIIB — install
- [ ] MailerLite — configure
- [ ] Formspree — verify email, hCAPTCHA, custom domain
