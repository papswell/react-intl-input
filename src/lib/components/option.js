import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    displayWarning: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    displayWarning: false,
  }

  render() {

    const { label, displayWarning } = this.props;

    return (
      <span className="react_intl_input-option">
        {label}
        {displayWarning && (
          <span className="react_intl_input-option-empty_warning">
            &#x26a0;
          </span>
        )}
      </span>
    );
  }

}

export default Option;
