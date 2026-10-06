import { SectionHeading } from "../components/SectionHeading";
import type { StackGroup } from "../data/portfolio";

type StackSectionProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: StackGroup[];
};

export function StackSection({ id, number, eyebrow, title, description, groups }: StackSectionProps) {
  return (
    <section className="content-section stack-section" id={id}>
      <div className="container">
        <SectionHeading number={number} eyebrow={eyebrow} title={title} description={description} />
        <div className="stack-grid">
          {groups.map((group) => (
            <div className="stack-group" key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
