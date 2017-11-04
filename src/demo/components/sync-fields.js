import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import ReduxWrapper from '../../lib/components/redux-form-intl-input';
import Option from '../../lib/components/option';

class CustomRenderingForm extends Component {

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
            />
          </div>

          <div className="form-control">
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              component={ReduxWrapper}
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
