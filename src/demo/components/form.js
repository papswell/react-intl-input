import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import ReduxWrapper from '../../lib/components/redux-form-intl-input';
import Option from '../../lib/components/option';

class Input extends React.Component {

    render() {

      const { input, meta: {touched, error }, ...props} = this.props;
      return (
        <div>
          <ReduxWrapper
            {...input} // inject redux-form props
            {...props} // inject custom props
          />
          {touched && error }
        </div>
      )
    }
}

class Form extends Component {

  static propTypes = {
    lang: PropTypes.string.isRequired,
  }

  render() {
    const { handleSubmit, lang, langs } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit }>

          <div className="form-control">

            <label htmlFor="title">{lang ==='fr' ? 'Titre' : 'Title'}</label>
            <Field
              name="title"
              component={ReduxWrapper}
              lang={lang}
              languages={langs}
              handleLangChange={this.props.handleLangChange}
              optionRenderer= {(option, i, state) => {
                  const l = option.value;
                  const isEmpty = !state.values[l];
                  let label;
                  if (l === 'fr') {
                    label = lang === 'fr' ? 'Francais': 'French';
                  } else {
                    label = lang === 'fr' ? 'Anglais': 'English';
                  }

                  return (
                    <Option
                      displayWarning={isEmpty}
                      label={label}
                    />
                  )
                }
              }
              valueRenderer={(value) => {
                if (value.value === 'fr') {
                  return lang === 'fr' ? 'Francais': 'French';
                } else {
                  return lang === 'fr' ? 'Anglais': 'English';
                }
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              component={Input}
              lang={lang}
              languages={langs}
              handleLangChange={this.props.handleLangChange}
            />
          </div>

          <button>
            Submit
          </button>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'TestForm',
  validate: (values) => {
    const errors = {};

    errors.title = Object.values(values.title).some(v => !v) && "Title is required";
    errors.description = Object.values(values.description).some(v => !v) && "Desc. is required";


    return errors;
  }
})(Form);
