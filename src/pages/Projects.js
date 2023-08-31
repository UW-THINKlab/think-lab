import * as React from "react";
import "../styles/Projects.css";
import locationIconBlue from "../assets/locationIconBlue.png";
import researchGrants from "../assets/researchGrants.png";
import grantData from "../RESEARCH_GRANTS.json"
import { useTable } from "react-table";
import facebook from "../assets/fbLogo.png";
import FHWA from "../assets/FHWA.png";
import NSF from "../assets/NSF.png";
import NIH from "../assets/NIH.png";

export const Projects = () => {
  const data = React.useMemo(() => grantData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Projects",
        accessor: "project_name",
      },
      {
        Header: "Sponsor",
        accessor: "sponsor",
      },
      {
        Header: "Period",
        accessor: "period",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable({ columns, data });
  return (
    <>
      <h2 className="our-projects">
        <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-[length:100%_10px] bg-no-repeat bg-bottom pb-3">Our P</span>
        rojects
      </h2>

      {/* Our Sponsors */}
      <div className="section-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <h3 className="mt-8">Sponsors</h3>
      </div>

      {/* Sponsors Logos */}
      <div className="projects-sponsors">
        <div className="sponsors-logo-container">
          <div className="sponosors-logo">
            <img className="w-20 h-20 mb-4" src={facebook} alt="Facebook" />
            <p>Facebook</p>
          </div>
        </div>

        <div className="sponsors-logo-container">
          <div className="sponosors-logo">
            <img className="w-80 h-15 mt-10 mb-10" src={FHWA} alt="Federal Highway Administration" />
            <p>U.S. Department of Transportation</p>
            <p>Federal Highway Administration</p>
          </div>
        </div>

        <div className="sponsors-logo-container">
          <div className="sponosors-logo">
            <img className="w-24 h-24 mb-2.5" src={NSF} alt="National Science Foundation" />
            <p>National Science Foundation</p>
          </div>
        </div>

        <div className="sponsors-logo-container">
          <div className="sponosors-logo">
            <img className="w-28 h-16 mt-5 mb-6" src={NIH} alt="National Institutes of Health" />
            <p>National Institutes of Health</p>
          </div>
        </div>
      </div>

      {/* Research Grants Header */}
      <div className="section-headers">
        <img
          className="location-icon-blue"
          src={locationIconBlue}
          alt="location icon with blue line to the right"/>
        <img
          className="w-28 h-12 mt-10"
          src={researchGrants}
          alt="Research Grants"/>
      </div>

      {/* Research Grants Table */}
      <div className="table-container mt-12">
        <table {...getTableProps()}>
          <thead>
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
          <tbody {...getTableBodyProps()}>
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
    </>
  )
}

export default Projects;