import "../styles/Resources.css";
import locationIconBlue from "../assets/locationIconBlue.png";
import sociodemographicIcon from "../assets/sociodemographicIcon.png";
import location from "../assets/locationIcon.png";
import questionMark from "../assets/questionMark.png";
import otherIcon from "../assets/otherIcon.png";

const SectionHeader = ({ title }) => (
  <div className="resources-section-header">
    <img src={locationIconBlue} alt="" />
    <h3>{title}</h3>
  </div>
);

const ResourceCard = ({ tag, title, description, note, grant, link }) => (
  <div className="resource-card">
    <span className="resource-tag">{tag}</span>
    <h4>{title}</h4>
    <p className="resource-description">{description}</p>
    {note && <p className="resource-note">{note}</p>}
    <div className="resource-card-footer">
      {grant && <p className="resource-grant">{grant}</p>}
      <a className="resource-button" href={link} target="_blank" rel="noopener noreferrer">
        Visit website ↗
      </a>
    </div>
  </div>
);

export const Resources = () => {
  return (
    <>
      <div className="resources-page">
        <h2>
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Reso</span>
          urces
        </h2>
        <p className="resources-intro">
          Data, tools, and materials from THINK lab's research, shared for researchers,
          practitioners, students, and communities.
        </p>

        {/* Data & Tools */}
        <SectionHeader title="Data & Tools" />
        <ResourceCard
          tag="Data & Tools"
          title="BigData4Mobility"
          description="Key takeaways on location-based service (LBS) mobile data for transportation planning: how it compares with household travel surveys, its data characteristics and quality (stability, sparsity, accuracy), and open-source LBS data."
          grant="NSF: A Whole-Community Effort to Understand Biases and Uncertainties in Using Emerging Big Data for Mobility Analysis (2021–2026)"
          link="https://bigdata4mobility.github.io/"
        />

        {/* Resilience Resources */}
        <SectionHeader title="Resilience Resources" />
        <ResourceCard
          tag="Resilience"
          title="Future Resilient Communities"
          description="Communication networks, social network models, and information-sharing strategies that help communities prepare for and recover from disasters."
          note="Coming soon: we are developing an app for community resilience. Updates will be posted on the project website."
          grant="NSF: Socially-integrated robust communication and information-resource sharing technologies for post-disaster community self-reliance (2023–2027)"
          link="https://uw-thinklab.github.io/future-resilient-communities/"
        />

        {/* Travel Survey Resources */}
        <SectionHeader title="Travel Survey Resources" />
        <div className="travel-survey">
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
    </>
  )
}

export default Resources;
