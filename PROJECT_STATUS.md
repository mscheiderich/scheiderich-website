# The Scheiderich Agency — Project Status
**Last Updated:** August 11, 2026
**Session:** SSI include conversion, mobile nav, contact form fix

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
| Server Repo Path | /home/scheiderich/public_html (repo IS the docroot) |

---

## Team Members

| Name | Role | Allstate Email | Producer? |
|---|---|---|---|
| Mike Scheiderich | Agency Principal | Mscheiderich@Allstate.com | Yes |
| Crissy Shatzel | Office Manager | CSwartz2@Allstate.com | Yes |
| Iris Salgado | Licensed Agent (EN/ES) | IrisSalgado@Allstate.com | Yes |
| Mark Hill | Licensed Agent | MarkHill@Allstate.com | Yes |
| Scott Kesler | Licensed Agent | ScottKesler2@Allstate.com | Yes |
| Jennifer Lawler | Licensed Sales Producer | JLawler@Allstate.com | Yes — pending appointment |
| Wendy Alaniz | Licensed CSR (EN/ES) | — | No |
| Natalie Fowler | Social Media | — | No |

Crissy's email surname differs from her display name. This is correct.

---

## SSI ARCHITECTURE — READ BEFORE EDITING ANY PAGE

The site uses Apache Server Side Includes. Header, footer, and shared CSS live in
three files. Do NOT hand-edit header, footer, or chrome CSS in individual pages.

    /includes/header.html     header, nav, mobile menu markup + menu JS
    /includes/footer.html     full footer
    /includes/site-css.html   shared chrome CSS (fragment, no <style> tags)

How pages reference them:

    <style>
    <!--#include virtual="/includes/site-css.html" -->
      /* page-specific rules go here, after the include */
    </style>
    ...
    <!--#include virtual="/includes/header.html" -->
    ...
    <!--#include virtual="/includes/footer.html" -->

Converted: all 23 root chrome pages.

Intentionally NOT converted:
- thank-you.html — minimal confirmation page, no site chrome by design
- life-insurance-calculator.html — uses --site- prefixed tokens, would break

### SSI Gotchas

1. Never use "Require all denied" on the include fragments. SSI virtual includes go
   through Apache access control, so denying them blocks Apache's own subrequest and
   the include fails with "[an error occurred while processing this directive]".
   Use X-Robots-Tag noindex instead.
2. If SSI stops working, pages break badly. An unprocessed include inside <style>
   is parsed as CSS CDO/CDC and swallows the next selector — the page renders as
   unstyled text, not just a missing header.
3. .htaccess is tracked in git. Changing the PHP version in cPanel MultiPHP Manager
   rewrites the handler block server-side, and the next deploy silently reverts it.
   Re-copy the block into the tracked file if PHP version changes.
4. Always load one page after a deploy that touched .htaccess.
5. Check for nested <footer> tags before any footer edit. community.html has a
   testimonial attribution footer inside page content.
6. Include files use root-relative paths (/logo.png). Required for includes to work
   from subdirectories like /agents/ and /refer/.

### cPanel deploy gotcha
The Git Version Control UI throws 401 Unauthorized if the session has been idle.
Symptom: repo list stuck on "Loading…" or the pull silently fails. Fix: close all
cPanel tabs, log in fresh, go straight to Git Version Control. Always verify the
pull landed — a page can look correct because the OLD file is still being served.

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

Mobile nav breakpoint: 640px. Footer collapse breakpoint: 1020px.

---

## Compliance Rules

- Never use Allstate slogans, trademarks, or "You're in good hands"
- Never use Allstate logos or brand-implying language
- The Scheiderich Agency must always be the primary brand
- Can reference "Allstate" and identify Mike as an Allstate agent
- Event photos must be free of Allstate branding. Current event gear is all
  Allstate-branded.
- Unappointed producers may not be presented as able to quote or bind. Jennifer
  Lawler is licensed but not yet appointed.

---

## Infrastructure

| Tool | Role | Notes |
|---|---|---|
| VS Code + Claude Code | Primary dev environment | All file edits and git ops |
| Bluehost VPS | Website hosting | IP: 50.6.200.218 |
| cPanel Git Version Control | Deployment | Repo path = /home/scheiderich/public_html |
| Cloudflare | DNS management | ALL DNS changes here, never GoDaddy |
| GoDaddy | Domain registration only | Never touch DNS here |
| Vercel | Life calculator + Hero Profiler | Separate repos |
| Formspree | Public contact forms | Endpoint: mgoqnelq |
| Google Analytics 4 | Website tracking | G-HPQZJLZB78 |
| DIIB | SEO monitoring | Synced with GA4, Facebook, Instagram |
| Elfsight | Google reviews widget | Live |
| Google Sheets + Apps Script | Portal tool backends | |
| Nimble | Referral partner CRM | ~50 active partners |

Critical workflow rule: all git operations and code changes delivered as Claude Code
prompts to paste into VS Code. Never manual terminal commands.

