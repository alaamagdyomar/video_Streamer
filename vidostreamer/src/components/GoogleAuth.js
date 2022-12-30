import React from 'react';
import { connect } from 'react-redux';
import {signIn ,signOut } from '../actions';

class GoogleAuth extends React.Component { 
 // initialize the client portion in that component to and load it from google library 
        componentDidMount(){
            window.gapi.load('client:auth2',()=>{
                window.gapi.client.init({
                    clientId:'852779477527-uiquoj1igepnpnkl5kbiic9f54r8ccip.apps.googleusercontent.com',
                    scope:'email'
                }).then(()=>{
                    // get ref fot the auth obj.
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // trigger the state value of {isSign in or not }
                    // 
                    this.onAuthChange(this.auth.isSignedIn.get());
                    // add a listen to the callback func to notify my by the state of signed in 
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
            });
       }

       renderAuthbutton () {
           if ( this.props.isSignedIn === null ){
               return null;
           } else if ( this.props.isSignedIn ){
                return (
                    <button onClick={this.onSignOut} className="ui red google button">
                        <i className="google icon"/>
                        sign out
                    </button>
                );
           } else {
               return (
                <button onClick={this.onSignIn} className="ui red google button">
                <i className="google icon"/>
                sign In with Google
            </button>
               );
           }
       }

       // identify check function for the signed in case with redux actions creators  
       onAuthChange = isSignedIn => {
           if ( isSignedIn ){
                this.props.signIn(this.auth.currentUser.get().getId()); 
           } else {
               this.props.signOut();
           }
       };

       
    //    onAuthChange = () => {
    //         this.setState({isSignedIn:this.auth.isSignedIn.get()})
    //    }

       onSignIn = () => {
         this.auth.signIn();
       };

       onSignOut = () => {
        this.auth.signOut();
       };

    render (){
        return <div>{this.renderAuthbutton()}</div>
    }
};

 const mapStateToProps = (state) => {
    return { isSignedIn : state.auth.isSignedIn }
 };

export default connect(mapStateToProps , { signIn, signOut})(GoogleAuth);