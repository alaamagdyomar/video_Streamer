import React from 'react';
import { Field , reduxForm } from 'redux-form';

class StreamCreate extends React.Component{
   
  renderImput ({input , label}){
      return (
        <div className="field">
          <label>{label}</label>
          <input {...input}/>
        </div>
      );
  }
      
  onSubmit (formValues){
    console.log("formValues:",formValues);
  }

  render (){
    return (
       <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
         <Field name="title" component={this.renderImput} label="Enter Title"/>
         <br />
         <Field name="description" component={this.renderImput} label="Enter Describtion"/>
         <button className="ui button primary"> Submit </button>
       </form>
    );
  }
}

export default reduxForm({
  form : 'streamCreate'
})(StreamCreate);
