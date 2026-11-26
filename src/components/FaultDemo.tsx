"use client";

import { useState } from "react";
import { AudioLines, Monitor, Power, VolumeX } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsapp } from "@/config/site";

const faults = [
  {
    id: "sound",
    icon: AudioLines,
    name: "No sound",
    screen: "Picture on · no sound",
    detail: "Tell us if the sound is missing on every input, or only on a particular app, decoder or HDMI device.",
  },
  {
    id: "picture",
    icon: Monitor,
    name: "Dark picture",
    screen: "Picture lost",
    detail: "If the screen stays dark but you can still hear sound, tell us whether a logo or picture appears briefly at start-up.",
  },
  {
    id: "power",
    icon: Power,
    name: "No power",
    screen: "Screen off",
    detail: "Tell us if the standby light is off, flashing or steady, and whether the TV responds to its power button.",
  },
] as const;

export function FaultDemo() {
  const [selected, setSelected] = useState<(typeof faults)[number]>(faults[0]);

  return (
    <div className="fault-demo wrap" data-reveal>
      <div className="fault-intro">
        <p className="eyebrow">Interactive TV fault guide</p>
        <h2 id="diagnosis-title">What does your TV do?</h2>
        <p className="lede">Choose a symptom to see a simulation and what to tell us when you book.</p>
      </div>
      <div className="fault-stage">
        <div className="fault-tv" data-fault={selected.id} aria-hidden="true">
          <div className="fault-screen">
            <div className="fault-picture" />
            {selected.id === "sound" && <VolumeX className="fault-muted" />}
            <span className="fault-screen-label" key={selected.id}>{selected.screen}</span>
          </div>
          <span className="fault-standby" />
        </div>
      </div>
      <div className="fault-controls">
        <div className="fault-options" role="group" aria-label="Choose a TV symptom">
          {faults.map((fault) => {
            const { id, icon: Icon, name } = fault;
            return (
              <button key={id} type="button" aria-pressed={selected.id === id} onClick={() => setSelected(fault)}>
                <Icon size={18} aria-hidden="true" />{name}
              </button>
            );
          })}
        </div>
        <div className="fault-result" aria-live="polite" aria-atomic="true">
          <strong>{selected.screen}</strong>
          <p>{selected.detail}</p>
        </div>
        <a className="button primary" href={whatsapp(`Hi Magic TV Repairs, I need help with my TV. Issue: ${selected.name}. My suburb is `)}>
          <WhatsAppIcon aria-hidden="true" /> Ask about this fault
        </a>
      </div>
    </div>
  );
}
