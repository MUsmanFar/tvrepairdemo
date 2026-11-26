"use client";

import type { FormEvent } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsapp } from "@/config/site";

export function RepairEnquiry() {
  function openWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const suburb = String(data.get("suburb") ?? "").trim();
    const model = String(data.get("model") ?? "").trim();
    const fault = String(data.get("fault") ?? "");
    const message = [
      "Hi Magic TV Repairs, can I check availability for a home visit?",
      `Suburb: ${suburb}`,
      model ? `TV model: ${model}` : "",
      `Fault: ${fault}`,
    ].filter(Boolean).join("\n");

    window.location.assign(whatsapp(message));
  }

  return (
    <form id="repair-enquiry" tabIndex={-1} className="enquiry-card" method="post" onSubmit={openWhatsApp}>
      <h3>Check home-visit availability</h3>
      <div className="enquiry-fields">
        <label>Suburb
          <input name="suburb" autoComplete="address-level3" placeholder="e.g. Richmond Estate" required pattern=".*\S.*" maxLength={80} />
        </label>
        <label>TV model <span>(optional)</span>
          <input name="model" placeholder="Brand or model number" maxLength={100} />
        </label>
      </div>
      <label>What’s happening?
        <select name="fault" defaultValue="" required>
          <option value="" disabled>Select a fault</option>
          <option>Won’t switch on</option>
          <option>Picture problems</option>
          <option>Sound or signal issues</option>
          <option>Something else</option>
        </select>
      </label>
      <button type="submit" className="button primary"><WhatsAppIcon aria-hidden="true" /> Continue on WhatsApp</button>
      <p>You can review and send the message in WhatsApp.</p>
    </form>
  );
}
