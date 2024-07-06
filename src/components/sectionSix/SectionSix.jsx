import React, { Component } from "react";
import arcade from "../../commonResource/images/icons/arcade.png";

class SectionSix extends Component {
  render() {
    const {
      leftDescription,
      leftPlayNowLink,
      leftLearnMoreLink,
      rightTitle,
      rightDescription,
      rightLearnMoreLink,
      rightApplyNowLink,
    } = this.props;

    return (
      <div>
        <section className="sixth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={arcade} alt="Arcade Logo" />
                    </div>
                  </div>
                  <div className="description-wraper white">
                    {leftDescription}
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href={leftPlayNowLink}>
                          Play now<sup>2</sup>
                        </a>
                      </li>
                      <li>
                        <a href="">{leftLearnMoreLink}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper">{rightTitle}</div>
                  <div className="description-wraper">{rightDescription}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="#">{rightLearnMoreLink}</a>
                      </li>
                      <li>
                        <a href="#">{rightApplyNowLink}</a>
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

export default SectionSix;
