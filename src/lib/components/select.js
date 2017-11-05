import React, { Component } from 'react';
import ReactSelect from 'react-select';

import 'react-select/dist/react-select.css';

class Select extends Component {

  static defaultProps = {
    clearable: false,
    searchable: false,
  }

  render() {
    return (
      <ReactSelect
        className="react_intl_field-lang_selector"
        {...this.props}
      />
    );
  }

}

export default Select;
