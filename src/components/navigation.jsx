import logo from "../swiftlogo.svg";
import brand from "../swiftbrand.svg";
import "./navigavtion.css";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      {/* <div className="flexx"> */}
      {/* <div>
          <img src={logo} className="logo" />
        </div> */}
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="page-scroll" href="#page-top">
            <div className="flexx">
              <div>
                <img src={logo} className="logo" />
              </div>
              <div>
                <img src={brand} className="logo" />
              </div>
            </div>
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            {/* <li>
                <a href='#portfolio' className='page-scroll'>
                  Gallery
                </a>
              </li> */}
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            {/* <li>
                <a href='#team' className='page-scroll'>
                  Team
                </a>
              </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};
