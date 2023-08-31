import { NavLink } from 'react-router-dom';
import "../styles/Footer.css";
import NSF from "../assets/NSF.png";
import DOT from "../assets/DOT.png";
import NIH from "../assets/NIH.png";
import FHA from "../assets/FHA.png";
import TOMNET from "../assets/TOMNET.png";
import mailIcon from "../assets/mailIcon.png";

const Footer = () => {
  return (
    <footer className = "relative bg-primary-blue px-28 pt-11 mt-16">
      <div className="container mx-auto">
        <div className="footer-content flex text-left lg:text-left">
          <div className="footer-thinklab w-full lg:w-3/12">
            <NavLink to="/" className="link">
              <h1 className="font-black">THINKLab</h1>
              <p className="text-xl font-light mt-0.5 mb-6 text-white">
                Transportation-Human Interaction and Network Knowledge Lab
              </p>
            </NavLink>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="footer-contact-us w-full lg:w-5/12 ml-auto">
              <p className='text-xl font-medium mt-5 mb-2'>Contact Us</p>
              <p className='text-sm mb-1.5'>For all inquiries please email Professor Cynthia Chen.</p>
              <div className="footer-contact-info">
                <img
                  className="emailIcon"
                  src={mailIcon}
                  alt="Email Icon"
                />
                <p className='text-sm'>qzchen@uw.edu</p>
              </div>
            </div>

            <div className="w-full lg:w-5/12 ml-auto">
              <div className="footer-sponsporsImages flex flex-wrap items-center mb-3">
                <div className= "footer-sponsors md:pr-2">
                  <img
                    className="national-science"
                    src={NSF}
                    alt="National Science Foundation" />
                </div>

                <div className= "footer-sponsors md:p-2">
                  <img
                    className="dot"
                    src={DOT}
                    alt="Department of Transportation"/>
                </div>

                <div className= "footer-sponsors md:p-2">
                  <img
                    className="nih"
                    src={NIH}
                    alt="National Institutes of Health"/>
                </div>

                <div className= "footer-sponsors-bottom md:p-2">
                  <img
                    className="fha"
                    src={FHA}
                    alt="Federal Highway Administration"/>
                </div>

                <div className= "footer-sponsors-bottom p-1 md:p-2">
                  <img
                    className="tomet"
                    src={TOMNET}
                    alt="TOMNET Center for Teaching Old Models New Tricks"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;