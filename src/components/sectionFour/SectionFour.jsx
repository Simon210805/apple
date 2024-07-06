import React, { Component } from "react";

class SectionFour extends Component {
  render() {
    const {
      leftTitle,
      leftDescription,
      leftPrice,
      leftLearnMoreLink,
      leftApplyNowLink,
      rightTitle,
      rightLinkText,
    } = this.props;

    return (
      <div>
        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="title-wraper">{leftTitle}</div>
                  <div className="description-wraper">{leftDescription}</div>
                  <div className="price-wrapper">{leftPrice}</div>

                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">{leftLearnMoreLink}</a>
                      </li>
                      <li>
                        <a href="">{leftApplyNowLink}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper white">{rightTitle}</div>

                  <div className="links-wrapper white">
                    <ul>
                      <li>
                        <a href="#">{rightLinkText}</a>
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

export default SectionFour;
