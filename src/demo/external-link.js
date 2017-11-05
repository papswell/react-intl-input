import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Link extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
  }

  render() {

    const { href, children, ...props } = this.props;

    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

}

export default Link;
