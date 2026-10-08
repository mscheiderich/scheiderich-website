/* ═══════════════════════════════════════
   DD TRACKER — SHARED STATUS RULES
   The ONE copy of the rules that decide whether a client is Overdue,
   Due Soon, Pending, Complete, Discount Removed or Archived.

   Loaded by BOTH pages:
     /team/dd-tracker/index.html   stat cards, badges, sort, filters
     /team/index.html              portal dashboard pills

   Change a rule here and both pages follow. Never copy these functions
   back into a page — two copies is how the dashboard and the tracker
   came to disagree.
═══════════════════════════════════════ */
(function () {

  /* ═══════════════════════════════════════
     DATE HELPERS (local, never UTC)
  ═══════════════════════════════════════ */
  function todayMidnight() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  function parseDateLocal(str) {
    if (!str) return null;
    const parts = str.split('-').map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function daysUntil(dueDateStr) {
    const today = todayMidnight();
    const due   = parseDateLocal(dueDateStr);
    if (!due) return null;
    return Math.floor((due - today) / 86400000);
  }

  /* ═══════════════════════════════════════
     STATUS CALCULATION
     Archived and Discount Removed are manual-only overrides.
     Archived takes precedence over Discount Removed.
  ═══════════════════════════════════════ */
  function calcStatus(c) {
    if (c.status === 'Archived')         return 'Archived';
    if (c.status === 'Discount Removed') return 'Discount Removed';
    // Four tracked things. DISCOUNTS apply only to some people and are date-driven;
    // ONBOARDING (thank-you card + welcome call) applies to EVERY client and has no
    // due date. A discount is outstanding only when it APPLIES and isn't received.
    const ddApplies = c.ddDiscount === 'Y';
    const gsApplies = c.gsDiscount === 'Y';
    const ddOk = !ddApplies || c.ddReceived === 'Y';
    const gsOk = !gsApplies || c.gsReceived === 'Y';
    const discountsOk  = ddOk && gsOk;
    const onboardingOk = c.thankYouSent === 'Y' && c.welcomeCallSent === 'Y';
    // COMPLETE = every applicable discount received AND both onboarding tasks done.
    if (discountsOk && onboardingOk) return 'Complete';
    // A waiting discount is date-driven off the household due date.
    if (!discountsOk) {
      const days = daysUntil(c.dueDate);
      if (days !== null && days < 0)   return 'Overdue';
      if (days !== null && days <= 30) return 'Due Soon';
      return 'Pending';
    }
    // Discounts fine (or none apply) but a thank-you/call still outstanding.
    // Onboarding has no due date, so it never reads Overdue.
    return 'Pending';
  }

  window.DDStatus = { calcStatus, daysUntil, parseDateLocal, todayMidnight };
})();