---

## Deployment Workflow

1. Make changes via Claude Code prompts in VS Code
2. Claude Code commits and pushes to GitHub
3. cPanel → Git Version Control → Manage → Pull or Deploy → Update from Remote
4. Hard-refresh the live page (Ctrl + Shift + R)
5. Verify the change actually landed — do not assume

New-file gotcha: brand-new files show a "U" (Untracked) marker in VS Code and are
NOT included by a normal commit. They must be git add-ed first.

Case-sensitivity gotcha: the server is Linux and case-sensitive. Keep all filenames
and references lowercase.

---

## Public Website — All Pages

SSI-converted: index, about, contact, home-insurance, auto-insurance,
life-insurance, business-insurance, bundle-and-save, additional-coverage,
umbrella-insurance, insurance-review, community, buford-ga-insurance,
gwinnett-county-insurance, suwanee-ga-insurance, lawrenceville-ga-insurance,
atlanta-ga-insurance, cumming-ga-insurance, gainesville-ga-insurance,
georgia-insurance, privacy-policy, terms-of-use, disclaimer

Not converted by design: thank-you.html, life-insurance-calculator.html

sitemap.xml — 24 pages, submitted to Google Search Console June 5 2026
robots.txt — blocks /team/ and /includes/

### Images in root (no images folder)
logo.png, mike-hero.jpeg, mike-scheiderich.png, crissy-shatzel.png,
iris-salgado.png, mark-hill.png, scott-kesler.png, wendy-alaniz.png, natalie.jpg,
the-bean-logo.png

Needed: jennifer-lawler.png (professional headshot pending)

---

## Fixed This Session

- Header/footer/CSS converted to SSI includes — 3,208 lines of duplication removed
- Nav dropdown was broken sitewide. An 8px hover gap meant Business, Bundle,
  Additional Coverage, and Umbrella were unreachable from the nav on every page.
- No mobile menu existed. Below 640px .nav-links was display:none with no
  replacement — mobile visitors had zero navigation. Hamburger menu added.
- Contact form told users "Something went wrong" when they had simply left a
  required field blank. novalidate removed, reportValidity() added, network vs
  server failure messages separated.
- Two broken legal links fixed — georgia-insurance and insurance-review pointed at
  /privacy.html and /terms.html, which do not exist.
- Insurance Review internal links went from 7 to 24
- Team Login was white-on-white (invisible) on all three legal pages
- Footer link drift resolved — 8 versions across the site, now one
- .htaccess brought into version control

---

## NEXT PROJECT — Agent & Referral Pages

Status: fully specced, not yet built.

### Structure — 12 pages, 2 per producer

| | Agent page | Referral page |
|---|---|---|
| URL | /agents/{slug}.html | /refer/{slug}.html |
| Short URL | — | /refer/{firstname} via .htaccess |
| Audience | Consumers, Google | Referral partners only |
| Indexed | Yes | No — noindex, nofollow |
| In sitemap | Yes (6 entries) | No |
| Form | Formspree, _source=agent-{slug} | Apps Script → Referrals sheet |

Producers: mike-scheiderich, crissy-shatzel, iris-salgado, mark-hill, scott-kesler,
jennifer-lawler (built but unpublished until appointment clears).

### Referral page messaging — same points, varied wording per page

Headline promise: Your closing doesn't slip because of insurance.

What we handle before it becomes your problem:
- Binder to lender with correct mortgagee clause and loan number, first time
- Dwelling coverage at replacement cost, not loan amount
- Roof age, prior claims (CLUE), system updates flagged early
- Escrow-ready premium figure so the CD is not revised
- Same-day revised binders when loan amount or closing date changes

Turnaround commitment:
- Received by 3:00 PM business day → binder same day
- After 3:00 PM → binder before noon next business day
- Revisions → same day
- Producer unavailable → Wendy or Crissy picks it up

Send at contract, not clear-to-close. Timeline: contract signed → send here →
inspection → binder issued → CD → closing

Trigger card — send it when:
- Contract is signed, even if nothing else is settled
- Client says "I'll just use my current agent" — send anyway, we will coordinate
- Loan amount changed
- Home is 25+ years old or has an older roof
- Rental, second home, or new construction

Status loop: partner gets automatic email at received / quoted / bound / binder
sent, plus a monthly recap.

### Warm intro mechanic — the key differentiator

The referral confirmation screen generates a pre-written introduction email
addressed to the partner's client, CC'ing the agent, delivered three ways: mailto
link, copy to clipboard, SMS link. The partner sends it from their own address.

Do NOT auto-send this from the agency. SPF/DMARC will not authenticate mail sent as
the partner, and a fake introduction the partner did not write destroys the
relationship if the client mentions it back to them.

### Referral form — 6 fields, hard stop

Partner name + company (pre-fillable via ?p= URL param), client name, client phone,
client email (required — the intro cannot send without it), closing/needed-by date,
coverage needed.

