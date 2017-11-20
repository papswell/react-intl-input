import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/styles/hljs';

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

  renderSelectValue = ({ value }) => {
    return getFlag(value);
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
      <section id="custom-rendering">
        <h2>Custom rendering</h2>

        <p>
        </p>

        <FormGroup>
          <ControlLabel>Label</ControlLabel>

        </FormGroup>
        <Row>
          <Col md={6}>
            <IntlInput
              name="custom-rendering-input"
              languages={langs}
              optionRenderer={this.renderSelectOptions}
              valueRenderer={this.renderSelectValue}
            />
          </Col>
          <Col md={6}>
            <SyntaxHighlighter
              style={style}
              language="javascript"
            >
{`
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

  class Custom extends Component {

    renderSelectValue = ({ value }) => {
      return getFlag(value);
    }

    render = () => {
      return (
        <IntlInput
          name="custom-rendering-input"
          languages={langs}
          valueRenderer={this.renderSelectValue}
        />
      )
    }
  }

`}
            </SyntaxHighlighter>
          </Col>
        </Row>
      </section>

    );
  }
}
