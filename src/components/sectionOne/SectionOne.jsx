// SectionOne.js
import React, { Component } from "react";

class SectionOne extends Component {
  render() {
    const {
      alertText,
      title,
      learnMoreLink,				
      orderLink,
      availabilityText,
      keyboardText,
    } = this.props;
    const data = {
      alertText,
      title,
      learnMoreLink,
      orderLink,
      availabilityText,
      keyboardText,
    };

    return (
      <div>
        <section className="first-hightlight-wrapper">
          <div className="container ">
            <div className="new-alert">{data.alertText}</div>

            <div className=" title-wraper bold black">
              {data.title}
            </div>

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="#">{data.learnMoreLink}</a>
                </li>
                <li>
                  <a href="">{data.orderLink}</a>
                </li>
              </ul>
            </div>

            <div className="ipad-caption">
              <div>{data.availabilityText}</div>
              <div>{data.keyboardText}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionOne;
