import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import ReduxWrapper from '../../lib/components/redux-form-intl-input';

class Input extends React.Component {

    render() {

      const { input, meta: { touched, error }, ...props } = this.props;
      return (
        <div>
          <ReduxWrapper
            input={input} // inject redux-form props
            {...props} // inject custom props
          />
          {touched && error }
        </div>
      )
    }
}

class Form extends Component {

  render() {
    const { handleSubmit, langs } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit }>

          <div className="form-control">

            <label htmlFor="title">Title</label>
            <Field
              name="title"
              component={ReduxWrapper}
              languages={langs}
            />
          </div>

          <div className="form-control">
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              component={Input}
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

    errors.description = Object.values(values.description).some(v => !v) && "Desc. is required";
    return errors;
  }
})(Form);
