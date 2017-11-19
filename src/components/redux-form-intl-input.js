import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IntlInput from './intl-input';

export default class ReduxFormWrapper extends Component {

  static propTypes = {
    input : PropTypes.shape({
      name : PropTypes.string,
      value: PropTypes.any,
      checked: PropTypes.bool,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onDragStart: PropTypes.func,
      onDrop: PropTypes.func,
    }),
  }

  handleInputChange = (lang, newValue) => {

    const { input: { value, onChange } } = this.props;

    if (typeof value.toJS === 'function') {
      onChange(value.set(lang, newValue));
    } else if (value) {
      onChange({
        ...value,
        [lang]: newValue,
      });
    }
  }

  handleInputFocus = (event) => {
    this.props.input.onFocus(event);
  }

  handleInputBlur = (event) => {
    // Passing the current value of the input instead of the React.Synthetic event
    // because the event.target contains the string value of the selected language.
    // https://redux-form.com/7.1.2/docs/api/field.md/#-code-input-onblur-eventorvalue-function-code-
    this.props.input.onBlur(this.props.input.value);
  }

  render() {
    const {
      lang,
      input: {
        value,
        name,
        checked, // eslint-disable-line no-unused-vars
        onFocus, // eslint-disable-line no-unused-vars
        onBlur, // eslint-disable-line no-unused-vars
        onChange, // eslint-disable-line no-unused-vars
        onDragStart, // eslint-disable-line no-unused-vars
        onDrop, // eslint-disable-line no-unused-vars
      },
      ...props,
    } = this.props;


    let initialValues = null;
    if (typeof value.toJS === 'function') {
      initialValues = value.toJS();
    } else if (value) {
      initialValues = value;
    }

    return (
      <IntlInput
        name={name}
        initialLang={lang}
        initialValues={initialValues}
        onInputChange={this.handleInputChange}
        onInputFocus={this.handleInputFocus}
        onInputBlur={this.handleInputBlur}
        onLangChange={this.props.handleLangChange}
        {...props}
      />
    )
  }
}
