/**
 * MediSetu — api.js
 * Include this in every HTML page BEFORE nav.js
 * <script src="api.js"></script>
 */

const API_BASE = (() => {
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'http://localhost:5000/api';   // local dev
  }
  return '/api';                          // Vercel production
})();

const API = (() => {

  async function req(method, path, body = null) {
    const session = JSON.parse(sessionStorage.getItem('medisetu_session') || 'null');
    const headers = { 'Content-Type': 'application/json' };
    if (session?.token) headers['Authorization'] = `Bearer ${session.token}`;

    const opts = { method, headers };
    if (body && method !== 'GET') opts.body = JSON.stringify(body);

    const res  = await fetch(`${API_BASE}${path}`, opts);
    const data = await res.json();

    if (!res.ok) {
      const err = new Error(data.message || `HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return data;
  }

  function saveSession(data) {
    const u = data.user;
    const session = {
      token:     data.token,
      role:      u.role,
      name:      u.patient?.fullName || u.admin?.name || u.pharmacy?.storeName || u.email,
      email:     u.email,
      id:        u._id,
      loginTime: Date.now(),
    };
    sessionStorage.setItem('medisetu_session', JSON.stringify(session));
    return session;
  }

  return {

    auth: {
      async login(email, password, role) {
        const data = await req('POST', '/auth/login', { email, password, role });
        return saveSession(data);
      },
      async register(payload) {
        const data = await req('POST', '/auth/register', payload);
        return saveSession(data);
      },
      async me() { return req('GET', '/auth/me'); },
      async forgotPassword(email) { return req('POST', '/auth/forgot-password', { email }); },
      logout() {
        sessionStorage.removeItem('medisetu_session');
        window.location.href = 'index.html';
      },
    },

    medicines: {
      async list(params = {}) {
        const qs = new URLSearchParams(params).toString();
        return req('GET', `/medicines${qs ? '?' + qs : ''}`);
      },
      async create(medicine) { return req('POST', '/medicines', medicine); },
      async bulkImport(medicines) { return req('POST', '/medicines/bulk', { medicines }); },
      async scanLabel(imageBase64, mimeType = 'image/jpeg') {
        return req('POST', '/medicines/scan', { imageBase64, mimeType });
      },
      async update(id, data) { return req('PUT', `/medicines/${id}`, data); },
      async delete(id)       { return req('DELETE', `/medicines/${id}`); },
      async updateIoT(id, tempC) { return req('PATCH', `/medicines/${id}/iot`, { tempC }); },
    },

    requests: {
      async list(params = {}) {
        const qs = new URLSearchParams(params).toString();
        return req('GET', `/requests${qs ? '?' + qs : ''}`);
      },
      async create(request)              { return req('POST', '/requests', request); },
      async updateStatus(id, status, rejectReason = '') {
        return req('PATCH', `/requests/${id}/status`, { status, rejectReason });
      },
      async cancel(id) { return req('DELETE', `/requests/${id}`); },
    },

    users: {
      async list(params = {}) {
        const qs = new URLSearchParams(params).toString();
        return req('GET', `/users${qs ? '?' + qs : ''}`);
      },
      async suspend(id)   { return req('PATCH', `/users/${id}/suspend`); },
      async unsuspend(id) { return req('PATCH', `/users/${id}/unsuspend`); },
      async verify(id)    { return req('PATCH', `/users/${id}/verify`); },
    },

    alerts: {
      async list(params = {}) {
        const qs = new URLSearchParams(params).toString();
        return req('GET', `/alerts${qs ? '?' + qs : ''}`);
      },
      async markRead(id)  { return req('PATCH', `/alerts/${id}/read`); },
      async markAllRead() { return req('PATCH', '/alerts/read-all'); },
    },

    async health() { return req('GET', '/health'); },
  };
})();

window.API = API;
