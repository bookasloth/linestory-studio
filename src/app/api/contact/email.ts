import { site } from "@/data/site";

// Table-based inline-styled HTML: the only layout email clients render reliably.
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const TURQ = "#146370";
const GOLD = "#f2b705";
const SKY = "#5bc5e3";

export function enquiryEmail(
  origin: string,
  f: { name: string; email: string; location: string; message: string }
) {
  const received = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const row = (k: string, v: string) => `
    <tr>
      <td style="padding:10px 0;color:#7a776d;font-size:13px;width:130px;vertical-align:top">${k}</td>
      <td style="padding:10px 0;color:#141414;font-size:13px">${v}</td>
    </tr>`;

  return `<!doctype html>
<html><body style="margin:0;background:#f1f3f6;font-family:Segoe UI,Helvetica,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f3f6;padding:32px 12px">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">
    <tr><td align="center" style="padding-bottom:20px">
      <img src="${origin}/logo-mark.png" width="40" height="40" alt="" style="vertical-align:middle">
      <span style="font-size:15px;font-weight:600;color:#141414;letter-spacing:2px;vertical-align:middle;padding-left:8px">LINESTORY STUDIO</span>
    </td></tr>

    <tr><td style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.06)">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr><td align="center" style="background:${TURQ};padding:28px 24px;color:#ffffff">
          <div style="font-size:28px;line-height:1">&#9993;</div>
          <div style="font-size:20px;font-weight:600;margin-top:10px">New project enquiry</div>
          <div style="font-size:13px;opacity:.85;margin-top:4px">from ${esc(f.name)}</div>
        </td></tr>

        <tr><td style="padding:20px 28px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #eceae4">
            ${row("Name", esc(f.name))}
            ${row("Email", `<a href="mailto:${esc(f.email)}" style="color:${TURQ}">${esc(f.email)}</a>`)}
            ${row("Project location", esc(f.location || "—"))}
            ${row("Received", received)}
          </table>
        </td></tr>

        <tr><td style="padding:16px 28px 8px">
          <div style="background:#f7f6f2;border-radius:8px;padding:16px 18px">
            <div style="font-size:11px;letter-spacing:1.5px;color:#7a776d;text-transform:uppercase">Project details</div>
            <div style="font-size:14px;line-height:1.6;color:#141414;margin-top:8px;white-space:pre-wrap">${esc(f.message)}</div>
          </div>
        </td></tr>

        <tr><td align="center" style="padding:20px 28px 28px">
          <a href="mailto:${esc(f.email)}?subject=${encodeURIComponent("Re: your enquiry — Linestory Studio")}"
             style="display:inline-block;background:${TURQ};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:11px 26px;border-radius:6px">Reply to ${esc(f.name.split(" ")[0])}</a>
        </td></tr>

        <tr><td style="border-top:1px solid #eceae4;padding:16px 28px;font-size:12px;line-height:1.6;color:#7a776d">
          Sent from the contact form on <a href="${origin}" style="color:${TURQ}">${origin.replace(/^https?:\/\//, "")}</a>.
          Replying to this email goes straight to the sender.
        </td></tr>

        <tr><td style="font-size:0;line-height:0">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td height="4" style="background:${TURQ}"></td>
            <td height="4" style="background:${SKY}"></td>
            <td height="4" style="background:${GOLD}"></td>
            <td height="4" style="background:${TURQ}"></td>
          </tr></table>
        </td></tr>
      </table>
    </td></tr>

    <tr><td align="center" style="padding:18px 12px;font-size:11px;line-height:1.6;color:#9a978d">
      ${esc(site.name)} · ${esc(site.address)}<br>${esc(site.phone)}
    </td></tr>
  </table>
</td></tr>
</table>
</body></html>`;
}
