import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import Option from './option';

import 'react-select/dist/react-select.css';
import './styles.css';

const computeState = (props) => {

  const values = props.languages
    .map(lang => lang.value)
    .reduce((acc, code) => {
      acc[code] = (props.initialValues && props.initialValues[code]) || '';
      return acc;
    }, {});


  return {
    languages: props.languages,
    lang: props.initialLang || props.languages[0].value,
    values,
  }
}

const getNames = (name) => {
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
  }

  constructor(props) {
    super(props);
    IntlInput.instanceCount++;

    this.state = computeState(props);
  }

  componentWillReceiveProps(props) {
    this.setState(computeState(props));
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
          displayWarning={isEmpty}
          label={option.label}
        />
      )
    }
  }

  render() {
    const { languages, lang } = this.state;

    const { inputName, selectName } = getNames(this.props.name);
    return (
      <div className="react_intl_field">
        <Select
          name={selectName}
          className="react_intl_field-lang_selector"
          value={lang}
          options={languages}
          onChange={this.handleLangChange}
          optionRenderer={this.renderSelectOptions}
          clearable={false}
          searchable={false}
          valueRenderer={this.props.valueRenderer}
        />
        <input
          name={inputName}
          className="react_intl_field-input"
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
