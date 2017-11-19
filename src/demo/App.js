import React, { Component } from 'react';
import Select from 'react-select';
import Form from './form';

const langs = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
];


const values = {
  title: {
    en: 'Harry Potter the sorcer',
    fr: 'Harry Potter le sorcier',
  },
  description: {
    en: 'A magic book',
    fr: 'Un livre magique',
  },
}


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

        <div>
          <strong>{lang}</strong>

          <Select
            className="react_intl_field-lang_selector"
            name="lang-selector"
            value={lang}
            options={langs}
            onChange={this.handleLangChange}
            optionRenderer={this.renderSelectOptions}
            clearable={false}
            searchable={false}
          />
        </div>

        <Form
          langs={langs}
          lang={lang}
          handleLangChange={this.handleLangChange}
          onSubmit={this.handleSubmit}
          initialValues={values}
        />


      </div>
    );
  }
}

export default App;
