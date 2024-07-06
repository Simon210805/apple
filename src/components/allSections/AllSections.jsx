import React, { Component } from "react";
import Alert from "../alert/Alert";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";
import SectionThree from "../sectionThree/SectionThree";
import SectionFour from "../sectionFour/SectionFour";
import SectionFive from "../sectionFive/SectionFive";
import SectionSix from "../sectionSix/SectionSix";
class AllSections extends Component {
  render() {
    return (
      <div>
        <Alert
          position="top-50"
          title="We’re open for you."
          message="Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE."
          supportLinkText="support.apple.com"
        />

        <SectionOne
          highlightColor="highlight-red"
          alertType="important"
          alertText="New"
          titleColor="black"
          title="iPad Pro"
          learnMoreLink="Learn more"
          orderLink="Order"
          availabilityText="iPad Pro available starting 3.25"
          keyboardText="Magic Keyboard coming in May"
        />
        <SectionTwo
          alertText="New"
          title="MacBook Air"
          description="Twice the speed. Twice the storage."
          price="From $999."
          learnMoreLink="Learn more"
          buyLink="Buy"
        />
        <SectionThree
          title="iPhone 11 Pro"
          description="Pro cameras. Pro display. Pro performance."
          price="From $24.95/mo. or $599 with trade‑in."
          learnMoreLink="Learn more"
          buyLink="Buy"
        />

        <SectionFour
          leftTitle="iPhone 11"
          leftDescription="Just the right amount of everything."
          leftPrice="From $18.70/mo. or $499 with trade‑in."
          leftLearnMoreLink="Learn more"
          leftApplyNowLink="Apply now"
          rightTitle="Get the latest CDC response to COVID-19."
          rightLinkText="Watch the PSA"
        />
        <hr />
        <SectionFive
          anchorLink="Watch now on the Apple TV App"
          watchDescription="With the Always-On Retina display. You’ve never seen a watch like this."
          learnMoreLink="Learn more"
          buyLink="Buy"
        />
        <hr />
        <SectionSix
          leftDescription="Agent 8 is a small hero on a big mission."
          leftPlayNowLink="https://example.com/play-now"
          leftLearnMoreLink="Learn about Apple Arcade"
          rightTitle="Apple Card Monthly Installments"
          rightDescription="Pay for your next iPhone over time, interest-free with Apple Card."
          rightLearnMoreLink="Learn more"
          rightApplyNowLink="Apply now"
        />
        <hr />
      </div>
    );
  }
}

export default AllSections;


