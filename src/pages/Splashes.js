import "../styles/Splashes.css";
import splashesTitle from "../assets/theSplashesTitle.png";
//import nationalCenter from "../assets/nationalCenter.png";
//import DrGuan from "../assets/drGuan.png";
//import JoanneLin from "../assets/joanneLin.png";
//import CitiesProject from "../assets/adaptableCitiesProject.png";

import wsasChen from "../assets/WSAS-2025.png";
import thesisAward from "../assets/thesis_award_2025.png";
import zephyrAward from "../assets/zephyr_award_2026.png";
import trb2026 from "../assets/trb_thinklab_2026.png";


export const Splashes = () => {
  return (
    <>
      <div className="splashes-title">
        <img
          src={splashesTitle}
          alt="The Splashes"
        />
        <h1>
          The <span>SPLASHES</span> made by THINK lab members, here and there.
        </h1>
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800 dark:text-white">
        Lab News & Highlights
      </h2>

      {/* Top 4 Splashes */}
      <div className="four-splashes-section">
        <div className="four-splashes-grid">

          <div className="splash-card">
            <img
              className="splash-image"
              src={wsasChen}
              alt="WSAS Chen 2025 award"
            />
            <p className="splash-caption">Congratualations to Dr. Cynthia Chen for being elected to Washington State Academy of Sciences!
              <a
                href="https://www.washington.edu/news/2025/07/21/wsas-2025/"
                target="_blank"
                rel="noopener noreferrer"> (News Link)</a></p>
          </div>

          <div className="splash-card">
            <img
              className="splash-image"
              src={thesisAward}
              alt="Thesis Award 2025"
            />
            <p className="splash-caption">Congratulations to Jeremy Chan for winning 2025 UW Graduate School Distinguished Thesis Award!
              <a
                href="https://www.ce.washington.edu/news/article/2026-01-08/when-streets-become-more-car-lanes"
                target="_blank"
                rel="noopener noreferrer"> (News Link)</a>
            </p>
          </div>

          <div className="splash-card">
            <img
              className="splash-image"
              src={zephyrAward}
              alt="Zephyr Award 2026"
            />
            <p className="splash-caption">2026 Zephyr Foundation Technical Achievement Award to Paper "COVID & telecommuting-induced changes in individual activity and travel patterns: Evidence from the Puget Sound Region"
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0967070X25003154" target="_blank" rel="noopener noreferrer"> (Paper Link)</a></p>
          </div>

          <div className="splash-card">
            <img
              className="splash-image"
              src={trb2026}
              alt="TRB ThinkLab 2026"
            />
            <p className="splash-caption">THINK lab members in TRB Annual Meeting 2026</p>
          </div>

        </div>
      </div>

      {/* Other Splashes Cards – Responsive 1→3 column grid */}
      <div className="splashes-feed">
        <div className="splashes-feed-grid">
          {/* Example card – repeat pattern for each entry */}
          <div className="other-splash-card dark">  {/* optional dark variant */}
            <div className="content">
              <p>
                Congratualations to <a href="https://ekinugurel.github.io/" className="link-style" target="_blank" rel="noopener noreferrer">Dr. Ekin Ugurel</a> for successfully defending his dissertation and earning his PhD degree in December 2025! Dr. Ugurel's research focuses on developing machine learning frameworks to model human and organizational decision-making within complex transportation and urban systems.
                Currently he is  a Postdoctoral Researcher at New York University, affiliated with NYU Tandon and the Center for Urban Science and Progress (CUSP).
              </p>
            </div>
          </div>
          <div className="other-splash-card">
            <div className="content">
              <p>
                THINK lab organized and hosted the Workshop <a
                  href="https://bigdata4mobility.github.io/workshop2025/"
                  className="link-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >Big Data, AI, and Transportation Planning Applications
                </a> on May 30, 2025. This workshop gathers researchers from civil engineering, urban planning, economics, and computer science
                whose work is in the frontiers of transportation planning, either from a data or a method perspective.
              </p>
            </div>
          </div>

          {/* Add more cards here – you can alternate dark/light appearance if desired */}
          <div className="other-splash-card dark">  {/* optional dark variant */}
            <div className="content">
              <p>
                Professor Cynthia Chen heads a <a href="https://ise.washington.edu/news/article/2024-01-14/building-community-resilience-2-million-nsf-grant-will-transform-disaster?utm_campaign=&utm_medium=email&utm_source=waengineer-newsletter&mkt_tok=MTMxLUFRTy0yMjUAAAGQ-oDKZdxlI0YjvYcpLea-9mXfcjL_l9zDzXZF_MOFr0kYmnE84Tzglrb5Z4G0mySLjNVomSpuK4YN656fWfWTzHGJ2Tx93vhdRe8uRwExUgg_BQ" class="link-style" target="_blank" rel="noopener noreferrer">
                  new community resilience project</a>, with a $2 million grant from NSF.
                The project aims to develop a novel framework for enhancing the resilience of communities to natural and human-made disasters through the integration of advanced communication technologies, data analytics, and community engagement.
                See <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2311405&HistoricalAwards=false" className="link-style" target="_blank" rel="noopener noreferrer">NSF grant award</a> and <a href="https://uw-thinklab.github.io/future-resilient-communities/" className="link-style" target="_blank" rel="noopener noreferrer">project website</a>.
              </p>
            </div>
          </div>

          <div className="other-splash-card">
            <div className="content">
              <p>
                Our new step towards understanding transportation big data: read our recent work - <a href="https://bigdata4mobility.github.io" class="link-style" target="_blank" rel="noopener noreferrer">project website</a>, papers: <a href="https://www.sciencedirect.com/science/article/pii/S0968090X25004206" class="link-style" target="_blank" rel="noopener noreferrer">From biases to opportunities: leveraging Location-Based-Service (LBS) data for next-generation transportation planning</a> <br /> and <br /> <a href="https://www.sciencedirect.com/science/article/abs/pii/S096669232400317X?via%3Dihub" class="link-style" target="_blank" rel="noopener noreferrer">Exploring biases in travel behavior patterns in big passively generated mobile data from 11 U.S. cities</a>
              </p>
            </div>
          </div>

          {/* Add more cards here – you can alternate dark/light appearance if desired */}
          <div className="other-splash-card dark">  {/* optional dark variant */}
            <div className="content">
              <p>
                Congratualations to Dr. Grace Jia for earning her PhD degree in June 2025! Dr. Jia's research topic is understanding COVID-19 induced responses from individuals and businesses: changes in human mobility patterns and resilience tactics by small food businesses.
                Her <a href="https://www.sciencedirect.com/science/article/abs/pii/S0967070X25003154" className="link-style" target="_blank" rel="noopener noreferrer">research paper</a> won the 2026 Zephyr Technical Achievement Award. She is currently working with Metro in Seattle.
              </p>
            </div>
          </div>

          <div className="other-splash-card">
            <div className="content">
              <p>
                THINK lab joins an elite group of travel behavior researchers (under the leadership of Dr. Chandra Bhat of UT Austin) to win the{' '}
                <a
                  href="https://www.transportation.gov/utc/bil-centers-and-grantees"
                  className="link-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Center for Understanding Future Travel Behavior and Demand
                </a>{' '}
                (TBD) center funded by USDOT as part of the Bipartisan Infrastructure Bill from the Congress.
              </p>
            </div>
          </div>

          <div className="other-splash-card dark">  {/* optional dark variant */}
            <div className="content">
              <p>
                Adaptable cities project just started with an exciting team! Find out more about what we do
                here: <a href="https://www.washington.edu/news/2021/11/01/uw-receives-2m-from-national-science-foundation-to-design-an-adaptable-society/" class="link-style" target="_blank" rel="noopener noreferrer">a UW news story</a>,
                <a href="https://fullcircle.asu.edu/fulton-schools/designed-to-deal-with-disruption/" class="link-style" target="_blank" rel="noopener noreferrer">a ASU news story</a>, and
                <a href="https://www.adaptable-cities.org/" class="link-style" target="_blank" rel="noopener noreferrer"> our project website</a>.
              </p>
            </div>
          </div>

          <div className="other-splash-card">
            <div className="content">
              <p>
                Healthy planet, healthy people: how do we recover from COVID19? Dr. Cynthia Chen weighs in
                as one of the five leading voices at UW.
                In a short story entitled <a href="https://www.washington.edu/populationhealth/healthy-planet-healthy-people/" class="link-style" target="_blank" rel="noopener noreferrer">“Pushing our cities to be smarter, healthier, and more
                  efficient for all"</a>, she lays out 3 steps for our economy recovery path while keeping
                transportation emissions down.
              </p>
            </div>
          </div>

          <div className="other-splash-card dark">  {/* optional dark variant */}
            <div className="content">
              <p>
                <a href="https://www.uncc.edu/cecs/faculty/katherine-idziorek" target="_blank" rel="noopener noreferrer" className="link-style">Dr. Katherine Idziorek</a> joined University of North Carolina Charlotte as a tenure-track
                assistant professor in August 2021!
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* All Other Splashes */}

    </>
  )
}

export default Splashes;