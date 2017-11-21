import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from './select';
import DefaultInput from './input';
import Option from './option';

import './styles.css';

export const computeState = (props, state = {}) => {

  const values = props.languages
    .map(lang => lang.value)
    .reduce((acc, code) => {
      acc[code] = (props.initialValues && props.initialValues[code]) || '';
      return acc;
    }, {});


  return {
    languages: props.languages,
    lang: props.initialLang || state.lang || props.languages[0].value,
    values,
  }
}

export const getNames = (name) => {
  return ({
    inputName: `${name}-${IntlInput.instanceCount}-input`,
    selectName: `${name}-${IntlInput.instanceCount}-select`,
  })
};

class IntlInput extends Component {

  static instanceCount = 0;

  static propTypes = {
    name: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    initialLang: PropTypes.string,
    initialValues: PropTypes.object,
    onLangChange: PropTypes.func,
    onInputChange: PropTypes.func,
    onInputFocus: PropTypes.func,
    onInputBlur: PropTypes.func,
    inputComponent: PropTypes.func,
  }

  constructor(props) {
    super(props);
    IntlInput.instanceCount++;

    this.state = computeState(props);
  }

  componentWillReceiveProps(props) {
    this.setState(computeState(props, this.state));
  }

  handleLangChange = (val) => {

    if (typeof this.props.onLangChange === 'function') {
      this.props.onLangChange(val, this);
    } else {
      // Value has been cleared, prevent rendering an empty select
      if (!val) return;
      this.setState({ lang: val.value });
    }
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (typeof this.props.onInputChange === 'function') {
      this.props.onInputChange(this.state.lang, inputValue, this);
    } else {
      this.setState((state) => {
        return {
          ...state,
          values: Object.entries(state.values)
            .reduce((acc, entry) => {
              const [key, value] = entry;
              if (key !== state.lang) {
                acc[key] = value;
              } else {
                acc[key] = inputValue;
              }
              return acc;
            }, {})
        };
      });
    }
  }

  renderSelectOptions = (option, index) => {
    const renderOption = this.props.optionRenderer;

    if (typeof renderOption === 'function') {
      return renderOption(option, index, this.state);
    } else {
      const isEmpty = !this.state.values[option.value];
      return (
        <Option
          displayWarning={false}
          label={option.label}
        />
      )
    }
  }

  render() {
    const { languages, lang } = this.state;

    const Input = this.props.inputComponent || DefaultInput;
    const { inputName, selectName } = getNames(this.props.name);
    return (
      <div className="react_intl_input">
        <Select
          name={selectName}
          value={lang}
          options={languages}
          onChange={this.handleLangChange}
          optionRenderer={this.renderSelectOptions}
          valueRenderer={this.props.valueRenderer}
        />
        <Input
          name={inputName}
          value={this.state.values[lang]}
          onChange={this.handleInputChange}
          onFocus={this.props.onInputFocus}
          onBlur={this.props.onInputBlur}
        />
      </div>
    );
  }
}

export default IntlInput;
