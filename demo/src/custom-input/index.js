import React, { Component } from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/styles/hljs';
import { IntlInput } from '../../../src';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
];

const Textarea = (props) => <textarea {...props} />;

class CustomInputExample extends Component {

  render() {
    return (
      <section id="custom-input">
        <h2>Custom input component</h2>

        <p>
          By default, this lib uses a simple <code>input</code> element.
          The prop <code>inputComponent</code> can be used to use a custom component.
        </p>

        <Row>
          <Col md={6}>
            <IntlInput
              name="basic-intl-input"
              languages={langs}
              inputComponent={Textarea}
            />
          </Col>
          <Col md={6}>
            <SyntaxHighlighter
              style={style}
              language="javascript"
              >
{`
  const Textarea = (props) => <textarea {...props} />;

  <IntlInput
    name="basic-intl-input"
    languages={langs}
    inputComponent={Textarea}
  />

`}
            </SyntaxHighlighter>
          </Col>
        </Row>

      </section>
    );
  }
}

export default CustomInputExample;
