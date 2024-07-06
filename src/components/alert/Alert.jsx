import React, { Component } from "react";


class Alert extends Component {
  render() {
    const { title, message, supportLinkText } = this.props;

    return (
      <div>
        <br />
        <section className="alert-section top-50">
          <div className="container">
            <div className="alert-title">{title}</div>
            <div className="alert-text">
              {message}
              <br />
              For service and support, visit{" "}
              <a href="">{supportLinkText}</a>.
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Alert;
