import React, { Component } from 'react';
import ColumnFooter from '../columnFooter1/columnFooter';
import footerDataSections from "../footerData/FooterData"; 

class FooterLinksWrappe extends Component {
  render() {
    return (
      <div className="footer-links-wrapper row">
        {footerDataSections.map((section, i) => {
          return (
            <div className={`links-wrapper${i + 1} col-sm-12 col-md`} key={i}>
              <ColumnFooter data={section} />
            </div>
          );
        })}
      </div>
    );
  }
}



export default FooterLinksWrappe;
