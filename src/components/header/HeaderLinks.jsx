import React, { Component } from 'react';

class HeaderLinks extends Component {
    render() {
        const  { linkUrl, linkName } = this.props;
        return (
          <>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href={linkUrl}>
                {linkName}
              </a>
            </li>
          </>
        );
    }
}

export default HeaderLinks;
