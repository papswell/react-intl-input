import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }

  render() {

    const {
      name,
      value,
      onChange,
      onFocus,
      onBlur,
    } = this.props;

    return (
      <input
        name={name}
        className="react_intl_field-input"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }

}

export default Input;
