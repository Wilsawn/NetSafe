// load-balancer/app/_store/logs.js
// Simple in-memory telemetry store (dev/demo). Resets on server restart.

let logs = []; // newest first
let totals = { ALLOW: 0, REROUTE: 0, BLOCK: 0 };
let per_backend = { A: 0, B: 0, C: 0 };

export function addLog(entry) {
  const clean = {
    ts: entry.ts || new Date().toISOString(),
    attack_score: Number(entry.attack_score),
    decision: entry.decision,
    chosen_backend: entry.chosen_backend ?? null,
  };

  // keep most recent first
  logs.unshift(clean);

  // cap memory
  if (logs.length > 500) logs.pop();

  // update totals
  if (clean.decision && totals[clean.decision] !== undefined) {
    totals[clean.decision] += 1;
  }

  // update backend counts
  if (clean.chosen_backend && per_backend[clean.chosen_backend] !== undefined) {
    per_backend[clean.chosen_backend] += 1;
  }
}

export function getLogsSnapshot() {
  return {
    totals,
    per_backend,
    recent: logs.slice(0, 20),
    recent_count: logs.length,
  };
}

// Optional: call this from a /api/reset route if you want
export function resetLogs() {
  logs = [];
  totals = { ALLOW: 0, REROUTE: 0, BLOCK: 0 };
  per_backend = { A: 0, B: 0, C: 0 };
}
