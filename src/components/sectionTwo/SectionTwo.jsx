import React, { Component } from "react";

class SectionTwo extends Component {
  render() {
    const { alertText, title, description, price, learnMoreLink, buyLink } =
      this.props;

    return (
      <div>
        <section className="second-hightlight-wrapper">
          <div className="container">
            <div className="new-alert">{alertText}</div>
            <div className="title-wraper bold black">{title}</div>
            <div className="description-wrapper black">{description}</div>
            <div className="price-wrapper grey">{price}</div>
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
        </section>
      </div>
    );
  }
}

export default SectionTwo;
