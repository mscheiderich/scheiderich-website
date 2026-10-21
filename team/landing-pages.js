/* ═══════════════════════════════════════
   LANDING PAGE REGISTRY — single source of truth
   Read by the Referral Hub (/team/referral-hub/) for "My Pages" and for the
   partner links on each partner row.

   RULE: every new landing page is added here IN THE SAME COMMIT that adds the
   page (same standing as the sitemap rule). Adding a page for one more agent
   means adding that agent's slug to `agents`. A page whose file does not
   exist yet stays `live: false` and never shows in the Hub.

   Fields
     id           stable key
     label        what the Hub shows in My Pages
     rowLabel     page title on a partner row's Link / QR line
     audience     who the page is for
     program      partner program whose links use this page ('' = none)
     url          {slug} = mike-scheiderich, {first} = mike
     acceptsCode  the page reads ?p= (a partner code) and credits it
     readsSrc     the page reads ?src= — QR downloads add ?src=qr only then
     live         false = file not built yet; hidden everywhere
     agents       slugs whose file exists today

   Served with Cache-Control: no-cache (root .htaccess), so a change here
   shows up on the next Hub load.
═══════════════════════════════════════ */
window.LANDING_PAGES = [
  {
    id: 'refer',
    rowLabel: 'Referral page',
    label: 'Partner referral page',
    audience: 'Referral partners (home)',
    program: 'Home',
    url: 'https://thescheiderichagency.com/refer/{first}',
    acceptsCode: true,
    readsSrc: false,
    live: true,
    agents: ['mike-scheiderich', 'crissy-shatzel', 'iris-salgado', 'mark-hill',
             'scott-kesler', 'wendy-alaniz', 'jennifer-lawler']
  },
  {
    id: 'rental-referral',
    rowLabel: 'Rental page (leasing staff)',
    label: 'Rental referral page',
    audience: 'Leasing staff',
    program: 'Rental',
    url: 'https://thescheiderichagency.com/rental-referral/{slug}/',
    acceptsCode: true,
    readsSrc: true,
    live: true,
    agents: ['jennifer-lawler']
  },
  {
    id: 'renters',
    rowLabel: 'Move-in packet (residents)',
    label: 'Move-in packet (renters page)',
    audience: 'Residents',
    program: 'Rental',
    url: 'https://thescheiderichagency.com/renters/{slug}/',
    acceptsCode: true,
    readsSrc: true,
    live: false,                 // not built yet — never shown until true
    agents: []
  },
  {
    id: 'agent',
    rowLabel: 'Agent page',
    label: 'Agent page',
    audience: 'Consumers',
    program: '',
    url: 'https://thescheiderichagency.com/agents/{slug}.html',
    acceptsCode: false,
    readsSrc: false,
    live: true,
    agents: ['mike-scheiderich', 'crissy-shatzel', 'iris-salgado', 'mark-hill',
             'scott-kesler', 'wendy-alaniz', 'jennifer-lawler']
  },
  {
    id: 'life-quote',
    rowLabel: 'Life quote',
    label: 'Life quote page',
    audience: 'Consumers (life insurance)',
    program: '',                 // not a partner program; does not record ?p=
    url: 'https://thescheiderichagency.com/life-quote/{slug}/',
    acceptsCode: false,
    readsSrc: true,
    live: true,
    agents: ['jennifer-lawler']
  }
];
