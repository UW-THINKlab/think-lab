import "../styles/Splashes.css";
import splashesTitle from "../assets/theSplashesTitle.png";
import nationalCenter from "../assets/nationalCenter.png";
import DrGuan from "../assets/drGuan.png";
import JoanneLin from "../assets/joanneLin.png";
import CitiesProject from "../assets/adaptableCitiesProject.png";

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

    {/* Top 4 Splashes */}
    <div className="four-splashes-pics">
      <div className="splashes-pics">
        <img
          className="national-center"
          src={nationalCenter}
          alt=""
        />
        <img
          className="dr-guan"
          src={DrGuan}
          alt=""
        />
        <img
          className="joanne-lin"
          src={JoanneLin}
          alt=""
        />
        <img
          className="cities-project"
          src={CitiesProject}
          alt=""
        />
      </div>

      <div className="four-splashes-para">
        <p>
          THINK lab joins an elite group of travel behavior researchers (under the
          leadership of Dr. Chandra Bhat of UT Austin) to win the <a href="https://www.transportation.gov/utc/bil-centers-and-grantees"class="link-style">National Center
          for Understanding Future Travel Behavior and Demand </a>(TBD) center funded
          by USDOT as part of the Bipartisan infrastructure bill from the Congress.
        </p>

        <p>
          Dr. Xiangyang Guan will join WSP in Atlanta in November 2022. Congratulations
          on starting a new chapter in life! We all love Dr. Guan, who will remain
          as an honorary member of the THINK LAB.
        </p>

        <p>
          Congratulations to Joanne Lin who joined PSRC (Puget Sound Regional Council) as an assistant
          data programmer in October 2022!
        </p>

        <p>
          Adaptable cities project just started with an exciting team! Find out more about what we do
          here: <a href="https://www.washington.edu/news/2021/11/01/uw-receives-2m-from-national-science-foundation-to-design-an-adaptable-society/" class="link-style">a UW news story</a>, 
          <a href="https://fullcircle.asu.edu/fulton-schools/designed-to-deal-with-disruption/" class="link-style">a ASU news story</a>, and
          <a href="https://www.adaptable-cities.org/" class="link-style"> our project website</a>.
        </p>
      </div>
    </div>

    {/* All Other Splashes */}
    <div className="px-28 splashes-column">

      <div className="splashes-content-blue">
        <p>
            Professor Cynthia Chen heads a <a href="https://ise.washington.edu/news/article/2024-01-14/building-community-resilience-2-million-nsf-grant-will-transform-disaster?utm_campaign=&utm_medium=email&utm_source=waengineer-newsletter&mkt_tok=MTMxLUFRTy0yMjUAAAGQ-oDKZdxlI0YjvYcpLea-9mXfcjL_l9zDzXZF_MOFr0kYmnE84Tzglrb5Z4G0mySLjNVomSpuK4YN656fWfWTzHGJ2Tx93vhdRe8uRwExUgg_BQ" class="link-style">
            new community resilience project </a>, with a $2 million grant from NSF.
            This project will examine disaster response with pilot communities in Washington State and Japan.
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          THINK lab post-doctoral fellow Dr. Guan has just published a <a href="https://www.sciencedirect.com/science/article/pii/S1366554521001496?via%3Dihub" class="link-style">new article </a>
           on Transportation
          Research Part E that will move ahead the prediction window of evacuation demand by at least
          TWO DAYS! The work will also be presented at the ISTTT24 conference in July 2022 in Beijing.
        </p>
      </div>

      <div className="splashes-content-blue">
        <p>
          Katie Idziorek has been selected as a 2019 Dwight D. Eisenhower Transportation Fellow, a
          national fellowship open to undergraduate, graduate and doctoral students engaged in
          transportation-related research. The Eisenhower fellowship supported Katherine's attendance
          at the TRB 2019 Annual Meeting in D.C., where she presented her current research project,
          “The contribution of social networks and resource sharing to community adaptive capacity.”
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          Our new step towards understanding transportation big data: read our recent work on 
          <a href="https://www.sciencedirect.com/science/article/pii/S0968090X18316085?via%3Dihub"class="link-style"> extracting trips from multi-sourced data for mobility pattern analysis: an app-based
          data example.
          </a>
    
        </p>
      </div>

      <div className="splashes-content-blue">
        <p>
          Katie Idziorek presented a paper on “Enhancing Community Health with Resilient
          Socio-technological Networks” at the Association of Collegiate Schools of Planning
          (ACSP) 2018 annual conference in Buffalo, NY. Katie also participated as a panelist
          in a roundtable discussion on “Navigating Challenges and Building Infrastructure to
          Support Community-Engaged Partnerships.”
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          A new <a href="https://www.fhwa.dot.gov/planning/tmip/publications/other_reports/data_emerging_tech/">TMIP report</a>
           is just released by the THINK lab and our collaborators (Dr. Jeff Ban
          and his students) analyzing the various characteristics of emerging big data for deriving
          travel patterns.
        </p>
      </div>

      <div className="splashes-content-blue">
        <p>
          Katie Idziorek, AICP,  
           <a href="https://enotrans.org/article/eno-welcomes-university-of-washington-ph-d-candidate-as-the-2020-thomas-j-obryant-fellow/" class="link-style"> has been selected by the
          Eno Center for Transportation for the
          Summer 2020 Thomas J. O'Bryant Transportation Policy and Finance Fellowship 
          </a>
          . The O'Bryant
          Fellowship is designed to bridge research and policy while providing a professional
          development opportunity for aspiring transportation specialists. As an Eno Fellow,
          Katherine will engage with the transportation policymaking community while assisting
          in the development of Eno transportation research documents and policy recommendations.
          Katherine has also been selected to participate in Eno's Future Leaders Development
          Conference, which will next take place in June of 2021.
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          PNAS publication: <a href="https://www.pnas.org/doi/10.1073/pnas.1722313115" class="link-style">A new paper</a> on General methodology for inferring failure-spreading
          dynamics in networks, authored by Xiangyang Guan and Cynthia Chen, was published on PNAS.
        </p>
      </div>

      <div className="splashes-content-blue">
        <p>
          A new paper proposing personalized incentives for promoting sustainable travel behaviors
          led by Xi Zhu, was published on Transportation Research Part C.
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          Healthy planet, healthy people: how do we recover from COVID19? Dr. Cynthia Chen weighs in
          as one of the five leading voices at UW on climate change and decarbonization.
          In a short story entitled <a href="https://www.washington.edu/populationhealth/healthy-planet-healthy-people/" class="link-style">“Pushing our cities to be smarter, healthier, and more
          efficient for all"</a>
          , she lays out 3 steps for our economy recovery path while keeping
          transportation emissions down.
        </p>
      </div>

      <div className="splashes-content-blue">
        <p>
          Congratulations to Katie Idziorek for passing her dissertation proposal defense on
          Feb 28, 2020! Her work in community resilience examines how to leverage social ties
          to facilitate response effort. Her work demonstrates a perfect combination of both
          scientific contribution in multiple disciplines (social networks, resilience, urban
          planning and engineering) and significant societal impacts!
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          On No 15, 2018, Cynthia Chen, Xiangyang Guan and Katie Idziorek, along with collaborator
          Dan Abramson from UW Urban Design & Planning attended a meeting of the King County
          Community Outreach Workgroup, which included emergency managers, public health officials
          and public service coordinators from multiple counties in the greater Seattle region.
          The meeting was held at the King County Emergency Coordination Center in Renton, WA.
          The group discussed the role of social networks in community resilience and how to leverage
          social ties to facilitate response effort.
        </p>
      </div>

      <div className="splashes-content-blue">
        <p>
          Katie Idziorek was recognized as the <a href="https://www.transportation.gov/utc/2017-outstanding-students-year-0"class="link-style">2017 Outstanding Student of the Year</a>
           by the University
          Transportation Centers (UTC) Program. She was also awarded the Helene M. Overly Memorial
          Scholarship from Women's Transportation Seminar (WTS) for the year 2018.
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          Katie Idziorek, AICP, recently completed a  
          <a href="https://enotrans.org/article/working-at-eno-the-2020-thomas-j-obryant-fellow-reflects-on-her-experience/" class="link-style"> 10-week fellowship 
          </a> with the <a href="https://enotrans.org/" class="link-style">Eno Center for
          Transportation</a> in which she worked with Eno's policy analysis team to contribute to
          transportation-related research and reporting. Due to the COVID-19 pandemic, the fellowship
          was conducted fully online. Katherine will also participate in Eno's 2020 Leadership
          Development Conference, which has been postponed to 2021. Read Katherine's Eno
          Transportation Weekly op-ed on multi-hazard approaches to transportation planning here.
        </p>
      </div>

      <div className="splashes-content-blue">
        <p>
          A new paper proposing personalized incentives for promoting sustainable travel behaviors
          led by Xi Zhu, was published on Transportation Research Part C. 
        </p>
      </div>

      <div className="splashes-content-white">
        <p>
          Dr. Katherine Idziorek will join University of North Carolina Charlotte as a tenure-track
          assistant professor in August 2021!
        </p>
      </div>

      

      <div className="splashes-content-blue">
  
    <p>THINKlab recently won <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2311405"class="link-style">a grant from NSF</a> to study
    socially-integrated robust communication and information-resource sharing technologies for post-disaster community self-reliance. 
    The study period is currently estimated to span from October 2023 to October 2027. </p>
   

  
  </div>



            {/* Start pasting new splashes here */}

    </div>
    </>
  )
}

export default Splashes;