import React, { Component } from 'react';
import Select from 'react-select';
import { Row, Col, FormGroup } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/styles/hljs';

import SyncFields from './sync-fields';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
];

class SyncSelectionExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lang: 'fr',
    }
  }

  handleLangChange = (lang, component) => {
    this.setState({
      lang: lang.value,
    });
  }

  render() {

    const { lang } = this.state;

    return (
      <section id="sync-fields">
        <Row>
          <Col md={6}>
            <h2>Sync fields</h2>
            <p>
              Pass a <code>lang</code> prop to select a language ans use the <code>onLangChange</code> function prop as a change callback.
            </p>

            <FormGroup>
              <label>Language selected</label>
              <Select
                name="lang-selector"
                value={lang}
                options={langs}
                onChange={this.handleLangChange}
                clearable={false}
                searchable={false}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <SyncFields
              langs={langs}
              lang={lang}
              onLangChange={this.handleLangChange}
            />
          </Col>
          <Col md={6}>
            <SyntaxHighlighter
              style={style}
              language="javascript"
            >
{`
  <Field
    name="description"
    component={ReduxFormIntlInput}
    lang={lang}
    languages={langs}
    onLangChange={this.props.onLangChange}
  />
`}
          </SyntaxHighlighter>
          </Col>
        </Row>
      </section>
    );
  }

}

export default SyncSelectionExample;
