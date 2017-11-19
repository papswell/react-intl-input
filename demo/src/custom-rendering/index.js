import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';

import IntlInput from '../../../src/components/intl-input';
import Option from '../../../src/components/option';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
 { value: 'es', label: 'Spanish' },
];

const getFlag = lang => {
  switch (lang) {
    case 'fr':
      return '🇨🇵';
    case 'es':
      return '🇪🇸';
    default:
      return '🇬🇧';
  }
}

export default class CustomRendering extends Component {

  renderSelectValue = (value) => {
    return getFlag(value.value);
  }

  renderSelectOptions = (option, i, state) => {

    const l = option.value;
    const isEmpty = !state.values[l];

    return (
      <Option
        displayWarning={isEmpty}
        label={getFlag(l)}
      />
    )
  };

  render() {

    return (
      <section>
        <h2>Custom rendering</h2>

        <p>
        </p>

        <FormGroup>
          <ControlLabel>Label</ControlLabel>
          <IntlInput
            name="custom-rendering-input"
            languages={langs}
            optionRenderer={this.renderSelectOptions}
            valueRenderer={this.renderSelectValue}
          />
        </FormGroup>

      </section>

    );
  }
}
