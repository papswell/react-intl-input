import React, { Component } from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

import { IntlInput } from '../../../src';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
];

const Textarea = (props) => <FormControl componentClass="textarea" {...props} />;

class CustomInputExample extends Component {

  render() {
    return (
      <section>
        <h2>Custom input component</h2>

        <p>
          By default, this lib use a simple <code>input</code> element.
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
        </Row>

      </section>
    );
  }
}

export default CustomInputExample;
