/**
 * MediSetu — nav.js
 * Shared navigation logic for all pages.
 * Include this script at the bottom of every HTML page.
 *
 * What it does:
 *  1. Reads the current role from sessionStorage (set by login.html)
 *  2. Highlights the active nav link based on current page filename
 *  3. Protects pages — redirects to login if no role is set
 *  4. Handles logout — clears session and goes to index.html
 *  5. Injects role label + username into any element with [data-user-name] / [data-user-role]
 */

(function () {

  /* ── CONSTANTS ── */
  const PAGES = {
    'index.html':           { public: true },
    'login.html':           { public: true },
    'admin-dashboard.html': { roles: ['admin'] },
    'inventory.html':       { roles: ['admin', 'pharmacy'] },
    'request.html':         { roles: ['admin', 'pharmacy', 'user'] },
    'admin-login.html':     { public: true },
  };

  const ROLE_HOME = {
    admin:    'admin-dashboard.html',
    pharmacy: 'inventory.html',
    user:     'request.html',
  };

  const ROLE_LABEL = {
    admin:    'Administrator',
    pharmacy: 'Pharmacy Staff',
    user:     'User',
  };

  /* ── HELPERS ── */
  function currentPage() {
    const parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function getSession() {
    try {
      return JSON.parse(sessionStorage.getItem('medisetu_session') || 'null');
    } catch { return null; }
  }

  function setSession(data) {
    sessionStorage.setItem('medisetu_session', JSON.stringify(data));
  }

  function clearSession() {
    sessionStorage.removeItem('medisetu_session');
  }

  /* ── ROUTE GUARD ── */
  function guardRoute() {
    const page = currentPage();
    const config = PAGES[page];
    if (!config || config.public) return; // public page, no guard needed

    const session = getSession();
    if (!session || !session.role) {
      // not logged in — redirect to login
      window.location.href = 'login.html';
      return;
    }
    if (config.roles && !config.roles.includes(session.role)) {
      // wrong role — redirect to their home
      window.location.href = ROLE_HOME[session.role] || 'login.html';
    }
  }

  /* ── ACTIVE LINK HIGHLIGHT ── */
  function setActiveLinks() {
    const page = currentPage();
    document.querySelectorAll('a[href], button[data-page]').forEach(el => {
      const href = el.getAttribute('href') || el.getAttribute('data-page') || '';
      if (href === page || href.endsWith('/' + page)) {
        el.classList.add('active');
      }
    });
  }

  /* ── INJECT USER INFO ── */
  function injectUserInfo() {
    const session = getSession();
    if (!session) return;

    document.querySelectorAll('[data-user-name]').forEach(el => {
      el.textContent = session.name || 'User';
    });
    document.querySelectorAll('[data-user-role]').forEach(el => {
      el.textContent = ROLE_LABEL[session.role] || session.role;
    });
    document.querySelectorAll('[data-user-initials]').forEach(el => {
      const name = session.name || 'U';
      el.textContent = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    });
  }

  /* ── LOGOUT ── */
  window.medisetuLogout = function () {
    clearSession();
    window.location.href = 'index.html';
  };

  /* ── LOGIN (called by login.html on success) ── */
  window.medisetuLogin = function (role, name, email) {
    setSession({ role, name, email, loginTime: Date.now() });
    const dest = ROLE_HOME[role] || 'index.html';
    window.location.href = dest;
  };

  /* ── EXPOSE SESSION GETTER ── */
  window.medisetuSession = getSession;

  /* ── RUN ON DOM READY ── */
  function init() {
    guardRoute();
    setActiveLinks();
    injectUserInfo();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
