import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import IntlInput from '../../lib/components/intl-input';
import Option from '../../lib/components/option';

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

export default class CustomRenderingForm extends Component {

  static propTypes = {
    lang: PropTypes.string.isRequired,
  }

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
    const { handleSubmit, lang, langs } = this.props;

    return (
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
    );
  }
}
