import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { ReduxFormIntlInput } from '../../lib';

class CustomRenderingForm extends Component {

  static propTypes = {
    lang: PropTypes.string.isRequired,
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { lang, langs } = this.props;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>

          <div className="form-control">

            <label htmlFor="title">{lang ==='fr' ? 'Titre' : 'Title'}</label>
            <Field
              name="title"
              component={ReduxFormIntlInput}
              lang={lang}
              languages={langs}
              handleLangChange={this.props.handleLangChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              component={ReduxFormIntlInput}
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
  form: 'CustomRendering',
})(CustomRenderingForm);
