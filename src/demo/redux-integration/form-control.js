import React from 'react';
import { ReduxFormIntlInput } from '../../lib';

export default class FormControl extends React.Component {

    render() {
      const { input, meta: { touched, error }, ...props } = this.props;

      return (
        <div>
          <ReduxFormIntlInput
            input={input} // inject redux-form props
            {...props} // inject custom props
          />
          {touched && error }
        </div>
      )
    }
}
