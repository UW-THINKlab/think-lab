import "../styles/ResourcesOpportunities.css";
import sociodemographicIcon from "../assets/sociodemographicIcon.png";
import location from "../assets/locationIcon.png";
import questionMark from "../assets/questionMark.png";
import otherIcon from "../assets/otherIcon.png";

export const ResourcesOpportunities = () => {
  return (
    <>
      {/* Travel Survey Resources */}
      <div className="travel-survey">
        <h2>
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Trav</span>
          el<span> Survery Resources</span>
        </h2>
        <p>
          Data is the new oil in today's world. With data, we answer important questions that guide
          policy making. It shall not be surprising to anyone to know that how we ask questions matter!
          Heard of this saying: garbage in, garbage out? Though it seems everyone can ask questions
          and collect data, it shall be also pointed out that how we ask questions is a science itself:
          it is called “Instrument Design”. If questions are not asked in an objective way, there are
          biases. Therefore, in instrument design, a fundamental rule is to borrow as much as we can
          from “authoritative sources” whose questions have been repeatedly tested and validated.
          This is one area where our “own innovation of question design” is needed in the minimum.
        </p>
        <p>
          With this spirit, this page compiles survey work that is completed by students of CET512
          class (Transportation Data Collection) since winter 2021. In this class, groups of students
          identify alternative sources for asking sections of questions (e.g., socio-demographis of
          a household or a person, travel related) that are often used in household travel surveys,
          and then recommend which source shall be used and if there are any modifications needed.
          The questions compiled here serve a guide for future students of this class, as well as
          anyone who wants to see what question formats have been used to ask certain questions.
        </p>
      </div>

      <div className="travel-survey-graphics">
        <div className="graphics pr-28">
          <img className="w-36 h-32 mb-5" src={sociodemographicIcon} alt="Sociodemographic"></img>
          <p className="">Socio-demographics</p>
          <p>Here you will find past works on socio-demographics related questions.</p>
        </div>

        <div className="graphics pr-28">
          <img className="w-24 h-32 mb-5" src={location} alt="Location"></img>
          <p className="">Travel-Related: Work</p>
          <p>Here you will find past works on commute trip related questions.</p>
        </div>

        <div className="graphics pr-28">
          <img className="w-16 h-28 mb-8" src={questionMark} alt="Sociodemographic"></img>
          <p className="">Travel-Related: Non-Work</p>
          <p>Here you will find past works on questions relating to nonwork related trips.</p>
        </div>

        <div className="graphics pr-32">
          <img className="w-28 h-32 mb-4 " src={otherIcon} alt="Sociodemographic"></img>
          <p className="">Other</p>
          <p>Additional survey resources</p>
        </div>
      </div>

      {/* Opportunities */}
      <div className="opportunities">
        <h2>
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Oppo</span>
          rtunities
        </h2>
        <p>
          Job Opportunity: Graduate Student Assistants (inactive)
        </p>
        <p>
          The THINK Lab at the University of Washington seeks motivated graduate student assistants (hourly rates) in the summer quarter
          to join our dynamic team exploring innovative solutions in areas such as urban mobility, travel behavior, big data and AI and transportation planning.
          The student assistant will contribute to ongoing projects, gaining hands-on experience with advanced data science techniques and producing work suitable
          for a master's thesis or peer-reviewed publication. This is an exceptional opportunity to collaborate with leading researchers and impact real-world challenges
          in urban environments. Ability to work independently, manage time effectively, and meet deadlines is essential.
        </p>
        <p>
          Please click link below for more details: (inactive)
        </p>
        <a
          href="https://drive.google.com/file/d/16wYIl0mfgwH7CrTux4_N64bm8TooX1UW/view?usp=sharing"
          style={{ color: 'rgb(0, 0, 128)', textDecoration: 'underline' }}>
        </a>

        <p>
          Job Opportunity: Research Scientist/Engineer (inactive)
        </p>
        <p>
          The THINK lab in UW's Department of Industrial & Systems Engineering has an outstanding opportunity open for a temporary Research scientist / Engineer 2 position.
          This position is initially for one year term but has the potential to become a permanent position for longer terms.
          Responsibilities include oversight and coordination of project activies, as well as leading and conducting research.
          Required qualitifications include a Master's degree in Industrial Engineering, Civil Engineering, Transportation Engineering, or a related field,
          strong programming skills (MATLAB, Python, R, or others), knowledge of transportation systems engineering or planning, as well as experience with publications in relevant journals and conference proceedings.
          2-3 years' experience in planning, engineering research or equivalent education and/or experience is required.
        </p>
        <p>
          Please click link below for complete details: (inactive)
        </p>
        <a
          href="https://docs.google.com/document/d/1NxDuobtRgzPrtGrULFKxEYSURqZ0foKb/edit?usp=sharing&ouid=106616778639762004527&rtpof=true&sd=true"
          style={{ color: 'rgb(0, 0, 128)', textDecoration: 'underline' }}
        >
        </a>

        <p>
          THINK lab is always looking for talented MS/PhD students and postdoctoral fellows.
          If interested, please send all inquiries to Professor Cynthia Chen (qzchen@uw.edu)
          or Research Scientist Lyra Chen (lchen01@uw.edu).
        </p>
      </div>
    </>
  )
}

export default ResourcesOpportunities;