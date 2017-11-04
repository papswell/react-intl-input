import React, { Component } from 'react';
import Select from 'react-select';
import Form from './form';
import ReduxForm from './redux-form';
import CustomRendering from './custom-rendering';
import SyncFields from './sync-fields';
import { IntlInput } from './../../lib';

import { langs, values } from './../data';

class App extends Component {

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

  handleSubmit = (values) => {
    console.log('SUBMIT VALUES', values);
  }

  render() {

    const { lang } = this.state;
    return (
      <div className="App">

        <section>
          <h2>Base component</h2>

          <p>
            Uses an internal state to handle values.
            Uses the providied default Option component.
          </p>
          <IntlInput
            name="basic-intl-input"
            languages={langs}
          />
        </section>

        <section>
          <h2>Custom rendering</h2>

          <p>
          </p>
          <CustomRendering
            langs={langs}
            lang={lang}
            handleLangChange={this.handleLangChange}
            onSubmit={this.handleSubmit}
            initialValues={values}
          />
        </section>

        <section>
          <h2>Redux integration</h2>
          <ReduxForm
            langs={langs}
            lang={lang}
            onSubmit={this.handleSubmit}
            initialValues={values}
          />
        </section>

        <section>
          <h2>Sync languages</h2>

          <p>
            Use the `onLangChange` function prop
          </p>
          <div>
            <strong>Language selected</strong>

            <Select
              className="react_intl_field-lang_selector"
              name="lang-selector"
              value={lang}
              options={langs}
              onChange={this.handleLangChange}
              clearable={false}
              searchable={false}
            />

          </div>
          <SyncFields
            langs={langs}
            lang={lang}
            handleLangChange={this.handleLangChange}
            onSubmit={this.handleSubmit}
            initialValues={values}
          />

        </section>
      </div>
    );
  }
}

export default App;
