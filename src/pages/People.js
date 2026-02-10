import * as React from "react";
import "../styles/People.css";
import locationIconBlue from "../assets/locationIconBlue.png";
import previousMembers from "../assets/previousMembers.png"
import { useTable } from "react-table";
import membersData from "../PREVIOUS_MEMBERS.json";
import computerIcon from "../assets/computerIcon.png";
import uploadIcon from "../assets/uploadIcon.png";
import settingIcon from "../assets/settingIcon.png";
import fixingIcon from "../assets/fixingIcon.png"
import cynthiaChen from "../assets/THINKLabHeadshots/Cynthia_Chen.png";
//import ekinUgurel from "../assets/THINKLabHeadshots/Ekin_Ugurel.png";
import donghoonSon from "../assets/THINKLabHeadshots/Dong-Hoon_Son.png";
//import adamSchulze from "../assets/THINKLabHeadshots/Adam_Schulze.png";
import lyraChen from "../assets/THINKLabHeadshots/Lyra_Chen.png";
import hongkeXie from "../assets/THINKLabHeadshots/Hongke_Xie.png";
import yutengZhang from "../assets/THINKLabHeadshots/Yuteng_Zhang.png"
import hesamShafienya from "../assets/THINKLabHeadshots/Hesam_Shafienya.png"
import lexiLiu from "../assets/THINKLabHeadshots/Lexi_Liu.png";
import peachChansaisakhorn from "../assets/THINKLabHeadshots/Peach_Chansaisakhorn.png";
import nirajlMali from "../assets/THINKLabHeadshots/Niraj_L_Mali.png";
import andrewZunt from "../assets/THINKLabHeadshots/Andrew_Zunt.png";
import jingjueBao from "../assets/THINKLabHeadshots/Jingjue_Bao.png";
import shoheiNagata from "../assets/THINKLabHeadshots/Shohei_Nagata.png";


