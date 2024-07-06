import React, { Component } from "react";
import logo from "../../commonResource/images/icons/logo.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import HeaderLinks from "./HeaderLinks";

class Header extends Component {
  render() {
    const links = [{linkName: "Mac", linkUrl: "#"}, {linkName: "iphone", linkUrl: "#"}, {linkName: "ipad", linkUrl: "#"}, {linkName: "watch", linkUrl: "#"}, {linkName: "tv", linkUrl: "#"}, {linkName: "Music", linkUrl: "#"}, {linkName: "Support", linkUrl: "#"}];
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto" href="#">
                <img src={logo} />
              </a>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                 {
                    links.map((link, index) => {
                      return (
                        <HeaderLinks
                          key={index}
                          linkUrl={link.linkUrl}
                          linkName={link.linkName}
                        />
                      );
                    })
                  }
                  {/* <HeaderLinks linkUrl="#" linkName="Mac" />
                  <HeaderLinks linkUrl="#" linkName="iphone" />
                  <HeaderLinks linkUrl="#" linkName="ipad" />
                  <HeaderLinks linkUrl="#" linkName="watch" />
                  <HeaderLinks linkUrl="#" linkName="tv" />
                  <HeaderLinks linkUrl="#" linkName="Music" />
                  <HeaderLinks linkUrl="#" linkName="Support" /> */}
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/search/">
                      <img src={search} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/cart/">
                      <img src={cart} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  };
}

export default Header;
