import React from 'react';
import { Field, reduxForm } from 'redux-form'
import  { connect } from 'react-redux';
import { createStream } from '../../actions';


class StreamCreate extends React.Component {

  renderError({error, touched}) {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta})=> {
    return (
      <div className="field">
          <label>{label}</label>
          <input {...input} autoComplete="off" />
          {this.renderError(meta)}
      </div>
    );
  }

  onSubmit= (formvalues) => {
    this.props.createStream(formvalues);
    
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="ui form error">
        <Field name="title" 
        component={this.renderInput}
        label ="Enter Name"/>
        <Field 
            name="description"
            component={this.renderInput}
            label = "Enter Description"/>
        <button className="ui button">Submit</button>
      </form>
    );
  }
}

const validate = (formvalues) => {
  const errors = {};
  if (!formvalues.title) {
    errors.title = 'You must enter the title';
  }
  if (!formvalues.description) {
    errors.description = 'You must enter the description';
  }
  // if we return an empty object redux-form think that it is a valid form
  return errors;
};

const formWrapped = reduxForm({
  form: 'streamcreate',
  validate: validate
})(StreamCreate);


export default connect(null, { createStream })(formWrapped);