export const People = () => {
  const data = React.useMemo(() => membersData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Degree/Position",
        accessor: "degree",
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Thesis Title",
        accessor: "thesis",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {/* Our Work */}
      <div className="our-work">
        <h2>
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Our W</span>
          ork
        </h2>
        <p>
          The THINK (Transportation-Human Interaction-and-Network Knowledge) Lab studies the sustainability
          and resilience of a city through the lens of human beings interacting with the physical environment.
          We generate new knowledge and insights for use in city planning, infrastructure development and
          policy design. Our research results facilitate real-time disaster response and recovery efforts.
          Our work is highly interdisciplinary, drawing on the latest methods and ideas in disciplines
          from social and natural sciences to engineering.
        </p>
      </div>

      <div className="travel-survey-graphics">
        <div className="graphics pr-28">
          <img
            className="w-36 h-32 mb-5"
            src={computerIcon}
            alt="Computer screens">
          </img>
          <p className="">High and Low Tech</p>
          <p>We integrate high and low tech, recognizing that all means (methods) are needed</p>
        </div>

        <div className="graphics pr-28">
          <img
            className="w-40 h-32 mb-5"
            src={uploadIcon}
            alt="Cloud with an upload arrow">
          </img>
          <p className="">Transdisciplinary</p>
          <p>We integrate and transform knowledge from disciplinaries from engineering to science</p>
        </div>

        <div className="graphics pr-28">
          <img
            className="w-32 h-32 mb-6"
            src={settingIcon}
            alt="Two gears">
          </img>
          <p className="">Problem-Driven</p>
          <p>
            Our work is motivated from real-world problems whose solutions will have significant
            impacts on society
          </p>
        </div>

        <div className="graphics pr-32">
          <img
            className="w-36 h-32 mb-7"
            src={fixingIcon}
            alt="Fixing tools">
          </img>
          <p className="">Rooted in Science</p>
          <p>
            Our approach to problems is rooted in science. We generate basic knowledge and tools for
            use in practice
          </p>
        </div>
      </div>


      {/* Our Members */}
      <div className="our-members">
        <h2>
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Our M</span>
          embers
        </h2>
      </div>

      {/* Current Members */}
      <div className="current-members-container">
        <div className="current-members-individual">
          <img
            className="profile"
            src={cynthiaChen}
            alt="Professor Cytnthia Chen" />
          <p>Cynthia Chen, Ph.D.</p>
          <p>Director</p>
          <p>
            Cynthia Chen is a Professor in Civil and Environmental Engineering at UW. Dr. Chen is
            an internationally-reknown transportation scholar. THINK lab centers around three
            inter-connected themes: travel behavior (aka human mobility) analysis, resilient
            infrastructures, and their intersections. Cynthia Chen received her Ph.D. in civil and
            environmental engineering from the University of California, Davis in 2001. Prior to
            joining UW, she taught for six years from 2003 to 2009 in the City College of New York
            as an assistant professor. ​Between 2017 and 2019, she served as a Program Director of
            the Civil Infrastructure Systems (CIS) Program in the Civil, Mechanical and Manufacturing
            Innovation (CMMI) Division of the Engineering (ENG) Directorate of National Science
            Foundation (NSF).
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={lyraChen}
            alt="Lyra Chen" />
          <p>Lyra Chen, Ph.D.</p>
          <p>Research Scientist</p>
          <p>
            Lyra Chen received her Ph.D. in Civil Engineering from the City College, City University of New York.
            She joined THINK Lab in 2025 as a research scientist helping manage the lab and lead research projects in the lab.
            Her research interests include transportation safety, modeling the effectiveness of traffic calming measures on
            reducing crashes and impacts of street redesign on travel pattern and mobility, and travel behavior and demand analysis
            using location-based service (LBS) data.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={donghoonSon}
            alt="Dong-Hoon SON" />
          <p>Dong-Hoon SON, Ph.D.</p>
          <p>Postdoctoral Scholar</p>
          <p>
            Dr. Son completed his Ph.D. in Civil Engineering at The Hong Kong University of Science and Technology,
            and M.S. and B.S. degrees from Inha University. He joined the THINK lab as a postdoctoral scholar
            in December 2024. His research interests include transportation engineering, platform economics,
            resilience and pricing and incentive strategies.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={shoheiNagata}
            alt="Shohei Nagata" />
          <p>Shohei Nagata, Ph.D.</p>
          <p>Visiting Scholar</p>
          <p>
            Dr. Shohei Nagata is a Visiting Scholar in the Department of Civil and Environmental Engineering at the University of Washington. 
            He received his Ph.D. in Environmental Studies from Tohoku University, Japan, in 2022. 
            His research focuses on human geography, GIScience, and disaster management, with an emphasis on human mobility analysis using big data to assess social and urban resilience. 
            In recent years, he has studied human movement patterns during emergencies, including earthquakes and the COVID-19 pandemic
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={hesamShafienya}
            alt="Hesam Shafienya" />
          <p>Hesam Shafienya</p>
          <p>PhD Student and Researcher</p>
          <p>
            Hesam is a PhD student in the Department of Civil and Environmental Engineering at the University of Washington.
            His research focuses on trajectory prediction, data imputation techniques, and big data analytics in transportation modeling.
            By leveraging artificial intelligence (AI) and innovative data analysis methods, Hesam aims to support smarter decision-making,
            optimize transportation systems, and foster safer, more sustainable urban environments.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={lexiLiu}
            alt="Lexi Liu" />
          <p>Lexi Liu</p>
          <p>PhD Student and Researcher</p>
          <p>
            Lexi (Xu) Liu is a PhD student in the Department of Statistics at UW. Her work is broadly interested in time series and nonparametric statistics.
            She enjoys combining theory with practical analysis and is especially motivated by research that connects modern data science with applied domains.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={yutengZhang}
            alt="Yuteng Zhang" />
          <p>Yuteng Zhang</p>
          <p>MS Student and Researcher</p>
          <p>
            Yuteng received his bachelor's degree in Software Engineering from Jilin University and is
            currently pursuing a Master's degree in Industrial and Systems Engineering at the University of Washington.
            His research focuses on transportation big data, human mobility, and optimization. He is also interested in
            the application of machine learning and reinforcement learning in transportation systems.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={peachChansaisakhorn}
            alt="Peach Chansaisakhorn" />
          <p>Peach Chansaisakhorn</p>
          <p>MS Student and Researcher</p>
          <p>
            Peach Chansaisakhorn is a Master student in Supply Chain Management at the University of Washington Foster School of Business.
            She received her bachelor's degree in Industrial Engineering from the University of Wisconsin-Madison.
            Her research interests focus on supply chain and transportation system resilience, information sharing, and decision-making under uncertainty.
            She is particularly interested in behavioral and data-driven approaches to understanding cooperation and resource allocation,
            with applications in logistics and platform-based systems.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={andrewZunt}
            alt="Andrew Zunt" />
          <p>Andrew Zunt</p>
          <p>MS Student and Researcher</p>
          <p>
            Andrew is pursuing his Master’s degree in Transportation Engineering from the University of Washington. After completing a Bachelor’s degree 
            in Computer Science at UW in 2018, he spent 6 years working for Amazon Music in San Francisco, where he developed features for the mobile application and maintained backend infrastructure. 
            His research interests center around public transit and the built environment, specifically with regards to social behavior and evaluating the effectiveness of potential improvements.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={nirajlMali}
            alt="Niraj L. Mali" />
          <p>Niraj L. Mali</p>
          <p>MS Student and Researcher</p>
          <p>
            Niraj received his bachelor's degree in Computer Science from the University of Portland in 2021. After working for 4.5 years in the software industry,
            he joined University of Washington in September of 2025. Currently he is a PMP Master's Student in the Transportation Engineering program.
            His research interests include travel behavior patterns and software-driven methods for analyzing and improving transportation systems.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={hongkeXie}
            alt="Hongke Xie" />
          <p>Hongke Xie</p>
          <p>Visiting PhD Student</p>
          <p>
            Hongke Xie received his bachelor's degree in information management and information system from the China University of
            Geosciences  in 2020. He is now puesuing his Ph.D. degree in the University of Electronic Science and Technology of China.
            He came to University of Washington and joined THINK Lab as a visiting student in 2025. His research interests include
            resource sharing during disasters, as well as parking sharing.
          </p>
        </div>

        <div className="current-members-individual">
          <img
            className="profile"
            src={jingjueBao}
            alt="Jingjue Bao" />
          <p>Jingjue Bao</p>
          <p>Visiting PhD Student</p>
          <p>
            Jingjue Bao completed his Master’s studies and is currently pursuing his Ph.D. degree in Transportation Engineering at Tongji University.  
            He joined the THINK Lab at University of Washington as a visiting student in 2026. His research interests include travel behavior analysis and urban spatial planning. 
          </p>
        </div>
      </div>

      {/* Previous Members Header */}
      <div className="section-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right" />
        <img
          className="w-40 h-14 mt-10"
          src={previousMembers}
          alt="Previous Members" />
      </div>

      <p className="current-PhD">PhD or MS students advised by Dr. Cynthia Chen (as chair)</p>

      {/* Previous Members Table */}
      <div className="table-container mt-5">
        <table {...getTableProps()}>
          <thead className="members-head">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="members-text" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="former-visit">
        <p>Former visiting professor and students</p>
        <p className="mt-8">
          Dr. Ni Dong is a visiting scholar and joint the group in Oct. 2018. She received her PhD
          degree from Central South University in 2016. She is now an assistant professor in Southwest
          Jiaotong University and working on data-driven travel behavioral and safety risk analyses,
          most quantitatively, as means of addressing urban sustainability challenges.
        </p>
        <p className="mt-8">
          Dr. Xiang Zhang, visiting Professor 2018-2019, Wuhan University. Dr. Xiang Zhang is an
          associate professor at School of Resource and Environmental Science, Wuhan University.
          He received his Ph.D. in Cartography and Geographic Information Science from University
          of Twente, Netherlands in 2012. His research interest includes integration, analysis and
          visualization of spatiotemporal data, volunteered geographic information (VGI) and
          computational spatial science. In his previous works, methods from computational geometry,
          pattern recognition, and machine learning were extended to tackle fundamental and applied
          problems in GIScience.
        </p>
        <p className="mt-8">
          Dr. Pengyu Yan, visiting Professor 2016-2017, from School of Management and Economics at
          University of Electronic Science and Technology of China.
        </p>
        <p className="mt-8">
          An-Tsu Chen. An-Tsu worked in THINKLAB from 2016 to 2017. He was a Ph.D. student
          in Economics at University of Washington and graduated in 2020.
        </p>
      </div>
    </>
  )
}

export default People;