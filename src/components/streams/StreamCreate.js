import React from 'react';
import { connect } from 'react-redux';
import { Field , reduxForm } from 'redux-form';
import {createStream} from '../../actions';



class StreamCreate extends React.Component{

  renderError ({error,touched}){
      if(touched && error){
        return (
          <div className="ui error message">
            <div className="header">
            {error}
            </div>
          </div>
        );
      }
  } 



  renderImput =  ({input , label , meta}) =>{
    const fieldStyle = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return (
        <div className={fieldStyle}>
          <label>{label}</label>
          <input {...input}/>
          <div >{this.renderError(meta)}</div>
        </div>
      );
  }
      
  onSubmit  = (formValues) => {
    this.props.createStream(formValues);
  }

  render (){
    return (
       <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
         <Field name="title" component={this.renderImput} label="Enter Title"/>
         <br />
         <Field name="description" component={this.renderImput} label="Enter Describtion"/>
         <button className="ui button primary"> Submit </button>
       </form>
    );
  }
}

  const validate = formValues => {
    const errors = {};
      if(!formValues.title){
        errors.title = "u must enter a title"
      }
      if(!formValues.description){
        errors.description = "u must enter a description"
      }
      return errors;
  }
const formWrapped = reduxForm({
  form : 'streamCreate',
  validate
})(StreamCreate);

export default connect(
  null , 
  { createStream }
)(formWrapped);