Consent line: "By submitting, you confirm this person has agreed to be contacted
about insurance."

### Backend — Google Sheets + Apps Script, NOT Formspree

Formspree cannot log, assign, status, or report back. Referrals sheet with a
Settings tab controlling email routing (agent + Mike + Wendy), same pattern as
DD Tracker.

Security note: unlike DD Tracker, the Referrals sheet must NOT be link-viewable. It
contains third-party names and phone numbers. Reads go through doGet + JSONP.

### Partner links

Each of ~50 Nimble partners gets ?p=their-code appended to their referral URL.
Pre-fills their name and company (drops the form to 4 fields) and gives clean
attribution without self-reporting.

### Blocking / required before launch

- Jennifer Lawler headshot (the senior-portrait style photo supplied is unusable)
- Privacy policy section on referred-party data
- Disclaimer line: turnaround times depend on complete client information and are
  not a guarantee of coverage or closing timeline
- Sitemap update — 6 agent pages only, referral pages excluded
- Add Jennifer to about.html and update team count 6 to 7 (the page currently says
  "Six licensed insurance professionals" in both the hero and the stat block)

---

## Team Portal — File Structure

    /team/
      index.html                            Portal dashboard
      dd-tracker/index.html                 DD & GS Tracker
      process-improvement/index.html        Submission form + team board
      marketing-ideas/index.html            Submission form + team board
      admin/index.html                      Admin Hub selector
      admin/process-improvement/index.html
      admin/marketing/index.html

/team/ pages are NOT SSI-converted. Different layout, noindexed via robots.txt.

---

## Google Apps Scripts

| Script | Deployment URL |
|---|---|
| DD Tracker | .../AKfycbxxtQwMbJ4PQuqsfSnyF7V-it3sfmfGNtsR_OJBwuQcB-M5gzbdlFj92jSAWE5ge8bD/exec |
| Process Improvement | .../AKfycbz_1XOHxoV9aH62NzFMlG2nxzb-jVpGBd3VqTLY6Yn_WuoSZWAhL8xOHrH91OCOZdzb/exec |
| Marketing Ideas | .../AKfycbypR3WvAhTfIl7t-Mx_Nn5g0c2L5M3daSbVJwDCbZ-nIbHKRrSqQjagOHzQvKH8Awc/exec |

Deployment rule: always deploy as a NEW VERSION of the existing deployment. Never
"New deployment" — it changes the URL and breaks the tool.

CORS pattern: browser fetch() to Apps Script fails silently. Use JSONP (inject
script tag with callback param) for reads. Writes use mode: 'no-cors' with
Content-Type: text/plain, optimistic UI, delayed refresh.

MailApp OAuth must be authorized by running a test function manually before any live
trigger fires.

DD Tracker Sheet ID: 1GNDONX_yupxaHs4Amxr_7TwX7bJ-3djouayzIzpR79c

---

## Architecture Rules

- Pure HTML — no WordPress, no build tool
- SSI includes — see the architecture section above
- Sitemap rule: every new HTML page must include a simultaneous sitemap.xml update
  in the same Claude Code prompt. Referral pages are the documented exception —
  noindexed by design.
- Legal pages rule: any change affecting data collection, third-party tools,
  analytics, forms, calculators, or legal exposure must trigger simultaneous update
  to privacy-policy.html, terms-of-use.html, and/or disclaimer.html
- DNS: all changes in Cloudflare. Never touch GoDaddy nameservers.
- Google Drive MCP intercepts filesystem queries — specify "local project folder" or
  use Claude Code directly

---

## Pending Tasks

### Verify (immediate)
- Mobile menu on a real handset — nav bar fits at 375px without the logo colliding
  with the hamburger. Fallback if tight: drop .nav-logo-name to 14px at the 640px
  breakpoint.

### Security
- Password protect /team/admin/ in cPanel Directory Privacy
- Password protect /team/admin/process-improvement/
- Password protect /team/admin/marketing/

### Formspree
- Verify notification email → info@gahomeinsuranceexperts.com
- Enable hCAPTCHA spam filtering
- Set custom email domain via Cloudflare DNS

### Search Console
- Connect Google Search Console to GA4 (Admin → Search Console links)
- Confirm insurance-review.html is in sitemap.xml

### Content
- Medium articles 2 through 5 (DIME method article is live and linked)
- Update life calculator ARTICLES array as Medium articles publish

### Team Portal
- Sales & Referral Tracker — Mike provides metrics spreadsheet first
- Resource Library page — /team/resource-library/
- Hero Profiler "Return to Dashboard" button (separate VS Code project)

### Consistency (optional, low priority)
- Nine location pages use plain HTML forms that redirect to Formspree's own
  thank-you page rather than showing an inline confirmation. thank-you.html exists
  but is unused by them. Could be a fourth include.
- .footer-disc is dead CSS — defined in the include, applied nowhere

### Real-world
- Jennifer Lawler professional headshot
- Scheiderich-Agency-branded table banner or feather flag for usable event photos
