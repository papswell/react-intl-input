import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormControl from './form-control';
import { ReduxFormIntlInput } from '../../lib';

class Form extends Component {

  render() {
    const { handleSubmit, langs } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit }>

          <div className="form-control">

            <label htmlFor="title">
              <strong>Title *</strong>
              <span> (Wrapped field with validation error)</span>
            </label>
            <Field
              name="title"
              component={FormControl}
              languages={langs}
            />
          </div>

          <div className="form-control">
            <label htmlFor="description">
              <strong>Description</strong>
              <span> (Simple field)</span>
            </label>
            <Field
              name="description"
              component={ReduxFormIntlInput}
              languages={langs}
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
  form: 'ReduxForm',
  validate: (values) => {
    const errors = {};

    errors.title = Object.values(values.title).some(v => !v) && "Title is required";
    return errors;
  }
})(Form);
