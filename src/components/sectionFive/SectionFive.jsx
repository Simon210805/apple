import React, { Component } from 'react';
import appleTvLogo from "../../commonResource/images/icons/apple-tv-logo.png";
import banker from "../../commonResource/images/home/banker.png";
import watch from "../../commonResource/images/icons/watch-series5-logo.png";

class SectionFive extends Component {
  render() {
    const {anchorLink, watchDescription, learnMoreLink, buyLink } = this.props;

    return (
      <div>
        <section className="fifth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={appleTvLogo} alt="Apple TV Logo" />
                    </div>
                  </div>

                  <div className="tvshow-logo-wraper">
                    <img src={banker} alt="Banker Logo" />
                  </div>

                  <div className="watch-more-wrapper">
                    <a href="#">{anchorLink}</a>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={watch} alt="Watch Logo" />
                    </div>
                  </div>
                  <div className="description-wraper">{watchDescription}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="#">{learnMoreLink}</a>
                      </li>
                      <li>
                        <a href="#">{buyLink}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionFive;
