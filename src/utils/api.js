const API_BASE = import.meta.env.VITE_API_URL || 'https://boxless-profile-engine.onrender.com/api';

export async function submitLead(data) {
  const res = await fetch(`${API_BASE}/landing-page-lead`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
}
