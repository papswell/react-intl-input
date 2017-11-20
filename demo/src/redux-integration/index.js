import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/styles/hljs';

import ReduxForm from './form';
import Link from './../external-link';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
];

export const values = {
  title: {
    en: 'Harry Potter the sorcer',
    fr: 'Harry Potter le sorcier',
  },
  description: {
    en: 'A magic book',
    fr: 'Un livre magique',
  },
}

class ReduxFormIntegration extends Component {

  handleSubmit = (values) => {
    console.log('SUBMIT VALUES', values);
  }

  render() {
    return (
      <section id="redux-form-integration">
        <Row>
          <Col md={6}>
            <h2>Redux from integration</h2>
            <p>
              Integration with <Link href="https://redux-form.com/7.1.2/">redux-form</Link> is straightforward, just use <code>ReduxFormIntlInput</code> as the component prop of redux-form <code>Field</code> component.
            </p>
            <p>
              If you need to handle more complex input component, like displaying validation errors or anything, use <code>ReduxFormIntlInput</code> inside your own component and <strong>make sure to pass the redux-form <code>input</code> prop to the wrapped component.</strong>
            </p>

            <ReduxForm
              langs={langs}
              onSubmit={this.handleSubmit}
              initialValues={values}
            />
          </Col>

          <Col md={6}>
            <SyntaxHighlighter
              style={style}
              language="javascript"
            >
{`
  import { ReduxFormIntlInput } from 'react-intl-input';

  ...

  <form onSubmit={ handleSubmit }>

    <Field
      name="description"
      component={ReduxFormIntlInput}
      languages={langs}
    />

    <Button bsStyle="primary" type="submit" disabled={hasErrors}>
      Submit
    </Button>
  </form>
`}
            </SyntaxHighlighter>
          </Col>
        </Row>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <SyntaxHighlighter
              style={style}
              language="javascript"
            >
{`
  class FormControl extends React.Component {

      render() {
        const {
          input,
          meta: { touched, error },
          ...props
        } = this.props;

        return (
          <FormGroup>
            <ReduxFormIntlInput
              input={input} // inject redux-form props
              {...props} // inject custom props
            />
            {touched && error && (
              <HelpBlock>
                {error}
              </HelpBlock>
            )}
          </FormGroup>
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

export default ReduxFormIntegration;
