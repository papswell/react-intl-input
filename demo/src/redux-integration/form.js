import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { FormGroup, Button } from 'react-bootstrap';

import FormControl from './form-control';
import { ReduxFormIntlInput } from '../../../src';

class Form extends Component {

  render() {
    const { handleSubmit, langs, hasErrors } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit }>

          <FormGroup>

            <label htmlFor="title">
              <strong>Title *</strong>
              <span> (Wrapped field with validation error)</span>
            </label>
            <Field
              name="title"
              component={FormControl}
              languages={langs}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="description">
              <strong>Description</strong>
              <span> (Simple field)</span>
            </label>
            <Field
              name="description"
              component={ReduxFormIntlInput}
              languages={langs}
            />
          </FormGroup>

          <Button bsStyle="primary" type="submit" disabled={hasErrors}>
            Submit
          </Button>
        </form>
      </div>
    );
  }

}

export default connect(
  (state, props) => {
    const errors = getFormSyncErrors('ReduxForm')(state);
    return ({
      hasErrors: errors && Object.values(errors).some(e => !!e)
    })
  }
)(reduxForm({
  form: 'ReduxForm',
  validate: (values) => {
    const errors = {};

    errors.title = Object.values(values.title).some(v => !v) && "Title is required";
    return errors;
  }
})(Form));
