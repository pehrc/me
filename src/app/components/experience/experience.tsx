import { SectionTitle } from '../sectionTitle/section-title';

import './experience.scss';
import { Skill } from '../skill/skill';

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>3 years working as a Software Developer</p>
      <div className="experience-time">
        <Skill image="/react.png" measure={3} years="3 years" />
        <Skill image="/ts.png" measure={3} years="3 years" />
        <Skill image="/js.png" measure={3} years="3 years" />
        <Skill image="/tailwind.png" measure={2} years="2 years" />
      </div>
    </div>
  );
}
