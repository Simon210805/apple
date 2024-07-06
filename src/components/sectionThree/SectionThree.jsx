import React, { Component } from "react";

class SectionThree extends Component {
  render() {
    const { title, description, price, learnMoreLink, buyLink } = this.props;

    return (
      <div>
        <section className="third-hightlight-wrapper">
          <div className="container">
            <div className="title-wraper bold">{title}</div>
            <div className="description-wrapper">{description}</div>
            <div className="price-wrapper">{price}</div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">{learnMoreLink}</a>
                </li>
                <li>
                  <a href="">{buyLink}</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionThree;
