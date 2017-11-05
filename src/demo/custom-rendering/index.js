import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IntlInput from '../../lib/components/intl-input';
import Option from '../../lib/components/option';

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

        <div className="form-control">
          <label htmlFor="custom-rendering-input">

          </label>
          <IntlInput
            name="custom-rendering-input"
            languages={langs}
            optionRenderer={this.renderSelectOptions}
            valueRenderer={this.renderSelectValue}
          />
        </div>

      </section>

    );
  }
}
