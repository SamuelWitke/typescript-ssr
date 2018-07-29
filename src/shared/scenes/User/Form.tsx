import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { Field, reduxForm, formValueSelector } from 'redux-form';
//import { WrappedFieldProps} from 'redux-form';
import { push } from 'react-router-redux';
import {
  Button,
  Form,
  Input as InputComponent,
  Label,
  Message
} from 'semantic-ui-react';
import { signUpValidateAync, sigunUpValidate } from '../../utils/submit'

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
}
/*
type InputProps = {
  checked?: boolean,
  name: string,
  onBlur: { (eventOrValue: Event | any): void },
  onChange: { (eventOrValue: Event | any): void },
  onDrop: { (event: Event): void },
  onDragStart: { (event: Event): void },
  onFocus: { (event: Event): void },
  value: any
};
type FieldProps = {
  input: InputProps,
  meta: {
    error?: any,
    touched: boolean
  },
  required?: boolean,
  width?: string,
  label?: string,
  inline?: boolean,
  defaultChecked?: boolean
};
*/

const renderInput = (
  {
    input,
    label,
    required,
    width,
    inline,
    meta: { touched, error },
    ...rest
  }: any
) => (
    <Form.Field error={!!(touched && error)} required={required} inline={inline}>
      {label && <label>{label}</label>}
      <InputComponent required={required} {...input} {...rest} />
      {touched && error ? (
        <Label basic color="red" pointing>
          {error}
        </Label>
      ) : null}
    </Form.Field>
  );

class ContactForm extends React.Component<any & any, any> {
  handleSubmit = () => {
    setTimeout(() => {
      console.log(this.props)
      this.props.push('/')
    }, Math.random() * 1000)
  }
  render() {
    const { error, submitSucceeded, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <Form error={error != null} success={submitSucceeded} loading={submitting} className="form-horizontal" onSubmit={handleSubmit(this.handleSubmit)}>
        {error &&
          <Message
            error
            header='Error'
            content={error}
          />
        }
        {submitSucceeded &&
          <Message success header='Form Completed' content="You're all signed up" />
        }
        <Field name="username" component={renderInput} placeholder="User Name" type="text" />
        <Form.Group widths='equal'>
          <Field name="firstName" component={renderInput} placeholder="First Name" type="text" />
          <Field name="lastName" component={renderInput} placeholder="Last Name" type="text" />
        </Form.Group>
        <Field name="email" component={renderInput} placeholder="Email" type="email" />
        <Button type="submit" disabled={submitting}>Submit</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </Form>
    );
  }
}

const selector = formValueSelector('signup')

function mapStateToProps(state: any) {
  const hasEmailValue = selector(state, 'email')
  const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  console.log(hasEmailValue, firstName, lastName)
  return {
    hasEmailValue,
    fullName: `${firstName || ''} ${lastName || ''}`
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    push: (loc: string) => dispatch(push(loc)),
  };
}

const FormRedux: any = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ContactForm);

export default reduxForm({
  form: 'signup',  // a unique identifier for this form,
  validate: sigunUpValidate, // Not Async Validation,
  asyncValidate: signUpValidateAync
})(FormRedux as any);
