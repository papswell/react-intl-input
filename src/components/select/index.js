import React, { Component } from 'react';
import ReactSelect from 'react-select';

import 'react-select/dist/react-select.css';
import './styles.css';

class Select extends Component {

  static defaultProps = {
    clearable: false,
    searchable: false,
  }

  render() {
    return (
      <ReactSelect
        {...this.props}
      />
    );
  }

}

export default Select;
