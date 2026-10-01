import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/Workshops.css";
import workshop from "../RESILIENT_WORKSHOP_2026.json";
import { WorkshopImage } from "./Workshops";
import locationIconBlue from "../assets/locationIconBlue.png";
import shoheiNagata from "../assets/THINKLabHeadshots/Shohei_Nagata.png";
import cynthiaChen from "../assets/THINKLabHeadshots/Cynthia_Chen.png";
import lyraChen from "../assets/THINKLabHeadshots/Lyra_Chen.png";

const organizerPhotos = {
  "Shohei Nagata": shoheiNagata,
  "Cynthia Chen": cynthiaChen,
  "Lyra Chen": lyraChen,
};

const SectionHeader = ({ title }) => (
  <div className="workshop-section-header">
    <img src={locationIconBlue} alt="" />
    <h3>{title}</h3>
  </div>
);

export const ResilientWorkshop2026 = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="workshop-hero">
        <WorkshopImage
          className="workshop-hero-image"
          src={workshop.banner}
          position={workshop.bannerPosition}
          alt="Workshop participants group photo"
          label="Workshop banner / group photo"
        />
        <div className="workshop-hero-text">
          <Link to="/workshops" className="workshop-back">← Back to Workshops</Link>
          <h2>{workshop.title}</h2>
          <p className="workshop-subtitle">{workshop.subtitle}</p>
          <p className="workshop-meta">
            {workshop.date} · {workshop.time} · {workshop.venue}
          </p>
        </div>
      </div>

      <div className="workshop-detail">
        {/* Overview */}
        <SectionHeader title="Overview" />
        {workshop.overview.map((paragraph, i) => (
          <p key={i} className="workshop-paragraph">{paragraph}</p>
        ))}
        <p className="workshop-paragraph font-semibold">Goals of the Workshop</p>
        <ul className="workshop-goals">
          {workshop.goals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>

        {/* Program */}
        <SectionHeader title="Program" />
        <div className="workshop-program">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Session</th>
              </tr>
            </thead>
            <tbody>
              {workshop.program.map((item, i) => (
                <tr key={i} className={item.highlight ? "highlight" : ""}>
                  <td className="program-time">{item.time}</td>
                  <td>
                    <p className="program-title">
                      {item.title}
                      {item.moderator && (
                        <span className="program-moderator"> (Moderator: {item.moderator})</span>
                      )}
                    </p>
                    {item.speaker && <p className="program-speaker">{item.speaker}</p>}
                    {item.talks && (
                      <ol className="program-talks">
                        {item.talks.map((talk, j) => (
                          <li key={j}>
                            <span className="program-speaker">{talk.speaker}</span>
                            <br />“{talk.title}”
                          </li>
                        ))}
                      </ol>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Keynote and Technology Spotlight */}
        <SectionHeader title="Featured Talks" />
        <div className="featured-talks">
          {workshop.featuredTalks.map((talk) => (
            <div className="featured-talk" key={talk.speaker}>
              <span className="workshop-series">{talk.type}</span>
              <h4>{talk.title}</h4>
              <p className="featured-abstract">{talk.abstract}</p>
              <div className="featured-speaker">
                <WorkshopImage
                  className="featured-speaker-photo"
                  src={talk.photo}
                  alt={talk.speaker}
                  label="Photo"
                />
                <div>
                  <p className="font-semibold">{talk.speaker}</p>
                  <p className="featured-affiliation">{talk.affiliation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organizers */}
        <SectionHeader title="Organizers" />
        <div className="workshop-organizers">
          {workshop.organizers.map((organizer) => (
            <div className="workshop-organizer" key={organizer.name}>
              <img src={organizerPhotos[organizer.name]} alt={organizer.name} />
              <p className="font-semibold">{organizer.name}</p>
              <p className="featured-affiliation">{organizer.role}</p>
            </div>
          ))}
        </div>

        {/* Acknowledgements */}
        <SectionHeader title="Acknowledgements" />
        <p className="workshop-paragraph">{workshop.acknowledgements}</p>
        <p className="workshop-paragraph font-semibold">Partners</p>
        <ul className="workshop-partner-list">
          {workshop.partners.map((partner) => (
            <li key={partner}>{partner}</li>
          ))}
        </ul>

        <Link to="/workshops" className="workshop-back">← Back to Workshops</Link>
      </div>
    </>
  );
};

export default ResilientWorkshop2026;
