import "../styles/Publications.css";
import Card from 'react-bootstrap/Card';
import ResearchBunnyWidget from "../components/ResearchBunnyWidget";
import resilienceData from "../RESILIENCE_PUBLICATIONS.json";
import mechanismData from "../MECHANISMS_PUBLICATIONS.json";
import mobilityData from "../MOBILITY_PUBLICATIONS.json";
import safetyData from "../SAFETY_PUBLICATIONS.json";
import transitData from "../TRANSIT_PUBLICATIONS.json";
import residentialData from "../RESIDENTIAL_PUBLICATIONS.json";
import otherData from "../OTHER_PUBLICATIONS.json";
import locationIconBlue from "../assets/locationIconBlue.png";
import resilienceInfrastucture from "../assets/resilienceInfrastructure.png";
import mechanismLearning from "../assets/mechanismLearning.png";
import mobilityAnalysis from "../assets/mobilityAnalysis.png";
import safetyAnalysis from "../assets/safetyAnalysis.png";
import transitRelated from "../assets/transitRelated.png";
import residentialChoice from "../assets/residentalChoices.png";

// A publication with an "rbPaperId" also gets a ResearchBunny widget next to
// "Read More" — see docs/researchbunny-widget.md
const PublicationCard = ({ eachCard }) => (
  <div className="card-item">
    <div className="blue-bar"></div>
      <Card>
      <Card.Body>
        <div className="card-content">
        <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
        <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
        <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
        <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
        <div className="card-actions">
          <Card.Link href={`${eachCard.link}`}>Read More</Card.Link>
          {eachCard.rbPaperId && (
            <ResearchBunnyWidget
              paperId={eachCard.rbPaperId}
              formats={eachCard.rbFormats || "all"}/>
          )}
        </div>
        </div>
      </Card.Body>
      </Card>
    <div className="bottom-bar blue-bar"></div>
  </div>
);

const PublicationCards = ({ publications }) => (
  <div className="publicationCard-container">
    {publications.map((eachCard) => (
      <PublicationCard key={eachCard.title} eachCard={eachCard} />
    ))}
  </div>
);

export const Publications = () => {
  let resArr = resilienceData;
  let mechArr = mechanismData;
  let mobArr = mobilityData;
  let safArr = safetyData;
  let transArr = transitData;
  let residentialArr = residentialData;
  let otherArr = otherData;
  return (
    <>
      <h2 className="publications">
        <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Our Pu</span>
        <span>blications</span>
      </h2>

      {/* Resilience and Infrastructure Analysis */}
      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <img
          className="resilienceInfrastructure"
          src={resilienceInfrastucture}
          alt="Research Grants"/>
      </div>

      <PublicationCards publications={resArr} />

      {/* Mechanisms Designs and Preference Learning */}
      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <img
          className="mechanismLearning"
          src={mechanismLearning}
          alt="Research Grants"/>
      </div>

      <PublicationCards publications={mechArr} />

      {/* Mobility Analysis */}
      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <img
          className="mobilityAnalysis"
          src={mobilityAnalysis}
          alt="Research Grants"/>
      </div>

      <PublicationCards publications={mobArr} />

      {/* Safety Analysis */}
      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <img
          className="safetyAnalysis"
          src={safetyAnalysis}
          alt="Research Grants"/>
      </div>

      <PublicationCards publications={safArr} />

      {/* Transit Related */}
      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <img
          className="transitRelated"
          src={transitRelated}
          alt="Research Grants"/>
      </div>

      <PublicationCards publications={transArr} />

      {/* Residential Location Choices */}
      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <img
          className="residentialChoices"
          src={residentialChoice}
          alt="Research Grants"/>
      </div>

      <PublicationCards publications={residentialArr} />

      {/* Other */}

      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <h3>Others</h3>
      </div>

      <PublicationCards publications={otherArr} />
    </>
  )
}

export default Publications;
