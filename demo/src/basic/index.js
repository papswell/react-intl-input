import React, { Component } from 'react';

  import { IntlInput } from '../../../src';

const langs = [
 { value: 'en', label: 'English' },
 { value: 'fr', label: 'French' },
];

class BasicExample extends Component {

  render() {
    return (
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
    );
  }

}

export default BasicExample;
