import React from 'react';
import { FormGroup, HelpBlock } from 'react-bootstrap';
import { ReduxFormIntlInput } from '../../../src';

export default class FormControl extends React.Component {

    render() {
      const { input, meta: { touched, error }, ...props } = this.props;

      return (
        <FormGroup validationState={touched && error && 'error' || null}>
          <ReduxFormIntlInput
            input={input} // inject redux-form props
            {...props} // inject custom props
          />
          {touched && error && (
            <HelpBlock>
              {error}
            </HelpBlock>
          )}
        </FormGroup>
      )
    }
}
