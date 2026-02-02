import "../styles/Home.css"
import locationIconWhite from "../assets/locationIconWhite.png"
import locationIconBlue from "../assets/locationIconBlue.png"
import awardIcon from "../assets/awardIcon.png"
import degreeIcon from "../assets/degreeIcon.png"
import whatWeDo from "../assets/whatWeDo.png"
import sampleQuestions from "../assets/sampleQuestions.png"
import researchActivities from "../assets/researchActivities.png"
import thinkWord from "../assets/THINKword.png"
import networkDots from "../assets/Network(Dots).png"
import networkLines from "../assets/networkLines.png"
import twoDimensions from "../assets/twoDimensions.png"
import twoDimensionsExamples from "../assets/twoDimensionsExamples.png"
import researchPurposes from "../assets/researchPurposes.png"
import researchSuggestions from "../assets/researchSuggestions.png"
import learningAlong from "../assets/learningAlong.png"
import learningAlongConcepts from "../assets/learningAlongConcepts.png"
import scienceSymbol from "../assets/scienceSymbol.png"
import community from "../assets/community.png"
import researchPurposesIcon from "../assets/researchPurposesIcon.png"

export const Home = () => {
  const overlayStyle = {
    backgroundColor: 'hsla(0, 0%, 97%, 0.2)',
  };

  return (
    <>
      {/* Landing Section */}
      <div
        id="landing"
        className="background relative overflow-hidden bg-cover bg-no-repeat">
        {/* Highlight Section */}
        <div className="highlight-section">
          <h3>Lab Highlights</h3>
          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
            <ul>
              <li>
                <img src={awardIcon} alt="Award icon" className="inline w-5 h-5 mr-2" />
                <b>Award</b>: Paper "<a href="https://www.sciencedirect.com/science/article/abs/pii/S0967070X25003154" target="_blank" rel="noopener noreferrer">COVID & telecommuting-induced changes in individual activity and travel patterns: Evidence from the Puget Sound Region</a>" won the 2026 Zephyr Foundation Technical Achievement Award!
                Congratualations to Dr. Grace Jia and all the co-authors! (January 2026)
              </li>
              <li>
                <img src={degreeIcon} alt="Degree icon" className="inline w-5 h-5 mr-2" />
                <b>Degree</b>: Congratuations to Dr. Ekin Ugurel for earning his PhD degree and Rie (Adam) Schulze for earning his Master degree! (December 2025)
              </li>
              <li>
                <img src={awardIcon} alt="Award icon" className="inline w-5 h-5 mr-2" />
                <a
                  href="https://www.ce.washington.edu/news/article/2026-01-08/when-streets-become-more-car-lanes"
                  target="_blank"
                  rel="noopener noreferrer">
                  <b>Award</b>: Congratulations to Jeremy Chan for winning 2025 UW graduate school distinguished thesis award! (September 2025)
                </a>
              </li>
              <li>
                <img src={awardIcon} alt="Award icon" className="inline w-5 h-5 mr-2" />
                <a
                  href="https://www.washington.edu/news/2025/07/21/wsas-2025/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <b>Award</b>: Congratualations to Dr. Cynthia Chen for being elected to Washington State Academy of Sciences! (July 2025)
                </a>
              </li>
              <li>
                <img src={degreeIcon} alt="Degree icon" className="inline w-5 h-5 mr-2" />
                <b>Degree</b>: Congratuations to Dr. Grace Jia for earning her PhD degree and Jeremy Chan for earning his Master degree! (June 2025)
              </li>
              <li>
                <img src={locationIconBlue} alt="Event icon" className="inline w-5 h-5 mr-2" />
                <a
                  href="https://bigdata4mobility.github.io/workshop2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about the Big Data Workshop"
                >
                  <b>Workshop</b>: Big Data, AI, and Transportation Planning Applications (May 2025)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed" style={{ ...overlayStyle, zIndex: 10 }}>
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 font-bold tracking-tight md:text-6xl xl:text-7xl">
                <span>Re-imagining Functions</span> <br />of Our Infrastructure Systems
              </h1>
              <div id="hero" className="learnMore">
                <a href="#intro"><span></span>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main id="intro">
        {/* THINK Lab Research */}
        <h2 className="mt-8">
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">THINK</span>
          <span> Lab Research</span>
        </h2>

        {/* What We Do */}
        <div className="what-we-do">
          <img className="w-60 h-48" src={whatWeDo} alt="What We Do" />
          <p>The work at the <span>THINK</span> (Transportation-Human Interaction-and-Network Knowledge) Lab is at
            the intersection of human behavior (in particular mobility patterns), the built environment
            and the larger infrastructure systems, and data science. Our work answers to some of the
            most important questions for this society relating to sustainability and resilience at different
            scales. More specifically, THINK lab's research activities center on unpacking complexities
            across scales, from micro-level individual mobility behaviors, to meso-scale interactions
            formed as the result of individual behaviors (whether the subject of interest is human or
            physical assets), to macro-level system behaviors that propagate through a single network
            or multiple networks.
          </p>
        </div>

        {/* Questions We Are Interested in Answering */}
        <div className="questions">
          <div className="section-headers">
            <img
              className="location-icon-blue"
              src={locationIconWhite}
              alt="white location icon with white line to the right" />
            <img
              src={sampleQuestions}
              alt="Some Sample Questions We Are Interested in Answering" />
          </div>

          <div className="questions-card-first">
            <div className="questions-card">
              <h3>1</h3>
              <p>What underlying mechanisms characterize behaviors across different scales?</p>
            </div>

            <div className="questions-card">
              <h3>2</h3>
              <p>
                How can we best leverage interactions within and between infrastructure systems and
                social systems to support sustainability and resilience?
              </p>
            </div>

            <div className="questions-card">
              <h3>3</h3>
              <p>How do people, communities and cities evolve over time and reemerge from a disaster</p>
            </div>

            <div className="questions-card">
              <h3>4</h3>
              <p>
                How do individual mobility patterns play a role in forming networks, which then
                facilitate cascading spreading patterns of socially desirable  or undesirable outcomes?
              </p>
            </div>

            <div className="questions-card">
              <h3>5</h3>
              <p>
                How can we design the most effective interventions toward healthier behaviors,
                sustainable behaviors or achieving one or multiple societal outcomes?
              </p>
            </div>
          </div>
        </div>

        {/* Research Activities */}
        <div className="research-activities">
          <div className="section-headers">
            <img
              className="location-icon-blue"
              src={locationIconBlue}
              alt="blue location icon with blue line to the right" />
            <img
              className="w-56 h-14 mt-10"
              src={researchActivities}
              alt="Some Sample Questions We Are Interested in Answering" />
          </div>
        </div>

        <div className="think-word">
          <img
            src={thinkWord}
            alt="Thw word THINK characterize THINK Lab research activities"
          />

          <div className="think-info-container">
            <div>
              <div className="think-info-paragraphs mr-12">
                <h4>TH (Transportation-Human)</h4>
                <p>
                  We deal with infrastructure systems (transportation for example) and humans at the
                  same time, not one or the other. This is because infrastructure systems provide
                  services to humans, whose behaviors then influence the performance of infrastructure
                  systems.
                </p>
              </div>

              <div className="think-info-paragraphs">
                <h4>I (Interaction)</h4>
                <p>
                  Interaction is considered in our research everywhere! Another, similar word we often
                  use is "interdependency." We consider interdependency between different physical
                  systems (eg. transportation and power) and between physical and social systems
                  (eg. transportation and humans).
                </p>
              </div>
            </div>

            <img
              className="network-dots"
              src={networkDots}
              alt="half a circle with scattered blue dots"
            />

            <div className="think-info-paragraphs ml-12">
              <div id="network" className="think-info-paragraphs">
                <h4>N (Network)</h4>
                <p>
                  We approach from a network perspective, meaning that we consider a set of entities
                  that are inter-connected with each other, or formally GRAPHS. These entities may be
                  social entities, including people, families, groups, agencies and organizations etc.
                  or physical components such as facilities that attract people's activities whether
                  they are indoor or outdoors, or locations that transfer flows (intersections or
                  substations or cell towers). Depending on our specific studies of interest, our
                  networks may be static or dynamic, in equilibrium or chaos.
                </p>
              </div>

              <div className="think-info-paragraphs">
                <h4>K (Knowledge)</h4>
                <p>We create both knowledge and novel methodologies.</p>
              </div>
            </div>
            <img
              className="network-lines"
              src={networkLines}
              alt="half a circle with scattered blue dots"
            />
          </div>
        </div>

        {/* Balancing Between Science and Broader Impacts */}
        <h2 className="mt-8">
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Balan</span>
          <span>cing Between Science and Broader Impacts</span>
        </h2>

        <div className="section-headers">
          <img
            className="location-icon-blue"
            src={locationIconBlue}
            alt="blue location icon with blue line to the right" />
          <img
            className="two-dimensions mt-10"
            src={twoDimensions}
            alt="Two Dimensions" />
        </div>

        <div className="two-dimensions-container">
          <div className="two-dimensions-paragrahs mr-9">
            <p className="mt-8">
              The work at THINK lab contributes in two important dimensions: science and broader impacts.
              The former means an intellectual contribution to one or more scientific disciplines
              (e.g., statistical methods, optimization, network science, data science etc.) and the
              latter can mean different things, for example, providing a solution to a real-world
              problem that will result in significant societal benefits (e.g., designing an intervention
              that will lead to more people to switch to healthier behaviors). One can make a significant
              contribution to either or both.
            </p>
            <p className="mt-6">
              If you imagine a graph with these two dimensions: science and broader impacts, the
              research conducted at THINK lab is all over. Where your research will be in this
              two-dimensional space depends what really excites you and what you want to pursue
              after your education.
            </p>
          </div>
          <img
            className="w-64 h-72"
            src={scienceSymbol}
            alt="blue atom symbol with 3 globes on the intersection"
          />
        </div>

        <div className="section-headers">
          <img
            className="location-icon-blue"
            src={locationIconBlue}
            alt="blue location icon with blue line to the right" />
          <img
            className="two-dimensions-examples mt-10"
            src={twoDimensionsExamples}
            alt="Two Dimensions Examples" />
        </div>

        <div className="two-examples-container mt-8">
          <div className="two-examples-para mr-5">
            <h4 className="mt-4">Katie Idziorek</h4>
            <img
              src={community}
              alt="6 human figures holding hands"
            />
            <p>
              One project (by Katie Idziorek) that the lab is working is on community resilience,
              i.e., how to leverage community residents' own resources for enhancing their own
              adaptive capacity for a disaster? We are in the first stage of the research during
              which we have conducted many focus groups, workshops and is carrying out a
              community-based survey in a number of neighborhoods. At this stage, I would say that
              the research that has been conducted so far has significant broader impacts (through
              many interactions with different communities in the region) and has not yet made a
              significant contribution in science yet. As we move this research further, we will
              expect to make scientific contributions in a number of areas including resource
              allocation (optimization) and information learning and sharing.
            </p>
          </div>
          <div className="two-examples-para">
            <h4 className="mt-4">Dr. Xiangyang Guan</h4>
            <p>
              Dr. Xiangyang Guan completed his PhD dissertation on successfully developing a backward
              approach that makes no assumption on the network structure, simply takes failure
              outcome data (e.g., congestion, power blackout) as inputs to infer the underlying
              failure propagation process that gives rise to the observed phenomenon. The developed
              methodology was tested and validated in four independent cases involving transportation,
              power, epidemic and an interdependent system of transportation and power. The
              developed backward approach is a stark departure from the vast majority of the works
              in the area, which always start with a pre-determined network structure and
              propagation mechanisms and then simulate the propagation outcomes. The paper was
              published in PNAS. In this case, Dr. Guan's dissertation makes a solid contribution
              to the underlying science that is used to answer the critical question of how to
              infer propagation patterns with only failure outcome data. More specifically,
              he developed a model by integrating the state of the art from Bayesian statistics,
              network science and optimization.
            </p>
          </div>
        </div>

        {/* Research Philosophy */}
        <h2 className="mt-20">
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Resea</span>
          <span>rch Philosophy</span>
        </h2>

        <div className="section-headers">
          <img
            className="location-icon-blue"
            src={locationIconBlue}
            alt="blue location icon with blue line to the right" />
          <img
            className="research-purposes mt-10"
            src={researchPurposes}
            alt="Research Purposes" />
        </div>

        {/* Research Purposes */}
        <div className="research-philosophy-container mt-8">
          <p>
            We conduct research for the purposes of knowledge discovery, methodological innovation,
            self-enlightenment and contribution to the society. We believe that when we conduct
            research truly for the purpose of uncovering the unknown, our potentials are boundless.
            I note that this does not mean publications are not important: they are absolutely
            important for your career! A truly fruitful research career can be both joyful and
            painful—joyful, because when new insight is learned, that moment of joy is indescribable
            and embarking a research career means that we take on a lifelong journey dotted with
            moments of joy; painful, because often times, we can also walk on a path that takes
            long hours, and is lonely and full of struggles. It is exactly this combination of
            loneness, struggles and moments of joy that defines our research life and makes our
            work fun.
          </p>
          <img
            src={researchPurposesIcon}
            alt="Computer screen with increasing arrow on the tip, a bar graph to the left and
              magnifying glass to the right"
          />
        </div>

        {/* Research Suggestions */}
        <div className="research-suggestions-container mt-16">
          <div className="section-headers">
            <img
              className="location-icon-blue"
              src={locationIconWhite}
              alt="white location icon with white line to the right" />
            <img
              className="research-suggestions"
              src={researchSuggestions}
              alt="Research Suggestions" />
          </div>

          <div className="suggestions-text-container">
            <p className="my-4">
              Having walked a longer journey than most of you, I have a few suggestions for you:
            </p>
            <div className="suggestions-flex mb-10">
              <div className="suggestions-paragraph">
                <p>
                  Settle your heart deep, so that you can engage in deep thinking, having your own
                  time, and are not constantly bothered by what and how many papers you can publish.
                </p>
              </div>

              <div className="suggestions-paragraph">
                <p>
                  Keep writing. Writing helps clarify and deepen our thinking. Writing is also a
                  lifelong learning journey.
                </p>
              </div>

              <div className="suggestions-paragraph">
                <p>
                  Read broadly, which may include non-technical papers and stories and papers that
                  do not directly fall into your research area. You will find that many phenomena
                  in life are well-connected and have commonalities. By doing this, you are trying
                  to build yourself with well-rounded qualities, as opposed to being only good in
                  certain technical aspects (e.g., data mining…).
                </p>
              </div>

              <div className="suggestions-paragraph">
                <p>
                  Enjoy life. Enjoy your surroundings (people, nature, and everything else), engage
                  in socially meaningful activities and conversations and contribute to the society.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Along */}
        <div className="section-headers">
          <img
            className="location-icon-blue"
            src={locationIconBlue}
            alt="blue location icon with blue line to the right" />
          <img
            className="learning-along mt-10"
            src={learningAlong}
            alt="Learning Along" />
        </div>

        <div className="learning-along-container">
          <p className="mt-8">
            What you would learn by working with me: aside from learning the technical skills that
            will facilitate you to perform some sophisticated research tasks, some of the most
            important capabilities you shall learn (which will benefit you for life, even if you
            decide not to conduct research or move out of the field of transportation) are below:
          </p>
          <img
            src={learningAlongConcepts}
            alt="4 circles with a light bulb, magnifying glass, question mark, and communication
              icon in each circle (from left to right)"
          />
        </div>
      </main>
    </>
  )
}

export default Home;