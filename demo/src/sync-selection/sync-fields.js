import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, Button } from 'react-bootstrap';

import { ReduxFormIntlInput } from '../../../src';

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

          <FormGroup>

            <label htmlFor="title">{lang ==='fr' ? 'Titre' : 'Title'}</label>
            <Field
              name="title"
              component={ReduxFormIntlInput}
              lang={lang}
              languages={langs}
              onLangChange={this.props.onLangChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              component={ReduxFormIntlInput}
              lang={lang}
              languages={langs}
              onLangChange={this.props.onLangChange}
            />
          </FormGroup>

          <Button bsStyle="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'CustomRendering',
})(CustomRenderingForm);
