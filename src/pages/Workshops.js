import { Link } from "react-router-dom";
import "../styles/Workshops.css";
import workshopData from "../WORKSHOPS.json";

// Image paths in the workshop JSON files are relative to the public/ folder,
// e.g. "workshops/resilient-societies-2026/group.jpg".
export const publicImage = (src) =>
  src.startsWith("http") ? src : `${process.env.PUBLIC_URL}/${src}`;

// Shows the image when a path is set; otherwise a labeled placeholder block.
// `position` sets the CSS object-position, e.g. "center 60%" to keep faces in a cropped photo.
export const WorkshopImage = ({ src, alt, label, className = "", position }) =>
  src ? (
    <img
      className={className}
      src={publicImage(src)}
      alt={alt}
      loading="lazy"
      style={position ? { objectPosition: position } : undefined}
    />
  ) : (
    <div className={`workshop-placeholder ${className}`} role="img" aria-label={alt}>
      <span>{label}</span>
    </div>
  );

// Newest first, grouped by year: [["2026", [...]], ["2025", [...]]]
const workshopsByYear = [...workshopData]
  .sort((a, b) => b.startDate.localeCompare(a.startDate))
  .reduce((groups, workshop) => {
    const year = workshop.startDate.slice(0, 4);
    const group = groups.find(([y]) => y === year);
    if (group) group[1].push(workshop);
    else groups.push([year, [workshop]]);
    return groups;
  }, []);

export const Workshops = () => {
  return (
    <>
      <div className="workshops-intro">
        <h2>
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Work</span>
          shops
        </h2>
        <p>
          THINK lab organizes workshops that bring together researchers, practitioners, and agencies
          across disciplines and countries. Our workshops cover big data and AI for transportation
          planning, the resilience of cyber-physical infrastructure, and crisis response.
        </p>
      </div>

      <div className="workshops-list">
        {workshopsByYear.map(([year, workshops]) => (
          <section key={year}>
            <h3 className="workshops-year">{year}</h3>
            {workshops.map((workshop) => (
              <div className="workshop-row" key={workshop.id}>
                <WorkshopImage
                  className="workshop-row-image"
                  src={workshop.image}
                  position={workshop.imagePosition}
                  alt={`${workshop.title} group photo`}
                  label="Group photo / banner"
                />
                <div className="workshop-row-body">
                  {workshop.series && <span className="workshop-series">{workshop.series}</span>}
                  <h4>{workshop.title}</h4>
                  <p className="workshop-meta">{workshop.date} · {workshop.location}</p>
                  <p className="workshop-summary">{workshop.summary}</p>
                  <div className="workshop-row-footer">
                    {workshop.partners && <p className="workshop-partners">{workshop.partners}</p>}
                    {workshop.external ? (
                      <a
                        className="workshop-button"
                        href={workshop.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit workshop website ↗
                      </a>
                    ) : (
                      <Link className="workshop-button" to={workshop.link}>
                        View details →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
};

export default Workshops;
