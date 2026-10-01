import "../styles/JoinUs.css";
import locationIconBlue from "../assets/locationIconBlue.png";

const SectionHeader = ({ title }) => (
  <div className="joinus-section-header">
    <img src={locationIconBlue} alt="" />
    <h3>{title}</h3>
  </div>
);

export const JoinUs = () => {
  return (
    <div className="joinus-page">
      <h2>
        <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Join</span>
        {" "}Us
      </h2>

      {/* Welcome */}
      <div className="joinus-welcome">
        <p>
          Welcome! The THINK (Transportation-Human Interaction-and-Network Knowledge) Lab works at the
          intersection of human behavior (in particular mobility patterns), the built environment and
          infrastructure systems, and data science. We tackle questions of sustainability and
          resilience across scales: from individual mobility behaviors, to the interactions they form,
          to system-level patterns that propagate through interconnected networks of people and
          infrastructure. Our research spans both science, through new knowledge and methodologies,
          and broader impacts, through solutions to real-world problems. We collaborate across
          disciplines with researchers, agencies, and communities in the U.S. and around the world.
        </p>
        <p>
          If you are curious about how people move, adapt, and recover, and want to turn data and
          methods into insights for planning and policy, we would love to hear from you.
        </p>
      </div>

      <div className="joinus-contact">
        <p>
          THINK lab is always looking for talented MS/PhD students and postdoctoral fellows.
          If interested, please send all inquiries to Professor Cynthia Chen (
          <a href="mailto:qzchen@uw.edu">qzchen@uw.edu</a>) or Research Scientist Lyra Chen (
          <a href="mailto:lchen01@uw.edu">lchen01@uw.edu</a>).
        </p>
      </div>

      {/* Open Positions */}
      <SectionHeader title="Open Positions" />
      <p>
        There are no open positions at the moment. New openings will be posted here. You are still
        welcome to contact us about future opportunities.
      </p>

      {/* Past Postings */}
      <SectionHeader title="Past Postings" />
      <div className="past-posting">
        <div className="past-posting-header">
          <h4>Graduate Student Assistants</h4>
          <span className="past-posting-tag">Inactive</span>
        </div>
        <p>
          The THINK Lab at the University of Washington seeks motivated graduate student assistants (hourly rates) in the summer quarter
          to join our dynamic team exploring innovative solutions in areas such as urban mobility, travel behavior, big data and AI and transportation planning.
          The student assistant will contribute to ongoing projects, gaining hands-on experience with advanced data science techniques and producing work suitable
          for a master's thesis or peer-reviewed publication. This is an exceptional opportunity to collaborate with leading researchers and impact real-world challenges
          in urban environments. Ability to work independently, manage time effectively, and meet deadlines is essential.
        </p>
      </div>

      <div className="past-posting">
        <div className="past-posting-header">
          <h4>Research Scientist/Engineer</h4>
          <span className="past-posting-tag">Inactive</span>
        </div>
        <p>
          The THINK lab in UW's Department of Industrial & Systems Engineering has an outstanding opportunity open for a temporary Research scientist / Engineer 2 position.
          This position is initially for one year term but has the potential to become a permanent position for longer terms.
          Responsibilities include oversight and coordination of project activies, as well as leading and conducting research.
          Required qualitifications include a Master's degree in Industrial Engineering, Civil Engineering, Transportation Engineering, or a related field,
          strong programming skills (MATLAB, Python, R, or others), knowledge of transportation systems engineering or planning, as well as experience with publications in relevant journals and conference proceedings.
          2-3 years' experience in planning, engineering research or equivalent education and/or experience is required.
        </p>
      </div>
    </div>
  )
}

export default JoinUs;
