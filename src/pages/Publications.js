import "../styles/Publications.css";
import Card from 'react-bootstrap/Card';
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
        <span>lications</span>
      </h2>

      {/* Resilience and Infranstructure Analysis */}
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

      <div className="publicationCard-container">
        {resArr.map((eachCard) => (
          <div className="card-item">
            <div className="blue-bar"></div>
              <Card>
              <Card.Body>
                <div className="card-content">
                <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
                <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
                <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
                <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
                <Card.Link href={`${eachCard.link}`}>Read More</Card.Link>
                </div>
              </Card.Body>
              </Card>
            <div id="bottom-bar" className="blue-bar"></div>
          </div>
        ))}
      </div>

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

      <div className="publicationCard-container">
        {mechArr.map((eachCard) => (
          <div className="card-item">
            <div className="blue-bar"></div>
              <Card>
              <Card.Body>
                <div className="card-content">
                <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
                <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
                <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
                <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
                <Card.Link href={`${eachCard.link}`}>Read More</Card.Link>
                </div>
              </Card.Body>
              </Card>
            <div id="bottom-bar" className="blue-bar"></div>
          </div>
        ))}
      </div>

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

      <div className="publicationCard-container">
        {mobArr.map((eachCard) => (
          <div className="card-item">
            <div className="blue-bar"></div>
              <Card>
              <Card.Body>
                <div className="card-content">
                <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
                <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
                <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
                <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
                <Card.Link href={`${eachCard.link}`}>Read More</Card.Link>
                </div>
              </Card.Body>
              </Card>
            <div id="bottom-bar" className="blue-bar"></div>
          </div>
        ))}
      </div>

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

      <div className="publicationCard-container">
        {safArr.map((eachCard) => (
          <div className="card-item">
            <div className="blue-bar"></div>
              <Card>
              <Card.Body>
                <div className="card-content">
                <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
                <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
                <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
                <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
                <Card.Link href={`${eachCard.link}`}>Read More</Card.Link>
                </div>
              </Card.Body>
              </Card>
            <div id="bottom-bar" className="blue-bar"></div>
          </div>
        ))}
      </div>

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

      <div className="publicationCard-container">
        {transArr.map((eachCard) => (
          <div className="card-item">
            <div className="blue-bar"></div>
              <Card>
              <Card.Body>
                <div className="card-content">
                <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
                <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
                <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
                <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
                <Card.Link href={`${eachCard.link}`}>Read More</Card.Link>
                </div>
              </Card.Body>
              </Card>
            <div id="bottom-bar" className="blue-bar"></div>
          </div>
        ))}
      </div>

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

      <div className="publicationCard-container">
        {residentialArr.map((eachCard) => (
          <div className="card-item">
            <div className="blue-bar"></div>
              <Card>
              <Card.Body>
                <div className="card-content">
                <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
                <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
                <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
                <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
                <Card.Link href={`${eachCard.link}`}>Read More</Card.Link>
                </div>
              </Card.Body>
              </Card>
            <div id="bottom-bar" className="blue-bar"></div>
          </div>
        ))}
      </div>

      {/* Other */}
      <div className="publications-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <h3>Others</h3>
      </div>

      <div className="publicationCard-container">
        {otherArr.map((eachCard) => (
          <div className="card-item">
            <div className="blue-bar"></div>
              <Card>
              <Card.Body>
                <div className="card-content">
                <Card.Title><span>Title:</span> {eachCard.title}</Card.Title>
                <Card.Text><span>Journal:</span> {eachCard.journal}</Card.Text>
                <Card.Text><span>Authors:</span> {eachCard.author}</Card.Text>
                <Card.Text><span>Year:</span> {eachCard.year} </Card.Text>
                </div>
              </Card.Body>
              </Card>
            <div id="bottom-bar" className="blue-bar"></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Publications;