import { useEffect, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SocialIcon } from "../components/SocialIcon";
import { links } from "../data/portfolio";
import "../styles/contact.css";

type ContactSymbolName = "copy" | "check";

function ContactSymbol({ name }: { name: ContactSymbolName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {name === "copy" && <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>}
      {name === "check" && <path d="m5 12 4 4L19 6" />}
    </svg>
  );
}

const channels: { id: "linkedin" | "github"; title: string; account: string; href: string }[] = [
  { id: "linkedin", title: "LinkedIn", account: "Jarol Riquelme", href: links.linkedin },
  { id: "github", title: "GitHub", account: "@HarrySevenVader", href: links.github },
];

export function Contact() {
  const email = links.email.replace(/^mailto:/, "").split("?")[0];
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (copyStatus === "idle") return;
    const timeout = window.setTimeout(() => setCopyStatus("idle"), 4000);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <section className="content-section contact-section" id="contacto" aria-label="Contacto">
      <div className="container">
        <div className="contact-layout">
          <SectionHeading
            number="05"
            eyebrow="Contacto"
            title={<>Hablemos de tu <em>próximo proyecto.</em></>}
            description="Software, datos y automatización para resolver necesidades concretas. Si tienes un proyecto o una oportunidad en tu equipo, conversemos."
          />

          <div className="contact-details">
            <p className="contact-location">Santiago, Chile</p>
            <div className="contact-email-row">
              <a className="contact-email" href={links.email}>{email}</a>
              <button className="contact-copy" type="button" onClick={copyEmail} aria-label="Copiar dirección de correo" title="Copiar correo">
                <ContactSymbol name={copyStatus === "copied" ? "check" : "copy"} />
              </button>
            </div>
            <p className="contact-copy-status" role="status" aria-atomic="true">
              {copyStatus === "copied" ? "Correo copiado." : copyStatus === "error" ? "No se pudo copiar. Puedes seleccionar la dirección y copiarla manualmente." : ""}
            </p>
            <nav className="contact-social-links" aria-label="Redes profesionales">
              {channels.map((channel) => (
                <a className={`contact-social-button contact-social-button--${channel.id}`} key={channel.id} href={channel.href} target="_blank" rel="noopener noreferrer" aria-label={`${channel.title}: ${channel.account} (abre en otra pestaña)`}>
                  <SocialIcon name={channel.id} />
                  <span>{channel.title}</span>
                  <span className="contact-social-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
