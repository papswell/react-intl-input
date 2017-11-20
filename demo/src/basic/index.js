import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/styles/hljs';

import { IntlInput } from '../../../src';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
];

class BasicExample extends Component {

  render() {
    return (
      <section id="basic">
        <Row>
          <Col md={6}>
            <h2>Basic component</h2>

            <IntlInput
              name="basic-intl-input"
              languages={langs}
            />
            <p>
              By default the following components are used :
            </p>
            <ul>
              <li>
                A thin wrapper of the <code>Select</code> from the <a href="https://github.com/JedWatson/react-select">awesome react-select</a> library (non clearable and non searchable)
              </li>
              <li>
                A simple <code>Option</code> component, dispalying a warning if it's value is empty.
              </li>
              <li>
                A simple <code>Input</code> component to handle values.
              </li>
            </ul>
          </Col>

        <Col md={6}>
          <SyntaxHighlighter
            style={style}
            language="javascript"
            >
{`
  import { IntlInput } from 'react-intl-input';

  const langs = [
   { value: 'en', label: 'English' },
   { value: 'fr', label: 'French' },
  ];

  <IntlInput
    name="basic-intl-input"
    languages={langs}
  />

`}
          </SyntaxHighlighter>
        </Col>
      </Row>
      </section>
    );
  }

}

export default BasicExample;
