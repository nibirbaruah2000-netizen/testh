// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}

// Bot invite link. Replace with your application's Client ID from the Developer Portal.
const CLIENT_ID = "REPLACE_WITH_CLIENT_ID";
const INVITE_PERMISSIONS = [
  "kick_members", "ban_members", "moderate_members", "manage_messages",
  "manage_channels", "manage_nicknames", "manage_roles", "view_audit_log",
  "view_channel", "send_messages", "embed_links", "read_message_history",
];
document.querySelectorAll("[data-invite]").forEach((el) => {
  el.href = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&permissions=${permissionBits()}&scope=bot%20applications.commands`;
});

function permissionBits() {
  // Discord permission bit values
  const bits = {
    kick_members: 1n << 1n, ban_members: 1n << 2n, manage_channels: 1n << 4n,
    manage_nicknames: 1n << 27n, view_channel: 1n << 10n, send_messages: 1n << 11n,
    embed_links: 1n << 14n, read_message_history: 1n << 16n, manage_messages: 1n << 13n,
    manage_roles: 1n << 28n, view_audit_log: 1n << 7n, moderate_members: 1n << 40n,
  };
  return INVITE_PERMISSIONS.reduce((sum, key) => sum + bits[key], 0n).toString();
}

// Latest version info (used on home and download pages)
fetch("data/version.json")
  .then((r) => (r.ok ? r.json() : null))
  .then((info) => {
    if (!info) return;
    document.querySelectorAll("[data-version]").forEach((el) => (el.textContent = info.version));
    document.querySelectorAll("[data-build]").forEach((el) => (el.textContent = info.build));
    document.querySelectorAll("[data-released]").forEach((el) => (el.textContent = info.released));
    document.querySelectorAll("[data-download]").forEach((el) => (el.href = info.file));
  })
  .catch(() => {});

// Command search (commands page)
const search = document.querySelector("#cmd-search");
if (search) {
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    document.querySelectorAll(".cmd").forEach((el) => {
      el.style.display = el.textContent.toLowerCase().includes(q) ? "" : "none";
    });
    document.querySelectorAll(".cmd-group").forEach((group) => {
      const visible = [...group.querySelectorAll(".cmd")].some((c) => c.style.display !== "none");
      group.style.display = visible ? "" : "none";
    });
  });
}
