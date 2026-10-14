import type { ReactNode } from "react";

type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({ number, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <p className="section-label"><span>{number}</span> / {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
