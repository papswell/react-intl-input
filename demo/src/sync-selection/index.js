import React, { Component } from 'react';
import Select from 'react-select';
import { Row, Col, FormGroup } from 'react-bootstrap';
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
      <section>
        <h2>Sync languages</h2>

        <p>
          Use the `onLangChange` function prop
        </p>

        <Row>
          <Col md={6}>
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
              handleLangChange={this.handleLangChange}
            />
          </Col>
          <Col md={6}></Col>
        </Row>
      </section>
    );
  }

}

export default SyncSelectionExample;
